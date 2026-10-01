const { styleBlock, themeColor } = require('./ch1_common');

function getOverviewHtml() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Hero Header -->
  <div style="background: linear-gradient(135deg, rgba(255, 81, 47, 0.25), rgba(221, 36, 118, 0.15)); border: 1.5px solid #FF512F; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: #FF512F; margin-bottom: 6px;">
      🔗 Chapter 1: Sets
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Complete Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- 1. What is a Set & Representations -->
  <div class="q-card">
    <div class="q-title">✦ 1. Concept of Sets &amp; Representations</div>
    <div class="q-text">
      A <b>set</b> is a well-defined collection of distinct objects. By "well-defined", we mean that there is an unambiguous rule that determines whether any given object belongs to the collection or not.
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">Roster (or Tabular) Form:</b> All elements are listed explicitly inside braces separated by commas, e.g., <b>V = {a, e, i, o, u}</b>. Order of elements does not matter, and elements are not repeated.</div>
        <div>• <b style="color: #FF8A65;">Set-Builder Form:</b> Elements are described by specifying their characterizing property: <b>{x : P(x)}</b>, e.g., <b>A = {x : x &isin; ℕ, x &lt; 6}</b>.</div>
        <div>• <b style="color: #00E5FF;">Empty Set (Null or Void Set &empty;):</b> A set containing no elements, denoted by <b>&empty;</b> or <b>{ }</b>. Note that {0} or {&empty;} are NOT empty sets!</div>
        <div>• <b style="color: #00E5FF;">Finite &amp; Infinite Sets:</b> A set is finite if it contains a definite number of elements; otherwise, it is infinite. Cardinality of a finite set A is denoted by <b>n(A)</b>.</div>
        <div>• <b style="color: #4CAF50;">Equal Sets:</b> Two sets A and B are equal (<b>A = B</b>) if every element of A is in B and every element of B is in A.</div>
      </div>
    </div>
  </div>

  <!-- 2. Subsets, Power Sets & Intervals -->
  <div class="q-card">
    <div class="q-title">✦ 2. Subsets, Power Sets &amp; Intervals of ℝ</div>
    <div class="q-text">
      Let A and B be two sets. A is a <b>subset</b> of B (<b>A &sub; B</b>) if every element of A is also an element of B.
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b>Proper Subset:</b> If A &sub; B and A &ne; B, then A is a proper subset of B, and B is the superset of A.</div>
        <div>• <b>Every set is a subset of itself:</b> A &sub; A.</div>
        <div>• <b>The empty set is a subset of every set:</b> &empty; &sub; A.</div>
        <div style="margin-top: 8px;">• <b style="color: #FFD600;">Power Set P(A):</b> The collection of all subsets of A. If |A| = n, then the total number of subsets is <b>2<sup>n</sup></b>.</div>
        <div style="margin-top: 8px;">• <b style="color: #00E676;">Intervals as Subsets of Real Numbers (ℝ):</b>
          <div style="padding-left: 12px; margin-top: 4px;">
            <div>&bull; <b>Closed Interval [a, b]:</b> {x &isin; ℝ : a &le; x &le; b} (includes endpoints a and b).</div>
            <div>&bull; <b>Open Interval (a, b):</b> {x &isin; ℝ : a &lt; x &lt; b} (excludes endpoints).</div>
            <div>&bull; <b>Semi-Open / Semi-Closed:</b> [a, b) = {x &isin; ℝ : a &le; x &lt; b}, &nbsp; (a, b] = {x &isin; ℝ : a &lt; x &le; b}.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. Operations on Sets & Venn Diagrams -->
  <div class="q-card">
    <div class="q-title">✦ 3. Fundamental Operations on Sets</div>
    <div class="q-text">
      Venn diagrams visually represent relationships between universal set U and its subsets:
    </div>

    <!-- Standalone SVG Diagram Card -->
    <div class="diagram-wrapper">
      <svg width="100%" height="auto" viewBox="0 0 380 180" style="display:block; width:100%; height:auto;">
        <rect width="100%" height="100%" fill="#FFFFFF" rx="8"/>

        <!-- Union -->
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="165" height="145" rx="6" fill="#F8FAFC" stroke="#FF512F" stroke-width="1.8"/>
          <text x="12" y="22" font-size="11" font-weight="900" fill="#FF512F">U</text>
          <!-- Shaded Circles for Union -->
          <circle cx="60" cy="75" r="34" fill="#FFCCBC" fill-opacity="0.8" stroke="#D84315" stroke-width="1.5"/>
          <circle cx="105" cy="75" r="34" fill="#FFCCBC" fill-opacity="0.8" stroke="#D84315" stroke-width="1.5"/>
          <text x="48" y="78" font-size="12" font-weight="800" fill="#BF360C">A</text>
          <text x="115" y="78" font-size="12" font-weight="800" fill="#BF360C">B</text>
          <text x="82" y="132" font-size="11.5" font-weight="800" fill="#D84315" text-anchor="middle">Union: A &cup; B</text>
        </g>

        <!-- Intersection -->
        <g transform="translate(200, 15)">
          <rect x="0" y="0" width="165" height="145" rx="6" fill="#F8FAFC" stroke="#00C6FF" stroke-width="1.8"/>
          <text x="12" y="22" font-size="11" font-weight="900" fill="#00C6FF">U</text>
          <circle cx="60" cy="75" r="34" fill="#FFFFFF" stroke="#0097A7" stroke-width="1.5"/>
          <circle cx="105" cy="75" r="34" fill="#FFFFFF" stroke="#0097A7" stroke-width="1.5"/>
          <!-- Shaded Intersection lens -->
          <clipPath id="circleLens"><circle cx="60" cy="75" r="34"/></clipPath>
          <circle cx="105" cy="75" r="34" fill="#80DEEA" stroke="#0097A7" stroke-width="1.5" clip-path="url(#circleLens)"/>
          <text x="45" y="78" font-size="12" font-weight="800" fill="#006064">A</text>
          <text x="118" y="78" font-size="12" font-weight="800" fill="#006064">B</text>
          <text x="82" y="132" font-size="11.5" font-weight="800" fill="#00838F" text-anchor="middle">Intersection: A &cap; B</text>
        </g>
      </svg>
    </div>
    <div class="diagram-caption">Figure 1.1: Visual Representation of Set Union and Intersection</div>

    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: #FF8A65;">Union (A &cup; B):</b> {x : x &isin; A or x &isin; B}.</div>
        <div>• <b style="color: #FF8A65;">Intersection (A &cap; B):</b> {x : x &isin; A and x &isin; B}.</div>
        <div>• <b style="color: #FF8A65;">Disjoint Sets:</b> If A &cap; B = &empty;, A and B have no elements in common.</div>
        <div>• <b style="color: #FF8A65;">Difference (A &minus; B):</b> {x : x &isin; A and x &notin; B}.</div>
        <div>• <b style="color: #00E676;">Complement of a Set (A&prime;):</b> U &minus; A = {x &isin; U : x &notin; A}.</div>
        <div>• <b style="color: #FFD600;">De Morgan's Laws:</b>
          <div style="padding-left: 12px; margin-top: 4px; font-weight: 700; color: #FFF9C4;">
            (A &cup; B)&prime; = A&prime; &cap; B&prime; &nbsp;&nbsp;and&nbsp;&nbsp; (A &cap; B)&prime; = A&prime; &cup; B&prime;
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: #FF512F;">
    <div class="q-title" style="color: #FF512F; font-size: 18.5px;">✦ 4. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      • <b>Total Subsets of Set A (|A| = n):</b> <b>2<sup>n</sup></b>.<br/>
      • <b>Total Proper Subsets:</b> <b>2<sup>n</sup> &minus; 1</b>.<br/>
      • <b>Cardinality of Union of 2 Sets:</b><br/>
      &nbsp;&nbsp; <b>n(A &cup; B) = n(A) + n(B) &minus; n(A &cap; B)</b>.<br/>
      • <b>If A and B are Disjoint (A &cap; B = &empty;):</b><br/>
      &nbsp;&nbsp; <b>n(A &cup; B) = n(A) + n(B)</b>.<br/>
      • <b>Number of Elements in Exactly One Set:</b><br/>
      &nbsp;&nbsp; <b>n(A &minus; B) = n(A) &minus; n(A &cap; B)</b>.<br/>
      &nbsp;&nbsp; <b>n(B &minus; A) = n(B) &minus; n(A &cap; B)</b>.<br/>
      • <b>Symmetric Difference (A &Delta; B):</b> (A &minus; B) &cup; (B &minus; A).<br/>
      • <b>Cardinality of Union of 3 Sets:</b><br/>
      &nbsp;&nbsp; <b>n(A &cup; B &cup; C) = n(A) + n(B) + n(C) &minus; n(A &cap; B) &minus; n(B &cap; C) &minus; n(C &cap; A) + n(A &cap; B &cap; C)</b>.<br/>
      • <b>Complement Properties:</b><br/>
      &nbsp;&nbsp; (A&prime;)&prime; = <b>A</b>, &nbsp;&nbsp; A &cup; A&prime; = <b>U</b>, &nbsp;&nbsp; A &cap; A&prime; = <b>&empty;</b>, &nbsp;&nbsp; U&prime; = <b>&empty;</b>, &nbsp;&nbsp; &empty;&prime; = <b>U</b>.
    </div>
  </div>

</div>
`;
}

function getMcqs() {
  return [
    {
      id: "c11-math-1-mcq-1",
      question: "Which of the following collections represents a well-defined set?",
      options: [
        "A):   The collection of all difficult questions in mathematics",
        "B):   The collection of all natural numbers less than 50",
        "C):   The collection of five most handsome actors in the world",
        "D):   The collection of best footballers of all time"
      ],
      correctAnswer: "B",
      explanation: "'Natural numbers less than 50' is well-defined with definite elements {1, 2, ..., 49}. The terms 'difficult', 'handsome', and 'best' are subjective."
    },
    {
      id: "c11-math-1-mcq-2",
      question: "If A = {1, 2, 3}, then the total number of subsets of A is:",
      options: [
        "A):   3",
        "B):   6",
        "C):   8",
        "D):   9"
      ],
      correctAnswer: "C",
      explanation: "Total number of subsets of a set with n elements is 2ⁿ. For n = 3, 2³ = 8."
    },
    {
      id: "c11-math-1-mcq-3",
      question: "The power set of the empty set ∅ has how many elements?",
      options: [
        "A):   0",
        "B):   1",
        "C):   2",
        "D):   Infinite"
      ],
      correctAnswer: "B",
      explanation: "For A = ∅, n(A) = 0. Therefore, n(P(A)) = 2⁰ = 1, which is P(∅) = {∅}."
    },
    {
      id: "c11-math-1-mcq-4",
      question: "The set {x : x ∈ ℝ, −3 < x ≤ 5} expressed in interval notation is:",
      options: [
        "A):   [−3, 5]",
        "B):   (−3, 5)",
        "C):   (−3, 5]",
        "D):   [−3, 5)"
      ],
      correctAnswer: "C",
      explanation: "The strict inequality '<' at −3 gives an open parenthesis '(', and '≤' at 5 gives a closed bracket ']', resulting in (−3, 5]."
    },
    {
      id: "c11-math-1-mcq-5",
      question: "If A = {x : x is a letter in the word 'MATHEMATICS'}, then the cardinality of set A is:",
      options: [
        "A):   11",
        "B):   8",
        "C):   7",
        "D):   9"
      ],
      correctAnswer: "B",
      explanation: "Distinct letters in 'MATHEMATICS' are M, A, T, H, E, I, C, S. Count = 8 distinct elements."
    },
    {
      id: "c11-math-1-mcq-6",
      question: "Which of the following is an empty set (null set)?",
      options: [
        "A):   {x : x is an even prime number}",
        "B):   {x : x² − 4 = 0, x ∈ ℕ}",
        "C):   {x : x² = 9, x is an even integer}",
        "D):   {x : x + 2 = 5, x ∈ ℤ}"
      ],
      correctAnswer: "C",
      explanation: "x² = 9 gives x = ±3, which are odd integers. No even integer satisfies x² = 9, so this set is empty."
    },
    {
      id: "c11-math-1-mcq-7",
      question: "According to De Morgan's first law, (A ∪ B)′ is equal to:",
      options: [
        "A):   A′ ∪ B′",
        "B):   A′ ∩ B′",
        "C):   A ∩ B",
        "D):   (A ∩ B)′"
      ],
      correctAnswer: "B",
      explanation: "De Morgan's First Law states that the complement of a union is the intersection of the complements: (A ∪ B)′ = A′ ∩ B′."
    },
    {
      id: "c11-math-1-mcq-8",
      question: "If A and B are disjoint sets, then A ∩ B is equal to:",
      options: [
        "A):   U",
        "B):   A ∪ B",
        "C):   ∅",
        "D):   {0}"
      ],
      correctAnswer: "C",
      explanation: "By definition, two sets are disjoint if they share no common elements, meaning A ∩ B = ∅."
    },
    {
      id: "c11-math-1-mcq-9",
      question: "For any universal set U and its subset A, the value of A ∪ A′ is:",
      options: [
        "A):   A",
        "B):   A′",
        "C):   ∅",
        "D):   U"
      ],
      correctAnswer: "D",
      explanation: "A set united with its complement constitutes the entire universal set U."
    },
    {
      id: "c11-math-1-mcq-10",
      question: "For any set A, the value of (A′)′ is:",
      options: [
        "A):   A",
        "B):   A′",
        "C):   U",
        "D):   ∅"
      ],
      correctAnswer: "A",
      explanation: "The complement of the complement of a set A returns the original set A (Law of Double Complementation)."
    },
    {
      id: "c11-math-1-mcq-11",
      question: "If n(A) = 15, n(B) = 25 and n(A ∩ B) = 7, then n(A ∪ B) is:",
      options: [
        "A):   40",
        "B):   33",
        "C):   35",
        "D):   47"
      ],
      correctAnswer: "B",
      explanation: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 15 + 25 − 7 = 33."
    },
    {
      id: "c11-math-1-mcq-12",
      question: "If n(A ∪ B) = 50, n(A) = 28 and n(B) = 32, then n(A ∩ B) is:",
      options: [
        "A):   10",
        "B):   12",
        "C):   14",
        "D):   8"
      ],
      correctAnswer: "A",
      explanation: "n(A ∩ B) = n(A) + n(B) − n(A ∪ B) = 28 + 32 − 50 = 60 − 50 = 10."
    },
    {
      id: "c11-math-1-mcq-13",
      question: "If A = {1, 2, 3, 4} and B = {2, 4, 6, 8}, then A − B is equal to:",
      options: [
        "A):   {1, 3}",
        "B):   {6, 8}",
        "C):   {2, 4}",
        "D):   {1, 2, 3, 4, 6, 8}"
      ],
      correctAnswer: "A",
      explanation: "A − B consists of elements in A that are not in B. Removing {2, 4} from A leaves {1, 3}."
    },
    {
      id: "c11-math-1-mcq-14",
      question: "If A ⊂ B, then A ∩ B is equal to:",
      options: [
        "A):   B",
        "B):   A",
        "C):   ∅",
        "D):   A − B"
      ],
      correctAnswer: "B",
      explanation: "When A is a subset of B, every element of A is already in B, so their intersection is A itself."
    },
    {
      id: "c11-math-1-mcq-15",
      question: "If a set has 5 elements, the number of its proper subsets is:",
      options: [
        "A):   32",
        "B):   31",
        "C):   30",
        "D):   16"
      ],
      correctAnswer: "B",
      explanation: "Total subsets = 2⁵ = 32. Proper subsets exclude the set itself, giving 2⁵ − 1 = 31."
    },
    {
      id: "c11-math-1-mcq-16",
      question: "Let A = {1, 2, {3, 4}}. Which of the following is a TRUE statement?",
      options: [
        "A):   3 ∈ A",
        "B):   {3, 4} ⊂ A",
        "C):   {{3, 4}} ⊂ A",
        "D):   {1, 2} ∈ A"
      ],
      correctAnswer: "C",
      explanation: "{3, 4} is an element of A. Therefore, the set containing that element, {{3, 4}}, is a subset of A."
    },
    {
      id: "c11-math-1-mcq-17",
      question: "If U = {1, 2, 3, 4, 5, 6, 7, 8, 9} and A = {2, 4, 6, 8}, then A′ is:",
      options: [
        "A):   {1, 3, 5, 7, 9}",
        "B):   {1, 2, 3, 5, 7}",
        "C):   {3, 5, 7, 9}",
        "D):   {0, 1, 3, 5, 7, 9}"
      ],
      correctAnswer: "A",
      explanation: "A′ = U − A = {1, 2, 3, 4, 5, 6, 7, 8, 9} − {2, 4, 6, 8} = {1, 3, 5, 7, 9}."
    },
    {
      id: "c11-math-1-mcq-18",
      question: "In a class of 35 students, 24 like cricket and 16 like football. If each student likes at least one game, how many students like both?",
      options: [
        "A):   3",
        "B):   5",
        "C):   7",
        "D):   9"
      ],
      correctAnswer: "B",
      explanation: "n(C ∩ F) = n(C) + n(F) − n(C ∪ F) = 24 + 16 − 35 = 40 − 35 = 5."
    },
    {
      id: "c11-math-1-mcq-19",
      question: "If A, B, C are three sets, then A − (B ∪ C) is equal to:",
      options: [
        "A):   (A − B) ∪ (A − C)",
        "B):   (A − B) ∩ (A − C)",
        "C):   (A − B) ∪ C",
        "D):   (A ∩ B) − C"
      ],
      correctAnswer: "B",
      explanation: "A − (B ∪ C) = A ∩ (B ∪ C)′ = A ∩ (B′ ∩ C′) = (A ∩ B′) ∩ (A ∩ C′) = (A − B) ∩ (A − C)."
    },
    {
      id: "c11-math-1-mcq-20",
      question: "If A = {x : x = 4n − 1, n ∈ ℕ} and B = {x : x = 2n, n ∈ ℕ}, then A ∩ B is:",
      options: [
        "A):   A",
        "B):   B",
        "C):   ℕ",
        "D):   ∅"
      ],
      correctAnswer: "D",
      explanation: "Elements of A are 4n − 1, which are all odd numbers {3, 7, 11, ...}. Elements of B are even numbers. Thus A ∩ B = ∅."
    },
    {
      id: "c11-math-1-mcq-21",
      question: "The symmetric difference of sets A and B, denoted by A Δ B, is defined as:",
      options: [
        "A):   (A ∪ B) − (A ∩ B)",
        "B):   (A ∩ B) − (A ∪ B)",
        "C):   (A − B) ∩ (B − A)",
        "D):   A ∪ B"
      ],
      correctAnswer: "A",
      explanation: "A Δ B = (A − B) ∪ (B − A) = (A ∪ B) − (A ∩ B)."
    },
    {
      id: "c11-math-1-mcq-22",
      question: "If A has 2 elements and B has 3 elements, then the number of subsets of A × B is:",
      options: [
        "A):   6",
        "B):   32",
        "C):   64",
        "D):   128"
      ],
      correctAnswer: "C",
      explanation: "n(A × B) = 2 × 3 = 6. Total subsets = 2⁶ = 64."
    },
    {
      id: "c11-math-1-mcq-23",
      question: "If n(A) = p and n(B) = q, where A and B are disjoint, then n(P(A ∪ B)) is:",
      options: [
        "A):   2ᵖ + 2ᑫ",
        "B):   2ᵖ⁺ᑫ",
        "C):   2ᵖ × 2ᑫ − 1",
        "D):   p + q"
      ],
      correctAnswer: "B",
      explanation: "For disjoint sets, n(A ∪ B) = p + q. The power set has 2^(p + q) elements."
    },
    {
      id: "c11-math-1-mcq-24",
      question: "Which of the following is equivalent to A ∩ (A ∪ B)?",
      options: [
        "A):   A",
        "B):   B",
        "C):   A ∪ B",
        "D):   ∅"
      ],
      correctAnswer: "A",
      explanation: "By the Absorption Law of set theory, A ∩ (A ∪ B) = A."
    },
    {
      id: "c11-math-1-mcq-25",
      question: "In a town of 10,000 families, 40% families buy newspaper A, 20% buy B, 10% buy C, 5% buy A and B, 3% buy B and C, 4% buy A and C. If 2% buy all three, the percentage buying ONLY newspaper A is:",
      options: [
        "A):   31%",
        "B):   33%",
        "C):   35%",
        "D):   40%"
      ],
      correctAnswer: "B",
      explanation: "Only A = %A − (%A∩B + %A∩C) + %A∩B∩C = 40 − (5 + 4) + 2 = 40 − 9 + 2 = 33%."
    }
  ];
}

module.exports = {
  getOverviewHtml,
  getMcqs
};
