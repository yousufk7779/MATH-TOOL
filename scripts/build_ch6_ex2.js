const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function getExercise6_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Permutations and Combinations &bull; Exercise 6.2
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Factorial Notation (<i>n</i>!) &bull; Properties &amp; Reductions &bull; Algebraic Evaluations
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Evaluate:<br/>
      <b>(i)</b> 8!<br/>
      <b>(ii)</b> 4! &minus; 3!
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">(i) Evaluating 8!:</b></div>
        <div>By definition of factorial for a positive integer <i>n</i>:</div>
        <div><i>n</i>! = <i>n</i> &times; (<i>n</i> &minus; 1) &times; (<i>n</i> &minus; 2) &times; ... &times; 3 &times; 2 &times; 1</div>
        <div>&rArr; 8! = 8 &times; 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1</div>
        <div>&rArr; 8! = 56 &times; 30 &times; 24 = <b>40320</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Value:</span>
          <span class="ans-val">40320</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) Evaluating 4! &minus; 3!:</b></div>
        <div>Method 1: Direct Expansion:</div>
        <div>4! = 4 &times; 3 &times; 2 &times; 1 = 24</div>
        <div>3! = 3 &times; 2 &times; 1 = 6</div>
        <div>&rArr; 4! &minus; 3! = 24 &minus; 6 = <b>18</b></div>
        <div style="margin-top: 6px;">Method 2: Factoring out common factorial:</div>
        <div>4! &minus; 3! = (4 &times; 3!) &minus; 3! = 3!(4 &minus; 1) = 6 &times; 3 = <b>18</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Value:</span>
          <span class="ans-val">18</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Is <b>3! + 4! = 7!</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>To test whether the equality holds, compute LHS and RHS independently:</div>
        <div><b>Computing LHS:</b></div>
        <div>3! = 3 &times; 2 &times; 1 = 6</div>
        <div>4! = 4 &times; 3 &times; 2 &times; 1 = 24</div>
        <div>&rArr; LHS = 3! + 4! = 6 + 24 = <b>30</b></div>
        <div style="margin-top: 8px;"><b>Computing RHS:</b></div>
        <div>7! = 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1</div>
        <div>&rArr; RHS = 7 &times; 720 = <b>5040</b></div>
        <div style="margin-top: 8px;">Comparing both sides:</div>
        <div>Since <b>30 &ne; 5040</b>, we have:</div>
        <div>&rArr; <b>LHS &ne; RHS</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">No, 3! + 4! &ne; 7! (Factorial addition does NOT distribute: a! + b! &ne; (a + b)!)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Compute: <b>${frac('8!', '6! &times; 2!')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given expression: ${frac('8!', '6! &times; 2!')}</div>
        <div>Expressing 8! in terms of 6!:</div>
        <div>8! = 8 &times; 7 &times; 6!</div>
        <div>Also, 2! = 2 &times; 1 = 2</div>
        <div>Substituting into the fraction:</div>
        <div>&rArr; ${frac('8!', '6! &times; 2!')} = ${frac('8 &times; 7 &times; 6!', '6! &times; 2')}</div>
        <div>Cancelling 6! from numerator and denominator:</div>
        <div>&rArr; ${frac('8 &times; 7', '2')} = ${frac('56', '2')} = <b>28</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">28</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If <b>${frac('1', '6!')} + ${frac('1', '7!')} = ${frac('<i>x</i>', '8!')}</b>, find <i>x</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given equation: ${frac('1', '6!')} + ${frac('1', '7!')} = ${frac('<i>x</i>', '8!')}</div>
        <div>Expressing 7! and 8! in terms of lower factorials:</div>
        <div>7! = 7 &times; 6! &nbsp;and&nbsp; 8! = 8 &times; 7! = 8 &times; 7 &times; 6!</div>
        <div><b>Method: Multiplying the entire equation by 8!:</b></div>
        <div>&rArr; 8! &times; (${frac('1', '6!')} + ${frac('1', '7!')}) = <i>x</i></div>
        <div>&rArr; ${frac('8!', '6!')} + ${frac('8!', '7!')} = <i>x</i></div>
        <div>Simplifying each term:</div>
        <div>• ${frac('8!', '6!')} = ${frac('8 &times; 7 &times; 6!', '6!')} = 8 &times; 7 = 56</div>
        <div>• ${frac('8!', '7!')} = ${frac('8 &times; 7!', '7!')} = 8</div>
        <div>Therefore:</div>
        <div>&rArr; <i>x</i> = 56 + 8 = <b>64</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">x = 64</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Evaluate <b>${frac('<i>n</i>!', '(<i>n</i> &minus; <i>r</i>)!')}</b>, when:<br/>
      <b>(i)</b> <i>n</i> = 6, <i>r</i> = 2<br/>
      <b>(ii)</b> <i>n</i> = 9, <i>r</i> = 5
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">(i) For <i>n</i> = 6 and <i>r</i> = 2:</b></div>
        <div>Substitute <i>n</i> and <i>r</i> into the formula:</div>
        <div>&rArr; ${frac('6!', '(6 &minus; 2)!')} = ${frac('6!', '4!')}</div>
        <div>Expanding 6! until 4!:</div>
        <div>&rArr; ${frac('6 &times; 5 &times; 4!', '4!')} = 6 &times; 5 = <b>30</b></div>
        <div><span class="reason">[This represents <sup>6</sup>P<sub>2</sub> = 30]</span></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">30</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) For <i>n</i> = 9 and <i>r</i> = 5:</b></div>
        <div>Substitute <i>n</i> and <i>r</i> into the formula:</div>
        <div>&rArr; ${frac('9!', '(9 &minus; 5)!')} = ${frac('9!', '4!')}</div>
        <div>Expanding 9! until 4!:</div>
        <div>&rArr; ${frac('9 &times; 8 &times; 7 &times; 6 &times; 5 &times; 4!', '4!')} = 9 &times; 8 &times; 7 &times; 6 &times; 5</div>
        <div>&rArr; 72 &times; 42 &times; 5 = 72 &times; 210 = <b>15120</b></div>
        <div><span class="reason">[This represents <sup>9</sup>P<sub>5</sub> = 15120]</span></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">15120</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise6_2
};
