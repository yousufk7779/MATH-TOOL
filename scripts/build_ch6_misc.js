const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Permutations and Combinations &bull; Miscellaneous Exercise
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Advanced Combinatorics &bull; Restricted Selections &amp; Word Formations &bull; Block Method &amp; Dictionary Orders
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      How many words, with or without meaning, each of 2 vowels and 3 consonants can be formed from the letters of the word <b>DAUGHTER</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>DAUGHTER</b>:</div>
        <div>Total letters = 8, all distinct.</div>
        <div>• Vowels: <b>{A, E, U}</b> (3 vowels).</div>
        <div>• Consonants: <b>{D, G, H, T, R}</b> (5 consonants).</div>
        <div>We need to select 2 vowels and 3 consonants, then arrange the 5 chosen letters into words:</div>
        <div style="margin-top: 8px;"><b>Step 1 (Selection of Letters):</b></div>
        <div>• Ways to choose 2 vowels from 3 = <sup>3</sup>C<sub>2</sub> = <sup>3</sup>C<sub>1</sub> = <b>3 ways</b>.</div>
        <div>• Ways to choose 3 consonants from 5 = <sup>5</sup>C<sub>3</sub> = ${frac('5 &times; 4', '2 &times; 1')} = <b>10 ways</b>.</div>
        <div>&rArr; Total ways to choose 5 letters = <sup>3</sup>C<sub>2</sub> &times; <sup>5</sup>C<sub>3</sub> = 3 &times; 10 = <b>30 groups</b>.</div>
        <div style="margin-top: 10px;"><b>Step 2 (Arrangement into Words):</b></div>
        <div>Each group of 5 distinct selected letters can be arranged in:</div>
        <div>&rArr; 5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = <b>120 ways</b>.</div>
        <div style="margin-top: 10px;"><b>Step 3 (Total Words):</b></div>
        <div>&rArr; Total words = 30 &times; 120 = <b>3600</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">3600 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      How many words, with or without meaning, can be formed using all the letters of the word <b>EQUATION</b> at a time so that the vowels and consonants occur together?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>EQUATION</b>:</div>
        <div>Total letters = 8 (all distinct).</div>
        <div>• Vowels: <b>{A, E, I, O, U}</b> (5 vowels).</div>
        <div>• Consonants: <b>{Q, T, N}</b> (3 consonants).</div>
        <div>Since vowels and consonants must each occur together, treat all vowels as one block and all consonants as another block:</div>
        <div>Block 1: <b>(AEIOU)</b> &nbsp;&nbsp;&bull;&nbsp;&nbsp; Block 2: <b>(QTN)</b></div>
        <div>• The two blocks can be arranged among themselves in <b>2! = 2 ways</b>:</div>
        <div>&nbsp;&nbsp;(Vowels)(Consonants) &nbsp;or&nbsp; (Consonants)(Vowels).</div>
        <div>• The 5 vowels within their block can be permuted in <b>5! = 120 ways</b>.</div>
        <div>• The 3 consonants within their block can be permuted in <b>3! = 6 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total words = 2! &times; 5! &times; 3! = 2 &times; 120 &times; 6 = <b>1440</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">1440 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      A committee of 7 has to be formed from 9 boys and 4 girls. In how many ways can this be done when the committee consists of:<br/>
      <b>(i)</b> exactly 3 girls?<br/>
      <b>(ii)</b> at least 3 girls?<br/>
      <b>(iii)</b> at most 3 girls?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Available pool: <b>9 boys</b> and <b>4 girls</b> (Total 13 persons).</div>
        <div>Committee size = <b>7 persons</b>.</div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">(i) Exactly 3 girls:</b></div>
        <div>If there are exactly 3 girls, there must be (7 &minus; 3) = 4 boys:</div>
        <div>• Ways to choose 3 girls from 4 = <sup>4</sup>C<sub>3</sub> = 4 ways.</div>
        <div>• Ways to choose 4 boys from 9 = <sup>9</sup>C<sub>4</sub> = ${frac('9 &times; 8 &times; 7 &times; 6', '4 &times; 3 &times; 2 &times; 1')} = 126 ways.</div>
        <div>&rArr; Total ways = <sup>4</sup>C<sub>3</sub> &times; <sup>9</sup>C<sub>4</sub> = 4 &times; 126 = <b>504</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">504 ways</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) At least 3 girls:</b></div>
        <div>Since there are only 4 girls available, &ldquo;at least 3 girls&rdquo; means either <b>3 girls</b> or <b>4 girls</b>:</div>
        <div>• <b>Case 1: 3 girls and 4 boys:</b> <sup>4</sup>C<sub>3</sub> &times; <sup>9</sup>C<sub>4</sub> = 4 &times; 126 = 504 ways.</div>
        <div>• <b>Case 2: 4 girls and 3 boys:</b> <sup>4</sup>C<sub>4</sub> &times; <sup>9</sup>C<sub>3</sub> = 1 &times; ${frac('9 &times; 8 &times; 7', '3 &times; 2 &times; 1')} = 1 &times; 84 = 84 ways.</div>
        <div>By Addition Principle:</div>
        <div>&rArr; Total ways = 504 + 84 = <b>588</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">588 ways</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(iii) At most 3 girls:</b></div>
        <div>&ldquo;At most 3 girls&rdquo; means the committee can contain 0, 1, 2, or 3 girls:</div>
        <div>• <b>0 girls, 7 boys:</b> <sup>4</sup>C<sub>0</sub> &times; <sup>9</sup>C<sub>7</sub> = 1 &times; <sup>9</sup>C<sub>2</sub> = 1 &times; 36 = <b>36 ways</b>.</div>
        <div>• <b>1 girl, 6 boys:</b> <sup>4</sup>C<sub>1</sub> &times; <sup>9</sup>C<sub>6</sub> = 4 &times; <sup>9</sup>C<sub>3</sub> = 4 &times; 84 = <b>336 ways</b>.</div>
        <div>• <b>2 girls, 5 boys:</b> <sup>4</sup>C<sub>2</sub> &times; <sup>9</sup>C<sub>5</sub> = 6 &times; <sup>9</sup>C<sub>4</sub> = 6 &times; 126 = <b>756 ways</b>.</div>
        <div>• <b>3 girls, 4 boys:</b> <sup>4</sup>C<sub>3</sub> &times; <sup>9</sup>C<sub>4</sub> = 4 &times; 126 = <b>504 ways</b>.</div>
        <div>Summing all mutually exclusive cases:</div>
        <div>&rArr; Total ways = 36 + 336 + 756 + 504 = <b>1632</b></div>
        <div><span class="reason">[Alternatively: Total unrestricted committees <sup>13</sup>C<sub>7</sub> &minus; Committee with 4 girls = 1716 &minus; 84 = 1632]</span></div>
        <div class="ans-box">
          <span class="ans-label">Part (iii) Answer:</span>
          <span class="ans-val">1632 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If the different permutations of all the letters of the word <b>EXAMINATION</b> are listed as in a dictionary, how many words are there in this list before the first word starts with E?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>EXAMINATION</b>:</div>
        <div>Total letters = 11.</div>
        <div>Frequencies: <b>A: 2, E: 1, I: 2, M: 1, N: 2, O: 1, T: 1, X: 1</b>.</div>
        <div>In dictionary (lexicographic) order, letters appear alphabetically: A, E, I, M, N, O, T, X.</div>
        <div>The only letter occurring alphabetically <b>before E</b> that exists in EXAMINATION is <b>A</b>.</div>
        <div>Therefore, all words appearing before the first word starting with E are precisely those that <b>start with the letter A</b>.</div>
        <div style="margin-top: 8px;"><b>Fixing the 1st position with letter A:</b></div>
        <div>• 1st place = [A] (1 way).</div>
        <div>• The remaining 10 places must be filled by the remaining 10 letters:</div>
        <div>&nbsp;&nbsp;{1 A, 1 E, 2 I, 1 M, 2 N, 1 O, 1 T, 1 X}.</div>
        <div>• Here, I repeats 2 times and N repeats 2 times:</div>
        <div>&rArr; Number of words starting with A = ${frac('10!', '2! &times; 2!')}</div>
        <div>&rArr; ${frac('3628800', '2 &times; 2')} = ${frac('3628800', '4')} = <b>907200</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">907200 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      How many 6-digit numbers can be formed from the digits 0, 1, 3, 5, 7 and 9, which are divisible by 10 and no digit is repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given digits: <b>{0, 1, 3, 5, 7, 9}</b> (Total 6 digits).</div>
        <div>We need to form a 6-digit number without repetition that is divisible by 10:</div>
        <div>• <b>Divisibility rule for 10:</b> The units digit must strictly be <b>0</b>.</div>
        <div>&rArr; Units place is fixed with digit 0 = <b>1 way</b>.</div>
        <div>• <b>Filling the first 5 places:</b></div>
        <div>The remaining 5 places (Lakhs, Ten-thousands, Thousands, Hundreds, Tens) must be filled by the remaining 5 non-zero digits {1, 3, 5, 7, 9}.</div>
        <div>Since none of the remaining digits is 0, the leading digit cannot be 0.</div>
        <div>The 5 distinct digits can be arranged in the 5 positions in:</div>
        <div>&rArr; 5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = <b>120 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total 6-digit numbers = 120 &times; 1 = <b>120</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">120 numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      The English alphabet has 5 vowels and 21 consonants. How many words with two different vowels and 2 different consonants can be formed from the alphabet?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Vowels available = 5; Vowels required = 2.</div>
        <div>• Consonants available = 21; Consonants required = 2.</div>
        <div style="margin-top: 8px;"><b>Step 1 (Selecting the letters):</b></div>
        <div>• Ways to choose 2 vowels from 5 = <sup>5</sup>C<sub>2</sub> = ${frac('5 &times; 4', '2')} = <b>10 ways</b>.</div>
        <div>• Ways to choose 2 consonants from 21 = <sup>21</sup>C<sub>2</sub> = ${frac('21 &times; 20', '2')} = <b>210 ways</b>.</div>
        <div>&rArr; Total ways to choose 4 letters = 10 &times; 210 = <b>2100 combinations</b>.</div>
        <div style="margin-top: 10px;"><b>Step 2 (Arranging into words):</b></div>
        <div>Each chosen group of 4 distinct letters can be arranged in:</div>
        <div>&rArr; 4! = 4 &times; 3 &times; 2 &times; 1 = <b>24 words</b>.</div>
        <div style="margin-top: 10px;"><b>Step 3 (Total words formed):</b></div>
        <div>&rArr; Total words = 2100 &times; 24 = <b>50400</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">50400 words</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      In an examination, a question paper consists of 12 questions divided into two parts, i.e., Part I and Part II, containing 5 and 7 questions, respectively. A student is required to attempt 8 questions in all, selecting at least 3 from each part. In how many ways can a student select the questions?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Part I: 5 questions &bull; Part II: 7 questions (Total 12 questions).</div>
        <div>• Total questions to attempt = <b>8</b>.</div>
        <div>• Constraint: <b>At least 3 questions from each part</b>.</div>
        <div>The possible combinations of (Part I, Part II) questions are:</div>
        <div>• <b>Case 1:</b> 3 from Part I and 5 from Part II:</div>
        <div>&rArr; <sup>5</sup>C<sub>3</sub> &times; <sup>7</sup>C<sub>5</sub> = 10 &times; ${frac('7 &times; 6', '2')} = 10 &times; 21 = <b>210 ways</b>.</div>
        <div>• <b>Case 2:</b> 4 from Part I and 4 from Part II:</div>
        <div>&rArr; <sup>5</sup>C<sub>4</sub> &times; <sup>7</sup>C<sub>4</sub> = 5 &times; ${frac('7 &times; 6 &times; 5', '6')} = 5 &times; 35 = <b>175 ways</b>.</div>
        <div>• <b>Case 3:</b> 5 from Part I and 3 from Part II:</div>
        <div>&rArr; <sup>5</sup>C<sub>5</sub> &times; <sup>7</sup>C<sub>3</sub> = 1 &times; 35 = <b>35 ways</b>.</div>
        <div>Summing all valid cases:</div>
        <div>&rArr; Total ways = 210 + 175 + 35 = <b>420</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">420 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Determine the number of 5-card combinations out of a deck of 52 cards if each selection of 5 cards has exactly one king.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In a standard deck of 52 cards:</div>
        <div>• Number of Kings = <b>4</b></div>
        <div>• Number of Non-King cards = 52 &minus; 4 = <b>48</b></div>
        <div>A 5-card combination having exactly 1 King requires:</div>
        <div>• 1 King (from 4 Kings) and (5 &minus; 1) = 4 Non-Kings (from 48 Non-Kings).</div>
        <div>• Number of ways to choose 1 King = <sup>4</sup>C<sub>1</sub> = <b>4 ways</b>.</div>
        <div>• Number of ways to choose 4 Non-Kings = <sup>48</sup>C<sub>4</sub>:</div>
        <div>&rArr; <sup>48</sup>C<sub>4</sub> = ${frac('48 &times; 47 &times; 46 &times; 45', '4 &times; 3 &times; 2 &times; 1')} = ${frac('4669920', '24')} = <b>194580 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total combinations = <sup>4</sup>C<sub>1</sub> &times; <sup>48</sup>C<sub>4</sub> = 4 &times; 194580 = <b>778320</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">778320 combinations</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      It is required to seat 5 men and 4 women in a row so that the women occupy even places. How many such arrangements are possible?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total persons = 5 men + 4 women = <b>9 persons</b>.</div>
        <div>Let the 9 seats in a row be numbered 1, 2, 3, 4, 5, 6, 7, 8, 9.</div>
        <div>• <b>Even positions:</b> Positions <b>2, 4, 6, 8</b> (Total 4 seats).</div>
        <div>The 4 women must occupy these 4 even positions:</div>
        <div>&rArr; Number of ways to seat 4 women = 4! = 4 &times; 3 &times; 2 &times; 1 = <b>24 ways</b>.</div>
        <div>• <b>Odd positions:</b> Positions <b>1, 3, 5, 7, 9</b> (Total 5 seats).</div>
        <div>The 5 men must occupy these 5 odd positions:</div>
        <div>&rArr; Number of ways to seat 5 men = 5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = <b>120 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total seating arrangements = 24 &times; 120 = <b>2880</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">2880 arrangements</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      From a class of 25 students, 10 are to be chosen for an excursion party. There are 3 students who decide that either all of them will join or none of them will join. In how many ways can the excursion party be chosen?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total students = <b>25</b>. Number to be selected = <b>10</b>.</div>
        <div>Let <i>A</i> be the group of the 3 particular students who stick together.</div>
        <div>Remaining students in the class = 25 &minus; 3 = <b>22 students</b>.</div>
        <div>There are two mutually exclusive cases:</div>
        <div style="margin-top: 8px;"><b>Case 1: All 3 students join the excursion party:</b></div>
        <div>• All 3 are automatically included in the party (<sup>3</sup>C<sub>3</sub> = 1 way).</div>
        <div>• Remaining students to be chosen = 10 &minus; 3 = <b>7 students</b>.</div>
        <div>• These 7 students must be chosen from the remaining 22 students:</div>
        <div>&rArr; <sup>22</sup>C<sub>7</sub> = ${frac('22!', '7! &times; 15!')} = ${frac('22 &times; 21 &times; 20 &times; 19 &times; 18 &times; 17 &times; 16', '7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1')} = <b>170544 ways</b>.</div>
        
        <div style="margin-top: 10px;"><b>Case 2: None of the 3 students join the excursion party:</b></div>
        <div>• None of the 3 students go.</div>
        <div>• All 10 students must be chosen from the remaining 22 students:</div>
        <div>&rArr; <sup>22</sup>C<sub>10</sub> = ${frac('22!', '10! &times; 12!')} = <b>646646 ways</b>.</div>
        
        <div style="margin-top: 10px;"><b>Total ways:</b></div>
        <div>By Addition Principle:</div>
        <div>&rArr; Total ways = 170544 + 646646 = <b>817190</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">817190 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      In how many ways can the letters of the word <b>ASSASSINATION</b> be arranged so that all the S&rsquo;s are together?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the word <b>ASSASSINATION</b>:</div>
        <div>Total letters = 13.</div>
        <div>Letter frequencies:</div>
        <div>• <b>A: 3</b> &nbsp;&bull;&nbsp; <b>S: 4</b> &nbsp;&bull;&nbsp; <b>I: 2</b> &nbsp;&bull;&nbsp; <b>N: 2</b> &nbsp;&bull;&nbsp; <b>T: 1</b> &nbsp;&bull;&nbsp; <b>O: 1</b></div>
        <div>• <b>Condition:</b> All four S&rsquo;s must be together.</div>
        <div>Treat all 4 S&rsquo;s as a single entity: <b>(SSSS)</b>.</div>
        <div>Now, the entities to arrange are:</div>
        <div>1 unit (SSSS) + 3 A&rsquo;s + 2 I&rsquo;s + 2 N&rsquo;s + 1 T + 1 O = <b>10 entities</b>.</div>
        <div>Among these 10 entities, the repetitions are:</div>
        <div>• A repeats 3 times</div>
        <div>• I repeats 2 times</div>
        <div>• N repeats 2 times</div>
        <div>The number of permutations of these 10 entities is:</div>
        <div>&rArr; ${frac('10!', '3! &times; 2! &times; 2!')}</div>
        <div>&rArr; ${frac('3628800', '6 &times; 2 &times; 2')} = ${frac('3628800', '24')} = <b>151200</b></div>
        <div><span class="reason">[Note: The four S's within the block are identical, so their internal arrangement is 4!/4! = 1]</span></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">151200 ways</span>
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
