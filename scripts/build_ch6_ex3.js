const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function getExercise6_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Permutations and Combinations &bull; Exercise 6.3
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Permutations of Distinct &amp; Identical Objects &bull; Restricted Arrangements &bull; Word Problems
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      How many 3-digit numbers can be formed by using the digits 1 to 9 if no digit is repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total digits available: <b>{1, 2, 3, 4, 5, 6, 7, 8, 9}</b> &rArr; <i>n</i> = 9.</div>
        <div>Number of digits to choose and arrange: <i>r</i> = 3.</div>
        <div>Since no digit is repeated, this is a direct permutation of 9 distinct items taken 3 at a time:</div>
        <div>&rArr; Total 3-digit numbers = <sup>9</sup>P<sub>3</sub></div>
        <div>Using formula <sup>n</sup>P<sub>r</sub> = ${frac('<i>n</i>!', '(<i>n</i> &minus; <i>r</i>)!')}:</div>
        <div>&rArr; <sup>9</sup>P<sub>3</sub> = ${frac('9!', '(9 &minus; 3)!')} = ${frac('9!', '6!')}</div>
        <div>&rArr; ${frac('9 &times; 8 &times; 7 &times; 6!', '6!')} = 9 &times; 8 &times; 7 = <b>504</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">504 numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      How many 4-digit numbers are there with no digit repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>All decimal digits: <b>{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}</b> (Total 10 digits).</div>
        <div>A 4-digit number has four places: [Thousands][Hundreds][Tens][Units].</div>
        <div>• <b>Thousands place:</b> Cannot be 0 (otherwise it becomes a 3-digit number). Thus, it can be filled by any of {1, 2, ..., 9} = <b>9 ways</b>.</div>
        <div>• <b>Hundreds place:</b> Can be any of the 10 digits except the 1 digit already used for the thousands place (0 is now allowed) = 10 &minus; 1 = <b>9 ways</b>.</div>
        <div>• <b>Tens place:</b> Can be filled by any of the remaining = 10 &minus; 2 = <b>8 ways</b>.</div>
        <div>• <b>Units place:</b> Can be filled by any of the remaining = 10 &minus; 3 = <b>7 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 4-digit numbers = 9 &times; 9 &times; 8 &times; 7 = <b>4536</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">4536 numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      How many 3-digit even numbers can be made using the digits 1, 2, 3, 4, 6, 7, if no digit is repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given digits: <b>{1, 2, 3, 4, 6, 7}</b> (Total 6 digits).</div>
        <div>A 3-digit number has places: [Hundreds][Tens][Units].</div>
        <div>• <b>Condition for even number:</b> Units digit must be even, chosen from <b>{2, 4, 6}</b>:</div>
        <div>&rArr; Number of ways to fill units place = <b>3 ways</b>.</div>
        <div>• <b>Filling the remaining two places:</b></div>
        <div>After placing 1 digit at the units place, 6 &minus; 1 = 5 digits remain available.</div>
        <div>The hundreds and tens places can be filled by arranging 2 digits out of 5:</div>
        <div>&rArr; <sup>5</sup>P<sub>2</sub> = ${frac('5!', '(5 &minus; 2)!')} = ${frac('5!', '3!')} = 5 &times; 4 = <b>20 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total 3-digit even numbers = 3 &times; 20 = <b>60</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">60 even numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Find the number of 4-digit numbers that can be formed using the digits 1, 2, 3, 4, 5, if no digit is repeated. How many of these will be even?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given digits: <b>{1, 2, 3, 4, 5}</b> (Total <i>n</i> = 5 digits).</div>
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Part 1: Total 4-digit numbers:</b></div>
        <div>Forming a 4-digit number from 5 distinct non-zero digits without repetition:</div>
        <div>&rArr; <sup>5</sup>P<sub>4</sub> = ${frac('5!', '(5 &minus; 4)!')} = ${frac('5!', '1!')} = 5 &times; 4 &times; 3 &times; 2 = <b>120</b></div>
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Part 2: How many will be even:</b></div>
        <div>• An even number must have an even digit at the units place: <b>{2, 4}</b> &rArr; <b>2 choices</b>.</div>
        <div>• For each choice, the remaining 3 places are filled by 3 of the remaining 4 digits:</div>
        <div>&rArr; <sup>4</sup>P<sub>3</sub> = ${frac('4!', '(4 &minus; 3)!')} = 4 &times; 3 &times; 2 = <b>24 ways</b>.</div>
        <div>&rArr; Total even 4-digit numbers = 2 &times; 24 = <b>48</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Total = 120 numbers; Even = 48 numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      From a committee of 8 persons, in how many ways can we choose a chairman and a vice chairman, assuming one person cannot hold more than one position?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total persons available = <b>8</b>.</div>
        <div>Number of positions to fill = <b>2</b> (Chairman and Vice Chairman).</div>
        <div>Since the two posts are distinct and order matters (a person chosen as chairman is different from vice chairman), this is a permutation:</div>
        <div>&rArr; Number of ways = <sup>8</sup>P<sub>2</sub></div>
        <div>&rArr; <sup>8</sup>P<sub>2</sub> = ${frac('8!', '(8 &minus; 2)!')} = ${frac('8!', '6!')} = 8 &times; 7 = <b>56</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">56 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Find <i>n</i> if <b><sup><i>n</i>&minus;1</sup>P<sub>3</sub> : <sup><i>n</i></sup>P<sub>4</sub> = 1 : 9</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given ratio: ${frac('<sup><i>n</i>&minus;1</sup>P<sub>3</sub>', '<sup><i>n</i></sup>P<sub>4</sub>')} = ${frac('1', '9')}</div>
        <div>Applying permutation formula <sup>n</sup>P<sub>r</sub> = ${frac('<i>n</i>!', '(<i>n</i> &minus; <i>r</i>)!')}:</div>
        <div>• <sup><i>n</i>&minus;1</sup>P<sub>3</sub> = ${frac('(<i>n</i> &minus; 1)!', '((<i>n</i> &minus; 1) &minus; 3)!')} = ${frac('(<i>n</i> &minus; 1)!', '(<i>n</i> &minus; 4)!')}</div>
        <div>• <sup><i>n</i></sup>P<sub>4</sub> = ${frac('<i>n</i>!', '(<i>n</i> &minus; 4)!')}</div>
        <div>Dividing the two expressions:</div>
        <div>&rArr; ${frac('<sup><i>n</i>&minus;1</sup>P<sub>3</sub>', '<sup><i>n</i></sup>P<sub>4</sub>')} = ${frac('(<i>n</i> &minus; 1)!', '(<i>n</i> &minus; 4)!')} &times; ${frac('(<i>n</i> &minus; 4)!', '<i>n</i>!')}</div>
        <div>Cancelling (<i>n</i> &minus; 4)!:</div>
        <div>&rArr; ${frac('(<i>n</i> &minus; 1)!', '<i>n</i>!')} = ${frac('1', '9')}</div>
        <div>Since <i>n</i>! = <i>n</i>(<i>n</i> &minus; 1)!:</div>
        <div>&rArr; ${frac('(<i>n</i> &minus; 1)!', '<i>n</i>(<i>n</i> &minus; 1)!')} = ${frac('1', '<i>n</i>')} = ${frac('1', '9')}</div>
        <div>&rArr; <b><i>n</i> = 9</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">n = 9</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find <i>r</i> if:<br/>
      <b>(i)</b> <sup>5</sup>P<sub><i>r</i></sub> = 2 &times; <sup>6</sup>P<sub><i>r</i>&minus;1</sub><br/>
      <b>(ii)</b> <sup>5</sup>P<sub><i>r</i></sub> = <sup>6</sup>P<sub><i>r</i>&minus;1</sub>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">(i) Solving <sup>5</sup>P<sub><i>r</i></sub> = 2 &times; <sup>6</sup>P<sub><i>r</i>&minus;1</sub>:</b></div>
        <div>Using formula:</div>
        <div>&rArr; ${frac('5!', '(5 &minus; <i>r</i>)!')} = 2 &times; ${frac('6!', '(6 &minus; (<i>r</i> &minus; 1))!')} = 2 &times; ${frac('6!', '(7 &minus; <i>r</i>)!')}</div>
        <div>Note that 6! = 6 &times; 5! and (7 &minus; <i>r</i>)! = (7 &minus; <i>r</i>)(6 &minus; <i>r</i>)(5 &minus; <i>r</i>)!:</div>
        <div>&rArr; ${frac('5!', '(5 &minus; <i>r</i>)!')} = ${frac('2 &times; 6 &times; 5!', '(7 &minus; <i>r</i>)(6 &minus; <i>r</i>)(5 &minus; <i>r</i>)!')}</div>
        <div>Cancelling 5! and (5 &minus; <i>r</i>)!:</div>
        <div>&rArr; 1 = ${frac('12', '(7 &minus; <i>r</i>)(6 &minus; <i>r</i>)')}</div>
        <div>&rArr; (7 &minus; <i>r</i>)(6 &minus; <i>r</i>) = 12</div>
        <div>&rArr; 42 &minus; 13<i>r</i> + <i>r</i><sup>2</sup> = 12</div>
        <div>&rArr; <i>r</i><sup>2</sup> &minus; 13<i>r</i> + 30 = 0</div>
        <div>&rArr; (<i>r</i> &minus; 3)(<i>r</i> &minus; 10) = 0 &rArr; <i>r</i> = 3 or <i>r</i> = 10</div>
        <div>Since <i>r</i> &le; 5 in <sup>5</sup>P<sub><i>r</i></sub>, <i>r</i> = 10 is not admissible.</div>
        <div>&rArr; <b><i>r</i> = 3</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">r = 3</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) Solving <sup>5</sup>P<sub><i>r</i></sub> = <sup>6</sup>P<sub><i>r</i>&minus;1</sub>:</b></div>
        <div>&rArr; ${frac('5!', '(5 &minus; <i>r</i>)!')} = ${frac('6 &times; 5!', '(7 &minus; <i>r</i>)(6 &minus; <i>r</i>)(5 &minus; <i>r</i>)!')}</div>
        <div>&rArr; (7 &minus; <i>r</i>)(6 &minus; <i>r</i>) = 6</div>
        <div>&rArr; 42 &minus; 13<i>r</i> + <i>r</i><sup>2</sup> = 6</div>
        <div>&rArr; <i>r</i><sup>2</sup> &minus; 13<i>r</i> + 36 = 0</div>
        <div>&rArr; (<i>r</i> &minus; 4)(<i>r</i> &minus; 9) = 0 &rArr; <i>r</i> = 4 or <i>r</i> = 9</div>
        <div>Since <i>r</i> &le; 5, <i>r</i> = 9 is rejected.</div>
        <div>&rArr; <b><i>r</i> = 4</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">r = 4</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      How many words, with or without meaning, can be formed using all the letters of the word <b>EQUATION</b>, using each letter exactly once?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>EQUATION</b>:</div>
        <div>Letters: E, Q, U, A, T, I, O, N (Total 8 letters, all distinct).</div>
        <div>Number of letters to be used = 8.</div>
        <div>The number of permutations of 8 distinct letters taken all at a time:</div>
        <div>&rArr; <sup>8</sup>P<sub>8</sub> = 8!</div>
        <div>&rArr; 8! = 8 &times; 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1 = <b>40320</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">40320 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      How many words, with or without meaning, can be made from the letters of the word <b>MONDAY</b>, assuming that no letter is repeated, if:<br/>
      <b>(i)</b> 4 letters are used at a time,<br/>
      <b>(ii)</b> all letters are used at a time,<br/>
      <b>(iii)</b> all letters are used, but the first letter is a vowel?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>MONDAY</b>:</div>
        <div>Total letters = 6 (M, O, N, D, A, Y), all distinct.</div>
        <div>Vowels = <b>{O, A}</b> (2 vowels); Consonants = <b>{M, N, D, Y}</b> (4 consonants).</div>
        
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">(i) 4 letters used at a time:</b></div>
        <div>&rArr; <sup>6</sup>P<sub>4</sub> = ${frac('6!', '(6 &minus; 4)!')} = ${frac('6!', '2!')} = 6 &times; 5 &times; 4 &times; 3 = <b>360</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">360 words</span>
        </div>

        <div style="margin-top: 12px;"><b style="color: ${themeColor};">(ii) All 6 letters used at a time:</b></div>
        <div>&rArr; <sup>6</sup>P<sub>6</sub> = 6! = 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1 = <b>720</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">720 words</span>
        </div>

        <div style="margin-top: 12px;"><b style="color: ${themeColor};">(iii) All letters used, but first letter is a vowel:</b></div>
        <div>• 1st place can be filled by either O or A = <b>2 ways</b>.</div>
        <div>• The remaining 5 places can be filled by the remaining 5 letters in 5! ways:</div>
        <div>&rArr; 5! = 120 ways.</div>
        <div>&rArr; Total words = 2 &times; 120 = <b>240</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (iii) Answer:</span>
          <span class="ans-val">240 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      In how many of the distinct permutations of the letters in <b>MISSISSIPPI</b> do the four I&rsquo;s not come together?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>MISSISSIPPI</b>:</div>
        <div>Total letters = 11.</div>
        <div>Frequencies: <b>M: 1, I: 4, S: 4, P: 2</b>.</div>
        <div style="margin-top: 8px;"><b>Step 1: Total distinct permutations:</b></div>
        <div>Using formula for permutations with repetition: ${frac('<i>n</i>!', '<i>p</i><sub>1</sub>! <i>p</i><sub>2</sub>! <i>p</i><sub>3</sub>!')}</div>
        <div>&rArr; Total = ${frac('11!', '4! &times; 4! &times; 2!')} = ${frac('39916800', '24 &times; 24 &times; 2')} = ${frac('39916800', '1152')} = <b>34650</b></div>
        
        <div style="margin-top: 10px;"><b>Step 2: Permutations where all 4 I&rsquo;s come together:</b></div>
        <div>Treat the four I&rsquo;s as a single block: <b>(IIII)</b>.</div>
        <div>Now we have: 1 block (IIII) + 1 M + 4 S + 2 P = <b>8 objects</b>.</div>
        <div>Among these 8 objects, S repeats 4 times and P repeats 2 times:</div>
        <div>&rArr; Number of ways = ${frac('8!', '4! &times; 2!')} = ${frac('40320', '24 &times; 2')} = <b>840</b></div>
        <div><span class="reason">[The four I's inside the block are identical, so their internal arrangement is 4!/4! = 1]</span></div>
        
        <div style="margin-top: 10px;"><b>Step 3: Permutations where the four I&rsquo;s do NOT come together:</b></div>
        <div>&rArr; Total permutations &minus; Permutations where 4 I's are together</div>
        <div>= 34650 &minus; 840 = <b>33810</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">33810 permutations</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      In how many ways can the letters of the word <b>PERMUTATIONS</b> be arranged if the:<br/>
      <b>(i)</b> words start with P and end with S,<br/>
      <b>(ii)</b> vowels are all together,<br/>
      <b>(iii)</b> there are always 4 letters between P and S?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>PERMUTATIONS</b>:</div>
        <div>Total letters = 12 (P, E, R, M, U, T, A, T, I, O, N, S).</div>
        <div>Repeated letters: <b>T appears 2 times</b>.</div>
        <div>Vowels: <b>{A, E, I, O, U}</b> (5 distinct vowels). Consonants: <b>{P, R, M, T, T, N, S}</b> (7 consonants).</div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">(i) Words start with P and end with S:</b></div>
        <div>• 1st letter is fixed as P and 12th letter is fixed as S: [P] _ _ _ _ _ _ _ _ _ _ [S]</div>
        <div>• Remaining 10 letters (with 2 T's) are arranged in the 10 middle places:</div>
        <div>&rArr; Number of ways = ${frac('10!', '2!')} = ${frac('3628800', '2')} = <b>1814400</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">1814400 ways</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) Vowels are all together:</b></div>
        <div>• Group all 5 vowels (A, E, I, O, U) into a single unit: <b>(AEIOU)</b>.</div>
        <div>• Number of items to arrange = 1 (vowel unit) + 7 consonants = <b>8 units</b>.</div>
        <div>• In these 8 units, T repeats 2 times:</div>
        <div>&rArr; Arrangements of the 8 units = ${frac('8!', '2!')} = ${frac('40320', '2')} = 20160 ways.</div>
        <div>• The 5 distinct vowels inside the unit can be mutually arranged in 5! = 120 ways.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total ways = 20160 &times; 120 = <b>2419200</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">2419200 ways</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(iii) There are always 4 letters between P and S:</b></div>
        <div>Let the 12 positions be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.</div>
        <div>For 4 letters between P and S, the position pairs (first, second) can be:</div>
        <div>(1, 6), (2, 7), (3, 8), (4, 9), (5, 10), (6, 11), (7, 12) &rArr; <b>7 possible pairs of positions</b>.</div>
        <div>• Since P and S can interchange their positions (P then S, or S then P):</div>
        <div>&rArr; Ways to place P and S = 7 &times; 2! = <b>14 ways</b>.</div>
        <div>• For each placement, the remaining 10 positions are filled by the remaining 10 letters (which contain 2 T's):</div>
        <div>&rArr; Ways to arrange remaining letters = ${frac('10!', '2!')} = 1814400 ways.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total arrangements = 14 &times; 1814400 = <b>25401600</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (iii) Answer:</span>
          <span class="ans-val">25401600 ways</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise6_3
};
