const { themeColor, accentColor, styleBlock, frac } = require('./ch7_common');

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(41, 121, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Binomial Theorem &bull; Miscellaneous Exercise
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Advanced Binomial Identifications &bull; Consecutive Equations &bull; Fractional Index Limits &bull; Trinomial Reductions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find <i>a</i>, <i>b</i> and <i>n</i> in the expansion of <b>(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></b> if the first three terms of the expansion are <b>729</b>, <b>7290</b> and <b>30375</b>, respectively.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The first three terms of (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> are:</div>
        <div>• T<sub>1</sub> = <sup><i>n</i></sup>C<sub>0</sub> <i>a</i><sup><i>n</i></sup> = <b><i>a</i><sup><i>n</i></sup> = 729</b> &nbsp;&nbsp;...(1)</div>
        <div>• T<sub>2</sub> = <sup><i>n</i></sup>C<sub>1</sub> <i>a</i><sup><i>n</i>&minus;1</sup> <i>b</i> = <b><i>n a</i><sup><i>n</i>&minus;1</sup> <i>b</i> = 7290</b> &nbsp;&nbsp;...(2)</div>
        <div>• T<sub>3</sub> = <sup><i>n</i></sup>C<sub>2</sub> <i>a</i><sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup> = <b>${frac('<i>n</i>(<i>n</i> &minus; 1)', '2')} <i>a</i><sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup> = 30375</b> &nbsp;&nbsp;...(3)</div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Step 1: Dividing (2) by (1):</b></div>
        <div>${frac('<i>n a</i><sup><i>n</i>&minus;1</sup> <i>b</i>', '<i>a</i><sup><i>n</i></sup>')} = ${frac('7290', '729')} &rArr; ${frac('<i>n b</i>', '<i>a</i>')} = 10 &rArr; <b>${frac('<i>b</i>', '<i>a</i>')} = ${frac('10', '<i>n</i>')}</b> &nbsp;&nbsp;...(4)</div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Step 2: Dividing (3) by (2):</b></div>
        <div>${frac('<sup><i>n</i></sup>C<sub>2</sub> <i>a</i><sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup>', '<sup><i>n</i></sup>C<sub>1</sub> <i>a</i><sup><i>n</i>&minus;1</sup> <i>b</i>')} = ${frac('30375', '7290')}</div>
        <div>&rArr; ${frac('<i>n</i>(<i>n</i> &minus; 1) <i>b</i>', '2<i>n a</i>')} = ${frac('30375', '7290')} = ${frac('25', '6')}</div>
        <div>&rArr; ${frac('(<i>n</i> &minus; 1)', '2')} &times; ${frac('<i>b</i>', '<i>a</i>')} = ${frac('25', '6')}</div>
        <div>Substituting ${frac('<i>b</i>', '<i>a</i>')} = ${frac('10', '<i>n</i>')} from (4):</div>
        <div>&rArr; ${frac('(<i>n</i> &minus; 1)', '2')} &times; ${frac('10', '<i>n</i>')} = ${frac('25', '6')}</div>
        <div>&rArr; ${frac('5(<i>n</i> &minus; 1)', '<i>n</i>')} = ${frac('25', '6')}</div>
        <div>Dividing both sides by 5:</div>
        <div>&rArr; ${frac('<i>n</i> &minus; 1', '<i>n</i>')} = ${frac('5', '6')} &rArr; 6(<i>n</i> &minus; 1) = 5<i>n</i> &rArr; 6<i>n</i> &minus; 6 = 5<i>n</i> &rArr; <b><i>n</i> = 6</b></div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Step 3: Finding a and b:</b></div>
        <div>From (1): <i>a</i><sup>6</sup> = 729 = 3<sup>6</sup> &rArr; <b><i>a</i> = 3</b></div>
        <div>From (4): ${frac('<i>b</i>', '3')} = ${frac('10', '6')} = ${frac('5', '3')} &rArr; <b><i>b</i> = 5</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">a = 3, &nbsp; b = 5, &nbsp; n = 6</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find <i>a</i> if the coefficients of <b><i>x</i><sup>2</sup></b> and <b><i>x</i><sup>3</sup></b> in the expansion of <b>(3 + <i>ax</i>)<sup>9</sup></b> are equal.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the expansion of (3 + <i>ax</i>)<sup>9</sup>, the general term is:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (3)<sup>9&minus;<i>r</i></sup> (<i>ax</i>)<sup><i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> 3<sup>9&minus;<i>r</i></sup> <i>a</i><sup><i>r</i></sup> <i>x</i><sup><i>r</i></sup></div>
        <div>• For coefficient of <i>x</i><sup>2</sup>, set <i>r</i> = 2:</div>
        <div>Coefficient of <i>x</i><sup>2</sup> = <sup>9</sup>C<sub>2</sub> 3<sup>7</sup> <i>a</i><sup>2</sup> = ${frac('9 &times; 8', '2')} &times; 3<sup>7</sup> <i>a</i><sup>2</sup> = 36 &times; 3<sup>7</sup> <i>a</i><sup>2</sup></div>
        <div>• For coefficient of <i>x</i><sup>3</sup>, set <i>r</i> = 3:</div>
        <div>Coefficient of <i>x</i><sup>3</sup> = <sup>9</sup>C<sub>3</sub> 3<sup>6</sup> <i>a</i><sup>3</sup> = ${frac('9 &times; 8 &times; 7', '3 &times; 2 &times; 1')} &times; 3<sup>6</sup> <i>a</i><sup>3</sup> = 84 &times; 3<sup>6</sup> <i>a</i><sup>3</sup></div>
        <div>Given that these two coefficients are equal:</div>
        <div>&rArr; 36 &times; 3<sup>7</sup> <i>a</i><sup>2</sup> = 84 &times; 3<sup>6</sup> <i>a</i><sup>3</sup></div>
        <div>Dividing both sides by 3<sup>6</sup> <i>a</i><sup>2</sup> (since <i>a</i> &ne; 0):</div>
        <div>&rArr; 36 &times; 3 = 84 &times; <i>a</i></div>
        <div>&rArr; 108 = 84<i>a</i> &rArr; <i>a</i> = ${frac('108', '84')} = <b>${frac('9', '7')}</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">a = ${frac('9', '7')}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Find the coefficient of <b><i>x</i><sup>5</sup></b> in the product <b>(1 + 2<i>x</i>)<sup>6</sup> (1 &minus; <i>x</i>)<sup>7</sup></b> using the Binomial Theorem.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding (1 + 2<i>x</i>)<sup>6</sup> up to <i>x</i><sup>5</sup>:</div>
        <div>(1 + 2<i>x</i>)<sup>6</sup> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>1</sub>(2<i>x</i>) + <sup>6</sup>C<sub>2</sub>(2<i>x</i>)<sup>2</sup> + <sup>6</sup>C<sub>3</sub>(2<i>x</i>)<sup>3</sup> + <sup>6</sup>C<sub>4</sub>(2<i>x</i>)<sup>4</sup> + <sup>6</sup>C<sub>5</sub>(2<i>x</i>)<sup>5</sup> + ...</div>
        <div>= 1 + 12<i>x</i> + 60<i>x</i><sup>2</sup> + 160<i>x</i><sup>3</sup> + 240<i>x</i><sup>4</sup> + 192<i>x</i><sup>5</sup> + ...</div>
        <div style="margin-top: 8px;">Expanding (1 &minus; <i>x</i>)<sup>7</sup> up to <i>x</i><sup>5</sup>:</div>
        <div>(1 &minus; <i>x</i>)<sup>7</sup> = <sup>7</sup>C<sub>0</sub> &minus; <sup>7</sup>C<sub>1</sub><i>x</i> + <sup>7</sup>C<sub>2</sub><i>x</i><sup>2</sup> &minus; <sup>7</sup>C<sub>3</sub><i>x</i><sup>3</sup> + <sup>7</sup>C<sub>4</sub><i>x</i><sup>4</sup> &minus; <sup>7</sup>C<sub>5</sub><i>x</i><sup>5</sup> + ...</div>
        <div>= 1 &minus; 7<i>x</i> + 21<i>x</i><sup>2</sup> &minus; 35<i>x</i><sup>3</sup> + 35<i>x</i><sup>4</sup> &minus; 21<i>x</i><sup>5</sup> + ...</div>
        <div style="margin-top: 10px;">The coefficient of <i>x</i><sup>5</sup> in the product is obtained by pairing terms:</div>
        <div>• 1 &times; (&minus;21) = &minus;21</div>
        <div>• 12 &times; 35 = +420</div>
        <div>• 60 &times; (&minus;35) = &minus;2100</div>
        <div>• 160 &times; 21 = +3360</div>
        <div>• 240 &times; (&minus;7) = &minus;1680</div>
        <div>• 192 &times; 1 = +192</div>
        <div>Summing these contributions:</div>
        <div>&rArr; &minus;21 + 420 &minus; 2100 + 3360 &minus; 1680 + 192</div>
        <div>= (420 + 3360 + 192) &minus; (21 + 2100 + 1680)</div>
        <div>= 3972 &minus; 3801 = <b>171</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Coefficient of x<sup>5</sup> = 171</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If <i>a</i> and <i>b</i> are distinct integers, prove that <b>(<i>a</i> &minus; <i>b</i>)</b> is a factor of <b><i>a</i><sup><i>n</i></sup> &minus; <i>b</i><sup><i>n</i></sup></b>, whenever <i>n</i> is a positive integer.<br/>
      <i>[Hint: Write a<sup>n</sup> = (a &minus; b + b)<sup>n</sup> and expand]</i>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write <i>a</i> as (<i>a</i> &minus; <i>b</i>) + <i>b</i>:</div>
        <div>&rArr; <i>a</i><sup><i>n</i></sup> = [(<i>a</i> &minus; <i>b</i>) + <i>b</i>]<sup><i>n</i></sup></div>
        <div>Expanding by Binomial Theorem considering (<i>a</i> &minus; <i>b</i>) as the first term:</div>
        <div><i>a</i><sup><i>n</i></sup> = <sup><i>n</i></sup>C<sub>0</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i></sup> + <sup><i>n</i></sup>C<sub>1</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;1</sup> <i>b</i> + <sup><i>n</i></sup>C<sub>2</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup> + ... + <sup><i>n</i></sup>C<sub><i>n</i>&minus;1</sub> (<i>a</i> &minus; <i>b</i>) <i>b</i><sup><i>n</i>&minus;1</sup> + <sup><i>n</i></sup>C<sub><i>n</i></sub> <i>b</i><sup><i>n</i></sup></div>
        <div>Since <sup><i>n</i></sup>C<sub><i>n</i></sub> = 1:</div>
        <div><i>a</i><sup><i>n</i></sup> = (<i>a</i> &minus; <i>b</i>) [<sup><i>n</i></sup>C<sub>0</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;1</sup> + <sup><i>n</i></sup>C<sub>1</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;2</sup> <i>b</i> + ... + <sup><i>n</i></sup>C<sub><i>n</i>&minus;1</sub> <i>b</i><sup><i>n</i>&minus;1</sup>] + <i>b</i><sup><i>n</i></sup></div>
        <div>Transposing <i>b</i><sup><i>n</i></sup> to the left side:</div>
        <div>&rArr; <i>a</i><sup><i>n</i></sup> &minus; <i>b</i><sup><i>n</i></sup> = (<i>a</i> &minus; <i>b</i>) &times; <i>k</i></div>
        <div>where <i>k</i> = [<sup><i>n</i></sup>C<sub>0</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;1</sup> + <sup><i>n</i></sup>C<sub>1</sub> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i>&minus;2</sup> <i>b</i> + ... + <i>n b</i><sup><i>n</i>&minus;1</sup>], which is an integer.</div>
        <div>Therefore, (<i>a</i> &minus; <i>b</i>) is a factor of <i>a</i><sup><i>n</i></sup> &minus; <i>b</i><sup><i>n</i></sup> for all positive integers <i>n</i>.</div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">Hence proved that (a &minus; b) divides (a<sup>n</sup> &minus; b<sup>n</sup>).</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Evaluate: <b>(&radic;3 + &radic;2)<sup>6</sup> &minus; (&radic;3 &minus; &radic;2)<sup>6</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Consider expansions:</div>
        <div>(<i>a</i> + <i>b</i>)<sup>6</sup> = <sup>6</sup>C<sub>0</sub><i>a</i><sup>6</sup> + <sup>6</sup>C<sub>1</sub><i>a</i><sup>5</sup><i>b</i> + <sup>6</sup>C<sub>2</sub><i>a</i><sup>4</sup><i>b</i><sup>2</sup> + <sup>6</sup>C<sub>3</sub><i>a</i><sup>3</sup><i>b</i><sup>3</sup> + <sup>6</sup>C<sub>4</sub><i>a</i><sup>2</sup><i>b</i><sup>4</sup> + <sup>6</sup>C<sub>5</sub><i>ab</i><sup>5</sup> + <sup>6</sup>C<sub>6</sub><i>b</i><sup>6</sup></div>
        <div>(<i>a</i> &minus; <i>b</i>)<sup>6</sup> = <sup>6</sup>C<sub>0</sub><i>a</i><sup>6</sup> &minus; <sup>6</sup>C<sub>1</sub><i>a</i><sup>5</sup><i>b</i> + <sup>6</sup>C<sub>2</sub><i>a</i><sup>4</sup><i>b</i><sup>2</sup> &minus; <sup>6</sup>C<sub>3</sub><i>a</i><sup>3</sup><i>b</i><sup>3</sup> + <sup>6</sup>C<sub>4</sub><i>a</i><sup>2</sup><i>b</i><sup>4</sup> &minus; <sup>6</sup>C<sub>5</sub><i>ab</i><sup>5</sup> + <sup>6</sup>C<sub>6</sub><i>b</i><sup>6</sup></div>
        <div>Subtracting the two expressions cancels all even-power terms:</div>
        <div>&rArr; (<i>a</i> + <i>b</i>)<sup>6</sup> &minus; (<i>a</i> &minus; <i>b</i>)<sup>6</sup> = 2 [<sup>6</sup>C<sub>1</sub> <i>a</i><sup>5</sup><i>b</i> + <sup>6</sup>C<sub>3</sub> <i>a</i><sup>3</sup><i>b</i><sup>3</sup> + <sup>6</sup>C<sub>5</sub> <i>ab</i><sup>5</sup>]</div>
        <div>= 2 [6<i>a</i><sup>5</sup><i>b</i> + 20<i>a</i><sup>3</sup><i>b</i><sup>3</sup> + 6<i>ab</i><sup>5</sup>]</div>
        <div>Now substitute <i>a</i> = &radic;3 and <i>b</i> = &radic;2:</div>
        <div>• <i>a</i><sup>5</sup><i>b</i> = (&radic;3)<sup>5</sup>(&radic;2) = 9&radic;3 &times; &radic;2 = 9&radic;6 &rArr; 6<i>a</i><sup>5</sup><i>b</i> = 54&radic;6</div>
        <div>• <i>a</i><sup>3</sup><i>b</i><sup>3</sup> = (&radic;3)<sup>3</sup>(&radic;2)<sup>3</sup> = 3&radic;3 &times; 2&radic;2 = 6&radic;6 &rArr; 20<i>a</i><sup>3</sup><i>b</i><sup>3</sup> = 120&radic;6</div>
        <div>• <i>ab</i><sup>5</sup> = (&radic;3)(&radic;2)<sup>5</sup> = &radic;3 &times; 4&radic;2 = 4&radic;6 &rArr; 6<i>ab</i><sup>5</sup> = 24&radic;6</div>
        <div>Sum inside brackets: 54&radic;6 + 120&radic;6 + 24&radic;6 = 198&radic;6</div>
        <div>&rArr; Value = 2 &times; 198&radic;6 = <b>396&radic;6</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">396&radic;6</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Find the value of: <b>(<i>a</i><sup>2</sup> + &radic;(<i>a</i><sup>2</sup> &minus; 1))<sup>4</sup> + (<i>a</i><sup>2</sup> &minus; &radic;(<i>a</i><sup>2</sup> &minus; 1))<sup>4</sup></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>x</i> = <i>a</i><sup>2</sup> and <i>y</i> = &radic;(<i>a</i><sup>2</sup> &minus; 1).</div>
        <div>Then the expression is (<i>x</i> + <i>y</i>)<sup>4</sup> + (<i>x</i> &minus; <i>y</i>)<sup>4</sup>.</div>
        <div>Using binomial expansion:</div>
        <div>(<i>x</i> + <i>y</i>)<sup>4</sup> + (<i>x</i> &minus; <i>y</i>)<sup>4</sup> = 2 [<sup>4</sup>C<sub>0</sub> <i>x</i><sup>4</sup> + <sup>4</sup>C<sub>2</sub> <i>x</i><sup>2</sup><i>y</i><sup>2</sup> + <sup>4</sup>C<sub>4</sub> <i>y</i><sup>4</sup>]</div>
        <div>= 2 [<i>x</i><sup>4</sup> + 6<i>x</i><sup>2</sup><i>y</i><sup>2</sup> + <i>y</i><sup>4</sup>]</div>
        <div>Substituting back <i>x</i> = <i>a</i><sup>2</sup> and <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; 1:</div>
        <div>• <i>x</i><sup>4</sup> = (<i>a</i><sup>2</sup>)<sup>4</sup> = <i>a</i><sup>8</sup></div>
        <div>• 6<i>x</i><sup>2</sup><i>y</i><sup>2</sup> = 6(<i>a</i><sup>2</sup>)<sup>2</sup>(<i>a</i><sup>2</sup> &minus; 1) = 6<i>a</i><sup>4</sup>(<i>a</i><sup>2</sup> &minus; 1) = 6<i>a</i><sup>6</sup> &minus; 6<i>a</i><sup>4</sup></div>
        <div>• <i>y</i><sup>4</sup> = (<i>y</i><sup>2</sup>)<sup>2</sup> = (<i>a</i><sup>2</sup> &minus; 1)<sup>2</sup> = <i>a</i><sup>4</sup> &minus; 2<i>a</i><sup>2</sup> + 1</div>
        <div>Adding inside brackets:</div>
        <div>= <i>a</i><sup>8</sup> + (6<i>a</i><sup>6</sup> &minus; 6<i>a</i><sup>4</sup>) + (<i>a</i><sup>4</sup> &minus; 2<i>a</i><sup>2</sup> + 1)</div>
        <div>= <i>a</i><sup>8</sup> + 6<i>a</i><sup>6</sup> &minus; 5<i>a</i><sup>4</sup> &minus; 2<i>a</i><sup>2</sup> + 1</div>
        <div>Multiplying by 2:</div>
        <div>&rArr; = <b>2<i>a</i><sup>8</sup> + 12<i>a</i><sup>6</sup> &minus; 10<i>a</i><sup>4</sup> &minus; 4<i>a</i><sup>2</sup> + 2</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">2a<sup>8</sup> + 12a<sup>6</sup> &minus; 10a<sup>4</sup> &minus; 4a<sup>2</sup> + 2</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find an approximation of <b>(0.99)<sup>5</sup></b> using the first three terms of its expansion.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Write 0.99 as (1 &minus; 0.01):</div>
        <div>(0.99)<sup>5</sup> = (1 &minus; 0.01)<sup>5</sup></div>
        <div>Expanding using the first three terms of the Binomial Theorem:</div>
        <div>(1 &minus; 0.01)<sup>5</sup> &asymp; <sup>5</sup>C<sub>0</sub> (1)<sup>5</sup> &minus; <sup>5</sup>C<sub>1</sub> (1)<sup>4</sup> (0.01) + <sup>5</sup>C<sub>2</sub> (1)<sup>3</sup> (0.01)<sup>2</sup></div>
        <div>= 1 &minus; 5(0.01) + 10(0.0001)</div>
        <div>= 1 &minus; 0.05 + 0.001</div>
        <div>= 1.001 &minus; 0.05 = <b>0.951</b></div>
        <div class="ans-box">
          <span class="ans-label">Approximate Value:</span>
          <span class="ans-val">0.951</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Find <i>n</i>, if the ratio of the fifth term from the beginning to the fifth term from the end in the expansion of <b>(<sup>4</sup>&radic;2 + ${frac('1', '<sup>4</sup>&radic;3')})<sup><i>n</i></sup></b> is <b>&radic;6 : 1</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here, <i>a</i> = 2<sup>1/4</sup> and <i>b</i> = 3<sup>&minus;1/4</sup>:</div>
        <div>• <b>5th term from the beginning:</b></div>
        <div>T<sub>5</sub> = T<sub>4+1</sub> = <sup><i>n</i></sup>C<sub>4</sub> <i>a</i><sup><i>n</i>&minus;4</sup> <i>b</i><sup>4</sup></div>
        <div>= <sup><i>n</i></sup>C<sub>4</sub> (2<sup>1/4</sup>)<sup><i>n</i>&minus;4</sup> (3<sup>&minus;1/4</sup>)<sup>4</sup> = <sup><i>n</i></sup>C<sub>4</sub> 2<sup>(<i>n</i>&minus;4)/4</sup> &times; 3<sup>&minus;1</sup> = <sup><i>n</i></sup>C<sub>4</sub> ${frac('2<sup>(<i>n</i>&minus;4)/4</sup>', '3')}</div>
        <div>• <b>5th term from the end:</b></div>
        <div>In an expansion of (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> containing <i>n</i> + 1 terms, the <i>k</i><sup>th</sup> term from the end is the (<i>n</i> &minus; <i>k</i> + 2)<sup>th</sup> term from the beginning:</div>
        <div>&rArr; (<i>n</i> &minus; 5 + 2)<sup>th</sup> = (<i>n</i> &minus; 3)<sup>th</sup> term = T<sub>(<i>n</i>&minus;4)+1</sub></div>
        <div>T<sub><i>n</i>&minus;3</sub> = <sup><i>n</i></sup>C<sub><i>n</i>&minus;4</sub> <i>a</i><sup>4</sup> <i>b</i><sup><i>n</i>&minus;4</sup> = <sup><i>n</i></sup>C<sub>4</sub> (2<sup>1/4</sup>)<sup>4</sup> (3<sup>&minus;1/4</sup>)<sup><i>n</i>&minus;4</sup> = <sup><i>n</i></sup>C<sub>4</sub> &times; 2 &times; 3<sup>&minus;(<i>n</i>&minus;4)/4</sup></div>
        <div>• <b>Ratio:</b></div>
        <div>${frac('T<sub>5</sub>', 'T<sub><i>n</i>&minus;3</sub>')} = ${frac('<sup><i>n</i></sup>C<sub>4</sub> 2<sup>(<i>n</i>&minus;4)/4</sup> (1/3)', '<sup><i>n</i></sup>C<sub>4</sub> (2) 3<sup>&minus;(<i>n</i>&minus;4)/4</sup>')} = ${frac('2<sup>(<i>n</i>&minus;4)/4</sup> &times; 3<sup>(<i>n</i>&minus;4)/4</sup>', '6')} = ${frac('6<sup>(<i>n</i>&minus;4)/4</sup>', '6')} = 6<sup>(<i>n</i>&minus;8)/4</sup></div>
        <div>Given that ratio is &radic;6 = 6<sup>1/2</sup>:</div>
        <div>&rArr; 6<sup>(<i>n</i>&minus;8)/4</sup> = 6<sup>1/2</sup></div>
        <div>Equating exponents:</div>
        <div>&rArr; ${frac('<i>n</i> &minus; 8', '4')} = ${frac('1', '2')} &rArr; <i>n</i> &minus; 8 = 2 &rArr; <b><i>n</i> = 10</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">n = 10</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Expand using the Binomial Theorem: <b>(1 + ${frac('<i>x</i>', '2')} &minus; ${frac('2', '<i>x</i>')})<sup>4</sup></b>, <i>x</i> &ne; 0.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Group the trinomial as a binomial: [(1 + ${frac('<i>x</i>', '2')}) &minus; ${frac('2', '<i>x</i>')}]<sup>4</sup>:</div>
        <div>= <sup>4</sup>C<sub>0</sub>(1 + ${frac('<i>x</i>', '2')})<sup>4</sup> &minus; <sup>4</sup>C<sub>1</sub>(1 + ${frac('<i>x</i>', '2')})<sup>3</sup>(${frac('2', '<i>x</i>')}) + <sup>4</sup>C<sub>2</sub>(1 + ${frac('<i>x</i>', '2')})<sup>2</sup>(${frac('2', '<i>x</i>')})<sup>2</sup> &minus; <sup>4</sup>C<sub>3</sub>(1 + ${frac('<i>x</i>', '2')})(${frac('2', '<i>x</i>')})<sup>3</sup> + <sup>4</sup>C<sub>4</sub>(${frac('2', '<i>x</i>')})<sup>4</sup></div>
        <div>Expanding each power:</div>
        <div>• (1 + ${frac('<i>x</i>', '2')})<sup>4</sup> = 1 + 2<i>x</i> + ${frac('3<i>x</i><sup>2</sup>', '2')} + ${frac('<i>x</i><sup>3</sup>', '2')} + ${frac('<i>x</i><sup>4</sup>', '16')}</div>
        <div>• &minus;4(1 + ${frac('3<i>x</i>', '2')} + ${frac('3<i>x</i><sup>2</sup>', '4')} + ${frac('<i>x</i><sup>3</sup>', '8')})(${frac('2', '<i>x</i>')}) = &minus;${frac('8', '<i>x</i>')} &minus; 12 &minus; 6<i>x</i> &minus; <i>x</i><sup>2</sup></div>
        <div>• +6(1 + <i>x</i> + ${frac('<i>x</i><sup>2</sup>', '4')})(${frac('4', '<i>x</i><sup>2</sup>')}) = ${frac('24', '<i>x</i><sup>2</sup>')} + ${frac('24', '<i>x</i>')} + 6</div>
        <div>• &minus;4(1 + ${frac('<i>x</i>', '2')})(${frac('8', '<i>x</i><sup>3</sup>')}) = &minus;${frac('32', '<i>x</i><sup>3</sup>')} &minus; ${frac('16', '<i>x</i><sup>2</sup>')}</div>
        <div>• +1(${frac('16', '<i>x</i><sup>4</sup>')}) = ${frac('16', '<i>x</i><sup>4</sup>')}</div>
        <div style="margin-top: 10px;">Combining like terms in descending and ascending powers of <i>x</i>:</div>
        <div>&rArr; <b>${frac('<i>x</i><sup>4</sup>', '16')} + ${frac('<i>x</i><sup>3</sup>', '2')} &minus; ${frac('<i>x</i><sup>2</sup>', '8')} &minus; 4<i>x</i> &minus; 5 + ${frac('16', '<i>x</i>')} &minus; ${frac('8', '<i>x</i><sup>2</sup>')} + ${frac('32', '<i>x</i><sup>3</sup>')} + ${frac('16', '<i>x</i><sup>4</sup>')}</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">${frac('x<sup>4</sup>', '16')} + ${frac('x<sup>3</sup>', '2')} &minus; ${frac('x<sup>2</sup>', '8')} &minus; 4x &minus; 5 + ${frac('16', 'x')} &minus; ${frac('8', 'x<sup>2</sup>')} + ${frac('32', 'x<sup>3</sup>')} + ${frac('16', 'x<sup>4</sup>')}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Find the expansion of <b>(3<i>x</i><sup>2</sup> &minus; 2<i>ax</i> + 3<i>a</i><sup>2</sup>)<sup>3</sup></b> using the Binomial Theorem.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping as: [3<i>x</i><sup>2</sup> &minus; <i>a</i>(2<i>x</i> &minus; 3<i>a</i>)]<sup>3</sup>:</div>
        <div>Let <i>u</i> = 3<i>x</i><sup>2</sup> and <i>v</i> = <i>a</i>(2<i>x</i> &minus; 3<i>a</i>):</div>
        <div>(<i>u</i> &minus; <i>v</i>)<sup>3</sup> = <i>u</i><sup>3</sup> &minus; 3<i>u</i><sup>2</sup><i>v</i> + 3<i>uv</i><sup>2</sup> &minus; <i>v</i><sup>3</sup></div>
        <div>Substituting <i>u</i> and <i>v</i>:</div>
        <div>• <i>u</i><sup>3</sup> = (3<i>x</i><sup>2</sup>)<sup>3</sup> = <b>27<i>x</i><sup>6</sup></b></div>
        <div>• &minus;3<i>u</i><sup>2</sup><i>v</i> = &minus;3(9<i>x</i><sup>4</sup>)[<i>a</i>(2<i>x</i> &minus; 3<i>a</i>)] = &minus;27<i>ax</i><sup>4</sup>(2<i>x</i> &minus; 3<i>a</i>) = <b>&minus;54<i>ax</i><sup>5</sup> + 81<i>a</i><sup>2</sup><i>x</i><sup>4</sup></b></div>
        <div>• +3<i>uv</i><sup>2</sup> = 3(3<i>x</i><sup>2</sup>)[<i>a</i><sup>2</sup>(4<i>x</i><sup>2</sup> &minus; 12<i>ax</i> + 9<i>a</i><sup>2</sup>)] = 9<i>a</i><sup>2</sup><i>x</i><sup>2</sup>(4<i>x</i><sup>2</sup> &minus; 12<i>ax</i> + 9<i>a</i><sup>2</sup>)</div>
        <div>&nbsp;&nbsp;= <b>36<i>a</i><sup>2</sup><i>x</i><sup>4</sup> &minus; 108<i>a</i><sup>3</sup><i>x</i><sup>3</sup> + 81<i>a</i><sup>4</sup><i>x</i><sup>2</sup></b></div>
        <div>• &minus;<i>v</i><sup>3</sup> = &minus;<i>a</i><sup>3</sup>(2<i>x</i> &minus; 3<i>a</i>)<sup>3</sup> = &minus;<i>a</i><sup>3</sup>[8<i>x</i><sup>3</sup> &minus; 36<i>ax</i><sup>2</sup> + 54<i>a</i><sup>2</sup><i>x</i> &minus; 27<i>a</i><sup>3</sup>]</div>
        <div>&nbsp;&nbsp;= <b>&minus;8<i>a</i><sup>3</sup><i>x</i><sup>3</sup> + 36<i>a</i><sup>4</sup><i>x</i><sup>2</sup> &minus; 54<i>a</i><sup>5</sup><i>x</i> + 27<i>a</i><sup>6</sup></b></div>
        <div style="margin-top: 10px;">Summing all terms:</div>
        <div>27<i>x</i><sup>6</sup> &minus; 54<i>ax</i><sup>5</sup> + (81 + 36)<i>a</i><sup>2</sup><i>x</i><sup>4</sup> + (&minus;108 &minus; 8)<i>a</i><sup>3</sup><i>x</i><sup>3</sup> + (81 + 36)<i>a</i><sup>4</sup><i>x</i><sup>2</sup> &minus; 54<i>a</i><sup>5</sup><i>x</i> + 27<i>a</i><sup>6</sup></div>
        <div>&rArr; <b>27<i>x</i><sup>6</sup> &minus; 54<i>ax</i><sup>5</sup> + 117<i>a</i><sup>2</sup><i>x</i><sup>4</sup> &minus; 116<i>a</i><sup>3</sup><i>x</i><sup>3</sup> + 117<i>a</i><sup>4</sup><i>x</i><sup>2</sup> &minus; 54<i>a</i><sup>5</sup><i>x</i> + 27<i>a</i><sup>6</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">27x<sup>6</sup> &minus; 54ax<sup>5</sup> + 117a<sup>2</sup>x<sup>4</sup> &minus; 116a<sup>3</sup>x<sup>3</sup> + 117a<sup>4</sup>x<sup>2</sup> &minus; 54a<sup>5</sup>x + 27a<sup>6</sup></span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getMiscellaneousExercise
};
