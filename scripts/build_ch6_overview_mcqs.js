const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function getChapter6Overview() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Hero Header -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.22), rgba(233, 30, 99, 0.15)); border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <div style="font-size: 22px; font-weight: 800; color: ${themeColor}; margin-bottom: 6px;">
      ✦ Chapter 6: Permutations and Combinations
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.55; max-width: 600px; margin: 0 auto;">
      Class 11 NCERT Mathematics &bull; The Science of Counting &bull; Combinatorial Architectures &bull; Master Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Combinatorial Foundations</div>
    <div class="q-text">
      <b>Combinatorics</b> is the branch of mathematics dealing with the counting, arrangement, and grouping of finite sets of elements without the exhaustive need to list each configuration individually.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Definitions:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Fundamental Principle of Multiplication:</b> If an event can occur in <i>m</i> different ways, following which a second event can occur in <i>n</i> different ways, then the total number of occurrences of the events in the given order is <b><i>m</i> &times; <i>n</i></b>.</div>
        <div>• <b style="color: ${themeColor};">Fundamental Principle of Addition:</b> If an event can occur in <i>m</i> ways and another mutually exclusive event can occur in <i>n</i> ways, then either the first or the second event can occur in <b><i>m</i> + <i>n</i></b> ways.</div>
        <div>• <b style="color: ${themeColor};">Factorial Notation (<i>n</i>!):</b> The product of the first <i>n</i> natural numbers: <i>n</i>! = <i>n</i> &times; (<i>n</i> &minus; 1) &times; ... &times; 2 &times; 1. By convention, <b>0! = 1</b>.</div>
        <div>• <b style="color: ${themeColor};">Permutation (<sup>n</sup>P<sub>r</sub>):</b> An <b>ordered arrangement</b> of a number of objects taken some or all at a time. The order of appearance is paramount (AB &ne; BA).</div>
        <div>• <b style="color: ${themeColor};">Combination (<sup>n</sup>C<sub>r</sub>):</b> An <b>unordered selection</b> of objects where sequence or rank does not matter ({A, B} = {B, A}).</div>
      </div>
    </div>
  </div>

  <!-- Permutation vs Combination Comparison Card -->
  <div class="q-card">
    <div class="q-title">✦ 2. Permutation vs Combination: The Core Distinction</div>
    <div class="q-text">
      The defining difference lies in whether <b>order matters</b>:
      <br/>• When selecting a President and a Vice President from {A, B, C}, order matters &rArr; <b>Permutation</b> (3 &times; 2 = 6 ways).
      <br/>• When choosing a delegation of 2 people from {A, B, C}, order does not matter &rArr; <b>Combination</b> (<sup>3</sup>C<sub>2</sub> = 3 ways).
    </div>

    <!-- Standalone Diagram Card 1 -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="460" height="210" fill="#FFFFFF" rx="8" />

        <!-- Left Column: Permutation -->
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="205" height="180" rx="8" fill="#FFF1F2" stroke="#E11D48" stroke-width="1.8" />
          <text x="102" y="24" fill="#E11D48" font-size="13" font-weight="800" text-anchor="middle">PERMUTATION (<sup>n</sup>P<sub>r</sub>)</text>
          <text x="102" y="44" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">ORDER MATTERS (Sequence Counts)</text>
          <line x1="20" y1="52" x2="185" y2="52" stroke="#FDA4AF" stroke-width="1.2" />
          <text x="20" y="74" fill="#334155" font-size="11.5" font-weight="600">&bull; Word creation: CAT &ne; ACT</text>
          <text x="20" y="96" fill="#334155" font-size="11.5" font-weight="600">&bull; Telephone codes &amp; PINs</text>
          <text x="20" y="118" fill="#334155" font-size="11.5" font-weight="600">&bull; Rank/Positions: 1st, 2nd, 3rd</text>
          <rect x="20" y="132" width="165" height="34" rx="6" fill="#FFFFFF" stroke="#E11D48" stroke-width="1.2" />
          <text x="102" y="153" fill="#E11D48" font-size="12" font-weight="800" text-anchor="middle"><sup>n</sup>P<sub>r</sub> = n! / (n &minus; r)!</text>
        </g>

        <!-- Right Column: Combination -->
        <g transform="translate(240, 15)">
          <rect x="0" y="0" width="205" height="180" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
          <text x="102" y="24" fill="#16A34A" font-size="13" font-weight="800" text-anchor="middle">COMBINATION (<sup>n</sup>C<sub>r</sub>)</text>
          <text x="102" y="44" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">ORDER DOES NOT MATTER</text>
          <line x1="20" y1="52" x2="185" y2="52" stroke="#86EFAC" stroke-width="1.2" />
          <text x="20" y="74" fill="#334155" font-size="11.5" font-weight="600">&bull; Committee selection: {A, B}</text>
          <text x="20" y="96" fill="#334155" font-size="11.5" font-weight="600">&bull; Hands of cards, ball draws</text>
          <text x="20" y="118" fill="#334155" font-size="11.5" font-weight="600">&bull; Chords on a circle: (P<sub>1</sub>, P<sub>2</sub>)</text>
          <rect x="20" y="132" width="165" height="34" rx="6" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2" />
          <text x="102" y="153" fill="#16A34A" font-size="12" font-weight="800" text-anchor="middle"><sup>n</sup>C<sub>r</sub> = n! / [r! (n &minus; r)!]</text>
        </g>
      </svg>
      <div class="diagram-caption">💡 Diagram 1: Permutations (Order-Dependent) vs Combinations (Selection-Only)</div>
    </div>
  </div>

  <!-- Theoretical Theorems & Specialized Boxes -->
  <div class="q-card">
    <div class="q-title">✦ 3. Fundamental Combinatorial Theorems</div>
    <div class="sol-box">
      <div class="sol-title">Core Identities &amp; Theorems:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">Theorem 1 (Permutations with Repetitions):</b> The number of permutations of <i>n</i> objects, where <i>p</i><sub>1</sub> objects are of one kind, <i>p</i><sub>2</sub> are of second kind, ..., <i>p</i><sub><i>k</i></sub> are of <i>k</i>-th kind, is:</div>
        <div style="padding-left: 14px; margin: 4px 0; color: #FF80AB; font-weight: 700;">
          ${frac('<i>n</i>!', '<i>p</i><sub>1</sub>! <i>p</i><sub>2</sub>! ... <i>p</i><sub><i>k</i></sub>!')}
        </div>
        <div><i>Example:</i> In MISSISSIPPI (11 letters: 4 I, 4 S, 2 P), arrangements = ${frac('11!', '4! 4! 2!')} = 34650.</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Theorem 2 (Complementary Combination Property):</b></div>
        <div style="padding-left: 14px; color: #CBD5E1;">
          <b><sup><i>n</i></sup>C<sub><i>r</i></sub> = <sup><i>n</i></sup>C<sub><i>n</i> &minus; <i>r</i></sub></b> &nbsp;&nbsp;(Choosing <i>r</i> objects is identical to rejecting <i>n</i> &minus; <i>r</i> objects)
        </div>
        <div style="padding-left: 14px; color: #94A3B8; font-size: 13.5px;">Consequence: If <sup><i>n</i></sup>C<sub><i>a</i></sub> = <sup><i>n</i></sup>C<sub><i>b</i></sub>, then either <i>a</i> = <i>b</i> or <b><i>a</i> + <i>b</i> = <i>n</i></b>.</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Theorem 3 (Pascal&rsquo;s Triangle Identity):</b></div>
        <div style="padding-left: 14px; color: #FF80AB; font-weight: 700;">
          <b><sup><i>n</i></sup>C<sub><i>r</i></sub> + <sup><i>n</i></sup>C<sub><i>r</i> &minus; 1</sub> = <sup><i>n</i> + 1</sup>C<sub><i>r</i></sub></b>
        </div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Theorem 4 (Geometric Combinations):</b></div>
        <div>• Chords connecting <i>n</i> points on circle: <b><sup><i>n</i></sup>C<sub>2</sub></b></div>
        <div>• Number of diagonals in an <i>n</i>-gon: <b><sup><i>n</i></sup>C<sub>2</sub> &minus; <i>n</i> = ${frac('<i>n</i>(<i>n</i> &minus; 3)', '2')}</b></div>
        <div>• Triangles formed from <i>n</i> points with no 3 collinear: <b><sup><i>n</i></sup>C<sub>3</sub></b></div>
      </div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet Card -->
  <div class="q-card" style="border-color: ${themeColor};">
    <div class="q-title" style="color: ${themeColor}; font-size: 18.5px;">✦ 4. Master Revision Formula Cheat Sheet</div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b>Factorial Base:</b> 0! = 1, &nbsp; 1! = 1, &nbsp; <i>n</i>! = <i>n</i> &times; (<i>n</i> &minus; 1)!</div>
        <div>• <b>Permutation Formula:</b> <sup><i>n</i></sup>P<sub><i>r</i></sub> = ${frac('<i>n</i>!', '(<i>n</i> &minus; <i>r</i>)!')} &nbsp;(0 &le; <i>r</i> &le; <i>n</i>); &nbsp; <sup><i>n</i></sup>P<sub>0</sub> = 1, &nbsp; <sup><i>n</i></sup>P<sub><i>n</i></sub> = <i>n</i>!</div>
        <div>• <b>Combination Formula:</b> <sup><i>n</i></sup>C<sub><i>r</i></sub> = ${frac('<i>n</i>!', '<i>r</i>! (<i>n</i> &minus; <i>r</i>)!')} &nbsp;(0 &le; <i>r</i> &le; <i>n</i>); &nbsp; <sup><i>n</i></sup>C<sub>0</sub> = <sup><i>n</i></sup>C<sub><i>n</i></sub> = 1</div>
        <div>• <b>Fundamental Link:</b> <b><sup><i>n</i></sup>P<sub><i>r</i></sub> = <i>r</i>! &times; <sup><i>n</i></sup>C<sub><i>r</i></sub></b></div>
        <div>• <b>Sum of Binomial Coefficients:</b> <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>1</sub> + <sup><i>n</i></sup>C<sub>2</sub> + ... + <sup><i>n</i></sup>C<sub><i>n</i></sub> = <b>2<sup><i>n</i></sup></b></div>
        <div>• <b>Circular Permutations:</b> (<i>n</i> &minus; 1)! arrangements for distinct objects; ${frac('(<i>n</i> &minus; 1)!', '2')} for garlands/necklaces where clockwise/counter-clockwise are indistinguishable.</div>
      </div>
    </div>
  </div>
</div>
`;
}

const chapter6MCQs = [
  {
    id: "c11-math-6-mcq-1",
    question: "By standard mathematical convention, the value of 0! (zero factorial) is defined as:",
    options: [
      "A):   0",
      "B):   Undefined",
      "C):   Infinity",
      "D):   1"
    ],
    correctAnswer: "d",
    explanation: "0! = 1 is established by the recursive property n! = n × (n - 1)!. For n = 1: 1! = 1 × 0! ⇒ 1 = 0!, and it reflects the single way to arrange an empty set."
  },
  {
    id: "c11-math-6-mcq-2",
    question: "How many 3-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if repetition of digits is allowed?",
    options: [
      "A):   125",
      "B):   60",
      "C):   120",
      "D):   243"
    ],
    correctAnswer: "a",
    explanation: "Each of the hundreds, tens, and units places can be filled by any of the 5 digits: 5 × 5 × 5 = 125 numbers."
  },
  {
    id: "c11-math-6-mcq-3",
    question: "If 1/6! + 1/7! = x/8!, then the value of x is:",
    options: [
      "A):   56",
      "B):   49",
      "C):   64",
      "D):   72"
    ],
    correctAnswer: "c",
    explanation: "Multiplying by 8!: x = 8!/6! + 8!/7! = (8 × 7) + 8 = 56 + 8 = 64."
  },
  {
    id: "c11-math-6-mcq-4",
    question: "If ⁿC₈ = ⁿC₂, then the value of ⁿC₂ is:",
    options: [
      "A):   90",
      "B):   45",
      "C):   55",
      "D):   36"
    ],
    correctAnswer: "b",
    explanation: "ⁿC₈ = ⁿC₂ ⇒ n = 8 + 2 = 10. Thus ⁿC₂ = ¹⁰C₂ = (10 × 9) / 2 = 45."
  },
  {
    id: "c11-math-6-mcq-5",
    question: "How many chords can be drawn through 21 distinct points located on a circle?",
    options: [
      "A):   42",
      "B):   420",
      "C):   210",
      "D):   190"
    ],
    correctAnswer: "c",
    explanation: "A chord requires joining any 2 distinct points on the circle: ²¹C₂ = (21 × 20) / 2 = 210 chords."
  },
  {
    id: "c11-math-6-mcq-6",
    question: "The relation connecting permutations and combinations for n objects taken r at a time is:",
    options: [
      "A):   ⁿPᵣ = r! × ⁿCᵣ",
      "B):   ⁿCᵣ = r! × ⁿPᵣ",
      "C):   ⁿPᵣ = n! × ⁿCᵣ",
      "D):   ⁿPᵣ + ⁿCᵣ = r!"
    ],
    correctAnswer: "a",
    explanation: "Permutation incorporates both selection and arrangement: ⁿPᵣ = r! × ⁿCᵣ."
  },
  {
    id: "c11-math-6-mcq-7",
    question: "How many 4-digit numbers can be formed with no digit repeated from the decimal digits 0 to 9?",
    options: [
      "A):   5040",
      "B):   4536",
      "C):   3024",
      "D):   4032"
    ],
    correctAnswer: "b",
    explanation: "Thousands place cannot be 0 (9 choices). Hundreds place has 9 choices, tens has 8 choices, units has 7 choices: 9 × 9 × 8 × 7 = 4536 numbers."
  },
  {
    id: "c11-math-6-mcq-8",
    question: "In how many ways can a team of 3 boys and 3 girls be selected from 5 boys and 4 girls?",
    options: [
      "A):   20",
      "B):   30",
      "C):   60",
      "D):   40"
    ],
    correctAnswer: "d",
    explanation: "⁵C₃ × ⁴C₃ = 10 × 4 = 40 ways."
  },
  {
    id: "c11-math-6-mcq-9",
    question: "If ⁵Pᵣ = 2 × ⁶Pᵣ₋₁, the value of r is:",
    options: [
      "A):   2",
      "B):   4",
      "C):   5",
      "D):   3"
    ],
    correctAnswer: "d",
    explanation: "5! / (5 - r)! = 2 × 6! / (7 - r)! ⇒ (7 - r)(6 - r) = 12 ⇒ r² - 13r + 30 = 0 ⇒ (r - 3)(r - 10) = 0. Since r ≤ 5, r = 3."
  },
  {
    id: "c11-math-6-mcq-10",
    question: "How many words can be formed using all letters of the word EQUATION using each letter exactly once?",
    options: [
      "A):   720",
      "B):   5040",
      "C):   40320",
      "D):   362880"
    ],
    correctAnswer: "c",
    explanation: "EQUATION has 8 distinct letters. The number of arrangements is 8! = 40320."
  },
  {
    id: "c11-math-6-mcq-11",
    question: "In how many distinct permutations of the letters of MISSISSIPPI do the four I's NOT come together?",
    options: [
      "A):   33810",
      "B):   34650",
      "C):   840",
      "D):   32400"
    ],
    correctAnswer: "a",
    explanation: "Total permutations = 11!/(4! 4! 2!) = 34650. Permutations with 4 I's together = 8!/(4! 2!) = 840. Permutations where I's are not together = 34650 - 840 = 33810."
  },
  {
    id: "c11-math-6-mcq-12",
    question: "The value of ⁿCᵣ + ⁿCᵣ₋₁ is equal to:",
    options: [
      "A):   ⁿCᵣ₊₁",
      "B):   ⁿ⁺¹Cᵣ",
      "C):   ⁿ⁺¹Cᵣ₋₁",
      "D):   ²ⁿCᵣ"
    ],
    correctAnswer: "b",
    explanation: "This is Pascal's Identity: ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ."
  },
  {
    id: "c11-math-6-mcq-13",
    question: "How many 5-card combinations can be formed from a deck of 52 cards if each combination has exactly one ace?",
    options: [
      "A):   194580",
      "B):   2598960",
      "C):   778320",
      "D):   649740"
    ],
    correctAnswer: "c",
    explanation: "Choose 1 Ace from 4 and 4 Non-Aces from 48: ⁴C₁ × ⁴⁸C₄ = 4 × 194580 = 778320."
  },
  {
    id: "c11-math-6-mcq-14",
    question: "A committee of 8 persons chooses a chairman and a vice-chairman. In how many ways can this be done if one person cannot hold both positions?",
    options: [
      "A):   64",
      "B):   28",
      "C):   16",
      "D):   56"
    ],
    correctAnswer: "d",
    explanation: "⁸P₂ = 8! / 6! = 8 × 7 = 56 ways."
  },
  {
    id: "c11-math-6-mcq-15",
    question: "How many words can be formed from the letters of DAUGHTER with 2 vowels and 3 consonants?",
    options: [
      "A):   3600",
      "B):   120",
      "C):   720",
      "D):   1800"
    ],
    correctAnswer: "a",
    explanation: "DAUGHTER has 3 vowels and 5 consonants. Selection = ³C₂ × ⁵C₃ = 3 × 10 = 30. Arrangement of 5 letters = 5! = 120. Total = 30 × 120 = 3600 words."
  },
  {
    id: "c11-math-6-mcq-16",
    question: "If ²ⁿC₃ : ⁿC₃ = 12 : 1, the value of n is:",
    options: [
      "A):   4",
      "B):   6",
      "C):   7",
      "D):   5"
    ],
    correctAnswer: "d",
    explanation: "4(2n - 1) / (n - 2) = 12 ⇒ 2n - 1 = 3(n - 2) ⇒ 2n - 1 = 3n - 6 ⇒ n = 5."
  },
  {
    id: "c11-math-6-mcq-17",
    question: "How many words can be formed from EQUATION so that all vowels and all consonants occur together?",
    options: [
      "A):   1440",
      "B):   720",
      "C):   2880",
      "D):   5040"
    ],
    correctAnswer: "a",
    explanation: "2! (for the two blocks) × 5! (arranging vowels) × 3! (arranging consonants) = 2 × 120 × 6 = 1440 words."
  },
  {
    id: "c11-math-6-mcq-18",
    question: "In how many ways can 5 men and 4 women be seated in a row such that women occupy the even places?",
    options: [
      "A):   120",
      "B):   2880",
      "C):   1440",
      "D):   576"
    ],
    correctAnswer: "b",
    explanation: "4 women in 4 even places (2, 4, 6, 8) = 4! = 24. 5 men in 5 odd places (1, 3, 5, 7, 9) = 5! = 120. Total = 24 × 120 = 2880."
  },
  {
    id: "c11-math-6-mcq-19",
    question: "How many diagonals does a regular polygon with 10 sides (decagon) possess?",
    options: [
      "A):   45",
      "B):   20",
      "C):   35",
      "D):   40"
    ],
    correctAnswer: "c",
    explanation: "Number of diagonals in an n-gon = ⁿC₂ - n = ¹⁰C₂ - 10 = 45 - 10 = 35."
  },
  {
    id: "c11-math-6-mcq-20",
    question: "If dictionary words of EXAMINATION are listed alphabetically, how many words precede the first word starting with E?",
    options: [
      "A):   907200",
      "B):   453600",
      "C):   1814400",
      "D):   362880"
    ],
    correctAnswer: "a",
    explanation: "Words preceding E start with A. Fixing A in the first place, remaining 10 letters (with 2 I's and 2 N's) arrange in 10! / (2! 2!) = 3628800 / 4 = 907200 words."
  },
  {
    id: "c11-math-6-mcq-21",
    question: "In how many ways can letters of ASSASSINATION be arranged so that all four S's are together?",
    options: [
      "A):   75600",
      "B):   302400",
      "C):   151200",
      "D):   181440"
    ],
    correctAnswer: "c",
    explanation: "Treat 4 S's as 1 unit. Units to arrange = 10 (with 3 A's, 2 I's, 2 N's). Number of arrangements = 10! / (3! 2! 2!) = 3628800 / 24 = 151200."
  },
  {
    id: "c11-math-6-mcq-22",
    question: "A student must choose 5 courses out of 9 where 2 specific courses are compulsory. The number of choices available is:",
    options: [
      "A):   21",
      "B):   35",
      "C):   70",
      "D):   84"
    ],
    correctAnswer: "b",
    explanation: "Student must choose (5 - 2) = 3 courses from (9 - 2) = 7 available elective courses: ⁷C₃ = (7 × 6 × 5) / 6 = 35."
  },
  {
    id: "c11-math-6-mcq-23",
    question: "How many 6-digit numbers can be formed using digits {0, 1, 3, 5, 7, 9} divisible by 10 without repetition?",
    options: [
      "A):   720",
      "B):   600",
      "C):   240",
      "D):   120"
    ],
    correctAnswer: "d",
    explanation: "Units place must be 0 (1 choice). The remaining 5 places can be filled by the remaining 5 non-zero digits in 5! = 120 ways."
  },
  {
    id: "c11-math-6-mcq-24",
    question: "A cricket team of 11 is selected from 17 players with 5 bowlers, requiring exactly 4 bowlers. The number of ways is:",
    options: [
      "A):   1980",
      "B):   792",
      "C):   3960",
      "D):   4200"
    ],
    correctAnswer: "c",
    explanation: "Select 4 bowlers from 5 and 7 batsmen/fielders from 12: ⁵C₄ × ¹²C₇ = 5 × 792 = 3960 ways."
  },
  {
    id: "c11-math-6-mcq-25",
    question: "In the word PERMUTATIONS, how many arrangements have the vowels all together?",
    options: [
      "A):   2419200",
      "B):   1209600",
      "C):   1814400",
      "D):   3628800"
    ],
    correctAnswer: "a",
    explanation: "5 vowels grouped as 1 block + 7 consonants = 8 units (with 2 T's). Ways = (8! / 2!) × 5! = 20160 × 120 = 2419200."
  }
];

module.exports = {
  getChapter6Overview,
  chapter6MCQs
};
