const { styleBlock, themeColor } = require('./ch2_common');

function getExercise2_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #00C6FF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #00C6FF;">
      📘 Exercise 2.2 &bull; Relations, Domain, Codomain &amp; Range
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Let A = {1, 2, 3, &hellip; , 14}. Define a relation R from A to A by:<br/>
      <b>R = { (<i>x</i>, <i>y</i>) : 3<i>x</i> &minus; <i>y</i> = 0, where <i>x</i>, <i>y</i> &isin; A }</b>.<br/>
      Write down its domain, codomain and range.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given set A = {1, 2, 3, &hellip; , 14} and relation rule:</div>
        <div>&rArr; 3<i>x</i> &minus; <i>y</i> = 0 &nbsp;&rArr;&nbsp; <b><i>y</i> = 3<i>x</i></b>, where both <i>x</i>, <i>y</i> &isin; A.</div>
        <div style="margin-top: 6px;">Finding the ordered pairs by substituting values of <i>x</i> &isin; A:</div>
        <div>• For <i>x</i> = 1 &rArr; <i>y</i> = 3(1) = 3 &isin; A &rArr; (1, 3)</div>
        <div>• For <i>x</i> = 2 &rArr; <i>y</i> = 3(2) = 6 &isin; A &rArr; (2, 6)</div>
        <div>• For <i>x</i> = 3 &rArr; <i>y</i> = 3(3) = 9 &isin; A &rArr; (3, 9)</div>
        <div>• For <i>x</i> = 4 &rArr; <i>y</i> = 3(4) = 12 &isin; A &rArr; (4, 12)</div>
        <div>• For <i>x</i> = 5 &rArr; <i>y</i> = 3(5) = 15 &notin; A <span class="reason">(since 15 exceeds 14)</span></div>
        <div style="margin-top: 8px;">Therefore, the relation in roster form is:</div>
        <div>&rArr; <b>R = { (1, 3), (2, 6), (3, 9), (4, 12) }</b></div>
        <div style="margin-top: 10px;"><b>1. Domain:</b> The set of all first elements in the ordered pairs:</div>
        <div>&rArr; <b>Domain(R) = {1, 2, 3, 4}</b></div>
        <div style="margin-top: 6px;"><b>2. Codomain:</b> The entire destination set A:</div>
        <div>&rArr; <b>Codomain(R) = A = {1, 2, 3, &hellip; , 14}</b></div>
        <div style="margin-top: 6px;"><b>3. Range:</b> The set of all second elements in the ordered pairs:</div>
        <div>&rArr; <b>Range(R) = {3, 6, 9, 12}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain = {1, 2, 3, 4}, &nbsp; Codomain = {1, 2, &hellip;, 14}, &nbsp; Range = {3, 6, 9, 12}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Define a relation R on the set <b>&naturals;</b> of natural numbers by:<br/>
      <b>R = { (<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> + 5, <i>x</i> is a natural number less than 4; <i>x</i>, <i>y</i> &isin; &naturals; }</b>.<br/>
      Depict this relationship using roster form. Write down the domain and the range.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given relation condition:</div>
        <div>&rArr; <i>y</i> = <i>x</i> + 5, where <i>x</i> &isin; &naturals; and <i>x</i> &lt; 4.</div>
        <div>&rArr; The natural numbers strictly less than 4 are: <b><i>x</i> &isin; {1, 2, 3}</b>.</div>
        <div style="margin-top: 6px;">Evaluating <i>y</i> for each allowable value of <i>x</i>:</div>
        <div>• For <i>x</i> = 1 &rArr; <i>y</i> = 1 + 5 = 6 &isin; &naturals; &rArr; (1, 6)</div>
        <div>• For <i>x</i> = 2 &rArr; <i>y</i> = 2 + 5 = 7 &isin; &naturals; &rArr; (2, 7)</div>
        <div>• For <i>x</i> = 3 &rArr; <i>y</i> = 3 + 5 = 8 &isin; &naturals; &rArr; (3, 8)</div>
        <div style="margin-top: 8px;"><b>(i) Roster Form:</b></div>
        <div>&rArr; <b>R = { (1, 6), (2, 7), (3, 8) }</b></div>
        <div style="margin-top: 8px;"><b>(ii) Domain:</b> Set of all first components:</div>
        <div>&rArr; <b>Domain(R) = {1, 2, 3}</b></div>
        <div style="margin-top: 8px;"><b>(iii) Range:</b> Set of all second components:</div>
        <div>&rArr; <b>Range(R) = {6, 7, 8}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Roster: {(1, 6), (2, 7), (3, 8)}; &nbsp; Domain: {1, 2, 3}; &nbsp; Range: {6, 7, 8}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      A = {1, 2, 3, 5} and B = {4, 6, 9}. Define a relation R from A to B by:<br/>
      <b>R = { (<i>x</i>, <i>y</i>) : the difference between <i>x</i> and <i>y</i> is odd; <i>x</i> &isin; A, <i>y</i> &isin; B }</b>.<br/>
      Write R in roster form.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given sets A = {1, 2, 3, 5} and B = {4, 6, 9}.</div>
        <div>&rArr; The difference between two integers <i>x</i> and <i>y</i> is odd if and only if one is <b>even</b> and the other is <b>odd</b>.</div>
        <div style="margin-top: 6px;">Testing all possible pairs (<i>x</i>, <i>y</i>) with <i>x</i> &isin; A and <i>y</i> &isin; B:</div>
        <div>• For <i>x</i> = 1 (odd):</div>
        <div>&nbsp;&nbsp;&bull; 1 &minus; 4 = &minus;3 (odd) &rArr; <b>(1, 4) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 1 &minus; 6 = &minus;5 (odd) &rArr; <b>(1, 6) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 1 &minus; 9 = &minus;8 (even) &rArr; (1, 9) &notin; R</div>
        <div>• For <i>x</i> = 2 (even):</div>
        <div>&nbsp;&nbsp;&bull; 2 &minus; 4 = &minus;2 (even) &rArr; (2, 4) &notin; R</div>
        <div>&nbsp;&nbsp;&bull; 2 &minus; 6 = &minus;4 (even) &rArr; (2, 6) &notin; R</div>
        <div>&nbsp;&nbsp;&bull; 2 &minus; 9 = &minus;7 (odd) &rArr; <b>(2, 9) &isin; R</b></div>
        <div>• For <i>x</i> = 3 (odd):</div>
        <div>&nbsp;&nbsp;&bull; 3 &minus; 4 = &minus;1 (odd) &rArr; <b>(3, 4) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 3 &minus; 6 = &minus;3 (odd) &rArr; <b>(3, 6) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 3 &minus; 9 = &minus;6 (even) &rArr; (3, 9) &notin; R</div>
        <div>• For <i>x</i> = 5 (odd):</div>
        <div>&nbsp;&nbsp;&bull; 5 &minus; 4 = 1 (odd) &rArr; <b>(5, 4) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 5 &minus; 6 = &minus;1 (odd) &rArr; <b>(5, 6) &isin; R</b></div>
        <div>&nbsp;&nbsp;&bull; 5 &minus; 9 = &minus;4 (even) &rArr; (5, 9) &notin; R</div>
        <div style="margin-top: 10px;">Collecting all valid pairs:</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">R = { (1, 4), (1, 6), (2, 9), (3, 4), (3, 6), (5, 4), (5, 6) }</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      The figure shows a relationship between the sets P and Q. Write this relation:<br/>
      <b>(i)</b> in set-builder form &nbsp;&nbsp;&nbsp;&nbsp; <b>(ii)</b> in roster form.<br/>
      What is its domain and range?
    </div>

    <!-- Clean Standalone Arrow Diagram SVG (White BG, No Redundant Top Title) -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#0072FF" />
          </marker>
        </defs>
        <!-- Background -->
        <rect width="380" height="200" fill="#FFFFFF" rx="8" />
        
        <!-- Oval P -->
        <ellipse cx="90" cy="105" rx="50" ry="75" fill="#E1F5FE" stroke="#00C6FF" stroke-width="2.5" />
        <text x="90" y="24" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold" fill="#0277BD" text-anchor="middle">Set P</text>

        <!-- Points in P -->
        <circle cx="80" cy="65" r="4" fill="#01579B" />
        <text x="96" y="70" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#01579B">5</text>

        <circle cx="80" cy="105" r="4" fill="#01579B" />
        <text x="96" y="110" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#01579B">6</text>

        <circle cx="80" cy="145" r="4" fill="#01579B" />
        <text x="96" y="150" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#01579B">7</text>

        <!-- Oval Q -->
        <ellipse cx="290" cy="105" rx="50" ry="75" fill="#E0F7FA" stroke="#00B4D8" stroke-width="2.5" />
        <text x="290" y="24" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold" fill="#00838F" text-anchor="middle">Set Q</text>

        <!-- Points in Q -->
        <circle cx="275" cy="65" r="4" fill="#006064" />
        <text x="292" y="70" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#006064">3</text>

        <circle cx="275" cy="105" r="4" fill="#006064" />
        <text x="292" y="110" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#006064">4</text>

        <circle cx="275" cy="145" r="4" fill="#006064" />
        <text x="292" y="150" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#006064">5</text>

        <!-- Directed Arrows -->
        <line x1="110" y1="65" x2="262" y2="65" stroke="#0072FF" stroke-width="2" marker-end="url(#arrow)" />
        <line x1="110" y1="105" x2="262" y2="105" stroke="#0072FF" stroke-width="2" marker-end="url(#arrow)" />
        <line x1="110" y1="145" x2="262" y2="145" stroke="#0072FF" stroke-width="2" marker-end="url(#arrow)" />
      </svg>
      <div class="diagram-caption">💡 Mapping Diagram: Elements of P connect to (x &minus; 2) in Q</div>
    </div>

    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>From the arrow diagram:</div>
        <div>&rArr; Set P = {5, 6, 7} and Set Q = {3, 4, 5}.</div>
        <div>Notice that: 5 &minus; 3 = 2, &nbsp; 6 &minus; 4 = 2, &nbsp; 7 &minus; 5 = 2.</div>
        <div>&rArr; Each element <i>y</i> &isin; Q is 2 less than its corresponding element <i>x</i> &isin; P: <b><i>y</i> = <i>x</i> &minus; 2</b>.</div>
        <div style="margin-top: 10px;"><b>(i) Set-builder form:</b></div>
        <div>&rArr; <b>R = { (<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> &minus; 2, where <i>x</i> &isin; P, <i>y</i> &isin; Q }</b></div>
        <div style="font-size: 13.5px; color: #94A3B8;">&nbsp;&nbsp;&nbsp;&nbsp;[Alternatively: R = { (<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> &minus; 2 for <i>x</i> = 5, 6, 7 }]</div>
        <div style="margin-top: 10px;"><b>(ii) Roster form:</b></div>
        <div>&rArr; <b>R = { (5, 3), (6, 4), (7, 5) }</b></div>
        <div style="margin-top: 10px;"><b>(iii) Domain and Range:</b></div>
        <div>&rArr; <b>Domain(R) = {5, 6, 7}</b> <span class="reason">(Set of first elements)</span></div>
        <div>&rArr; <b>Range(R) = {3, 4, 5}</b> <span class="reason">(Set of second elements)</span></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) R = {(x, y) : y = x − 2, x ∈ P}; (ii) R = {(5, 3), (6, 4), (7, 5)}; Domain = {5, 6, 7}; Range = {3, 4, 5}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Let A = {1, 2, 3, 4, 6}. Let R be the relation on A defined by:<br/>
      <b>{ (<i>a</i>, <i>b</i>) : <i>a</i>, <i>b</i> &isin; A, <i>b</i> is exactly divisible by <i>a</i> }</b>.<br/>
      <b>(i)</b> Write R in roster form<br/>
      <b>(ii)</b> Find the domain of R<br/>
      <b>(iii)</b> Find the range of R
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given set A = {1, 2, 3, 4, 6} and condition: <b><i>b</i> is exactly divisible by <i>a</i></b> (meaning <span class="frac"><span class="num">b</span><span class="den">a</span></span> is an integer).</div>
        <div style="margin-top: 6px;">Finding valid pairs (<i>a</i>, <i>b</i>) for each <i>a</i> &isin; A:</div>
        <div>• For <i>a</i> = 1: 1 divides every number in A &rArr; (1, 1), (1, 2), (1, 3), (1, 4), (1, 6)</div>
        <div>• For <i>a</i> = 2: 2 divides 2, 4, 6 &rArr; (2, 2), (2, 4), (2, 6)</div>
        <div>• For <i>a</i> = 3: 3 divides 3, 6 &rArr; (3, 3), (3, 6)</div>
        <div>• For <i>a</i> = 4: 4 divides 4 &rArr; (4, 4)</div>
        <div>• For <i>a</i> = 6: 6 divides 6 &rArr; (6, 6)</div>
        <div style="margin-top: 10px;"><b>(i) Roster form:</b></div>
        <div>&rArr; <b>R = { (1, 1), (1, 2), (1, 3), (1, 4), (1, 6), (2, 2), (2, 4), (2, 6), (3, 3), (3, 6), (4, 4), (6, 6) }</b></div>
        <div style="margin-top: 8px;"><b>(ii) Domain of R:</b> Set of all first components:</div>
        <div>&rArr; <b>Domain(R) = {1, 2, 3, 4, 6} = A</b></div>
        <div style="margin-top: 8px;"><b>(iii) Range of R:</b> Set of all second components:</div>
        <div>&rArr; <b>Range(R) = {1, 2, 3, 4, 6} = A</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain(R) = {1, 2, 3, 4, 6}, &nbsp; Range(R) = {1, 2, 3, 4, 6}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Determine the domain and range of the relation R defined by:<br/>
      <b>R = { (<i>x</i>, <i>x</i> + 5) : <i>x</i> &isin; {0, 1, 2, 3, 4, 5} }</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given relation rule: (<i>x</i>, <i>x</i> + 5) for <i>x</i> &isin; {0, 1, 2, 3, 4, 5}.</div>
        <div style="margin-top: 6px;">Computing the second element for each value of <i>x</i>:</div>
        <div>• For <i>x</i> = 0 &rArr; <i>y</i> = 0 + 5 = 5 &rArr; (0, 5)</div>
        <div>• For <i>x</i> = 1 &rArr; <i>y</i> = 1 + 5 = 6 &rArr; (1, 6)</div>
        <div>• For <i>x</i> = 2 &rArr; <i>y</i> = 2 + 5 = 7 &rArr; (2, 7)</div>
        <div>• For <i>x</i> = 3 &rArr; <i>y</i> = 3 + 5 = 8 &rArr; (3, 8)</div>
        <div>• For <i>x</i> = 4 &rArr; <i>y</i> = 4 + 5 = 9 &rArr; (4, 9)</div>
        <div>• For <i>x</i> = 5 &rArr; <i>y</i> = 5 + 5 = 10 &rArr; (5, 10)</div>
        <div style="margin-top: 8px;">Hence, in roster form:</div>
        <div>&rArr; R = { (0, 5), (1, 6), (2, 7), (3, 8), (4, 9), (5, 10) }</div>
        <div style="margin-top: 10px;"><b>1. Domain:</b> Set of all first components:</div>
        <div>&rArr; <b>Domain(R) = {0, 1, 2, 3, 4, 5}</b></div>
        <div style="margin-top: 8px;"><b>2. Range:</b> Set of all second components:</div>
        <div>&rArr; <b>Range(R) = {5, 6, 7, 8, 9, 10}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain = {0, 1, 2, 3, 4, 5} &nbsp;and&nbsp; Range = {5, 6, 7, 8, 9, 10}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Write the relation <b>R = { (<i>x</i>, <i>x</i><sup>3</sup>) : <i>x</i> is a prime number less than 10 }</b> in roster form.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The prime numbers strictly less than 10 are: <b>2, 3, 5, 7</b>.</div>
        <div style="margin-top: 6px;">Computing <i>x</i><sup>3</sup> for each prime number:</div>
        <div>• For <i>x</i> = 2 &rArr; 2<sup>3</sup> = 8 &rArr; (2, 8)</div>
        <div>• For <i>x</i> = 3 &rArr; 3<sup>3</sup> = 27 &rArr; (3, 27)</div>
        <div>• For <i>x</i> = 5 &rArr; 5<sup>3</sup> = 125 &rArr; (5, 125)</div>
        <div>• For <i>x</i> = 7 &rArr; 7<sup>3</sup> = 343 &rArr; (7, 343)</div>
        <div style="margin-top: 8px;">Therefore, the relation in roster form is:</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">R = { (2, 8), (3, 27), (5, 125), (7, 343) }</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Let A = {<i>x</i>, <i>y</i>, <i>z</i>} and B = {1, 2}. Find the number of relations from A to B.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given sets A = {<i>x</i>, <i>y</i>, <i>z</i>} and B = {1, 2}.</div>
        <div>&rArr; Number of elements in A, <b>n(A) = 3</b>.</div>
        <div>&rArr; Number of elements in B, <b>n(B) = 2</b>.</div>
        <div>The number of elements in the Cartesian product A &times; B is:</div>
        <div>&rArr; <b>n(A &times; B) = n(A) &times; n(B) = 3 &times; 2 = 6</b>.</div>
        <div style="margin-top: 8px;">Since every relation from A to B is a subset of A &times; B:</div>
        <div>&rArr; Number of relations = Number of subsets of A &times; B = <b>2<sup>n(A &times; B)</sup></b></div>
        <div>&rArr; Total relations = 2<sup>6</sup> = <b>64</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Number of relations from A to B = 2<sup>6</sup> = 64.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Let R be the relation on <b>&integers;</b> defined by <b>R = { (<i>a</i>, <i>b</i>) : <i>a</i>, <i>b</i> &isin; &integers;, <i>a</i> &minus; <i>b</i> is an integer }</b>. Find the domain and range of R.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given relation on integers &integers;:</div>
        <div>&rArr; R = { (<i>a</i>, <i>b</i>) : <i>a</i>, <i>b</i> &isin; &integers;, <i>a</i> &minus; <i>b</i> &isin; &integers; }</div>
        <div>&rArr; By the closure property of subtraction over integers, the difference of any two integers (<i>a</i> &minus; <i>b</i>) is <b>always an integer</b>.</div>
        <div style="margin-top: 8px;">Therefore, for every integer <i>a</i> &isin; &integers; and every integer <i>b</i> &isin; &integers;:</div>
        <div>&rArr; (<i>a</i>, <i>b</i>) &isin; R for all <i>a</i>, <i>b</i> &isin; &integers;.</div>
        <div style="margin-top: 8px;"><b>1. Domain of R:</b> The set of all first components:</div>
        <div>&rArr; <b>Domain(R) = &integers;</b> <span class="reason">(The set of all integers)</span></div>
        <div style="margin-top: 8px;"><b>2. Range of R:</b> The set of all second components:</div>
        <div>&rArr; <b>Range(R) = &integers;</b> <span class="reason">(The set of all integers)</span></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Domain(R) = &integers; &nbsp;and&nbsp; Range(R) = &integers;</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise2_2
};
