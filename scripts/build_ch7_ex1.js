const { themeColor, accentColor, styleBlock, frac } = require('./ch7_common');

function getExercise7_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(41, 121, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Binomial Theorem &bull; Exercise 7.1
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Binomial Expansions for Positive Integral Indices &bull; Numerical Evaluations &bull; Divisibility Proofs
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Expand the expression: <b>(1 &minus; 2<i>x</i>)<sup>5</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using the Binomial Theorem expansion for (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> with <i>a</i> = 1, <i>b</i> = &minus;2<i>x</i>, and <i>n</i> = 5:</div>
        <div>(1 &minus; 2<i>x</i>)<sup>5</sup> = <sup>5</sup>C<sub>0</sub> (1)<sup>5</sup> &minus; <sup>5</sup>C<sub>1</sub> (1)<sup>4</sup> (2<i>x</i>) + <sup>5</sup>C<sub>2</sub> (1)<sup>3</sup> (2<i>x</i>)<sup>2</sup> &minus; <sup>5</sup>C<sub>3</sub> (1)<sup>2</sup> (2<i>x</i>)<sup>3</sup> + <sup>5</sup>C<sub>4</sub> (1) (2<i>x</i>)<sup>4</sup> &minus; <sup>5</sup>C<sub>5</sub> (2<i>x</i>)<sup>5</sup></div>
        <div>Substituting binomial coefficients {1, 5, 10, 10, 5, 1}:</div>
        <div>&rArr; = 1(1) &minus; 5(1)(2<i>x</i>) + 10(1)(4<i>x</i><sup>2</sup>) &minus; 10(1)(8<i>x</i><sup>3</sup>) + 5(1)(16<i>x</i><sup>4</sup>) &minus; 1(32<i>x</i><sup>5</sup>)</div>
        <div>&rArr; = <b>1 &minus; 10<i>x</i> + 40<i>x</i><sup>2</sup> &minus; 80<i>x</i><sup>3</sup> + 80<i>x</i><sup>4</sup> &minus; 32<i>x</i><sup>5</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">1 &minus; 10x + 40x<sup>2</sup> &minus; 80x<sup>3</sup> + 80x<sup>4</sup> &minus; 32x<sup>5</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Expand the expression: <b>(${frac('2', '<i>x</i>')} &minus; ${frac('<i>x</i>', '2')})<sup>5</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying Binomial Theorem with <i>a</i> = ${frac('2', '<i>x</i>')}, <i>b</i> = &minus;${frac('<i>x</i>', '2')}, and <i>n</i> = 5:</div>
        <div>(${frac('2', '<i>x</i>')} &minus; ${frac('<i>x</i>', '2')})<sup>5</sup> = <sup>5</sup>C<sub>0</sub> (${frac('2', '<i>x</i>')})<sup>5</sup> &minus; <sup>5</sup>C<sub>1</sub> (${frac('2', '<i>x</i>')})<sup>4</sup> (${frac('<i>x</i>', '2')}) + <sup>5</sup>C<sub>2</sub> (${frac('2', '<i>x</i>')})<sup>3</sup> (${frac('<i>x</i>', '2')})<sup>2</sup> &minus; <sup>5</sup>C<sub>3</sub> (${frac('2', '<i>x</i>')})<sup>2</sup> (${frac('<i>x</i>', '2')})<sup>3</sup> + <sup>5</sup>C<sub>4</sub> (${frac('2', '<i>x</i>')}) (${frac('<i>x</i>', '2')})<sup>4</sup> &minus; <sup>5</sup>C<sub>5</sub> (${frac('<i>x</i>', '2')})<sup>5</sup></div>
        <div>Simplifying each term:</div>
        <div>• 1 &times; ${frac('32', '<i>x</i><sup>5</sup>')} = ${frac('32', '<i>x</i><sup>5</sup>')}</div>
        <div>• &minus;5 &times; ${frac('16', '<i>x</i><sup>4</sup>')} &times; ${frac('<i>x</i>', '2')} = &minus;${frac('40', '<i>x</i><sup>3</sup>')}</div>
        <div>• +10 &times; ${frac('8', '<i>x</i><sup>3</sup>')} &times; ${frac('<i>x</i><sup>2</sup>', '4')} = +${frac('20', '<i>x</i>')}</div>
        <div>• &minus;10 &times; ${frac('4', '<i>x</i><sup>2</sup>')} &times; ${frac('<i>x</i><sup>3</sup>', '8')} = &minus;5<i>x</i></div>
        <div>• +5 &times; ${frac('2', '<i>x</i>')} &times; ${frac('<i>x</i><sup>4</sup>', '16')} = +${frac('5<i>x</i><sup>3</sup>', '8')}</div>
        <div>• &minus;1 &times; ${frac('<i>x</i><sup>5</sup>', '32')} = &minus;${frac('<i>x</i><sup>5</sup>', '32')}</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">${frac('32', 'x<sup>5</sup>')} &minus; ${frac('40', 'x<sup>3</sup>')} + ${frac('20', 'x')} &minus; 5x + ${frac('5x<sup>3</sup>', '8')} &minus; ${frac('x<sup>5</sup>', '32')}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Expand the expression: <b>(2<i>x</i> &minus; 3)<sup>6</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying Binomial Theorem with <i>a</i> = 2<i>x</i>, <i>b</i> = 3, and <i>n</i> = 6:</div>
        <div>(2<i>x</i> &minus; 3)<sup>6</sup> = <sup>6</sup>C<sub>0</sub> (2<i>x</i>)<sup>6</sup> &minus; <sup>6</sup>C<sub>1</sub> (2<i>x</i>)<sup>5</sup> (3) + <sup>6</sup>C<sub>2</sub> (2<i>x</i>)<sup>4</sup> (3)<sup>2</sup> &minus; <sup>6</sup>C<sub>3</sub> (2<i>x</i>)<sup>3</sup> (3)<sup>3</sup> + <sup>6</sup>C<sub>4</sub> (2<i>x</i>)<sup>2</sup> (3)<sup>4</sup> &minus; <sup>6</sup>C<sub>5</sub> (2<i>x</i>) (3)<sup>5</sup> + <sup>6</sup>C<sub>6</sub> (3)<sup>6</sup></div>
        <div>Binomial coefficients {1, 6, 15, 20, 15, 6, 1}:</div>
        <div>• <sup>6</sup>C<sub>0</sub> (2<i>x</i>)<sup>6</sup> = 1 &times; 64<i>x</i><sup>6</sup> = 64<i>x</i><sup>6</sup></div>
        <div>• &minus;<sup>6</sup>C<sub>1</sub> (32<i>x</i><sup>5</sup>)(3) = &minus;6 &times; 96<i>x</i><sup>5</sup> = &minus;576<i>x</i><sup>5</sup></div>
        <div>• +<sup>6</sup>C<sub>2</sub> (16<i>x</i><sup>4</sup>)(9) = 15 &times; 144<i>x</i><sup>4</sup> = +2160<i>x</i><sup>4</sup></div>
        <div>• &minus;<sup>6</sup>C<sub>3</sub> (8<i>x</i><sup>3</sup>)(27) = &minus;20 &times; 216<i>x</i><sup>3</sup> = &minus;4320<i>x</i><sup>3</sup></div>
        <div>• +<sup>6</sup>C<sub>4</sub> (4<i>x</i><sup>2</sup>)(81) = 15 &times; 324<i>x</i><sup>2</sup> = +4860<i>x</i><sup>2</sup></div>
        <div>• &minus;<sup>6</sup>C<sub>5</sub> (2<i>x</i>)(243) = &minus;6 &times; 486<i>x</i> = &minus;2916<i>x</i></div>
        <div>• +<sup>6</sup>C<sub>6</sub> (729) = 729</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">64x<sup>6</sup> &minus; 576x<sup>5</sup> + 2160x<sup>4</sup> &minus; 4320x<sup>3</sup> + 4860x<sup>2</sup> &minus; 2916x + 729</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Expand the expression: <b>(${frac('<i>x</i>', '3')} + ${frac('1', '<i>x</i>')})<sup>5</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying Binomial Theorem with <i>a</i> = ${frac('<i>x</i>', '3')}, <i>b</i> = ${frac('1', '<i>x</i>')}, <i>n</i> = 5:</div>
        <div>(${frac('<i>x</i>', '3')} + ${frac('1', '<i>x</i>')})<sup>5</sup> = <sup>5</sup>C<sub>0</sub> (${frac('<i>x</i>', '3')})<sup>5</sup> + <sup>5</sup>C<sub>1</sub> (${frac('<i>x</i>', '3')})<sup>4</sup> (${frac('1', '<i>x</i>')}) + <sup>5</sup>C<sub>2</sub> (${frac('<i>x</i>', '3')})<sup>3</sup> (${frac('1', '<i>x</i>')})<sup>2</sup> + <sup>5</sup>C<sub>3</sub> (${frac('<i>x</i>', '3')})<sup>2</sup> (${frac('1', '<i>x</i>')})<sup>3</sup> + <sup>5</sup>C<sub>4</sub> (${frac('<i>x</i>', '3')}) (${frac('1', '<i>x</i>')})<sup>4</sup> + <sup>5</sup>C<sub>5</sub> (${frac('1', '<i>x</i>')})<sup>5</sup></div>
        <div>Evaluating each term:</div>
        <div>• 1 &times; ${frac('<i>x</i><sup>5</sup>', '243')} = ${frac('<i>x</i><sup>5</sup>', '243')}</div>
        <div>• 5 &times; ${frac('<i>x</i><sup>4</sup>', '81')} &times; ${frac('1', '<i>x</i>')} = ${frac('5<i>x</i><sup>3</sup>', '81')}</div>
        <div>• 10 &times; ${frac('<i>x</i><sup>3</sup>', '27')} &times; ${frac('1', '<i>x</i><sup>2</sup>')} = ${frac('10<i>x</i>', '27')}</div>
        <div>• 10 &times; ${frac('<i>x</i><sup>2</sup>', '9')} &times; ${frac('1', '<i>x</i><sup>3</sup>')} = ${frac('10', '9<i>x</i>')}</div>
        <div>• 5 &times; ${frac('<i>x</i>', '3')} &times; ${frac('1', '<i>x</i><sup>4</sup>')} = ${frac('5', '3<i>x</i><sup>3</sup>')}</div>
        <div>• 1 &times; ${frac('1', '<i>x</i><sup>5</sup>')} = ${frac('1', '<i>x</i><sup>5</sup>')}</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">${frac('x<sup>5</sup>', '243')} + ${frac('5x<sup>3</sup>', '81')} + ${frac('10x', '27')} + ${frac('10', '9x')} + ${frac('5', '3x<sup>3</sup>')} + ${frac('1', 'x<sup>5</sup>')}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Expand the expression: <b>(<i>x</i> + ${frac('1', '<i>x</i>')})<sup>6</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying Binomial Theorem with <i>a</i> = <i>x</i>, <i>b</i> = ${frac('1', '<i>x</i>')}, <i>n</i> = 6:</div>
        <div>(<i>x</i> + ${frac('1', '<i>x</i>')})<sup>6</sup> = <sup>6</sup>C<sub>0</sub> <i>x</i><sup>6</sup> + <sup>6</sup>C<sub>1</sub> <i>x</i><sup>5</sup> (${frac('1', '<i>x</i>')}) + <sup>6</sup>C<sub>2</sub> <i>x</i><sup>4</sup> (${frac('1', '<i>x</i>')})<sup>2</sup> + <sup>6</sup>C<sub>3</sub> <i>x</i><sup>3</sup> (${frac('1', '<i>x</i>')})<sup>3</sup> + <sup>6</sup>C<sub>4</sub> <i>x</i><sup>2</sup> (${frac('1', '<i>x</i>')})<sup>4</sup> + <sup>6</sup>C<sub>5</sub> <i>x</i> (${frac('1', '<i>x</i>')})<sup>5</sup> + <sup>6</sup>C<sub>6</sub> (${frac('1', '<i>x</i>')})<sup>6</sup></div>
        <div>Binomial coefficients: {1, 6, 15, 20, 15, 6, 1}:</div>
        <div>• 1 &times; <i>x</i><sup>6</sup> = <i>x</i><sup>6</sup></div>
        <div>• 6 &times; <i>x</i><sup>4</sup> = 6<i>x</i><sup>4</sup></div>
        <div>• 15 &times; <i>x</i><sup>2</sup> = 15<i>x</i><sup>2</sup></div>
        <div>• 20 &times; 1 = 20 &nbsp;<span class="reason">[Independent of x term]</span></div>
        <div>• 15 &times; ${frac('1', '<i>x</i><sup>2</sup>')} = ${frac('15', '<i>x</i><sup>2</sup>')}</div>
        <div>• 6 &times; ${frac('1', '<i>x</i><sup>4</sup>')} = ${frac('6', '<i>x</i><sup>4</sup>')}</div>
        <div>• 1 &times; ${frac('1', '<i>x</i><sup>6</sup>')} = ${frac('1', '<i>x</i><sup>6</sup>')}</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">x<sup>6</sup> + 6x<sup>4</sup> + 15x<sup>2</sup> + 20 + ${frac('15', 'x<sup>2</sup>')} + ${frac('6', 'x<sup>4</sup>')} + ${frac('1', 'x<sup>6</sup>')}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Using the Binomial Theorem, evaluate: <b>(96)<sup>3</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write 96 as (100 &minus; 4):</div>
        <div>(96)<sup>3</sup> = (100 &minus; 4)<sup>3</sup></div>
        <div>Applying binomial expansion:</div>
        <div>= <sup>3</sup>C<sub>0</sub> (100)<sup>3</sup> &minus; <sup>3</sup>C<sub>1</sub> (100)<sup>2</sup> (4) + <sup>3</sup>C<sub>2</sub> (100) (4)<sup>2</sup> &minus; <sup>3</sup>C<sub>3</sub> (4)<sup>3</sup></div>
        <div>= 1(1000000) &minus; 3(10000)(4) + 3(100)(16) &minus; 1(64)</div>
        <div>= 1000000 &minus; 120000 + 4800 &minus; 64</div>
        <div>= 1004800 &minus; 120064 = <b>884736</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">884736</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Using the Binomial Theorem, evaluate: <b>(102)<sup>5</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write 102 as (100 + 2):</div>
        <div>(102)<sup>5</sup> = (100 + 2)<sup>5</sup></div>
        <div>= <sup>5</sup>C<sub>0</sub> (100)<sup>5</sup> + <sup>5</sup>C<sub>1</sub> (100)<sup>4</sup> (2) + <sup>5</sup>C<sub>2</sub> (100)<sup>3</sup> (2)<sup>2</sup> + <sup>5</sup>C<sub>3</sub> (100)<sup>2</sup> (2)<sup>3</sup> + <sup>5</sup>C<sub>4</sub> (100) (2)<sup>4</sup> + <sup>5</sup>C<sub>5</sub> (2)<sup>5</sup></div>
        <div>= 1(10000000000) + 5(100000000)(2) + 10(1000000)(4) + 10(10000)(8) + 5(100)(16) + 1(32)</div>
        <div>= 10000000000 + 1000000000 + 40000000 + 800000 + 8000 + 32</div>
        <div>= <b>11040808032</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">11040808032</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Using the Binomial Theorem, evaluate: <b>(101)<sup>4</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write 101 as (100 + 1):</div>
        <div>(101)<sup>4</sup> = (100 + 1)<sup>4</sup></div>
        <div>= <sup>4</sup>C<sub>0</sub> (100)<sup>4</sup> + <sup>4</sup>C<sub>1</sub> (100)<sup>3</sup> (1) + <sup>4</sup>C<sub>2</sub> (100)<sup>2</sup> (1)<sup>2</sup> + <sup>4</sup>C<sub>3</sub> (100) (1)<sup>3</sup> + <sup>4</sup>C<sub>4</sub> (1)<sup>4</sup></div>
        <div>= 1(100000000) + 4(1000000) + 6(10000) + 4(100) + 1</div>
        <div>= 100000000 + 4000000 + 60000 + 400 + 1</div>
        <div>= <b>104060401</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">104060401</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Using the Binomial Theorem, evaluate: <b>(99)<sup>5</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write 99 as (100 &minus; 1):</div>
        <div>(99)<sup>5</sup> = (100 &minus; 1)<sup>5</sup></div>
        <div>= <sup>5</sup>C<sub>0</sub> (100)<sup>5</sup> &minus; <sup>5</sup>C<sub>1</sub> (100)<sup>4</sup> (1) + <sup>5</sup>C<sub>2</sub> (100)<sup>3</sup> (1)<sup>2</sup> &minus; <sup>5</sup>C<sub>3</sub> (100)<sup>2</sup> (1)<sup>3</sup> + <sup>5</sup>C<sub>4</sub> (100) (1)<sup>4</sup> &minus; <sup>5</sup>C<sub>5</sub> (1)<sup>5</sup></div>
        <div>= 10000000000 &minus; 5(100000000) + 10(1000000) &minus; 10(10000) + 5(100) &minus; 1</div>
        <div>= 10000000000 &minus; 500000000 + 10000000 &minus; 100000 + 500 &minus; 1</div>
        <div>= 10010000500 &minus; 500100001 = <b>9509900499</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">9509900499</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Using Binomial Theorem, indicate which number is larger: <b>(1.1)<sup>10000</sup></b> or <b>1000</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expressing 1.1 as (1 + 0.1):</div>
        <div>(1.1)<sup>10000</sup> = (1 + 0.1)<sup>10000</sup></div>
        <div>Expanding using the Binomial Theorem:</div>
        <div>(1 + 0.1)<sup>10000</sup> = <sup>10000</sup>C<sub>0</sub> + <sup>10000</sup>C<sub>1</sub> (0.1) + [sum of other positive terms]</div>
        <div>= 1 + 10000 &times; 0.1 + [sum of other positive terms]</div>
        <div>= 1 + 1000 + [sum of other positive terms]</div>
        <div>= 1001 + [sum of other positive terms]</div>
        <div>Since all subsequent terms in the expansion of (1 + 0.1)<sup>10000</sup> are strictly positive:</div>
        <div>&rArr; (1.1)<sup>10000</sup> &gt; 1001 &gt; 1000</div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">(1.1)<sup>10000</sup> is larger than 1000</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Find <b>(<i>a</i> + <i>b</i>)<sup>4</sup> &minus; (<i>a</i> &minus; <i>b</i>)<sup>4</sup></b>. Hence, evaluate: <b>(&radic;3 + &radic;2)<sup>4</sup> &minus; (&radic;3 &minus; &radic;2)<sup>4</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding both binomials:</div>
        <div>(<i>a</i> + <i>b</i>)<sup>4</sup> = <sup>4</sup>C<sub>0</sub> <i>a</i><sup>4</sup> + <sup>4</sup>C<sub>1</sub> <i>a</i><sup>3</sup><i>b</i> + <sup>4</sup>C<sub>2</sub> <i>a</i><sup>2</sup><i>b</i><sup>2</sup> + <sup>4</sup>C<sub>3</sub> <i>ab</i><sup>3</sup> + <sup>4</sup>C<sub>4</sub> <i>b</i><sup>4</sup></div>
        <div>(<i>a</i> &minus; <i>b</i>)<sup>4</sup> = <sup>4</sup>C<sub>0</sub> <i>a</i><sup>4</sup> &minus; <sup>4</sup>C<sub>1</sub> <i>a</i><sup>3</sup><i>b</i> + <sup>4</sup>C<sub>2</sub> <i>a</i><sup>2</sup><i>b</i><sup>2</sup> &minus; <sup>4</sup>C<sub>3</sub> <i>ab</i><sup>3</sup> + <sup>4</sup>C<sub>4</sub> <i>b</i><sup>4</sup></div>
        <div>Subtracting the two equations cancels the even-power terms:</div>
        <div>&rArr; (<i>a</i> + <i>b</i>)<sup>4</sup> &minus; (<i>a</i> &minus; <i>b</i>)<sup>4</sup> = 2 [<sup>4</sup>C<sub>1</sub> <i>a</i><sup>3</sup><i>b</i> + <sup>4</sup>C<sub>3</sub> <i>ab</i><sup>3</sup>]</div>
        <div>= 2 [4<i>a</i><sup>3</sup><i>b</i> + 4<i>ab</i><sup>3</sup>] = 8<i>ab</i>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)</div>
        <div style="margin-top: 10px;"><b>Evaluating (&radic;3 + &radic;2)<sup>4</sup> &minus; (&radic;3 &minus; &radic;2)<sup>4</sup>:</b></div>
        <div>Substitute <i>a</i> = &radic;3 and <i>b</i> = &radic;2:</div>
        <div>&rArr; = 8(&radic;3)(&radic;2) [(&radic;3)<sup>2</sup> + (&radic;2)<sup>2</sup>]</div>
        <div>= 8&radic;6 [3 + 2] = 8&radic;6 &times; 5 = <b>40&radic;6</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">40&radic;6</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Find <b>(<i>x</i> + 1)<sup>6</sup> + (<i>x</i> &minus; 1)<sup>6</sup></b>. Hence or otherwise evaluate: <b>(&radic;2 + 1)<sup>6</sup> + (&radic;2 &minus; 1)<sup>6</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding using the Binomial Theorem:</div>
        <div>(<i>x</i> + 1)<sup>6</sup> = <sup>6</sup>C<sub>0</sub> <i>x</i><sup>6</sup> + <sup>6</sup>C<sub>1</sub> <i>x</i><sup>5</sup> + <sup>6</sup>C<sub>2</sub> <i>x</i><sup>4</sup> + <sup>6</sup>C<sub>3</sub> <i>x</i><sup>3</sup> + <sup>6</sup>C<sub>4</sub> <i>x</i><sup>2</sup> + <sup>6</sup>C<sub>5</sub> <i>x</i> + <sup>6</sup>C<sub>6</sub></div>
        <div>(<i>x</i> &minus; 1)<sup>6</sup> = <sup>6</sup>C<sub>0</sub> <i>x</i><sup>6</sup> &minus; <sup>6</sup>C<sub>1</sub> <i>x</i><sup>5</sup> + <sup>6</sup>C<sub>2</sub> <i>x</i><sup>4</sup> &minus; <sup>6</sup>C<sub>3</sub> <i>x</i><sup>3</sup> + <sup>6</sup>C<sub>4</sub> <i>x</i><sup>2</sup> &minus; <sup>6</sup>C<sub>5</sub> <i>x</i> + <sup>6</sup>C<sub>6</sub></div>
        <div>Adding the two expressions cancels all odd-power terms:</div>
        <div>&rArr; (<i>x</i> + 1)<sup>6</sup> + (<i>x</i> &minus; 1)<sup>6</sup> = 2 [<sup>6</sup>C<sub>0</sub> <i>x</i><sup>6</sup> + <sup>6</sup>C<sub>2</sub> <i>x</i><sup>4</sup> + <sup>6</sup>C<sub>4</sub> <i>x</i><sup>2</sup> + <sup>6</sup>C<sub>6</sub>]</div>
        <div>= 2 [<i>x</i><sup>6</sup> + 15<i>x</i><sup>4</sup> + 15<i>x</i><sup>2</sup> + 1]</div>
        <div style="margin-top: 10px;"><b>Evaluating for <i>x</i> = &radic;2:</b></div>
        <div>(&radic;2)<sup>2</sup> = 2, &nbsp; (&radic;2)<sup>4</sup> = 4, &nbsp; (&radic;2)<sup>6</sup> = 8</div>
        <div>&rArr; = 2 [8 + 15(4) + 15(2) + 1]</div>
        <div>= 2 [8 + 60 + 30 + 1] = 2 [99] = <b>198</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">198</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Show that <b>9<sup><i>n</i>+1</sup> &minus; 8<i>n</i> &minus; 9</b> is divisible by 64 whenever <i>n</i> is a positive integer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Express 9 as (1 + 8):</div>
        <div>9<sup><i>n</i>+1</sup> = (1 + 8)<sup><i>n</i>+1</sup></div>
        <div>Expanding (1 + 8)<sup><i>n</i>+1</sup> by Binomial Theorem:</div>
        <div>9<sup><i>n</i>+1</sup> = <sup><i>n</i>+1</sup>C<sub>0</sub> + <sup><i>n</i>+1</sup>C<sub>1</sub>(8) + <sup><i>n</i>+1</sup>C<sub>2</sub>(8)<sup>2</sup> + <sup><i>n</i>+1</sup>C<sub>3</sub>(8)<sup>3</sup> + ... + <sup><i>n</i>+1</sup>C<sub><i>n</i>+1</sub>(8)<sup><i>n</i>+1</sup></div>
        <div>Since <sup><i>n</i>+1</sup>C<sub>0</sub> = 1 and <sup><i>n</i>+1</sup>C<sub>1</sub> = <i>n</i> + 1:</div>
        <div>9<sup><i>n</i>+1</sup> = 1 + (<i>n</i> + 1) &times; 8 + 8<sup>2</sup> [<sup><i>n</i>+1</sup>C<sub>2</sub> + <sup><i>n</i>+1</sup>C<sub>3</sub>(8) + ... + <sup><i>n</i>+1</sup>C<sub><i>n</i>+1</sub>(8)<sup><i>n</i>&minus;1</sup>]</div>
        <div>9<sup><i>n</i>+1</sup> = 1 + 8<i>n</i> + 8 + 64<i>k</i> &nbsp;&nbsp;<span class="reason">[where k is an integer]</span></div>
        <div>9<sup><i>n</i>+1</sup> = 8<i>n</i> + 9 + 64<i>k</i></div>
        <div>Transposing 8<i>n</i> + 9 to the left side:</div>
        <div>&rArr; <b>9<sup><i>n</i>+1</sup> &minus; 8<i>n</i> &minus; 9 = 64<i>k</i></b></div>
        <div>Since <i>k</i> is an integer, (9<sup><i>n</i>+1</sup> &minus; 8<i>n</i> &minus; 9) is an exact multiple of 64.</div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">Hence proved that 9<sup>n+1</sup> &minus; 8n &minus; 9 is divisible by 64 for all n &isin; N.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Prove that: <b>&sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> 3<sup><i>r</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 4<sup><i>n</i></sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>By the Binomial Theorem for any real numbers <i>a</i> and <i>b</i>:</div>
        <div>&sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup> = (<i>a</i> + <i>b</i>)<sup><i>n</i></sup></div>
        <div>Putting <i>a</i> = 1 and <i>b</i> = 3 in the above expansion:</div>
        <div>&rArr; &sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> (1)<sup><i>n</i>&minus;<i>r</i></sup> (3)<sup><i>r</i></sup> = (1 + 3)<sup><i>n</i></sup></div>
        <div>Since (1)<sup><i>n</i>&minus;<i>r</i></sup> = 1 for all <i>r</i>:</div>
        <div>&rArr; &sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> 3<sup><i>r</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 4<sup><i>n</i></sup></div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">Hence proved that &sum;<sub>r=0</sub><sup>n</sup> 3<sup>r</sup> <sup>n</sup>C<sub>r</sub> = 4<sup>n</sup>.</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise7_1
};
