const { styleBlock, themeColor } = require('./ch2_common');

function getExercise2_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #00C6FF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #00C6FF;">
      📘 Exercise 2.1 &bull; Cartesian Product of Sets &amp; Ordered Pairs
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      If (<span class="frac"><span class="num">x</span><span class="den">3</span></span> + 1, &nbsp;<i>y</i> &minus; <span class="frac"><span class="num">2</span><span class="den">3</span></span>) = (<span class="frac"><span class="num">5</span><span class="den">3</span></span>, &nbsp;<span class="frac"><span class="num">1</span><span class="den">3</span></span>), find the values of <i>x</i> and <i>y</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given equality of ordered pairs:</div>
        <div>&rArr; Two ordered pairs (a, b) and (c, d) are equal if and only if their corresponding coordinates are equal: <b>a = c</b> and <b>b = d</b>.</div>
        <div style="margin-top: 10px;"><b>1. Equating first coordinates:</b></div>
        <div>&rArr; <span class="frac"><span class="num">x</span><span class="den">3</span></span> + 1 = <span class="frac"><span class="num">5</span><span class="den">3</span></span></div>
        <div>&rArr; <span class="frac"><span class="num">x</span><span class="den">3</span></span> = <span class="frac"><span class="num">5</span><span class="den">3</span></span> &minus; 1 = <span class="frac"><span class="num">5 &minus; 3</span><span class="den">3</span></span> = <span class="frac"><span class="num">2</span><span class="den">3</span></span></div>
        <div>&rArr; <b>x = 2</b></div>
        <div style="margin-top: 10px;"><b>2. Equating second coordinates:</b></div>
        <div>&rArr; y &minus; <span class="frac"><span class="num">2</span><span class="den">3</span></span> = <span class="frac"><span class="num">1</span><span class="den">3</span></span></div>
        <div>&rArr; y = <span class="frac"><span class="num">1</span><span class="den">3</span></span> + <span class="frac"><span class="num">2</span><span class="den">3</span></span> = <span class="frac"><span class="num">3</span><span class="den">3</span></span> = 1</div>
        <div>&rArr; <b>y = 1</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = 2 &nbsp;and&nbsp; y = 1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      If set A has 3 elements and set B = {3, 4, 5}, then find the number of elements in (A &times; B).
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>&rArr; Number of elements in set A, <b>n(A) = 3</b>.</div>
        <div>&rArr; Set B = {3, 4, 5} &rArr; Number of elements in set B, <b>n(B) = 3</b>.</div>
        <div>By Cartesian Product Cardinality Theorem:</div>
        <div>&rArr; <b>n(A &times; B) = n(A) &times; n(B)</b></div>
        <div>&rArr; n(A &times; B) = 3 &times; 3 = <b>9</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">n(A × B) = 9 elements.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      If <b>G = {7, 8}</b> and <b>H = {5, 4, 2}</b>, find <b>G &times; H</b> and <b>H &times; G</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Cartesian product: <b>P &times; Q = {(p, q) : p &isin; P, q &isin; Q}</b>.</div>
        <div style="margin-top: 8px;"><b>1. Finding G &times; H:</b></div>
        <div>&rArr; First elements from G = {7, 8}, second elements from H = {5, 4, 2}:</div>
        <div>&rArr; <b>G &times; H = {(7, 5), (7, 4), (7, 2), (8, 5), (8, 4), (8, 2)}</b></div>
        <div style="margin-top: 10px;"><b>2. Finding H &times; G:</b></div>
        <div>&rArr; First elements from H = {5, 4, 2}, second elements from G = {7, 8}:</div>
        <div>&rArr; <b>H &times; G = {(5, 7), (5, 8), (4, 7), (4, 8), (2, 7), (2, 8)}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">G × H and H × G are non-commutative (G × H ≠ H × G).</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      State whether each of the following statements is true or false. If the statement is false, rewrite the given statement correctly.
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(0, 198, 255, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #00C6FF;">(i)</b> If P = {m, n} and Q = {n, m}, then P &times; Q = {(m, n), (n, m)}.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #FF5252;">False</b>.</div>
          <div>Since n(P) = 2 and n(Q) = 2, n(P &times; Q) must be 2 &times; 2 = 4 elements.</div>
          <div>&rArr; <b>Correct Statement:</b> P &times; Q = {(m, n), (m, m), (n, n), (n, m)}.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False. P × Q = {(m, n), (m, m), (n, n), (n, m)}</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(0, 198, 255, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #00C6FF;">(ii)</b> If A and B are non-empty sets, then A &times; B is a non-empty set of ordered pairs (x, y) such that x &isin; A and y &isin; B.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #4CAF50;">True</b>. This is the exact formal definition of the Cartesian product.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">True</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(0, 198, 255, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #00C6FF;">(iii)</b> If A = {1, 2}, B = {3, 4}, then A &times; (B &cap; &empty;) = &empty;.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #4CAF50;">True</b>.</div>
          <div>Since B &cap; &empty; = &empty;, we have A &times; &empty; = &empty;.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">True</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      If <b>A = {&minus;1, 1}</b>, find <b>A &times; A &times; A</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The Cartesian product A &times; A &times; A is the set of ordered triplets:</div>
        <div>&rArr; A &times; A &times; A = {(a, b, c) : a, b, c &isin; A}</div>
        <div>Total elements = 2 &times; 2 &times; 2 = 2<sup>3</sup> = 8.</div>
        <div style="margin-top: 8px;">First find A &times; A:</div>
        <div>&rArr; A &times; A = {(&minus;1, &minus;1), (&minus;1, 1), (1, &minus;1), (1, 1)}</div>
        <div style="margin-top: 8px;">Now combine each pair with elements of A = {&minus;1, 1}:</div>
        <div>&rArr; <b>A &times; A &times; A = {<br/>
          &nbsp;&nbsp;(&minus;1, &minus;1, &minus;1), (&minus;1, &minus;1, 1), (&minus;1, 1, &minus;1), (&minus;1, 1, 1),<br/>
          &nbsp;&nbsp;(1, &minus;1, &minus;1), (1, &minus;1, 1), (1, 1, &minus;1), (1, 1, 1)<br/>
        }</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">8 ordered triplets as listed above.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      If <b>A &times; B = {(a, x), (a, y), (b, x), (b, y)}</b>. Find A and B.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>By definition of Cartesian product:</div>
        <div>&rArr; Set A consists of all the first coordinates of the ordered pairs:</div>
        <div>&rArr; <b>A = {a, b}</b></div>
        <div>&rArr; Set B consists of all the second coordinates of the ordered pairs:</div>
        <div>&rArr; <b>B = {x, y}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {a, b} &nbsp;and&nbsp; B = {x, y}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Let <b>A = {1, 2}</b>, <b>B = {1, 2, 3, 4}</b>, <b>C = {5, 6}</b> and <b>D = {5, 6, 7, 8}</b>. Verify that:<br/>
      <b>(i) A &times; (B &cap; C) = (A &times; B) &cap; (A &times; C)</b><br/>
      <b>(ii) A &times; C is a subset of B &times; D</b>
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(0, 198, 255, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #00C6FF;">(i) Verification: A &times; (B &cap; C) = (A &times; B) &cap; (A &times; C)</b></div>
      <div class="sol-box">
        <div class="sol-step">
          <div>&rArr; B &cap; C = {1, 2, 3, 4} &cap; {5, 6} = &empty;.</div>
          <div>&rArr; <b>LHS = A &times; (B &cap; C) = A &times; &empty; = &empty;</b>.</div>
          <div style="margin-top: 8px;">Now find RHS:</div>
          <div>&rArr; A &times; B = {(1, 1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 2), (2, 3), (2, 4)}</div>
          <div>&rArr; A &times; C = {(1, 5), (1, 6), (2, 5), (2, 6)}</div>
          <div>&rArr; <b>RHS = (A &times; B) &cap; (A &times; C) = &empty;</b> &nbsp;<span class="reason">[No pairs in common]</span></div>
          <div>&rArr; LHS = RHS = &empty;. Hence Verified.</div>
          <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">(i) Verified: A × (B ∩ C) = (A × B) ∩ (A × C) = ∅</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(0, 198, 255, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #00C6FF;">(ii) Verification: A &times; C is a subset of B &times; D</b></div>
      <div class="sol-box">
        <div class="sol-step">
          <div>&rArr; A &times; C = {(1, 5), (1, 6), (2, 5), (2, 6)}.</div>
          <div>&rArr; B &times; D = {<br/>
            &nbsp;&nbsp;(1, 5), (1, 6), (1, 7), (1, 8),<br/>
            &nbsp;&nbsp;(2, 5), (2, 6), (2, 7), (2, 8),<br/>
            &nbsp;&nbsp;(3, 5), (3, 6), (3, 7), (3, 8),<br/>
            &nbsp;&nbsp;(4, 5), (4, 6), (4, 7), (4, 8)<br/>
          }.</div>
          <div>&rArr; Every element of A &times; C ((1, 5), (1, 6), (2, 5), (2, 6)) is clearly present in B &times; D.</div>
          <div>&rArr; Therefore, <b>A &times; C &sub; B &times; D</b>.</div>
          <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">(ii) Verified: A × C ⊂ B × D</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Let <b>A = {1, 2}</b> and <b>B = {3, 4}</b>. Write A &times; B. How many subsets will A &times; B have? List them.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div><b>1. Writing A &times; B:</b></div>
        <div>&rArr; <b>A &times; B = {(1, 3), (1, 4), (2, 3), (2, 4)}</b></div>
        <div>&rArr; n(A &times; B) = 4 elements.</div>
        <div style="margin-top: 8px;"><b>2. Number of subsets:</b></div>
        <div>&rArr; Total subsets = 2<sup>4</sup> = <b>16 subsets</b>.</div>
        <div style="margin-top: 8px;"><b>3. Listing all 16 subsets:</b></div>
        <div>• <b>Empty set (1):</b> &empty;</div>
        <div>• <b>Singletons (4):</b> { (1, 3) }, { (1, 4) }, { (2, 3) }, { (2, 4) }</div>
        <div>• <b>2-element subsets (6):</b><br/>
          &nbsp;&nbsp;{ (1, 3), (1, 4) }, { (1, 3), (2, 3) }, { (1, 3), (2, 4) },<br/>
          &nbsp;&nbsp;{ (1, 4), (2, 3) }, { (1, 4), (2, 4) }, { (2, 3), (2, 4) }
        </div>
        <div>• <b>3-element subsets (4):</b><br/>
          &nbsp;&nbsp;{ (1, 3), (1, 4), (2, 3) }, { (1, 3), (1, 4), (2, 4) },<br/>
          &nbsp;&nbsp;{ (1, 3), (2, 3), (2, 4) }, { (1, 4), (2, 3), (2, 4) }
        </div>
        <div>• <b>4-element subset (1):</b> { (1, 3), (1, 4), (2, 3), (2, 4) }</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Total 16 subsets listed above.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Let A and B be two sets such that <b>n(A) = 3</b> and <b>n(B) = 2</b>. If <b>(x, 1), (y, 2), (z, 1)</b> are in A &times; B, find A and B, where x, y and z are distinct elements.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given that (x, 1), (y, 2), (z, 1) &isin; A &times; B:</div>
        <div>&rArr; The first elements belong to set A: x, y, z &isin; A.</div>
        <div>&rArr; Since n(A) = 3 and x, y, z are distinct: <b>A = {x, y, z}</b>.</div>
        <div>&rArr; The second elements belong to set B: 1, 2 &isin; B.</div>
        <div>&rArr; Since n(B) = 2: <b>B = {1, 2}</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {x, y, z} &nbsp;and&nbsp; B = {1, 2}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      The Cartesian product A &times; A has 9 elements among which are found <b>(&minus;1, 0)</b> and <b>(0, 1)</b>. Find the set A and the remaining elements of A &times; A.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>&rArr; n(A &times; A) = 9 &rArr; [n(A)]<sup>2</sup> = 9 &rArr; <b>n(A) = 3</b>.</div>
        <div>Given pairs (&minus;1, 0) and (0, 1) &isin; A &times; A:</div>
        <div>&rArr; All components must belong to A: &minus;1 &isin; A, 0 &isin; A, 1 &isin; A.</div>
        <div>&rArr; Since n(A) = 3: <b>A = {&minus;1, 0, 1}</b>.</div>
        <div style="margin-top: 8px;">The full Cartesian product A &times; A has 9 elements:</div>
        <div>&rArr; A &times; A = {(&minus;1, &minus;1), (&minus;1, 0), (&minus;1, 1), (0, &minus;1), (0, 0), (0, 1), (1, &minus;1), (1, 0), (1, 1)}.</div>
        <div>Excluding the given pairs (&minus;1, 0) and (0, 1), the remaining 7 elements are:</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {−1, 0, 1}. Remaining elements: (−1, −1), (−1, 1), (0, −1), (0, 0), (1, −1), (1, 0), (1, 1)</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise2_1
};
