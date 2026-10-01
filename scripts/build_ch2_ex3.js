const { styleBlock, themeColor } = require('./ch2_common');

function getExercise2_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #00C6FF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #00C6FF;">
      📘 Exercise 2.3 &bull; Functions, Domain &amp; Range of Real Functions
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Which of the following relations are functions? Give reasons. If it is a function, determine its domain and range.<br/>
      <b>(i)</b> { (2, 1), (5, 1), (8, 1), (11, 1), (14, 1), (17, 1) }<br/>
      <b>(ii)</b> { (2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7) }<br/>
      <b>(iii)</b> { (1, 3), (1, 5), (2, 5) }
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #00C6FF; font-weight: 700;">Definition of a Function:</div>
        <div>A relation <i>f</i> from set A to set B is a function if every element of set A has <b>one and only one (unique)</b> image in set B.</div>
        
        <div style="margin-top: 12px; font-weight: 700; color: #80D8FF;">(i) R = { (2, 1), (5, 1), (8, 1), (11, 1), (14, 1), (17, 1) }:</div>
        <div>&rArr; The first elements are 2, 5, 8, 11, 14, 17. Every first element is distinct and has exactly one unique image (namely, 1).</div>
        <div>&rArr; <b>Therefore, this relation is a FUNCTION.</b></div>
        <div>&rArr; <b>Domain = {2, 5, 8, 11, 14, 17}</b></div>
        <div>&rArr; <b>Range = {1}</b></div>

        <div style="margin-top: 12px; font-weight: 700; color: #80D8FF;">(ii) R = { (2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7) }:</div>
        <div>&rArr; The first elements are 2, 4, 6, 8, 10, 12, 14. All are distinct and each element has a unique image.</div>
        <div>&rArr; <b>Therefore, this relation is a FUNCTION.</b></div>
        <div>&rArr; <b>Domain = {2, 4, 6, 8, 10, 12, 14}</b></div>
        <div>&rArr; <b>Range = {1, 2, 3, 4, 5, 6, 7}</b></div>

        <div style="margin-top: 12px; font-weight: 700; color: #80D8FF;">(iii) R = { (1, 3), (1, 5), (2, 5) }:</div>
        <div>&rArr; The first element <b>1</b> is associated with two distinct images: <b>3</b> and <b>5</b> (i.e. (1, 3) &isin; R and (1, 5) &isin; R).</div>
        <div>&rArr; <b>Therefore, this relation is NOT A FUNCTION.</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) Function (Dom: {2,5,8,11,14,17}, Range: {1}); (ii) Function (Dom: {2,4,6,8,10,12,14}, Range: {1,2,3,4,5,6,7}); (iii) Not a function</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the domain and range of the following real functions:<br/>
      <b>(i)</b> <i>f</i>(<i>x</i>) = &minus;|<i>x</i>|<br/>
      <b>(ii)</b> <i>f</i>(<i>x</i>) = &radic;(9 &minus; <i>x</i><sup>2</sup>)
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #80D8FF; font-weight: 700;">(i) <i>f</i>(<i>x</i>) = &minus;|<i>x</i>|:</div>
        <div>&rArr; The modulus function |<i>x</i>| is defined for all real numbers <i>x</i> &isin; &reals;.</div>
        <div>&rArr; <b>Domain(<i>f</i>) = &reals;</b> &nbsp; <span class="reason">(or (&minus;&infin;, &infin;))</span></div>
        <div style="margin-top: 6px;">To find the range:</div>
        <div>&rArr; For all real numbers <i>x</i> &isin; &reals;, |<i>x</i>| &ge; 0.</div>
        <div>&rArr; Multiplying by &minus;1 reverses the inequality: <b>&minus;|<i>x</i>| &le; 0</b>.</div>
        <div>&rArr; Hence, the values of <i>f</i>(<i>x</i>) can take any non-positive real number up to 0.</div>
        <div>&rArr; <b>Range(<i>f</i>) = (&minus;&infin;, 0]</b> = { <i>y</i> &isin; &reals; : <i>y</i> &le; 0 }.</div>

        <div style="margin-top: 14px; color: #80D8FF; font-weight: 700;">(ii) <i>f</i>(<i>x</i>) = &radic;(9 &minus; <i>x</i><sup>2</sup>):</div>
        <div>For <i>f</i>(<i>x</i>) to be a real-valued function, the expression inside the square root must be non-negative:</div>
        <div>&rArr; 9 &minus; <i>x</i><sup>2</sup> &ge; 0</div>
        <div>&rArr; <i>x</i><sup>2</sup> &minus; 9 &le; 0</div>
        <div>&rArr; (<i>x</i> &minus; 3)(<i>x</i> + 3) &le; 0</div>
        <div>&rArr; <b>&minus;3 &le; <i>x</i> &le; 3</b></div>
        <div>&rArr; <b>Domain(<i>f</i>) = [&minus;3, 3]</b> = { <i>x</i> &isin; &reals; : &minus;3 &le; <i>x</i> &le; 3 }.</div>
        <div style="margin-top: 6px;">To find the range:</div>
        <div>&rArr; For <i>x</i> &isin; [&minus;3, 3], we have: 0 &le; <i>x</i><sup>2</sup> &le; 9.</div>
        <div>&rArr; Subtracting from 9: 0 &le; 9 &minus; <i>x</i><sup>2</sup> &le; 9.</div>
        <div>&rArr; Taking positive square root: 0 &le; &radic;(9 &minus; <i>x</i><sup>2</sup>) &le; 3.</div>
        <div>&rArr; <b>Range(<i>f</i>) = [0, 3]</b> = { <i>y</i> &isin; &reals; : 0 &le; <i>y</i> &le; 3 }.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) Domain: ℝ, Range: (−∞, 0]; &nbsp; (ii) Domain: [−3, 3], Range: [0, 3]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      A function <i>f</i> is defined by <b><i>f</i>(<i>x</i>) = 2<i>x</i> &minus; 5</b>. Write down the values of:<br/>
      <b>(i)</b> <i>f</i>(0) &nbsp;&nbsp;&nbsp;&nbsp; <b>(ii)</b> <i>f</i>(7) &nbsp;&nbsp;&nbsp;&nbsp; <b>(iii)</b> <i>f</i>(&minus;3)
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given function formula: <b><i>f</i>(<i>x</i>) = 2<i>x</i> &minus; 5</b>.</div>
        <div style="margin-top: 8px;"><b>(i) Value of <i>f</i>(0):</b></div>
        <div>&rArr; <i>f</i>(0) = 2(0) &minus; 5 = 0 &minus; 5 = <b>&minus;5</b></div>
        <div style="margin-top: 8px;"><b>(ii) Value of <i>f</i>(7):</b></div>
        <div>&rArr; <i>f</i>(7) = 2(7) &minus; 5 = 14 &minus; 5 = <b>9</b></div>
        <div style="margin-top: 8px;"><b>(iii) Value of <i>f</i>(&minus;3):</b></div>
        <div>&rArr; <i>f</i>(&minus;3) = 2(&minus;3) &minus; 5 = &minus;6 &minus; 5 = <b>&minus;11</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) f(0) = −5, &nbsp; (ii) f(7) = 9, &nbsp; (iii) f(−3) = −11</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      The function <i>t</i>, which maps temperature in degree Celsius into temperature in degree Fahrenheit is defined by:<br/>
      <b><i>t</i>(C) = <span class="frac"><span class="num">9C</span><span class="den">5</span></span> + 32</b>.<br/>
      Find:<br/>
      <b>(i)</b> <i>t</i>(0)<br/>
      <b>(ii)</b> <i>t</i>(28)<br/>
      <b>(iii)</b> <i>t</i>(&minus;10)<br/>
      <b>(iv)</b> The value of C, when <i>t</i>(C) = 212
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given conversion function: <i>t</i>(C) = <span class="frac"><span class="num">9C</span><span class="den">5</span></span> + 32.</div>
        
        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">(i) For C = 0:</div>
        <div>&rArr; <i>t</i>(0) = <span class="frac"><span class="num">9(0)</span><span class="den">5</span></span> + 32 = 0 + 32 = <b>32</b></div>

        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">(ii) For C = 28:</div>
        <div>&rArr; <i>t</i>(28) = <span class="frac"><span class="num">9 &times; 28</span><span class="den">5</span></span> + 32</div>
        <div>&rArr; <i>t</i>(28) = <span class="frac"><span class="num">252</span><span class="den">5</span></span> + 32 = <span class="frac"><span class="num">252 + 160</span><span class="den">5</span></span> = <b><span class="frac"><span class="num">412</span><span class="den">5</span></span></b> = <b>82.4</b></div>

        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">(iii) For C = &minus;10:</div>
        <div>&rArr; <i>t</i>(&minus;10) = <span class="frac"><span class="num">9(&minus;10)</span><span class="den">5</span></span> + 32 = 9(&minus;2) + 32 = &minus;18 + 32 = <b>14</b></div>

        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">(iv) Finding C when <i>t</i>(C) = 212:</div>
        <div>&rArr; <span class="frac"><span class="num">9C</span><span class="den">5</span></span> + 32 = 212</div>
        <div>&rArr; <span class="frac"><span class="num">9C</span><span class="den">5</span></span> = 212 &minus; 32 = 180</div>
        <div>&rArr; 9C = 180 &times; 5 = 900</div>
        <div>&rArr; C = <span class="frac"><span class="num">900</span><span class="den">9</span></span> = <b>100</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) 32; &nbsp; (ii) 412/5 (or 82.4); &nbsp; (iii) 14; &nbsp; (iv) C = 100</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the range of each of the following functions:<br/>
      <b>(i)</b> <i>f</i>(<i>x</i>) = 2 &minus; 3<i>x</i>, <i>x</i> &isin; &reals;, <i>x</i> &gt; 0<br/>
      <b>(ii)</b> <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 2, <i>x</i> is a real number<br/>
      <b>(iii)</b> <i>f</i>(<i>x</i>) = <i>x</i>, <i>x</i> is a real number
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #80D8FF; font-weight: 700;">(i) <i>f</i>(<i>x</i>) = 2 &minus; 3<i>x</i>, where <i>x</i> &gt; 0:</div>
        <div>Given: <i>x</i> &gt; 0</div>
        <div>&rArr; Multiplying by 3: 3<i>x</i> &gt; 0</div>
        <div>&rArr; Multiplying by &minus;1 <span class="reason">(flips inequality sign)</span>: &minus;3<i>x</i> &lt; 0</div>
        <div>&rArr; Adding 2 to both sides: 2 &minus; 3<i>x</i> &lt; 2</div>
        <div>&rArr; <i>f</i>(<i>x</i>) &lt; 2</div>
        <div>&rArr; <b>Range(<i>f</i>) = (&minus;&infin;, 2)</b> = { <i>y</i> &isin; &reals; : <i>y</i> &lt; 2 }</div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">(ii) <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 2, <i>x</i> &isin; &reals;:</div>
        <div>&rArr; Since the square of any real number is non-negative: <i>x</i><sup>2</sup> &ge; 0 for all <i>x</i> &isin; &reals;.</div>
        <div>&rArr; Adding 2 to both sides: <i>x</i><sup>2</sup> + 2 &ge; 0 + 2</div>
        <div>&rArr; <i>f</i>(<i>x</i>) &ge; 2</div>
        <div>&rArr; <b>Range(<i>f</i>) = [2, &infin;)</b> = { <i>y</i> &isin; &reals; : <i>y</i> &ge; 2 }</div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">(iii) <i>f</i>(<i>x</i>) = <i>x</i>, <i>x</i> &isin; &reals; (Identity Function):</div>
        <div>&rArr; The function takes every real number <i>x</i> to itself.</div>
        <div>&rArr; For every <i>y</i> &isin; &reals;, there exists <i>x</i> = <i>y</i> &isin; &reals; such that <i>f</i>(<i>x</i>) = <i>y</i>.</div>
        <div>&rArr; <b>Range(<i>f</i>) = &reals;</b> &nbsp; <span class="reason">(or (&minus;&infin;, &infin;))</span></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) Range = (−∞, 2); &nbsp; (ii) Range = [2, ∞); &nbsp; (iii) Range = ℝ</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #00C6FF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #00C6FF;">
      📘 Miscellaneous Exercise &bull; Relations &amp; Functions Mastery
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      The relation <i>f</i> is defined by:<br/>
      <b><i>f</i>(<i>x</i>) = { <i>x</i><sup>2</sup>, 0 &le; <i>x</i> &le; 3; &nbsp; 3<i>x</i>, 3 &le; <i>x</i> &le; 10 }</b><br/><br/>
      The relation <i>g</i> is defined by:<br/>
      <b><i>g</i>(<i>x</i>) = { <i>x</i><sup>2</sup>, 0 &le; <i>x</i> &le; 2; &nbsp; 3<i>x</i>, 2 &le; <i>x</i> &le; 10 }</b><br/><br/>
      Show that <i>f</i> is a function and <i>g</i> is not a function.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #00C6FF; font-weight: 700;">1. Examining Relation <i>f</i>:</div>
        <div>For 0 &le; <i>x</i> &lt; 3, <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>.</div>
        <div>For 3 &lt; <i>x</i> &le; 10, <i>f</i>(<i>x</i>) = 3<i>x</i>.</div>
        <div style="margin-top: 4px;">At the boundary point <i>x</i> = 3:</div>
        <div>• Using first branch: <i>f</i>(3) = 3<sup>2</sup> = <b>9</b></div>
        <div>• Using second branch: <i>f</i>(3) = 3(3) = <b>9</b></div>
        <div>&rArr; Both branches yield the exact same value 9. Hence, at <i>x</i> = 3, there is a <b>unique image</b>.</div>
        <div>&rArr; Every element in the domain [0, 10] has one and only one image.</div>
        <div>&rArr; <b>Therefore, <i>f</i> is a FUNCTION.</b></div>

        <div style="margin-top: 14px; color: #80D8FF; font-weight: 700;">2. Examining Relation <i>g</i>:</div>
        <div>At the boundary point <i>x</i> = 2:</div>
        <div>• Using first branch (0 &le; <i>x</i> &le; 2): <i>g</i>(2) = 2<sup>2</sup> = <b>4</b></div>
        <div>• Using second branch (2 &le; <i>x</i> &le; 10): <i>g</i>(2) = 3(2) = <b>6</b></div>
        <div>&rArr; The domain element <i>x</i> = 2 corresponds to <b>two different images</b> (4 and 6).</div>
        <div>&rArr; By definition of a function, an element cannot have more than one image.</div>
        <div>&rArr; <b>Therefore, <i>g</i> is NOT A FUNCTION.</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">f is a function (unique image 9 at x=3), whereas g is not a function (dual images 4 and 6 at x=2).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      If <b><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></b>, find <span class="frac"><span class="num"><i>f</i>(1.1) &minus; <i>f</i>(1)</span><span class="den">1.1 &minus; 1</span></span>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>.</div>
        <div style="margin-top: 6px;">Evaluating each component:</div>
        <div>• <i>f</i>(1.1) = (1.1)<sup>2</sup> = 1.21</div>
        <div>• <i>f</i>(1) = (1)<sup>2</sup> = 1</div>
        <div>• Denominator: 1.1 &minus; 1 = 0.1</div>
        <div style="margin-top: 8px;">Substituting these values into the expression:</div>
        <div>&rArr; <span class="frac"><span class="num"><i>f</i>(1.1) &minus; <i>f</i>(1)</span><span class="den">1.1 &minus; 1</span></span> = <span class="frac"><span class="num">1.21 &minus; 1</span><span class="den">0.1</span></span></div>
        <div>&rArr; = <span class="frac"><span class="num">0.21</span><span class="den">0.1</span></span> = <span class="frac"><span class="num">2.1</span><span class="den">1</span></span> = <b>2.1</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Value = 2.1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Find the domain of the function: <b><i>f</i>(<i>x</i>) = <span class="frac"><span class="num"><i>x</i><sup>2</sup> + 2<i>x</i> + 1</span><span class="den"><i>x</i><sup>2</sup> &minus; 8<i>x</i> + 12</span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>A rational function <span class="frac"><span class="num">p(<i>x</i>)</span><span class="den">q(<i>x</i>)</span></span> is defined for all real numbers where the denominator <b>q(<i>x</i>) &ne; 0</b>.</div>
        <div style="margin-top: 6px;">Setting denominator equal to zero to find the excluded points:</div>
        <div>&rArr; <i>x</i><sup>2</sup> &minus; 8<i>x</i> + 12 = 0</div>
        <div>&rArr; <i>x</i><sup>2</sup> &minus; 6<i>x</i> &minus; 2<i>x</i> + 12 = 0</div>
        <div>&rArr; <i>x</i>(<i>x</i> &minus; 6) &minus; 2(<i>x</i> &minus; 6) = 0</div>
        <div>&rArr; (<i>x</i> &minus; 6)(<i>x</i> &minus; 2) = 0</div>
        <div>&rArr; <b><i>x</i> = 2</b> &nbsp;or&nbsp; <b><i>x</i> = 6</b></div>
        <div style="margin-top: 8px;">Hence, <i>f</i>(<i>x</i>) is defined for all real numbers except <i>x</i> = 2 and <i>x</i> = 6.</div>
        <div>&rArr; <b>Domain(<i>f</i>) = &reals; &minus; {2, 6}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain = ℝ − {2, 6}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Find the domain and the range of the real function <i>f</i> defined by <b><i>f</i>(<i>x</i>) = &radic;(<i>x</i> &minus; 1)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given real function: <i>f</i>(<i>x</i>) = &radic;(<i>x</i> &minus; 1).</div>
        <div style="margin-top: 8px; color: #80D8FF; font-weight: 700;">1. Domain:</div>
        <div>For &radic;(<i>x</i> &minus; 1) to be a real number, the quantity under the radical must be non-negative:</div>
        <div>&rArr; <i>x</i> &minus; 1 &ge; 0 &nbsp;&rArr;&nbsp; <b><i>x</i> &ge; 1</b></div>
        <div>&rArr; <b>Domain(<i>f</i>) = [1, &infin;)</b> = { <i>x</i> &isin; &reals; : <i>x</i> &ge; 1 }</div>
        
        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">2. Range:</div>
        <div>&rArr; Since <i>x</i> &ge; 1, (<i>x</i> &minus; 1) &ge; 0.</div>
        <div>&rArr; The principal square root of any non-negative real number is non-negative: <b>&radic;(<i>x</i> &minus; 1) &ge; 0</b>.</div>
        <div>&rArr; As <i>x</i> increases from 1 to &infin;, <i>f</i>(<i>x</i>) increases continuously from 0 to &infin;.</div>
        <div>&rArr; <b>Range(<i>f</i>) = [0, &infin;)</b> = { <i>y</i> &isin; &reals; : <i>y</i> &ge; 0 }</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain = [1, ∞) &nbsp;and&nbsp; Range = [0, ∞)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the domain and the range of the real function <i>f</i> defined by <b><i>f</i>(<i>x</i>) = |<i>x</i> &minus; 1|</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given real function: <i>f</i>(<i>x</i>) = |<i>x</i> &minus; 1|.</div>
        <div style="margin-top: 8px; color: #80D8FF; font-weight: 700;">1. Domain:</div>
        <div>&rArr; The absolute value expression |<i>x</i> &minus; 1| is defined and finite for every real number <i>x</i>.</div>
        <div>&rArr; <b>Domain(<i>f</i>) = &reals;</b> &nbsp;<span class="reason">(or (&minus;&infin;, &infin;))</span></div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">2. Range:</div>
        <div>&rArr; By definition of absolute value, |<i>x</i> &minus; 1| &ge; 0 for all <i>x</i> &isin; &reals;.</div>
        <div>&rArr; At <i>x</i> = 1, |1 &minus; 1| = 0 (minimum value). As |<i>x</i>| grows without bound, |<i>x</i> &minus; 1| assumes all non-negative real values.</div>
        <div>&rArr; <b>Range(<i>f</i>) = [0, &infin;)</b> = { <i>y</i> &isin; &reals; : <i>y</i> &ge; 0 }</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain = ℝ &nbsp;and&nbsp; Range = [0, ∞)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Let <b><i>f</i> = { (<i>x</i>, <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">1 + <i>x</i><sup>2</sup></span></span>) : <i>x</i> &isin; &reals; }</b> be a function from &reals; into &reals;. Determine the range of <i>f</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>y</i> = <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">1 + <i>x</i><sup>2</sup></span></span>, where <i>x</i> &isin; &reals;.</div>
        <div style="margin-top: 6px;"><b>Method 1: Direct Bounds</b></div>
        <div>&rArr; For all real numbers <i>x</i>, <i>x</i><sup>2</sup> &ge; 0. Hence the numerator is non-negative and denominator (1 + <i>x</i><sup>2</sup>) &ge; 1 &gt; 0.</div>
        <div>&rArr; Therefore: <b><i>y</i> &ge; 0</b>, with <i>y</i> = 0 when <i>x</i> = 0.</div>
        <div>&rArr; Also, <i>x</i><sup>2</sup> &lt; 1 + <i>x</i><sup>2</sup> for all <i>x</i>.</div>
        <div>&rArr; Dividing by the positive denominator (1 + <i>x</i><sup>2</sup>): <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">1 + <i>x</i><sup>2</sup></span></span> &lt; 1.</div>
        <div>&rArr; Therefore: <b>0 &le; <i>y</i> &lt; 1</b>.</div>
        
        <div style="margin-top: 10px;"><b>Method 2: Expressing <i>x</i> in terms of <i>y</i></b></div>
        <div>&rArr; <i>y</i>(1 + <i>x</i><sup>2</sup>) = <i>x</i><sup>2</sup></div>
        <div>&rArr; <i>y</i> + <i>y</i><i>x</i><sup>2</sup> = <i>x</i><sup>2</sup></div>
        <div>&rArr; <i>x</i><sup>2</sup>(1 &minus; <i>y</i>) = <i>y</i></div>
        <div>&rArr; <i>x</i><sup>2</sup> = <span class="frac"><span class="num"><i>y</i></span><span class="den">1 &minus; <i>y</i></span></span></div>
        <div>Since <i>x</i> &isin; &reals;, <i>x</i><sup>2</sup> &ge; 0:</div>
        <div>&rArr; <span class="frac"><span class="num"><i>y</i></span><span class="den">1 &minus; <i>y</i></span></span> &ge; 0 &nbsp;&rArr;&nbsp; <span class="frac"><span class="num"><i>y</i></span><span class="den"><i>y</i> &minus; 1</span></span> &le; 0 &nbsp;(with <i>y</i> &ne; 1)</div>
        <div>&rArr; <b>0 &le; <i>y</i> &lt; 1</b></div>
        <div>&rArr; <b>Range(<i>f</i>) = [0, 1)</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Range = [0, 1)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Let <i>f</i>, <i>g</i>: &reals; &rarr; &reals; be defined, respectively by <b><i>f</i>(<i>x</i>) = <i>x</i> + 1</b>, <b><i>g</i>(<i>x</i>) = 2<i>x</i> &minus; 3</b>. Find:<br/>
      <b>(<i>f</i> + <i>g</i>)</b>, &nbsp; <b>(<i>f</i> &minus; <i>g</i>)</b>, &nbsp; and &nbsp; <b><span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>f</i>(<i>x</i>) = <i>x</i> + 1 and <i>g</i>(<i>x</i>) = 2<i>x</i> &minus; 3.</div>
        
        <div style="margin-top: 8px; color: #80D8FF; font-weight: 700;">1. Addition of Functions (<i>f</i> + <i>g</i>)(<i>x</i>):</div>
        <div>&rArr; (<i>f</i> + <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) + <i>g</i>(<i>x</i>)</div>
        <div>&rArr; = (<i>x</i> + 1) + (2<i>x</i> &minus; 3) = <b>3<i>x</i> &minus; 2</b></div>

        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">2. Subtraction of Functions (<i>f</i> &minus; <i>g</i>)(<i>x</i>):</div>
        <div>&rArr; (<i>f</i> &minus; <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) &minus; <i>g</i>(<i>x</i>)</div>
        <div>&rArr; = (<i>x</i> + 1) &minus; (2<i>x</i> &minus; 3) = <i>x</i> + 1 &minus; 2<i>x</i> + 3 = <b>&minus;<i>x</i> + 4</b></div>

        <div style="margin-top: 10px; color: #80D8FF; font-weight: 700;">3. Quotient of Functions (<span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span>)(<i>x</i>):</div>
        <div>&rArr; (<span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span>)(<i>x</i>) = <span class="frac"><span class="num"><i>f</i>(<i>x</i>)</span><span class="den"><i>g</i>(<i>x</i>)</span></span>, &nbsp; provided <i>g</i>(<i>x</i>) &ne; 0.</div>
        <div>&rArr; = <span class="frac"><span class="num"><i>x</i> + 1</span><span class="den">2<i>x</i> &minus; 3</span></span></div>
        <div>&rArr; Condition: 2<i>x</i> &minus; 3 &ne; 0 &rArr; <b><i>x</i> &ne; <span class="frac"><span class="num">3</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(f + g)(x) = 3x − 2, &nbsp; (f − g)(x) = −x + 4, &nbsp; (f/g)(x) = (x + 1)/(2x − 3), &nbsp; x ≠ 3/2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Let <b><i>f</i> = { (1, 1), (2, 3), (0, &minus;1), (&minus;1, &minus;3) }</b> be a function from &integers; to &integers; defined by <b><i>f</i>(<i>x</i>) = <i>ax</i> + <i>b</i></b>, for some integers <i>a</i>, <i>b</i>. Determine <i>a</i>, <i>b</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given rule: <i>f</i>(<i>x</i>) = <i>ax</i> + <i>b</i>.</div>
        <div>From the ordered pairs in <i>f</i>:</div>
        <div>• For (0, &minus;1) &isin; <i>f</i> &rArr; <i>f</i>(0) = &minus;1:</div>
        <div>&rArr; <i>a</i>(0) + <i>b</i> = &minus;1 &nbsp;&rArr;&nbsp; <b><i>b</i> = &minus;1</b></div>
        <div style="margin-top: 6px;">• For (1, 1) &isin; <i>f</i> &rArr; <i>f</i>(1) = 1:</div>
        <div>&rArr; <i>a</i>(1) + <i>b</i> = 1</div>
        <div>&rArr; <i>a</i> + (&minus;1) = 1</div>
        <div>&rArr; <b><i>a</i> = 2</b></div>
        <div style="margin-top: 8px;">Verification with the remaining pairs:</div>
        <div>• For <i>x</i> = 2: <i>f</i>(2) = 2(2) &minus; 1 = 3 &rArr; (2, 3) &isin; <i>f</i> <span class="reason">(Matches!)</span></div>
        <div>• For <i>x</i> = &minus;1: <i>f</i>(&minus;1) = 2(&minus;1) &minus; 1 = &minus;3 &rArr; (&minus;1, &minus;3) &isin; <i>f</i> <span class="reason">(Matches!)</span></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">a = 2 &nbsp;and&nbsp; b = −1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Let R be a relation from &naturals; to &naturals; defined by <b>R = { (<i>a</i>, <i>b</i>) : <i>a</i>, <i>b</i> &isin; &naturals; and <i>a</i> = <i>b</i><sup>2</sup> }</b>. Are the following true?<br/>
      <b>(i)</b> (<i>a</i>, <i>a</i>) &isin; R, for all <i>a</i> &isin; &naturals;<br/>
      <b>(ii)</b> (<i>a</i>, <i>b</i>) &isin; R implies (<i>b</i>, <i>a</i>) &isin; R<br/>
      <b>(iii)</b> (<i>a</i>, <i>b</i>) &isin; R, (<i>b</i>, <i>c</i>) &isin; R implies (<i>a</i>, <i>c</i>) &isin; R<br/>
      Justify your answer in each case.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #80D8FF; font-weight: 700;">(i) Is (<i>a</i>, <i>a</i>) &isin; R for all <i>a</i> &isin; &naturals;?</div>
        <div>&rArr; <b>FALSE.</b></div>
        <div><b>Justification:</b> Take <i>a</i> = 2 &isin; &naturals;. Then <i>a</i><sup>2</sup> = 2<sup>2</sup> = 4. Since 2 &ne; 4, we have (2, 2) &notin; R.</div>
        <div style="font-size: 13.5px; color: #94A3B8;">&nbsp;&nbsp;&nbsp;&nbsp;(Note: (<i>a</i>, <i>a</i>) &isin; R only for <i>a</i> = 1, not for all natural numbers).</div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">(ii) Does (<i>a</i>, <i>b</i>) &isin; R imply (<i>b</i>, <i>a</i>) &isin; R?</div>
        <div>&rArr; <b>FALSE.</b></div>
        <div><b>Justification:</b> Take <i>a</i> = 9 and <i>b</i> = 3. Since 9 = 3<sup>2</sup>, (9, 3) &isin; R.</div>
        <div>However, 3 &ne; 9<sup>2</sup> = 81, so (3, 9) &notin; R.</div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">(iii) Do (<i>a</i>, <i>b</i>) &isin; R and (<i>b</i>, <i>c</i>) &isin; R imply (<i>a</i>, <i>c</i>) &isin; R?</div>
        <div>&rArr; <b>FALSE.</b></div>
        <div><b>Justification:</b> Take <i>a</i> = 16, <i>b</i> = 4, <i>c</i> = 2 &isin; &naturals;.</div>
        <div>• 16 = 4<sup>2</sup> &rArr; (16, 4) &isin; R</div>
        <div>• 4 = 2<sup>2</sup> &rArr; (4, 2) &isin; R</div>
        <div>• But 16 &ne; 2<sup>2</sup> = 4 &rArr; (16, 2) &notin; R.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) False; &nbsp; (ii) False; &nbsp; (iii) False (Justified by counterexamples above).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Let A = {1, 2, 3, 4}, B = {1, 5, 9, 11, 15, 16} and:<br/>
      <b><i>f</i> = { (1, 5), (2, 9), (3, 1), (4, 5), (2, 11) }</b>.<br/>
      Are the following true?<br/>
      <b>(i)</b> <i>f</i> is a relation from A to B<br/>
      <b>(ii)</b> <i>f</i> is a function from A to B<br/>
      Justify your answer in each case.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #80D8FF; font-weight: 700;">(i) Is <i>f</i> a relation from A to B?</div>
        <div>&rArr; <b>TRUE.</b></div>
        <div><b>Justification:</b> A relation from A to B is defined as any subset of the Cartesian product A &times; B.</div>
        <div>First components of pairs in <i>f</i>: {1, 2, 3, 4} &sube; A.</div>
        <div>Second components of pairs in <i>f</i>: {5, 9, 1, 11} &sube; B.</div>
        <div>Since every ordered pair in <i>f</i> belongs to A &times; B, <b><i>f</i> &sube; A &times; B</b>. Therefore, <i>f</i> is indeed a relation from A to B.</div>

        <div style="margin-top: 12px; color: #80D8FF; font-weight: 700;">(ii) Is <i>f</i> a function from A to B?</div>
        <div>&rArr; <b>FALSE.</b></div>
        <div><b>Justification:</b> In a function, each element of the domain must correspond to one and only one image.</div>
        <div>Here, the element <b>2 &isin; A</b> has two distinct images in B: <b>9</b> (from (2, 9)) and <b>11</b> (from (2, 11)).</div>
        <div>Since a domain element has more than one image, <i>f</i> is not a function.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) True (f ⊆ A × B); &nbsp; (ii) False (element 2 has two images 9 and 11).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Let <i>f</i> be the subset of &integers; &times; &integers; defined by <b><i>f</i> = { (<i>ab</i>, <i>a</i> + <i>b</i>) : <i>a</i>, <i>b</i> &isin; &integers; }</b>. Is <i>f</i> a function from &integers; to &integers;? Justify your answer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given definition of relation <i>f</i> &sube; &integers; &times; &integers;:</div>
        <div>&rArr; <i>f</i> = { (<i>ab</i>, <i>a</i> + <i>b</i>) : <i>a</i>, <i>b</i> &isin; &integers; }</div>
        <div style="margin-top: 6px;">To check if <i>f</i> is a function, we must determine whether each first element (the product <i>ab</i>) produces a single, unique second element (the sum <i>a</i> + <i>b</i>).</div>
        <div style="margin-top: 8px;">Let us test different integer factorizations that produce the same product:</div>
        <div>• Choose <i>a</i> = 2, <i>b</i> = 6:</div>
        <div>&nbsp;&nbsp;&bull; Product = 2 &times; 6 = 12</div>
        <div>&nbsp;&nbsp;&bull; Sum = 2 + 6 = 8</div>
        <div>&nbsp;&nbsp;&bull; Hence, <b>(12, 8) &isin; <i>f</i></b>.</div>
        <div style="margin-top: 6px;">• Choose <i>a</i> = &minus;2, <i>b</i> = &minus;6:</div>
        <div>&nbsp;&nbsp;&bull; Product = (&minus;2) &times; (&minus;6) = 12</div>
        <div>&nbsp;&nbsp;&bull; Sum = (&minus;2) + (&minus;6) = &minus;8</div>
        <div>&nbsp;&nbsp;&bull; Hence, <b>(12, &minus;8) &isin; <i>f</i></b>.</div>
        <div style="margin-top: 8px;">&rArr; The single input domain element <b>12</b> maps to two different outputs: <b>8</b> and <b>&minus;8</b>.</div>
        <div>&rArr; Since an input element has more than one image, <i>f</i> fails the definition of a function.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">No, f is NOT a function from ℤ to ℤ because element 12 has two different images (8 and −8).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Let A = {9, 10, 11, 12, 13} and let <i>f</i>: A &rarr; &naturals; be defined by:<br/>
      <b><i>f</i>(<i>n</i>) = the highest prime factor of <i>n</i></b>.<br/>
      Find the range of <i>f</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given domain A = {9, 10, 11, 12, 13} and rule: <i>f</i>(<i>n</i>) = highest prime factor of <i>n</i>.</div>
        <div style="margin-top: 6px;">Finding the prime factors of each element of A:</div>
        <div>• For <i>n</i> = 9:</div>
        <div>&nbsp;&nbsp;&bull; Prime factorization: 9 = 3<sup>2</sup></div>
        <div>&nbsp;&nbsp;&bull; Highest prime factor = <b>3</b> &nbsp;&rArr;&nbsp; <i>f</i>(9) = 3</div>
        <div style="margin-top: 4px;">• For <i>n</i> = 10:</div>
        <div>&nbsp;&nbsp;&bull; Prime factorization: 10 = 2 &times; 5</div>
        <div>&nbsp;&nbsp;&bull; Highest prime factor = <b>5</b> &nbsp;&rArr;&nbsp; <i>f</i>(10) = 5</div>
        <div style="margin-top: 4px;">• For <i>n</i> = 11:</div>
        <div>&nbsp;&nbsp;&bull; 11 is prime &rArr; Highest prime factor = <b>11</b> &nbsp;&rArr;&nbsp; <i>f</i>(11) = 11</div>
        <div style="margin-top: 4px;">• For <i>n</i> = 12:</div>
        <div>&nbsp;&nbsp;&bull; Prime factorization: 12 = 2<sup>2</sup> &times; 3</div>
        <div>&nbsp;&nbsp;&bull; Highest prime factor = <b>3</b> &nbsp;&rArr;&nbsp; <i>f</i>(12) = 3</div>
        <div style="margin-top: 4px;">• For <i>n</i> = 13:</div>
        <div>&nbsp;&nbsp;&bull; 13 is prime &rArr; Highest prime factor = <b>13</b> &nbsp;&rArr;&nbsp; <i>f</i>(13) = 13</div>
        <div style="margin-top: 10px;">Collecting all outputs into the Range set:</div>
        <div>&rArr; <b>Range(<i>f</i>) = { <i>f</i>(<i>n</i>) : <i>n</i> &isin; A } = {3, 5, 11, 13}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Range of f = {3, 5, 11, 13}</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise2_3,
  getMiscellaneousExercise
};
