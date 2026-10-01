const { styleBlock, themeColor } = require('./ch1_common');

function getExercise1_5() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.5 &bull; Complement of Sets &amp; De Morgan's Laws
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Let <b>U = {1, 2, 3, 4, 5, 6, 7, 8, 9}</b>, <b>A = {1, 2, 3, 4}</b>, <b>B = {2, 4, 6, 8}</b> and <b>C = {3, 4, 5, 6}</b>. Find:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A&prime;:</b> U &minus; A = <b>{5, 6, 7, 8, 9}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) B&prime;:</b> U &minus; B = <b>{1, 3, 5, 7, 9}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) (A &cup; C)&prime;:</b> A &cup; C = {1, 2, 3, 4, 5, 6}. &rArr; (A &cup; C)&prime; = U &minus; (A &cup; C) = <b>{7, 8, 9}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) (A &cup; B)&prime;:</b> A &cup; B = {1, 2, 3, 4, 6, 8}. &rArr; (A &cup; B)&prime; = <b>{5, 7, 9}</b></div>
        <div>• <b style="color: #FF8A65;">(v) (A&prime;)&prime;:</b> Complement of complement returns the original set = <b>A = {1, 2, 3, 4}</b></div>
        <div>• <b style="color: #FF8A65;">(vi) (B &minus; C)&prime;:</b> B &minus; C = {2, 8}. &rArr; (B &minus; C)&prime; = U &minus; {2, 8} = <b>{1, 3, 4, 5, 6, 7, 9}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      If <b>U = {a, b, c, d, e, f, g, h}</b>, find the complements of the following sets:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A = {a, b, c}:</b> &rArr; A&prime; = <b>{d, e, f, g, h}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) B = {d, e, f, g}:</b> &rArr; B&prime; = <b>{a, b, c, h}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) C = {a, c, e, g}:</b> &rArr; C&prime; = <b>{b, d, f, h}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) D = {f, g, h, a}:</b> &rArr; D&prime; = <b>{b, c, d, e}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Taking the set of natural numbers <b>ℕ</b> as the universal set, write down the complements of the following sets:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) {x : x is an even natural number}&prime;:</b> &rArr; <b>{x : x is an odd natural number}</b></div>
        <div>• <b style="color: #FF8A65;">(ii) {x : x is an odd natural number}&prime;:</b> &rArr; <b>{x : x is an even natural number}</b></div>
        <div>• <b style="color: #FF8A65;">(iii) {x : x is a positive multiple of 3}&prime;:</b> &rArr; <b>{x : x &isin; ℕ and x is not a multiple of 3}</b></div>
        <div>• <b style="color: #FF8A65;">(iv) {x : x is a prime number}&prime;:</b> &rArr; <b>{x : x is a positive composite number and x = 1}</b></div>
        <div>• <b style="color: #FF8A65;">(v) {x : x is a natural number divisible by 3 and 5}&prime;:</b> &rArr; <b>{x : x &isin; ℕ and x is not divisible by 15}</b></div>
        <div>• <b style="color: #FF8A65;">(vi) {x : x is a perfect square}&prime;:</b> &rArr; <b>{x : x &isin; ℕ and x is not a perfect square}</b></div>
        <div>• <b style="color: #FF8A65;">(vii) {x : x is a perfect cube}&prime;:</b> &rArr; <b>{x : x &isin; ℕ and x is not a perfect cube}</b></div>
        <div>• <b style="color: #FF8A65;">(viii) {x : x + 5 = 8}&prime;:</b> Since x = 3 &rArr; <b>{x : x &isin; ℕ and x &ne; 3}</b></div>
        <div>• <b style="color: #FF8A65;">(ix) {x : 2x + 5 = 9}&prime;:</b> Since 2x = 4 &rArr; x = 2 &rArr; <b>{x : x &isin; ℕ and x &ne; 2}</b></div>
        <div>• <b style="color: #FF8A65;">(x) {x : x &ge; 7}&prime;:</b> &rArr; <b>{x : x &isin; ℕ and x &lt; 7} = {1, 2, 3, 4, 5, 6}</b></div>
        <div>• <b style="color: #FF8A65;">(xi) {x : x &isin; ℕ and 2x + 1 &gt; 10}&prime;:</b> 2x &gt; 9 &rArr; x &gt; 4.5. Complement is <b>{x : x &isin; ℕ and x &le; 4} = {1, 2, 3, 4}</b></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If <b>U = {1, 2, 3, 4, 5, 6, 7, 8, 9}</b>, <b>A = {2, 4, 6, 8}</b> and <b>B = {2, 3, 5, 7}</b>. Verify that:
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> (A &cup; B)&prime; = A&prime; &cap; B&prime;</div>
      <div class="sol-box">
        <div class="sol-title">Verification:</div>
        <div class="sol-step">
          <div>&rArr; A &cup; B = {2, 3, 4, 5, 6, 7, 8}</div>
          <div>&rArr; <b>LHS = (A &cup; B)&prime; = U &minus; (A &cup; B) = {1, 9}</b></div>
          <div>&rArr; A&prime; = U &minus; A = {1, 3, 5, 7, 9}</div>
          <div>&rArr; B&prime; = U &minus; B = {1, 4, 6, 8, 9}</div>
          <div>&rArr; <b>RHS = A&prime; &cap; B&prime; = {1, 3, 5, 7, 9} &cap; {1, 4, 6, 8, 9} = {1, 9}</b></div>
          <div>&rArr; LHS = RHS = {1, 9}.</div>
          <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Verified: (A ∪ B)′ = A′ ∩ B′</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> (A &cap; B)&prime; = A&prime; &cup; B&prime;</div>
      <div class="sol-box">
        <div class="sol-title">Verification:</div>
        <div class="sol-step">
          <div>&rArr; A &cap; B = {2}</div>
          <div>&rArr; <b>LHS = (A &cap; B)&prime; = U &minus; {2} = {1, 3, 4, 5, 6, 7, 8, 9}</b></div>
          <div>&rArr; <b>RHS = A&prime; &cup; B&prime; = {1, 3, 5, 7, 9} &cup; {1, 4, 6, 8, 9} = {1, 3, 4, 5, 6, 7, 8, 9}</b></div>
          <div>&rArr; LHS = RHS = {1, 3, 4, 5, 6, 7, 8, 9}.</div>
          <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Verified: (A ∩ B)′ = A′ ∪ B′</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Draw appropriate Venn diagram for each of the following:
    </div>

    <!-- Diagram Wrapper: Venn Diagrams -->
    <div class="diagram-wrapper">
      <svg width="100%" height="auto" viewBox="0 0 380 260" style="display:block; width:100%; height:auto;">
        <rect width="100%" height="100%" fill="#FFFFFF" rx="8"/>
        
        <!-- (i) (A U B)' -->
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="165" height="105" rx="6" fill="#FFF3E0" stroke="#FF512F" stroke-width="1.8"/>
          <!-- Shaded background (complement) -->
          <rect x="2" y="2" width="161" height="101" rx="4" fill="#FFCCBC" opacity="0.6"/>
          <!-- Clear circles A and B -->
          <circle cx="60" cy="55" r="30" fill="#FFFFFF" stroke="#D84315" stroke-width="1.5"/>
          <circle cx="105" cy="55" r="30" fill="#FFFFFF" stroke="#D84315" stroke-width="1.5"/>
          <text x="50" y="58" font-size="12" font-weight="800" fill="#BF360C">A</text>
          <text x="110" y="58" font-size="12" font-weight="800" fill="#BF360C">B</text>
          <text x="12" y="20" font-size="11" font-weight="800" fill="#E64A19">U</text>
          <text x="82" y="100" font-size="10.5" font-weight="700" fill="#D84315" text-anchor="middle">(i) (A &cup; B)&prime;</text>
        </g>

        <!-- (ii) A' cap B' -->
        <g transform="translate(200, 15)">
          <rect x="0" y="0" width="165" height="105" rx="6" fill="#FFF3E0" stroke="#FF512F" stroke-width="1.8"/>
          <rect x="2" y="2" width="161" height="101" rx="4" fill="#FFCCBC" opacity="0.6"/>
          <circle cx="60" cy="55" r="30" fill="#FFFFFF" stroke="#D84315" stroke-width="1.5"/>
          <circle cx="105" cy="55" r="30" fill="#FFFFFF" stroke="#D84315" stroke-width="1.5"/>
          <text x="50" y="58" font-size="12" font-weight="800" fill="#BF360C">A</text>
          <text x="110" y="58" font-size="12" font-weight="800" fill="#BF360C">B</text>
          <text x="12" y="20" font-size="11" font-weight="800" fill="#E64A19">U</text>
          <text x="82" y="100" font-size="10.5" font-weight="700" fill="#D84315" text-anchor="middle">(ii) A&prime; &cap; B&prime; &equiv; (A &cup; B)&prime;</text>
        </g>

        <!-- (iii) (A cap B)' -->
        <g transform="translate(15, 140)">
          <rect x="0" y="0" width="165" height="105" rx="6" fill="#E0F7FA" stroke="#00B0FF" stroke-width="1.8"/>
          <rect x="2" y="2" width="161" height="101" rx="4" fill="#80DEEA" opacity="0.5"/>
          <circle cx="60" cy="55" r="30" fill="#80DEEA" stroke="#00838F" stroke-width="1.5" opacity="0.8"/>
          <circle cx="105" cy="55" r="30" fill="#80DEEA" stroke="#00838F" stroke-width="1.5" opacity="0.8"/>
          <!-- Unshaded intersection -->
          <clipPath id="circleA"><circle cx="60" cy="55" r="30"/></clipPath>
          <circle cx="105" cy="55" r="30" fill="#FFFFFF" stroke="#00838F" stroke-width="1.5" clip-path="url(#circleA)"/>
          <text x="45" y="58" font-size="12" font-weight="800" fill="#006064">A</text>
          <text x="115" y="58" font-size="12" font-weight="800" fill="#006064">B</text>
          <text x="12" y="20" font-size="11" font-weight="800" fill="#00838F">U</text>
          <text x="82" y="100" font-size="10.5" font-weight="700" fill="#006064" text-anchor="middle">(iii) (A &cap; B)&prime;</text>
        </g>

        <!-- (iv) A' cup B' -->
        <g transform="translate(200, 140)">
          <rect x="0" y="0" width="165" height="105" rx="6" fill="#E0F7FA" stroke="#00B0FF" stroke-width="1.8"/>
          <rect x="2" y="2" width="161" height="101" rx="4" fill="#80DEEA" opacity="0.5"/>
          <circle cx="60" cy="55" r="30" fill="#80DEEA" stroke="#00838F" stroke-width="1.5" opacity="0.8"/>
          <circle cx="105" cy="55" r="30" fill="#80DEEA" stroke="#00838F" stroke-width="1.5" opacity="0.8"/>
          <clipPath id="circleA2"><circle cx="60" cy="55" r="30"/></clipPath>
          <circle cx="105" cy="55" r="30" fill="#FFFFFF" stroke="#00838F" stroke-width="1.5" clip-path="url(#circleA2)"/>
          <text x="45" y="58" font-size="12" font-weight="800" fill="#006064">A</text>
          <text x="115" y="58" font-size="12" font-weight="800" fill="#006064">B</text>
          <text x="12" y="20" font-size="11" font-weight="800" fill="#00838F">U</text>
          <text x="82" y="100" font-size="10.5" font-weight="700" fill="#006064" text-anchor="middle">(iv) A&prime; &cup; B&prime; &equiv; (A &cap; B)&prime;</text>
        </g>
      </svg>
    </div>
    <div class="diagram-caption">Figure 1.5: Venn Diagram Visualizations of De Morgan's Complement Laws</div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b>Diagram (i) &amp; (ii):</b> The shaded region outside both circles represents <b>(A &cup; B)&prime; = A&prime; &cap; B&prime;</b>.</div>
        <div>• <b>Diagram (iii) &amp; (iv):</b> The entire rectangle shaded except the lens intersection represents <b>(A &cap; B)&prime; = A&prime; &cup; B&prime;</b>.</div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Let U be the set of all triangles in a plane. If A is the set of all triangles with at least one angle different from 60&deg;, what is <b>A&prime;</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; A = {triangles having at least one angle &ne; 60&deg;}.</div>
        <div>&rArr; The complement A&prime; is the set of all triangles with NO angle different from 60&deg; (i.e. all three angles equal 60&deg;).</div>
        <div>&rArr; A triangle whose angles are each 60&deg; is an equilateral triangle.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A′ is the set of all equilateral triangles.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Fill in the blanks to make each of the following a true statement:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) A &cup; A&prime; = &hellip;</b> &rArr; A united with its complement covers the entire universe: &nbsp;<b style="color: #4CAF50;">U</b></div>
        <div>• <b style="color: #FF8A65;">(ii) &empty;&prime; &cap; A = &hellip;</b> &rArr; Since &empty;&prime; = U, U &cap; A = <b style="color: #4CAF50;">A</b></div>
        <div>• <b style="color: #FF8A65;">(iii) A &cap; A&prime; = &hellip;</b> &rArr; A and its complement are completely disjoint: &nbsp;<b style="color: #4CAF50;">&empty;</b></div>
        <div>• <b style="color: #FF8A65;">(iv) U&prime; &cap; A = &hellip;</b> &rArr; Since U&prime; = &empty;, &empty; &cap; A = <b style="color: #4CAF50;">&empty;</b></div>
      </div>
    </div>
  </div>

</div>
`;
}

function getExercise1_6() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.6 &bull; Practical Applications of Union &amp; Intersection
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      If X and Y are two sets such that <b>n(X) = 17</b>, <b>n(Y) = 23</b> and <b>n(X &cup; Y) = 38</b>, find <b>n(X &cap; Y)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Formula: <b>n(X &cup; Y) = n(X) + n(Y) &minus; n(X &cap; Y)</b></div>
        <div>&rArr; 38 = 17 + 23 &minus; n(X &cap; Y)</div>
        <div>&rArr; 38 = 40 &minus; n(X &cap; Y)</div>
        <div>&rArr; n(X &cap; Y) = 40 &minus; 38 = <b>2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">n(X ∩ Y) = 2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      If X and Y are two sets such that X &cup; Y has 18 elements, X has 8 elements and Y has 15 elements; how many elements does X &cap; Y have?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: n(X &cup; Y) = 18, &nbsp;n(X) = 8, &nbsp;n(Y) = 15.</div>
        <div>&rArr; n(X &cup; Y) = n(X) + n(Y) &minus; n(X &cap; Y)</div>
        <div>&rArr; 18 = 8 + 15 &minus; n(X &cap; Y)</div>
        <div>&rArr; 18 = 23 &minus; n(X &cap; Y)</div>
        <div>&rArr; n(X &cap; Y) = 23 &minus; 18 = <b>5</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">n(X ∩ Y) = 5</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      In a group of 400 people, 250 can speak Hindi and 200 can speak English. How many people can speak both Hindi and English?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let H = people who speak Hindi, E = people who speak English.</div>
        <div>Given: n(H &cup; E) = 400, &nbsp;n(H) = 250, &nbsp;n(E) = 200.</div>
        <div>&rArr; n(H &cup; E) = n(H) + n(E) &minus; n(H &cap; E)</div>
        <div>&rArr; 400 = 250 + 200 &minus; n(H &cap; E)</div>
        <div>&rArr; 400 = 450 &minus; n(H &cap; E)</div>
        <div>&rArr; n(H &cap; E) = 450 &minus; 400 = <b>50</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">50 people can speak both Hindi and English.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If S and T are two sets such that S has 21 elements, T has 32 elements, and S &cap; T has 11 elements, how many elements does S &cup; T have?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: n(S) = 21, &nbsp;n(T) = 32, &nbsp;n(S &cap; T) = 11.</div>
        <div>&rArr; n(S &cup; T) = n(S) + n(T) &minus; n(S &cap; T)</div>
        <div>&rArr; n(S &cup; T) = 21 + 32 &minus; 11 = 53 &minus; 11 = <b>42</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">n(S ∪ T) = 42</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      If X and Y are two sets such that X has 40 elements, X &cup; Y has 60 elements and X &cap; Y has 10 elements, how many elements does Y have?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: n(X) = 40, &nbsp;n(X &cup; Y) = 60, &nbsp;n(X &cap; Y) = 10.</div>
        <div>&rArr; n(X &cup; Y) = n(X) + n(Y) &minus; n(X &cap; Y)</div>
        <div>&rArr; 60 = 40 + n(Y) &minus; 10</div>
        <div>&rArr; 60 = 30 + n(Y)</div>
        <div>&rArr; n(Y) = 60 &minus; 30 = <b>30</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Set Y has 30 elements.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      In a group of 70 people, 37 like coffee, 52 like tea, and each person likes at least one of the two drinks. How many people like both coffee and tea?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let C = coffee drinkers, T = tea drinkers.</div>
        <div>Given: n(C &cup; T) = 70, &nbsp;n(C) = 37, &nbsp;n(T) = 52.</div>
        <div>&rArr; n(C &cup; T) = n(C) + n(T) &minus; n(C &cap; T)</div>
        <div>&rArr; 70 = 37 + 52 &minus; n(C &cap; T)</div>
        <div>&rArr; 70 = 89 &minus; n(C &cap; T)</div>
        <div>&rArr; n(C &cap; T) = 89 &minus; 70 = <b>19</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">19 people like both coffee and tea.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      In a group of 65 people, 40 like cricket, 10 like both cricket and tennis. How many like tennis only and not cricket? How many like tennis?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let C = cricket lovers, T = tennis lovers.</div>
        <div>Given: n(C &cup; T) = 65, &nbsp;n(C) = 40, &nbsp;n(C &cap; T) = 10.</div>
        <div style="margin-top: 8px;"><b>1. Total people who like tennis n(T):</b></div>
        <div>&rArr; n(C &cup; T) = n(C) + n(T) &minus; n(C &cap; T)</div>
        <div>&rArr; 65 = 40 + n(T) &minus; 10 &rArr; 65 = 30 + n(T)</div>
        <div>&rArr; <b>n(T) = 65 &minus; 30 = 35</b></div>
        <div style="margin-top: 8px;"><b>2. People who like tennis only and not cricket n(T &minus; C):</b></div>
        <div>&rArr; n(T &minus; C) = n(T) &minus; n(C &cap; T) = 35 &minus; 10 = <b>25</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Tennis only = 25 people; &nbsp;Total liking tennis = 35 people.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      In a committee, 50 people speak French, 20 speak Spanish and 10 speak both Spanish and French. How many speak at least one of these two languages?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let F = French speakers, S = Spanish speakers.</div>
        <div>Given: n(F) = 50, &nbsp;n(S) = 20, &nbsp;n(S &cap; F) = 10.</div>
        <div>&rArr; "At least one" corresponds to Union: n(S &cup; F).</div>
        <div>&rArr; n(S &cup; F) = n(S) + n(F) &minus; n(S &cap; F)</div>
        <div>&rArr; n(S &cup; F) = 20 + 50 &minus; 10 = 70 &minus; 10 = <b>60</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">60 people speak at least one of these two languages.</span></div>
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
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Miscellaneous Exercise &bull; Advanced Problems on Sets
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions (Q1 to Q16)
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Decide, among the following sets, which sets are subsets of one and another:<br/>
      <b>A = {x : x &isin; ℝ and x satisfy x<sup>2</sup> &minus; 8x + 12 = 0}</b>,<br/>
      <b>B = {2, 4, 6}</b>,<br/>
      <b>C = {2, 4, 6, 8, ...}</b>,<br/>
      <b>D = {6}</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Solving x<sup>2</sup> &minus; 8x + 12 = 0:</div>
        <div>&rArr; (x &minus; 2)(x &minus; 6) = 0 &rArr; x = 2 or x = 6.</div>
        <div>&rArr; <b>A = {2, 6}</b>.</div>
        <div>Given sets: <b>B = {2, 4, 6}</b>, &nbsp;<b>C = {2, 4, 6, 8, ...}</b>, &nbsp;<b>D = {6}</b>.</div>
        <div style="margin-top: 8px;">Comparing elements:</div>
        <div>• D = {6} &sub; A = {2, 6} &sub; B = {2, 4, 6} &sub; C = {2, 4, 6, 8, ...}</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">D ⊂ A, &nbsp;D ⊂ B, &nbsp;D ⊂ C, &nbsp;A ⊂ B, &nbsp;A ⊂ C, &nbsp;B ⊂ C</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      In each of the following, determine whether the statement is true or false. If it is true, prove it. If it is false, give an example.
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> If x &isin; A and A &isin; B, then x &isin; B.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #FF5252;">False</b>.</div>
          <div>Counterexample: Let A = {1} and B = {{1}, 2}.</div>
          <div>Here 1 &isin; A and A &isin; B, but 1 &notin; B (since the elements of B are {1} and 2).</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> If A &sub; B and B &isin; C, then A &isin; C.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #FF5252;">False</b>.</div>
          <div>Counterexample: Let A = {1}, B = {1, 2}, and C = {{1, 2}, 3}.</div>
          <div>Here A &sub; B and B &isin; C, but A = {1} &notin; C.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iii)</b> If A &sub; B and B &sub; C, then A &sub; C.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #4CAF50;">True</b> (Transitivity of subsets).</div>
          <div>Proof: Let x &isin; A. Since A &sub; B &rArr; x &isin; B.</div>
          <div>Since B &sub; C &rArr; x &isin; C.</div>
          <div>Thus, every x &isin; A belongs to C &rArr; <b>A &sub; C</b>.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">True (Proved)</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iv)</b> If A &nsub; B and B &nsub; C, then A &nsub; C.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #FF5252;">False</b>.</div>
          <div>Counterexample: Let A = {1, 2}, B = {0, 6, 8}, and C = {0, 1, 2, 6, 9}.</div>
          <div>Here A &nsub; B and B &nsub; C, but A &sub; C.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False</span></div>
        </div>
      </div>
    </div>

    <!-- (v) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(v)</b> If x &isin; A and A &nsub; B, then x &isin; B.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #FF5252;">False</b>.</div>
          <div>Counterexample: Let A = {3, 5, 7} and B = {3, 4, 6}.</div>
          <div>Here 5 &isin; A and A &nsub; B, but 5 &notin; B.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False</span></div>
        </div>
      </div>
    </div>

    <!-- (vi) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(vi)</b> If A &sub; B and x &notin; B, then x &notin; A.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; <b style="color: #4CAF50;">True</b>.</div>
          <div>Proof: Suppose on the contrary that x &isin; A.</div>
          <div>Since A &sub; B, this would imply x &isin; B, which contradicts the given fact that x &notin; B.</div>
          <div>Hence, our assumption is false &rArr; <b>x &notin; A</b>.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">True (Proved)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Let A, B and C be the sets such that <b>A &cup; B = A &cup; C</b> and <b>A &cap; B = A &cap; C</b>. Show that <b>B = C</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof:</div>
      <div class="sol-step">
        <div>We can express set B using distributive laws:</div>
        <div>&rArr; B = B &cap; (A &cup; B)</div>
        <div>&rArr; B = B &cap; (A &cup; C) &nbsp;&nbsp;<span class="reason">[Since A ∪ B = A ∪ C]</span></div>
        <div>&rArr; B = (B &cap; A) &cup; (B &cap; C) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; B = (A &cap; B) &cup; (B &cap; C)</div>
        <div>&rArr; B = (A &cap; C) &cup; (B &cap; C) &nbsp;&nbsp;<span class="reason">[Since A ∩ B = A ∩ C]</span> &nbsp;&mdash; (1)</div>
        <div style="margin-top: 8px;">Similarly, express set C:</div>
        <div>&rArr; C = C &cap; (A &cup; C)</div>
        <div>&rArr; C = C &cap; (A &cup; B) &nbsp;&nbsp;<span class="reason">[Since A ∪ C = A ∪ B]</span></div>
        <div>&rArr; C = (C &cap; A) &cup; (C &cap; B) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; C = (A &cap; C) &cup; (B &cap; C) &nbsp;&mdash; (2)</div>
        <div style="margin-top: 8px;">From equations (1) and (2):</div>
        <div>&rArr; <b>B = C</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved: B = C</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Show that the following four conditions are equivalent:<br/>
      <b>(i) A &sub; B &nbsp;&nbsp; (ii) A &minus; B = &empty; &nbsp;&nbsp; (iii) A &cup; B = B &nbsp;&nbsp; (iv) A &cap; B = A</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof of Equivalence:</div>
      <div class="sol-step">
        <div>• <b>(i) &rArr; (ii):</b> Let A &sub; B. Then every element of A is in B. Therefore, no element of A is outside B, so <b>A &minus; B = &empty;</b>.</div>
        <div>• <b>(ii) &rArr; (iii):</b> A &minus; B = &empty; means there are no elements in A that are not in B. Hence A &sub; B, which gives <b>A &cup; B = B</b>.</div>
        <div>• <b>(iii) &rArr; (iv):</b> If A &cup; B = B, then A &sub; B. Therefore, the common elements of A and B are all elements of A, giving <b>A &cap; B = A</b>.</div>
        <div>• <b>(iv) &rArr; (i):</b> If A &cap; B = A, then every element in A belongs to A &cap; B, and hence belongs to B. Therefore, <b>A &sub; B</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">All four conditions (i) ⇔ (ii) ⇔ (iii) ⇔ (iv) are mutually equivalent.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Show that if <b>A &sub; B</b>, then <b>C &minus; B &sub; C &minus; A</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof:</div>
      <div class="sol-step">
        <div>Let x &isin; C &minus; B.</div>
        <div>&rArr; x &isin; C and x &notin; B.</div>
        <div>Since A &sub; B, if x &notin; B, then x cannot belong to A (i.e. x &notin; A).</div>
        <div>&rArr; x &isin; C and x &notin; A.</div>
        <div>&rArr; x &isin; C &minus; A.</div>
        <div>Thus, every element of C &minus; B belongs to C &minus; A.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved: C − B ⊂ C − A</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Assume that <b>P(A) = P(B)</b>. Show that <b>A = B</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof:</div>
      <div class="sol-step">
        <div>Let x &isin; A.</div>
        <div>&rArr; {x} &sub; A &rArr; {x} &isin; P(A).</div>
        <div>Since P(A) = P(B), we have {x} &isin; P(B).</div>
        <div>&rArr; {x} &sub; B &rArr; x &isin; B.</div>
        <div>Since every x &isin; A is in B, we have <b>A &sub; B</b> &mdash; (1).</div>
        <div style="margin-top: 8px;">Similarly, let y &isin; B:</div>
        <div>&rArr; {y} &sub; B &rArr; {y} &isin; P(B) = P(A).</div>
        <div>&rArr; {y} &sub; A &rArr; y &isin; A.</div>
        <div>Thus, <b>B &sub; A</b> &mdash; (2).</div>
        <div>From (1) and (2): <b>A = B</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved: A = B</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Is it true that for any sets A and B, <b>P(A) &cup; P(B) = P(A &cup; B)</b>? Justify your answer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; <b style="color: #FF5252;">No, it is not true.</b></div>
        <div style="font-weight: 700; color: #FF8A65; margin-top: 6px;">Counterexample:</div>
        <div>Let A = {0, 1} and B = {1, 2}.</div>
        <div>&rArr; A &cup; B = {0, 1, 2}.</div>
        <div>&rArr; P(A) = {&empty;, {0}, {1}, {0, 1}}</div>
        <div>&rArr; P(B) = {&empty;, {1}, {2}, {1, 2}}</div>
        <div>&rArr; P(A) &cup; P(B) = {&empty;, {0}, {1}, {2}, {0, 1}, {1, 2}}</div>
        <div>Now, consider the subset {0, 2} &sub; A &cup; B:</div>
        <div>&rArr; {0, 2} &isin; P(A &cup; B), but {0, 2} &notin; P(A) &cup; P(B)!</div>
        <div>Hence, P(A) &cup; P(B) &ne; P(A &cup; B).</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">False. P(A) ∪ P(B) ≠ P(A ∪ B) in general.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Show that for any sets A and B,<br/>
      <b>A = (A &cap; B) &cup; (A &minus; B)</b> &nbsp;and&nbsp; <b>A &cup; (B &minus; A) = A &cup; B</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof:</div>
      <div class="sol-step">
        <div><b>Part 1: To show A = (A &cap; B) &cup; (A &minus; B):</b></div>
        <div>&rArr; RHS = (A &cap; B) &cup; (A &cap; B&prime;) &nbsp;&nbsp;<span class="reason">[Since A − B = A ∩ B′]</span></div>
        <div>&rArr; RHS = A &cap; (B &cup; B&prime;) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; RHS = A &cap; U = <b>A = LHS</b>.</div>
        <div style="margin-top: 10px;"><b>Part 2: To show A &cup; (B &minus; A) = A &cup; B:</b></div>
        <div>&rArr; LHS = A &cup; (B &cap; A&prime;) &nbsp;&nbsp;<span class="reason">[Since B − A = B ∩ A′]</span></div>
        <div>&rArr; LHS = (A &cup; B) &cap; (A &cup; A&prime;) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; LHS = (A &cup; B) &cap; U = <b>A &cup; B = RHS</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved for both identities.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Using properties of sets, show that:<br/>
      <b>(i) A &cup; (A &cap; B) = A</b><br/>
      <b>(ii) A &cap; (A &cup; B) = A</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Proofs (Absorption Laws):</div>
      <div class="sol-step">
        <div>• <b>(i) A &cup; (A &cap; B):</b></div>
        <div>&rArr; A &cup; (A &cap; B) = (A &cap; U) &cup; (A &cap; B)</div>
        <div>&rArr; = A &cap; (U &cup; B) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; = A &cap; U = <b>A</b>.</div>
        <div style="margin-top: 8px;">• <b>(ii) A &cap; (A &cup; B):</b></div>
        <div>&rArr; A &cap; (A &cup; B) = (A &cup; &empty;) &cap; (A &cup; B)</div>
        <div>&rArr; = A &cup; (&empty; &cap; B) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; = A &cup; &empty; = <b>A</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Show that <b>A &cap; B = A &cap; C</b> need not imply <b>B = C</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>&rArr; Let A = {0, 1}, &nbsp;B = {0, 2, 3}, &nbsp;C = {0, 4, 5}.</div>
        <div>&rArr; A &cap; B = {0}.</div>
        <div>&rArr; A &cap; C = {0}.</div>
        <div>&rArr; Thus, A &cap; B = A &cap; C = {0}.</div>
        <div>&rArr; But B = {0, 2, 3} &ne; {0, 4, 5} = C (since 2 &isin; B, 2 &notin; C).</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Hence shown: A ∩ B = A ∩ C does not necessarily imply B = C.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Let A and B be sets. If <b>A &cap; X = B &cap; X = &empty;</b> and <b>A &cup; X = B &cup; X</b> for some set X, show that <b>A = B</b>.<br/>
      <span class="reason">[Hint: A = A &cap; (A &cup; X), B = B &cap; (B &cup; X) and use distributive law]</span>
    </div>
    <div class="sol-box">
      <div class="sol-title">Proof:</div>
      <div class="sol-step">
        <div>A = A &cap; (A &cup; X)</div>
        <div>&rArr; A = A &cap; (B &cup; X) &nbsp;&nbsp;<span class="reason">[Given A ∪ X = B ∪ X]</span></div>
        <div>&rArr; A = (A &cap; B) &cup; (A &cap; X) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; A = (A &cap; B) &cup; &empty; &nbsp;&nbsp;<span class="reason">[Given A ∩ X = ∅]</span></div>
        <div>&rArr; <b>A = A &cap; B</b> &mdash; (1)</div>
        <div style="margin-top: 8px;">Similarly for B:</div>
        <div>B = B &cap; (B &cup; X)</div>
        <div>&rArr; B = B &cap; (A &cup; X) &nbsp;&nbsp;<span class="reason">[Given B ∪ X = A ∪ X]</span></div>
        <div>&rArr; B = (B &cap; A) &cup; (B &cap; X) &nbsp;&nbsp;<span class="reason">[Distributive Law]</span></div>
        <div>&rArr; B = (A &cap; B) &cup; &empty; &nbsp;&nbsp;<span class="reason">[Given B ∩ X = ∅]</span></div>
        <div>&rArr; <b>B = A &cap; B</b> &mdash; (2)</div>
        <div>From (1) and (2): <b>A = B</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved: A = B</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Find sets A, B and C such that A &cap; B, B &cap; C and A &cap; C are non-empty sets and <b>A &cap; B &cap; C = &empty;</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let:</div>
        <div>&rArr; <b>A = {0, 1}</b></div>
        <div>&rArr; <b>B = {1, 2}</b></div>
        <div>&rArr; <b>C = {2, 0}</b></div>
        <div>Checking pairwise intersections:</div>
        <div>• A &cap; B = {1} &ne; &empty;</div>
        <div>• B &cap; C = {2} &ne; &empty;</div>
        <div>• A &cap; C = {0} &ne; &empty;</div>
        <div>Checking three-way intersection:</div>
        <div>• A &cap; B &cap; C = {0, 1} &cap; {1, 2} &cap; {2, 0} = <b>&empty;</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {0, 1}, B = {1, 2}, C = {2, 0}</span></div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let U = total students surveyed, T = tea drinkers, C = coffee drinkers.</div>
        <div>Given: n(U) = 600, &nbsp;n(T) = 150, &nbsp;n(C) = 225, &nbsp;n(T &cap; C) = 100.</div>
        <div>Students taking at least one beverage:</div>
        <div>&rArr; n(T &cup; C) = n(T) + n(C) &minus; n(T &cap; C)</div>
        <div>&rArr; n(T &cup; C) = 150 + 225 &minus; 100 = 275</div>
        <div>Students taking neither tea nor coffee:</div>
        <div>&rArr; n(T&prime; &cap; C&prime;) = n((T &cup; C)&prime;) = n(U) &minus; n(T &cup; C)</div>
        <div>&rArr; n(Neither) = 600 &minus; 275 = <b>325</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">325 students were taking neither tea nor coffee.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      In a group of students, 100 students know Hindi, 50 know English and 25 know both. Each of the students knows either Hindi or English. How many students are there in the group?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let H = Hindi speakers, E = English speakers.</div>
        <div>Given: n(H) = 100, &nbsp;n(E) = 50, &nbsp;n(H &cap; E) = 25.</div>
        <div>Since every student knows either Hindi or English, Total group = n(H &cup; E):</div>
        <div>&rArr; n(H &cup; E) = n(H) + n(E) &minus; n(H &cap; E)</div>
        <div>&rArr; n(H &cup; E) = 100 + 50 &minus; 25 = <b>125</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Total number of students in the group = 125.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 15 -->
  <div class="q-card">
    <div class="q-title">Question 15</div>
    <div class="q-text">
      In a survey of 60 people, it was found that 25 people read newspaper H, 26 read newspaper T, 26 read newspaper I, 9 read both H and I, 11 read both H and T, 8 read both T and I, 3 read all three newspapers. Find:<br/>
      <b>(i) The number of people who read at least one of the newspapers.</b><br/>
      <b>(ii) The number of people who read exactly one newspaper.</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>n(H) = 25, &nbsp;n(T) = 26, &nbsp;n(I) = 26</div>
        <div>n(H &cap; T) = 11, &nbsp;n(T &cap; I) = 8, &nbsp;n(H &cap; I) = 9</div>
        <div>n(H &cap; T &cap; I) = 3</div>
        <div style="margin-top: 10px;"><b>(i) People who read at least one newspaper n(H &cup; T &cup; I):</b></div>
        <div>&rArr; n(H &cup; T &cup; I) = n(H) + n(T) + n(I) &minus; [n(H &cap; T) + n(T &cap; I) + n(H &cap; I)] + n(H &cap; T &cap; I)</div>
        <div>&rArr; n(H &cup; T &cup; I) = 25 + 26 + 26 &minus; [11 + 8 + 9] + 3</div>
        <div>&rArr; n(H &cup; T &cup; I) = 77 &minus; 28 + 3 = <b>52</b></div>
        <div style="margin-top: 10px;"><b>(ii) People who read exactly one newspaper:</b></div>
        <div>Let a, b, c be number of people reading only H, only T, only I respectively.</div>
        <div>• Reading H &cap; T only = 11 &minus; 3 = 8</div>
        <div>• Reading T &cap; I only = 8 &minus; 3 = 5</div>
        <div>• Reading H &cap; I only = 9 &minus; 3 = 6</div>
        <div>• Exactly one = [n(H &cup; T &cup; I)] &minus; [sum of all 2-newspaper only regions] &minus; [all 3 newspapers]</div>
        <div>&rArr; Exactly one = 52 &minus; (8 + 5 + 6 + 3) = 52 &minus; 22 = <b>30</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) 52 people read at least one newspaper; &nbsp;(ii) 30 people read exactly one newspaper.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 16 -->
  <div class="q-card">
    <div class="q-title">Question 16</div>
    <div class="q-text">
      In a survey it was found that 21 people liked product A, 26 liked product B and 29 liked product C. If 14 people liked products A and B, 12 people liked products C and A, 14 people liked products B and C and 8 liked all the three products. Find how many liked product C only.
    </div>

    <!-- Venn Diagram: 3 Products -->
    <div class="diagram-wrapper">
      <svg width="100%" height="auto" viewBox="0 0 320 220" style="display:block; width:100%; height:auto;">
        <rect width="100%" height="100%" fill="#FFFFFF" rx="8"/>
        <!-- Circle A -->
        <circle cx="120" cy="90" r="55" fill="none" stroke="#FF512F" stroke-width="2"/>
        <text x="75" y="60" font-size="14" font-weight="900" fill="#E64A19">A</text>
        <!-- Circle B -->
        <circle cx="200" cy="90" r="55" fill="none" stroke="#2979FF" stroke-width="2"/>
        <text x="245" y="60" font-size="14" font-weight="900" fill="#1565C0">B</text>
        <!-- Circle C -->
        <circle cx="160" cy="140" r="55" fill="#E8F5E9" fill-opacity="0.3" stroke="#4CAF50" stroke-width="2"/>
        <text x="160" y="210" font-size="14" font-weight="900" fill="#2E7D32" text-anchor="middle">C</text>

        <!-- Regions text -->
        <!-- Center (all three) -->
        <text x="160" y="112" font-size="13" font-weight="800" fill="#BF360C" text-anchor="middle">8</text>
        <!-- A and B only -->
        <text x="160" y="75" font-size="12" font-weight="700" fill="#333333" text-anchor="middle">6</text>
        <!-- A and C only -->
        <text x="125" y="130" font-size="12" font-weight="700" fill="#333333" text-anchor="middle">4</text>
        <!-- B and C only -->
        <text x="195" y="130" font-size="12" font-weight="700" fill="#333333" text-anchor="middle">6</text>
        <!-- C only highlighted -->
        <text x="160" y="172" font-size="15" font-weight="900" fill="#2E7D32" text-anchor="middle">11</text>
      </svg>
    </div>
    <div class="diagram-caption">Figure 1.6: Venn Diagram Analysis of Three-Product Consumer Survey</div>

    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Total liking product C: n(C) = 29</div>
        <div>• Liking all three products: n(A &cap; B &cap; C) = 8</div>
        <div>• Liking A and C: n(A &cap; C) = 12 &rArr; A &cap; C only = 12 &minus; 8 = <b>4</b></div>
        <div>• Liking B and C: n(B &cap; C) = 14 &rArr; B &cap; C only = 14 &minus; 8 = <b>6</b></div>
        <div style="margin-top: 8px;">Number of people who liked product C only:</div>
        <div>&rArr; n(C only) = n(C) &minus; [n(A &cap; C only) + n(B &cap; C only) + n(A &cap; B &cap; C)]</div>
        <div>&rArr; n(C only) = 29 &minus; (4 + 6 + 8)</div>
        <div>&rArr; n(C only) = 29 &minus; 18 = <b>11</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">11 people liked product C only.</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise1_5,
  getExercise1_6,
  getMiscellaneousExercise
};
