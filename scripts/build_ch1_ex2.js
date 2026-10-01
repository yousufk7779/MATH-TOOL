const { styleBlock, themeColor } = require('./ch1_common');

function getExercise1_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.3 &bull; Subsets, Intervals &amp; Universal Sets
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Make correct statements by filling in the symbols <b>&sub;</b> or <b>&nsub;</b> in the blank spaces:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i)</b> {2, 3, 4} &hellip; {1, 2, 3, 4, 5} &rArr; Every element (2, 3, 4) belongs to RHS: &nbsp;<b>{2, 3, 4} &sub; {1, 2, 3, 4, 5}</b></div>
        <div>• <b style="color: #FF8A65;">(ii)</b> {a, b, c} &hellip; {b, c, d} &rArr; 'a' is not in RHS: &nbsp;<b>{a, b, c} &nsub; {b, c, d}</b></div>
        <div>• <b style="color: #FF8A65;">(iii)</b> {x : x is a student of Class XI of your school} &hellip; {x : x is a student of your school} &rArr; Every Class XI student is a student of the school: &nbsp;<b>&sub;</b></div>
        <div>• <b style="color: #FF8A65;">(iv)</b> {x : x is a circle in the plane} &hellip; {x : x is a circle in the same plane with radius 1 unit} &rArr; LHS contains circles of all radii, not just 1 unit: &nbsp;<b>&nsub;</b></div>
        <div>• <b style="color: #FF8A65;">(v)</b> {x : x is a triangle in a plane} &hellip; {x : x is a rectangle in the plane} &rArr; Triangles are not rectangles: &nbsp;<b>&nsub;</b></div>
        <div>• <b style="color: #FF8A65;">(vi)</b> {x : x is an equilateral triangle in a plane} &hellip; {x : x is a triangle in the same plane} &rArr; Equilateral triangles are a subset of all triangles: &nbsp;<b>&sub;</b></div>
        <div>• <b style="color: #FF8A65;">(vii)</b> {x : x is an even natural number} &hellip; {x : x is an integer} &rArr; All even natural numbers are integers: &nbsp;<b>&sub;</b></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Examine whether the following statements are true or false:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions &amp; Reasons:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {a, b} &nsub; {b, c, a}:</b> <b style="color: #FF5252;">False</b> &nbsp;<span class="reason">[Since both a and b belong to {b, c, a}, {a, b} &sub; {b, c, a}]</span></div>
        <div>• <b style="color: #FF8A65;">(ii) {a, e} &sub; {x : x is a vowel in English alphabet}:</b> <b style="color: #4CAF50;">True</b> &nbsp;<span class="reason">[Vowels are {a, e, i, o, u}]</span></div>
        <div>• <b style="color: #FF8A65;">(iii) {1, 2, 3} &sub; {1, 3, 5}:</b> <b style="color: #FF5252;">False</b> &nbsp;<span class="reason">[2 &isin; {1, 2, 3} but 2 &notin; {1, 3, 5}]</span></div>
        <div>• <b style="color: #FF8A65;">(iv) {a} &sub; {a, b, c}:</b> <b style="color: #4CAF50;">True</b> &nbsp;<span class="reason">['a' is an element of {a, b, c}]</span></div>
        <div>• <b style="color: #FF8A65;">(v) {a} &isin; {a, b, c}:</b> <b style="color: #FF5252;">False</b> &nbsp;<span class="reason">[{a} is a subset, not an element; a &isin; {a, b, c}]</span></div>
        <div>• <b style="color: #FF8A65;">(vi) {x : x is an even natural number less than 6} &sub; {x : x is a natural number which divides 36}:</b> <b style="color: #4CAF50;">True</b> &nbsp;<span class="reason">[LHS = {2, 4}; both 2 and 4 divide 36]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Let <b>A = {1, 2, {3, 4}, 5}</b>. Which of the following statements are incorrect and why?
    </div>
    <div class="sol-box">
      <div class="sol-title">Step-by-Step Analysis:</div>
      <div class="sol-step">
        <div>Note that the elements of set A are: <b>1</b>, <b>2</b>, the set <b>{3, 4}</b>, and <b>5</b>.</div>
        <div style="margin-top: 6px;">• <b style="color: #FF8A65;">(i) {3, 4} &sub; A:</b> <b style="color: #FF5252;">Incorrect</b>. {3, 4} is an element of A (i.e. {3, 4} &isin; A), not a subset. For it to be a subset, it must be written as {{3, 4}} &sub; A.</div>
        <div>• <b style="color: #FF8A65;">(ii) {3, 4} &isin; A:</b> <b style="color: #4CAF50;">Correct</b>. {3, 4} is indeed an element of A.</div>
        <div>• <b style="color: #FF8A65;">(iii) {{3, 4}} &sub; A:</b> <b style="color: #4CAF50;">Correct</b>. The set containing element {3, 4} is a subset of A.</div>
        <div>• <b style="color: #FF8A65;">(iv) 1 &isin; A:</b> <b style="color: #4CAF50;">Correct</b>. 1 is an element of A.</div>
        <div>• <b style="color: #FF8A65;">(v) 1 &sub; A:</b> <b style="color: #FF5252;">Incorrect</b>. 1 is an element, not a set. Subsets must be enclosed in braces: {1} &sub; A.</div>
        <div>• <b style="color: #FF8A65;">(vi) {1, 2, 5} &sub; A:</b> <b style="color: #4CAF50;">Correct</b>. Each of 1, 2, 5 is an element of A.</div>
        <div>• <b style="color: #FF8A65;">(vii) {1, 2, 5} &isin; A:</b> <b style="color: #FF5252;">Incorrect</b>. {1, 2, 5} is a subset of A, not an element.</div>
        <div>• <b style="color: #FF8A65;">(viii) {1, 2, 3} &sub; A:</b> <b style="color: #FF5252;">Incorrect</b>. 3 is not an individual element of A (it is locked inside {3, 4}).</div>
        <div>• <b style="color: #FF8A65;">(ix) &empty; &isin; A:</b> <b style="color: #FF5252;">Incorrect</b>. &empty; is not an element of A.</div>
        <div>• <b style="color: #FF8A65;">(x) &empty; &sub; A:</b> <b style="color: #4CAF50;">Correct</b>. The empty set &empty; is a subset of every set.</div>
        <div>• <b style="color: #FF8A65;">(xi) {&empty;} &sub; A:</b> <b style="color: #FF5252;">Incorrect</b>. &empty; &notin; A, so {&empty;} cannot be a subset of A.</div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Write down all the subsets of the following sets:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {a}:</b> Total subsets = 2<sup>1</sup> = 2. &rArr; <b>&empty;, {a}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) {a, b}:</b> Total subsets = 2<sup>2</sup> = 4. &rArr; <b>&empty;, {a}, {b}, {a, b}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) {1, 2, 3}:</b> Total subsets = 2<sup>3</sup> = 8. &rArr; <b>&empty;, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) &empty;:</b> Total subsets = 2<sup>0</sup> = 1. &rArr; <b>&empty;</b></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      How many elements has P(A), if A = &empty;?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; If A has m elements, n(P(A)) = 2<sup>m</sup>.</div>
        <div>&rArr; For A = &empty;, m = 0.</div>
        <div>&rArr; n(P(A)) = 2<sup>0</sup> = 1.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">P(A) has 1 element, which is P(∅) = {∅}.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Write the following as intervals:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {x : x &isin; ℝ, &minus;4 &lt; x &le; 6}:</b> &rArr; Open at &minus;4, closed at 6: &nbsp;<b style="color: #4CAF50;">(&minus;4, 6]</b></div>
        <div>• <b style="color: #FF8A65;">(ii) {x : x &isin; ℝ, &minus;12 &lt; x &lt; &minus;10}:</b> &rArr; Strictly open on both ends: &nbsp;<b style="color: #4CAF50;">(&minus;12, &minus;10)</b></div>
        <div>• <b style="color: #FF8A65;">(iii) {x : x &isin; ℝ, 0 &le; x &lt; 7}:</b> &rArr; Closed at 0, open at 7: &nbsp;<b style="color: #4CAF50;">[0, 7)</b></div>
        <div>• <b style="color: #FF8A65;">(iv) {x : x &isin; ℝ, 3 &le; x &le; 4}:</b> &rArr; Closed on both ends: &nbsp;<b style="color: #4CAF50;">[3, 4]</b></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Write the following intervals in set-builder form:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) (&minus;3, 0):</b> &rArr; <b style="color: #4CAF50;">{x : x &isin; ℝ, &minus;3 &lt; x &lt; 0}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) [6, 12]:</b> &rArr; <b style="color: #4CAF50;">{x : x &isin; ℝ, 6 &le; x &le; 12}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) (6, 12]:</b> &rArr; <b style="color: #4CAF50;">{x : x &isin; ℝ, 6 &lt; x &le; 12}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) [&minus;23, 5):</b> &rArr; <b style="color: #4CAF50;">{x : x &isin; ℝ, &minus;23 &le; x &lt; 5}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      What universal set(s) would you propose for each of the following?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) The set of right triangles:</b> The universal set U can be proposed as the <b>set of all triangles in a plane</b> (or the set of all polygons).</div>
        <div>• <b style="color: #FF8A65;">(ii) The set of isosceles triangles:</b> The universal set U can be proposed as the <b>set of all triangles in a plane</b>.</div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Given the sets <b>A = {1, 3, 5}</b>, <b>B = {2, 4, 6}</b> and <b>C = {0, 2, 4, 6, 8}</b>, which of the following may be considered as universal set(s) for all the three sets A, B and C?<br/>
      (i) {0, 1, 2, 3, 4, 5, 6}<br/>
      (ii) &empty;<br/>
      (iii) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}<br/>
      (iv) {1, 2, 3, 4, 5, 6, 7, 8}
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; A universal set U must satisfy: A &sub; U, B &sub; U, and C &sub; U.</div>
        <div>&rArr; Required combined elements = {0, 1, 2, 3, 4, 5, 6, 8}.</div>
        <div>• In (i): 8 &notin; {0, 1, 2, 3, 4, 5, 6} &rArr; Cannot be universal set.</div>
        <div>• In (ii): &empty; contains no elements.</div>
        <div>• In (iii): {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10} contains all elements of A, B, and C.</div>
        <div>• In (iv): 0 &notin; {1, 2, 3, 4, 5, 6, 7, 8}.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(iii) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

function getExercise1_4() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.4 &bull; Union, Intersection, Difference &amp; Disjoint Sets
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the union of each of the following pairs of sets:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) X = {1, 3, 5}, Y = {1, 2, 3}:</b></div>
        <div>&rArr; <b>X &cup; Y = {1, 2, 3, 5}</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(ii) A = {a, e, i, o, u}, B = {a, b, c}:</b></div>
        <div>&rArr; <b>A &cup; B = {a, b, c, e, i, o, u}</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(iii) A = {x : x is a natural number and multiple of 3}, B = {x : x is a natural number less than 6}:</b></div>
        <div>&rArr; A = {3, 6, 9, 12, ...} and B = {1, 2, 3, 4, 5}.</div>
        <div>&rArr; <b>A &cup; B = {1, 2, 4, 5, 3, 6, 9, 12, ...} = {x : x = 1, 2, 4, 5 or a multiple of 3}</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(iv) A = {x : x is a natural number and 1 &lt; x &le; 6}, B = {x : x is a natural number and 6 &lt; x &lt; 10}:</b></div>
        <div>&rArr; A = {2, 3, 4, 5, 6} and B = {7, 8, 9}.</div>
        <div>&rArr; <b>A &cup; B = {2, 3, 4, 5, 6, 7, 8, 9} = {x : x &isin; ℕ and 1 &lt; x &lt; 10}</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(v) A = {1, 2, 3}, B = &empty;:</b></div>
        <div>&rArr; <b>A &cup; B = {1, 2, 3} = A</b></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Let <b>A = {a, b}</b>, <b>B = {a, b, c}</b>. Is <b>A &sub; B</b>? What is <b>A &cup; B</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; Since every element of A ({a, b}) is also in B ({a, b, c}): <b>Yes, A &sub; B.</b></div>
        <div>&rArr; <b>A &cup; B = {a, b, c} = B.</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Yes, A ⊂ B and A ∪ B = B.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      If A and B are two sets such that <b>A &sub; B</b>, then what is <b>A &cup; B</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; If A &sub; B, every element of A is already contained in B.</div>
        <div>&rArr; Therefore, uniting A with B yields no new elements beyond B.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A ∪ B = B</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If <b>A = {1, 2, 3, 4}</b>, <b>B = {3, 4, 5, 6}</b>, <b>C = {5, 6, 7, 8}</b> and <b>D = {7, 8, 9, 10}</b>; find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A &cup; B:</b> &rArr; <b>{1, 2, 3, 4, 5, 6}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) A &cup; C:</b> &rArr; <b>{1, 2, 3, 4, 5, 6, 7, 8}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) B &cup; C:</b> &rArr; <b>{3, 4, 5, 6, 7, 8}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) B &cup; D:</b> &rArr; <b>{3, 4, 5, 6, 7, 8, 9, 10}</b></div>
        <div>• <b style="color: #FF8A65;">(v) A &cup; B &cup; C:</b> &rArr; <b>{1, 2, 3, 4, 5, 6, 7, 8}</b></div>
        <div>• <b style="color: #FF8A65;">(vi) A &cup; B &cup; D:</b> &rArr; <b>{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</b></div>
        <div>• <b style="color: #FF8A65;">(vii) B &cup; C &cup; D:</b> &rArr; <b>{3, 4, 5, 6, 7, 8, 9, 10}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the intersection of each pair of sets of Question 1 above:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) X = {1, 3, 5}, Y = {1, 2, 3}:</b> &rArr; <b>X &cap; Y = {1, 3}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) A = {a, e, i, o, u}, B = {a, b, c}:</b> &rArr; <b>A &cap; B = {a}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) A = {3, 6, 9, ...}, B = {1, 2, 3, 4, 5}:</b> &rArr; <b>A &cap; B = {3}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) A = {2, 3, 4, 5, 6}, B = {7, 8, 9}:</b> &rArr; <b>A &cap; B = &empty;</b></div>
        <div>• <b style="color: #FF8A65;">(v) A = {1, 2, 3}, B = &empty;:</b> &rArr; <b>A &cap; B = &empty;</b></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      If <b>A = {3, 5, 7, 9, 11}</b>, <b>B = {7, 9, 11, 13}</b>, <b>C = {11, 13, 15}</b> and <b>D = {15, 17}</b>; find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A &cap; B:</b> &rArr; <b>{7, 9, 11}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) B &cap; C:</b> &rArr; <b>{11, 13}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) A &cap; C &cap; D:</b> (A &cap; C) &cap; D = {11} &cap; {15, 17} = <b>&empty;</b></div>
        <div>• <b style="color: #FF8A65;">(iv) A &cap; C:</b> &rArr; <b>{11}</b></div>
        <div>• <b style="color: #FF8A65;">(v) B &cap; D:</b> &rArr; <b>&empty;</b></div>
        <div>• <b style="color: #FF8A65;">(vi) A &cap; (B &cup; C):</b> B &cup; C = {7, 9, 11, 13, 15}. &rArr; A &cap; (B &cup; C) = <b>{7, 9, 11}</b></div>
        <div>• <b style="color: #FF8A65;">(vii) A &cap; D:</b> &rArr; <b>&empty;</b></div>
        <div>• <b style="color: #FF8A65;">(viii) A &cap; (B &cup; D):</b> B &cup; D = {7, 9, 11, 13, 15, 17}. &rArr; A &cap; (B &cup; D) = <b>{7, 9, 11}</b></div>
        <div>• <b style="color: #FF8A65;">(ix) (A &cap; B) &cap; (B &cup; C):</b> {7, 9, 11} &cap; {7, 9, 11, 13, 15} = <b>{7, 9, 11}</b></div>
        <div>• <b style="color: #FF8A65;">(x) (A &cup; D) &cap; (B &cup; C):</b> {3, 5, 7, 9, 11, 15, 17} &cap; {7, 9, 11, 13, 15} = <b>{7, 9, 11, 15}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      If <b>A = {x : x is a natural number}</b>, <b>B = {x : x is an even natural number}</b>,<br/>
      <b>C = {x : x is an odd natural number}</b> and <b>D = {x : x is a prime number}</b>, find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A &cap; B:</b> Natural numbers &cap; Even natural numbers = <b>B = {x : x is an even natural number}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) A &cap; C:</b> Natural numbers &cap; Odd natural numbers = <b>C = {x : x is an odd natural number}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) A &cap; D:</b> Natural numbers &cap; Prime numbers = <b>D = {x : x is a prime number}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) B &cap; C:</b> Even naturals &cap; Odd naturals = <b>&empty;</b> &nbsp;<span class="reason">[No natural number is both even and odd]</span></div>
        <div>• <b style="color: #FF8A65;">(v) B &cap; D:</b> Even naturals &cap; Prime numbers = <b>{2}</b> &nbsp;<span class="reason">[2 is the only even prime]</span></div>
        <div>• <b style="color: #FF8A65;">(vi) C &cap; D:</b> Odd naturals &cap; Prime numbers = <b>{x : x is an odd prime number}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Which of the following pairs of sets are disjoint?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {1, 2, 3, 4} and {x : x &isin; ℕ and 4 &le; x &le; 6}:</b></div>
        <div>&rArr; Second set = {4, 5, 6}. Intersection = {1, 2, 3, 4} &cap; {4, 5, 6} = {4} &ne; &empty;. &rArr; <b style="color: #FF5252;">NOT Disjoint</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(ii) {a, e, i, o, u} and {c, d, e, f}:</b></div>
        <div>&rArr; Intersection = {e} &ne; &empty;. &rArr; <b style="color: #FF5252;">NOT Disjoint</b></div>
        <div style="margin-top: 8px;">• <b style="color: #FF8A65;">(iii) {x : x is an even integer} and {x : x is an odd integer}:</b></div>
        <div>&rArr; An integer cannot be both even and odd simultaneously. Intersection = &empty;. &rArr; <b style="color: #4CAF50;">DISJOINT SETS</b></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      If <b>A = {3, 6, 9, 12, 15, 18, 21}</b>, <b>B = {4, 8, 12, 16, 20}</b>,<br/>
      <b>C = {2, 4, 6, 8, 10, 12, 14, 16}</b>, <b>D = {5, 10, 15, 20}</b>; find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions (Set Differences):</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A &minus; B:</b> Remove multiples of 4 from A &rArr; <b>{3, 6, 9, 15, 18, 21}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) A &minus; C:</b> Remove elements of C from A &rArr; <b>{3, 9, 15, 18, 21}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) A &minus; D:</b> Remove 15 from A &rArr; <b>{3, 6, 9, 12, 18, 21}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) B &minus; A:</b> Remove 12 from B &rArr; <b>{4, 8, 16, 20}</b></div>
        <div>• <b style="color: #FF8A65;">(v) C &minus; A:</b> Remove 6, 12 from C &rArr; <b>{2, 4, 8, 10, 14, 16}</b></div>
        <div>• <b style="color: #FF8A65;">(vi) D &minus; A:</b> Remove 15 from D &rArr; <b>{5, 10, 20}</b></div>
        <div>• <b style="color: #FF8A65;">(vii) B &minus; C:</b> Remove 4, 8, 12, 16 from B &rArr; <b>{20}</b></div>
        <div>• <b style="color: #FF8A65;">(viii) B &minus; D:</b> Remove 20 from B &rArr; <b>{4, 8, 12, 16}</b></div>
        <div>• <b style="color: #FF8A65;">(ix) C &minus; B:</b> Remove 4, 8, 12, 16 from C &rArr; <b>{2, 6, 10, 14}</b></div>
        <div>• <b style="color: #FF8A65;">(x) D &minus; B:</b> Remove 20 from D &rArr; <b>{5, 10, 15}</b></div>
        <div>• <b style="color: #FF8A65;">(xi) C &minus; D:</b> Remove 10 from C &rArr; <b>{2, 4, 6, 8, 12, 14, 16}</b></div>
        <div>• <b style="color: #FF8A65;">(xii) D &minus; C:</b> Remove 10 from D &rArr; <b>{5, 15, 20}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      If <b>X = {a, b, c, d}</b> and <b>Y = {f, b, d, g}</b>, find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) X &minus; Y:</b> Elements in X but not in Y &rArr; <b>{a, c}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) Y &minus; X:</b> Elements in Y but not in X &rArr; <b>{f, g}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) X &cap; Y:</b> Common elements &rArr; <b>{b, d}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      If ℝ is the set of real numbers and ℚ is the set of rational numbers, then what is <b>ℝ &minus; ℚ</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; Real numbers ℝ consist entirely of rational numbers ℚ and irrational numbers.</div>
        <div>&rArr; Removing all rational numbers from ℝ leaves only irrational numbers.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">ℝ − ℚ is the set of all irrational numbers (T).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      State whether each of the following statement is true or false. Justify your answer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {2, 3, 4, 5} and {3, 6} are disjoint sets:</b> <b style="color: #FF5252;">False</b> &nbsp;<span class="reason">[{2, 3, 4, 5} &cap; {3, 6} = {3} &ne; &empty;]</span></div>
        <div>• <b style="color: #FF8A65;">(ii) {a, e, i, o, u} and {a, b, c, d} are disjoint sets:</b> <b style="color: #FF5252;">False</b> &nbsp;<span class="reason">[Intersection is {a} &ne; &empty;]</span></div>
        <div>• <b style="color: #FF8A65;">(iii) {2, 6, 10, 14} and {3, 7, 11, 15} are disjoint sets:</b> <b style="color: #4CAF50;">True</b> &nbsp;<span class="reason">[They share no common elements; intersection = &empty;]</span></div>
        <div>• <b style="color: #FF8A65;">(iv) {2, 6, 10} and {3, 7, 11} are disjoint sets:</b> <b style="color: #4CAF50;">True</b> &nbsp;<span class="reason">[Intersection = &empty;]</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise1_3,
  getExercise1_4
};
