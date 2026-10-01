const { styleBlock, themeColor } = require('./ch1_common');

function getExercise1_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.1 &bull; Sets &amp; Representations
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Which of the following are sets? Justify your answer.
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(i)</b> The collection of all months of a year beginning with the letter J.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The months beginning with 'J' are January, June, and July.</div>
          <div>&rArr; This collection is well-defined because one can definitely identify whether any given month belongs to this collection or not.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set. {January, June, July}</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(ii)</b> The collection of ten most talented writers of India.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The criterion to determine a writer's "talent" is subjective and varies from person to person.</div>
          <div>&rArr; Hence, this collection is not well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is NOT a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(iii)</b> A team of eleven best-cricket batsmen of the world.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The criteria for judging the "best" batsman differ among experts and individuals.</div>
          <div>&rArr; Therefore, this collection is not well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is NOT a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(iv)</b> The collection of all boys in your class.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; One can explicitly identify every boy enrolled in your class without ambiguity.</div>
          <div>&rArr; Hence, the collection is well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (v) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(v)</b> The collection of all natural numbers less than 100.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The numbers are clearly 1, 2, 3, ..., 99.</div>
          <div>&rArr; This collection is well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set. {1, 2, 3, ..., 99}</span></div>
        </div>
      </div>
    </div>

    <!-- (vi) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(vi)</b> A collection of novels written by the writer Munshi Prem Chand.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Any given book either was or was not authored by Munshi Prem Chand.</div>
          <div>&rArr; Thus, the collection is well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (vii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(vii)</b> The collection of all even integers.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Integers of the form 2k (k &isin; &integers;) are definitely identifiable (..., &minus;4, &minus;2, 0, 2, 4, ...).</div>
          <div>&rArr; Hence, the collection is well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (viii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(viii)</b> The collection of questions in this Chapter.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Every question in this chapter is clearly printed and fixed.</div>
          <div>&rArr; Hence, this collection is well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a set.</span></div>
        </div>
      </div>
    </div>

    <!-- (ix) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(ix)</b> A collection of most dangerous animals of the world.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The concept of "dangerous" is relative and not precisely measurable.</div>
          <div>&rArr; Hence, this collection is not well-defined.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is NOT a set.</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Let <b>A = {1, 2, 3, 4, 5, 6}</b>. Insert the appropriate symbol <b>&isin;</b> or <b>&notin;</b> in the blank spaces:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i)</b> 5 ... A &rArr; Since 5 is an element of set A: &nbsp;<b>5 &isin; A</b></div>
        <div>• <b style="color: #FF8A65;">(ii)</b> 8 ... A &rArr; Since 8 is not an element of set A: &nbsp;<b>8 &notin; A</b></div>
        <div>• <b style="color: #FF8A65;">(iii)</b> 0 ... A &rArr; Since 0 is not an element of set A: &nbsp;<b>0 &notin; A</b></div>
        <div>• <b style="color: #FF8A65;">(iv)</b> 4 ... A &rArr; Since 4 is an element of set A: &nbsp;<b>4 &isin; A</b></div>
        <div>• <b style="color: #FF8A65;">(v)</b> 2 ... A &rArr; Since 2 is an element of set A: &nbsp;<b>2 &isin; A</b></div>
        <div>• <b style="color: #FF8A65;">(vi)</b> 10 ... A &rArr; Since 10 is not an element of set A: &nbsp;<b>10 &notin; A</b></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Write the following sets in roster form:
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(i)</b> A = {x : x is an integer and &minus;3 &lt; x &lt; 7}
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The integers strictly between &minus;3 and 7 are: &minus;2, &minus;1, 0, 1, 2, 3, 4, 5, 6.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {&minus;2, &minus;1, 0, 1, 2, 3, 4, 5, 6}</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(ii)</b> B = {x : x is a natural number less than 6}
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Natural numbers less than 6 are: 1, 2, 3, 4, 5.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">B = {1, 2, 3, 4, 5}</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(iii)</b> C = {x : x is a two-digit natural number such that the sum of its digits is 8}
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Two-digit pairs (tens, units) summing to 8:</div>
          <div>1 + 7 = 8 &rArr; 17</div>
          <div>2 + 6 = 8 &rArr; 26</div>
          <div>3 + 5 = 8 &rArr; 35</div>
          <div>4 + 4 = 8 &rArr; 44</div>
          <div>5 + 3 = 8 &rArr; 53</div>
          <div>6 + 2 = 8 &rArr; 62</div>
          <div>7 + 1 = 8 &rArr; 71</div>
          <div>8 + 0 = 8 &rArr; 80</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">C = {17, 26, 35, 44, 53, 62, 71, 80}</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(iv)</b> D = {x : x is a prime number which is divisor of 60}
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Prime factorisation of 60 = 2 &times; 2 &times; 3 &times; 5.</div>
          <div>&rArr; Prime divisors of 60 are 2, 3, and 5.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">D = {2, 3, 5}</span></div>
        </div>
      </div>
    </div>

    <!-- (v) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(v)</b> E = The set of all letters in the word TRIGONOMETRY.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Distinct letters (without repetition): T, R, I, G, O, N, M, E, Y.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">E = {T, R, I, G, O, N, M, E, Y}</span></div>
        </div>
      </div>
    </div>

    <!-- (vi) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text">
        <b style="color: #FF512F;">(vi)</b> F = The set of all letters in the word BETTER.
      </div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Distinct letters: B, E, T, R.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">F = {B, E, T, R}</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Write the following sets in the set-builder form:
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> {3, 6, 9, 12}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Elements are 3 &times; 1, 3 &times; 2, 3 &times; 3, 3 &times; 4.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">{x : x = 3n, n &isin; ℕ and 1 &le; n &le; 4}</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> {2, 4, 8, 16, 32}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Elements are powers of 2: 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup>, 2<sup>5</sup>.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">{x : x = 2<sup>n</sup>, n &isin; ℕ and 1 &le; n &le; 5}</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iii)</b> {5, 25, 125, 625}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Elements are powers of 5: 5<sup>1</sup>, 5<sup>2</sup>, 5<sup>3</sup>, 5<sup>4</sup>.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">{x : x = 5<sup>n</sup>, n &isin; ℕ and 1 &le; n &le; 4}</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iv)</b> {2, 4, 6, ...}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; This is the set of all positive even natural numbers.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">{x : x is an even natural number}</span></div>
        </div>
      </div>
    </div>

    <!-- (v) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(v)</b> {1, 4, 9, ..., 100}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Elements are squares of natural numbers: 1<sup>2</sup>, 2<sup>2</sup>, 3<sup>2</sup>, ..., 10<sup>2</sup>.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">{x : x = n<sup>2</sup>, n &isin; ℕ and 1 &le; n &le; 10}</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      List all the elements of the following sets:
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> A = {x : x is an odd natural number}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Odd natural numbers start from 1, 3, 5, 7, ...</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = {1, 3, 5, 7, 9, ...}</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> B = {x : x is an integer, &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> &lt; x &lt; <span class="frac"><span class="num">9</span><span class="den">2</span></span>}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; &minus;1/2 = &minus;0.5 and 9/2 = 4.5.</div>
          <div>&rArr; Integers strictly between &minus;0.5 and 4.5 are: 0, 1, 2, 3, 4.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">B = {0, 1, 2, 3, 4}</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iii)</b> C = {x : x is an integer, x<sup>2</sup> &le; 4}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Testing integers:</div>
          <div>(&minus;2)<sup>2</sup> = 4 &le; 4</div>
          <div>(&minus;1)<sup>2</sup> = 1 &le; 4</div>
          <div>0<sup>2</sup> = 0 &le; 4</div>
          <div>1<sup>2</sup> = 1 &le; 4</div>
          <div>2<sup>2</sup> = 4 &le; 4</div>
          <div>(&plusmn;3)<sup>2</sup> = 9 &gt; 4 &nbsp;<span class=\"reason\">[Not included]</span></div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">C = {&minus;2, &minus;1, 0, 1, 2}</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iv)</b> D = {x : x is a letter in the word "LOYAL"}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Distinct letters without repetition: L, O, Y, A.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">D = {L, O, Y, A}</span></div>
        </div>
      </div>
    </div>

    <!-- (v) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(v)</b> E = {x : x is a month of a year not having 31 days}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Months having fewer than 31 days are: February (28/29), April (30), June (30), September (30), November (30).</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">E = {February, April, June, September, November}</span></div>
        </div>
      </div>
    </div>

    <!-- (vi) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(vi)</b> F = {x : x is a consonant in the English alphabet which precedes k}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Letters preceding 'k': a, b, c, d, e, f, g, h, i, j.</div>
          <div>&rArr; Excluding vowels {a, e, i}: b, c, d, f, g, h, j.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">F = {b, c, d, f, g, h, j}</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Match each of the set on the left in the roster form with the same set on the right described in set-builder form:
    </div>
    <div class="sol-box">
      <div class="sol-title">Matching Analysis:</div>
      <div class="sol-step">
        <div>• <b>(i) {1, 2, 3, 6}</b> &harr; <b>(c) {x : x is a natural number and divisor of 6}</b> &nbsp;<span class="reason">[1, 2, 3, 6 are all divisors of 6]</span></div>
        <div>• <b>(ii) {2, 3}</b> &harr; <b>(a) {x : x is a prime number and a divisor of 6}</b> &nbsp;<span class="reason">[2 and 3 are the prime divisors of 6]</span></div>
        <div>• <b>(iii) {M, A, T, H, E, I, C, S}</b> &harr; <b>(d) {x : x is a letter of the word MATHEMATICS}</b></div>
        <div>• <b>(iv) {1, 3, 5, 7, 9}</b> &harr; <b>(b) {x : x is an odd natural number less than 10}</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) &rarr; (c), &nbsp;(ii) &rarr; (a), &nbsp;(iii) &rarr; (d), &nbsp;(iv) &rarr; (b)</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

function getExercise1_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF512F; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF512F;">
      📘 Exercise 1.2 &bull; Empty, Finite, Infinite &amp; Equal Sets
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Which of the following are examples of the null set?
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> Set of odd natural numbers divisible by 2.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; By definition, no odd natural number is divisible by 2.</div>
          <div>&rArr; Therefore, this set contains zero elements.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a null set (empty set ∅).</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> Set of even prime numbers.</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; 2 is an even prime number, so the set is {2}.</div>
          <div>&rArr; It contains one element (singleton set).</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is NOT a null set.</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iii)</b> {x : x is a natural number, x &lt; 5 and x &gt; 7}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; A number cannot simultaneously be less than 5 and greater than 7.</div>
          <div>&rArr; No such natural number exists.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a null set (∅).</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iv)</b> {y : y is a point common to any two parallel lines}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Parallel lines never intersect by definition; they have no common point.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">It is a null set (∅).</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Which of the following sets are finite or infinite?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) The set of months of a year:</b> Contains exactly 12 elements. &rArr; <b style="color: #4CAF50;">Finite Set</b></div>
        <div>• <b style="color: #FF8A65;">(ii) {1, 2, 3, ...}:</b> Natural numbers continue indefinitely without bound. &rArr; <b style="color: #FF5252;">Infinite Set</b></div>
        <div>• <b style="color: #FF8A65;">(iii) {1, 2, 3, ..., 99, 100}:</b> Contains exactly 100 elements. &rArr; <b style="color: #4CAF50;">Finite Set</b></div>
        <div>• <b style="color: #FF8A65;">(iv) The set of positive integers greater than 100:</b> {101, 102, 103, ...} has endlessly many elements. &rArr; <b style="color: #FF5252;">Infinite Set</b></div>
        <div>• <b style="color: #FF8A65;">(v) The set of prime numbers less than 99:</b> Countable finite set of primes {2, 3, 5, ..., 97}. &rArr; <b style="color: #4CAF50;">Finite Set</b></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      State whether each of the following set is finite or infinite:
    </div>
    <div class="sol-box">
      <div class="sol-title">Solutions:</div>
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">(i) The set of lines which are parallel to the x-axis:</b> Infinitely many horizontal lines can be drawn in the Cartesian plane. &rArr; <b style="color: #FF5252;">Infinite Set</b></div>
        <div>• <b style="color: #FF8A65;">(ii) The set of letters in the English alphabet:</b> Contains exactly 26 letters. &rArr; <b style="color: #4CAF50;">Finite Set</b></div>
        <div>• <b style="color: #FF8A65;">(iii) The set of numbers which are multiple of 5:</b> {5, 10, 15, 20, ...} has infinite multiples. &rArr; <b style="color: #FF5252;">Infinite Set</b></div>
        <div>• <b style="color: #FF8A65;">(iv) The set of animals living on the earth:</b> Although enormous, the total population of animals at any given moment is a definite countable number. &rArr; <b style="color: #4CAF50;">Finite Set</b></div>
        <div>• <b style="color: #FF8A65;">(v) The set of circles passing through the origin (0, 0):</b> With varying radii and centers, infinitely many circles pass through (0, 0). &rArr; <b style="color: #FF5252;">Infinite Set</b></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      In the following, state whether <b>A = B</b> or not:
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> A = {a, b, c, d}; B = {d, c, b, a}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; The order of listing elements does not alter a set. Both sets have identical elements.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = B</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> A = {4, 8, 12, 16}; B = {8, 4, 16, 18}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; 12 &isin; A but 12 &notin; B (and 18 &isin; B but 18 &notin; A).</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A &ne; B</span></div>
        </div>
      </div>
    </div>

    <!-- (iii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iii)</b> A = {2, 4, 6, 8, 10}; B = {x : x is positive even integer and x &le; 10}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; In roster form, B = {2, 4, 6, 8, 10}.</div>
          <div>&rArr; All elements match A exactly.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = B</span></div>
        </div>
      </div>
    </div>

    <!-- (iv) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(iv)</b> A = {x : x is a multiple of 10}; B = {10, 15, 20, 25, 30, ...}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; A = {10, 20, 30, 40, ...}.</div>
          <div>&rArr; 15 &isin; B, but 15 &notin; A (since 15 is not a multiple of 10).</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A &ne; B</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Are the following pair of sets equal? Give reasons.
    </div>

    <!-- (i) -->
    <div style="margin-top: 14px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(i)</b> A = {2, 3}; B = {x : x is solution of x<sup>2</sup> + 5x + 6 = 0}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>Solving x<sup>2</sup> + 5x + 6 = 0:</div>
          <div>&rArr; x<sup>2</sup> + 3x + 2x + 6 = 0</div>
          <div>&rArr; x(x + 3) + 2(x + 3) = 0</div>
          <div>&rArr; (x + 2)(x + 3) = 0 &rArr; x = &minus;2 or x = &minus;3.</div>
          <div>&rArr; B = {&minus;2, &minus;3}.</div>
          <div>&rArr; Since A = {2, 3} and B = {&minus;2, &minus;3}, the elements are not the same.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A &ne; B</span></div>
        </div>
      </div>
    </div>

    <!-- (ii) -->
    <div style="margin-top: 16px; border-top: 1px dashed rgba(255, 81, 47, 0.3); padding-top: 12px;">
      <div class="q-text"><b style="color: #FF512F;">(ii)</b> A = {x : x is a letter in the word FOLLOW}; B = {y : y is a letter in the word WOLF}</div>
      <div class="sol-box">
        <div class="sol-title">Solution:</div>
        <div class="sol-step">
          <div>&rArr; Letters in FOLLOW: A = {F, O, L, W}</div>
          <div>&rArr; Letters in WOLF: B = {W, O, L, F} = {F, O, L, W}</div>
          <div>&rArr; Both sets contain identical elements.</div>
          <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">A = B</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      From the sets given below, select equal sets:<br/>
      A = {2, 4, 8, 12}, &nbsp; B = {1, 2, 3, 4}, &nbsp; C = {4, 8, 12, 14}, &nbsp; D = {3, 1, 4, 2},<br/>
      E = {&minus;1, 1}, &nbsp; F = {0, a}, &nbsp; G = {1, &minus;1}, &nbsp; H = {0, 1}
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution &amp; Comparison:</div>
      <div class="sol-step">
        <div>• B = {1, 2, 3, 4} and D = {3, 1, 4, 2} have identical elements. &rArr; <b style="color: #4CAF50;">B = D</b></div>
        <div>• E = {&minus;1, 1} and G = {1, &minus;1} have identical elements. &rArr; <b style="color: #4CAF50;">E = G</b></div>
        <div>• All other sets contain elements not present in each other.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">B = D &nbsp;and&nbsp; E = G</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise1_1,
  getExercise1_2
};
