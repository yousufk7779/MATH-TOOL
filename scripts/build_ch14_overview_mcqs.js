const { THEME_COLOR, ACCENT_COLOR, frac } = require("./ch14_common");

function buildOverview() {
  const svgVenn = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 220" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Sample Space Rectangle S -->
        <rect x="20" y="20" width="420" height="180" rx="10" fill="#0F172A" stroke="#64748B" stroke-width="2"/>
        <text x="35" y="45" font-size="14" font-weight="800" fill="#64748B">Sample Space S</text>

        <!-- Circle A -->
        <circle cx="170" cy="115" r="65" fill="rgba(142, 45, 226, 0.35)" stroke="#8E2DE2" stroke-width="2.5"/>
        <text x="130" y="115" font-size="13" font-weight="800" fill="#B388FF">A &minus; B</text>
        <text x="145" y="60" font-size="14" font-weight="800" fill="#8E2DE2">Event A</text>

        <!-- Circle B -->
        <circle cx="280" cy="115" r="65" fill="rgba(56, 239, 125, 0.25)" stroke="#38EF7D" stroke-width="2.5"/>
        <text x="290" y="115" font-size="13" font-weight="800" fill="#69F0AE">B &minus; A</text>
        <text x="285" y="60" font-size="14" font-weight="800" fill="#38EF7D">Event B</text>

        <!-- Intersection A ∩ B -->
        <text x="210" y="118" font-size="11" font-weight="800" fill="#FFFFFF">A &cap; B</text>

        <!-- Complement (A ∪ B)' -->
        <text x="340" y="185" font-size="12" font-weight="700" fill="#94A3B8">(A &cup; B)′</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Venn Diagram Representation: Partition of Sample Space into A &minus; B, A &cap; B, B &minus; A, and (A &cup; B)′.</div>
  </div>`;

  const svgTree = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 210" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Root node -->
        <circle cx="40" cy="105" r="6" fill="#8E2DE2"/>
        <text x="15" y="90" font-size="12" font-weight="800" fill="#8E2DE2">Start</text>

        <!-- Branches Stage 1 (Coin) -->
        <line x1="45" y1="105" x2="160" y2="55" stroke="#B388FF" stroke-width="2"/>
        <text x="95" y="70" font-size="11" font-weight="700" fill="#B388FF">Head (H)</text>

        <line x1="45" y1="105" x2="160" y2="155" stroke="#B388FF" stroke-width="2"/>
        <text x="95" y="145" font-size="11" font-weight="700" fill="#B388FF">Tail (T)</text>

        <!-- Stage 1 Nodes -->
        <circle cx="160" cy="55" r="5" fill="#38EF7D"/>
        <circle cx="160" cy="155" r="5" fill="#FF5722"/>

        <!-- Branches Stage 2 for Head (Die rolled) -->
        <line x1="165" y1="55" x2="310" y2="25" stroke="#38EF7D" stroke-width="1.6"/>
        <text x="320" y="28" font-size="11" font-weight="700" fill="#38EF7D">H1, H2, H3 (Odd)</text>

        <line x1="165" y1="55" x2="310" y2="75" stroke="#38EF7D" stroke-width="1.6"/>
        <text x="320" y="80" font-size="11" font-weight="700" fill="#38EF7D">H2, H4, H6 (Even)</text>

        <!-- Branches Stage 2 for Tail (Single outcome) -->
        <line x1="165" y1="155" x2="310" y2="155" stroke="#FF5722" stroke-width="1.6"/>
        <text x="320" y="160" font-size="11" font-weight="700" fill="#FF5722">T (Stop)</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Multi-Stage Tree Diagram: Modeling compound conditional random experiments branch-by-branch.</div>
  </div>`;

  return `
<style>
  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }
  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }
  .frac .den { padding: 1px 4px; text-align: center; }
  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid ${THEME_COLOR}; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }
  .q-title { font-size: 18px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }
  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid ${THEME_COLOR}; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }
  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }
  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }
  .diagram-wrapper { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center; }
  .diagram-svg-container { display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 480px; }
  .diagram-caption { color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500; }
</style>

<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(142, 45, 226, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid ${THEME_COLOR}; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${ACCENT_COLOR}; margin-bottom: 6px;">
      ✦ Chapter 14: Probability
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Comprehensive Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Conceptual Foundations</div>
    <div class="q-text">
      Probability formalizes the mathematics of chance, measuring the likelihood of events in random experiments through set theory and Kolmogorov's axiomatic framework.
    </div>
    <div class="sol-box">
      <div class="sol-title">Fundamental Probability Axioms:</div>
      <div class="sol-step">
        <div>• <b style="color: ${ACCENT_COLOR};">Random Experiment:</b> An experiment whose outcomes cannot be predicted with certainty, but all possible outcomes are known beforehand.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Sample Space (S):</b> The set of all possible outcomes of a random experiment. Each outcome is a sample point &omega; &isin; <i>S</i>.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Event (E):</b> Any subset <i>E</i> &sube; <i>S</i> of the sample space. An event occurs if the realized outcome &omega; &isin; <i>E</i>.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Mutually Exclusive Events:</b> Events <i>A</i> and <i>B</i> that cannot occur simultaneously: <b>A &cap; B = &empty; &rArr; P(A &cap; B) = 0</b>.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Exhaustive Events:</b> Events whose union covers the complete sample space: <b>E<sub>1</sub> &cup; E<sub>2</sub> &cup; ... &cup; E<sub>n</sub> = S</b>.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Axiomatic Definition of Probability:</b> Let <i>S</i> be a sample space. A real-valued function <i>P</i> on subsets of <i>S</i> satisfies:
          <br/>&nbsp;&nbsp;1. <b>P(E) &ge; 0</b> for any event <i>E</i>.
          <br/>&nbsp;&nbsp;2. <b>P(S) = 1</b> (Sure event).
          <br/>&nbsp;&nbsp;3. If <i>A</i> and <i>B</i> are mutually exclusive: <b>P(A &cup; B) = P(A) + P(B)</b>.
        </div>
      </div>
    </div>
  </div>

  ${svgVenn}
  ${svgTree}

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: ${THEME_COLOR};">
    <div class="q-title" style="color: ${ACCENT_COLOR}; font-size: 19px;">✦ 2. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">1. Classical &amp; Set-Theoretic Probability:</b><br/>
        &bull; <b>Equally Likely Outcomes:</b> <i>P</i>(<i>E</i>) = ${frac("n(E)", "n(S)")} = ${frac("Number of favourable outcomes", "Total number of possible outcomes")}<br/>
        &bull; <b>Impossible Event:</b> <i>P</i>(&empty;) = 0 &nbsp;|&nbsp; <b>Sure Event:</b> <i>P</i>(<i>S</i>) = 1<br/>
        &bull; <b>Complement Rule:</b> <b>P(A′) = 1 &minus; P(A)</b> &nbsp;or&nbsp; <i>P</i>(<i>A</i>) + <i>P</i>(<i>A</i>′) = 1
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">2. Addition Theorems of Probability:</b><br/>
        &bull; <b>Two Events (General):</b> <b>P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B)</b><br/>
        &bull; <b>Mutually Exclusive Events:</b> <b>P(A &cup; B) = P(A) + P(B)</b><br/>
        &bull; <b>Difference of Events:</b> <i>P</i>(<i>A</i> &minus; <i>B</i>) = <i>P</i>(<i>A</i> &cap; <i>B</i>′) = <b>P(A) &minus; P(A &cap; B)</b><br/>
        &bull; <b>Three Events Addition Theorem:</b><br/>
        &nbsp;&nbsp;<i>P</i>(<i>A</i> &cup; <i>B</i> &cup; <i>C</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) + <i>P</i>(<i>C</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) &minus; <i>P</i>(<i>B</i> &cap; <i>C</i>) &minus; <i>P</i>(<i>C</i> &cap; <i>A</i>) + <i>P</i>(<i>A</i> &cap; <i>B</i> &cap; <i>C</i>)
      </div>

      <div style="margin-bottom: 6px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">3. De Morgan's Probability Identities:</b><br/>
        &bull; <b>Neither A nor B:</b> <i>P</i>(<i>A</i>′ &cap; <i>B</i>′) = <i>P</i>((<i>A</i> &cup; <i>B</i>)′) = <b>1 &minus; P(A &cup; B)</b><br/>
        &bull; <b>Not A or Not B:</b> <i>P</i>(<i>A</i>′ &cup; <i>B</i>′) = <i>P</i>((<i>A</i> &cap; <i>B</i>)′) = <b>1 &minus; P(A &cap; B)</b><br/>
        &bull; <b>Lottery Combinations:</b> ${frac("<sup>k</sup>C<sub>r</sub>", "<sup>n</sup>C<sub>r</sub>")}
      </div>
    </div>
  </div>
</div>`;
}

function buildMCQs() {
  return [
    {
      "id": "c11-math-14-mcq-1",
      "question": "When 3 fair coins are tossed simultaneously, the total number of sample points in the sample space is:",
      "options": [
        "A):   6",
        "B):   16",
        "C):   9",
        "D):   8"
      ],
      "correctAnswer": "D",
      "explanation": "Each coin has 2 outcomes. For 3 coins, n(S) = 2³ = 8."
    },
    {
      "id": "c11-math-14-mcq-2",
      "question": "If two events A and B are mutually exclusive, then P(A ∩ B) equals:",
      "options": [
        "A):   1",
        "B):   P(A) × P(B)",
        "C):   P(A) + P(B)",
        "D):   0"
      ],
      "correctAnswer": "D",
      "explanation": "Mutually exclusive events cannot occur simultaneously, meaning A ∩ B = ∅, hence P(A ∩ B) = 0."
    },
    {
      "id": "c11-math-14-mcq-3",
      "question": "If P(A) = 3/5, then the probability of the complement event P(not A) is:",
      "options": [
        "A):   2/5",
        "B):   3/5",
        "C):   1/5",
        "D):   5/3"
      ],
      "correctAnswer": "A",
      "explanation": "P(not A) = 1 − P(A) = 1 − 3/5 = 2/5."
    },
    {
      "id": "c11-math-14-mcq-4",
      "question": "An event containing exactly one sample point of the sample space is called a:",
      "options": [
        "A):   Sure event",
        "B):   Compound event",
        "C):   Simple (elementary) event",
        "D):   Impossible event"
      ],
      "correctAnswer": "C",
      "explanation": "An event with a single sample point is called a simple or elementary event."
    },
    {
      "id": "c11-math-14-mcq-5",
      "question": "When a pair of fair dice is rolled, what is the total number of outcomes in the sample space?",
      "options": [
        "A):   12",
        "B):   18",
        "C):   36",
        "D):   24"
      ],
      "correctAnswer": "C",
      "explanation": "For two dice, total outcomes = 6 × 6 = 36."
    },
    {
      "id": "c11-math-14-mcq-6",
      "question": "In tossing two coins, what is the probability of getting at least one head?",
      "options": [
        "A):   1/4",
        "B):   1/2",
        "C):   3/4",
        "D):   1"
      ],
      "correctAnswer": "C",
      "explanation": "S = {HH, HT, TH, TT}. Favourable: {HH, HT, TH} (3 outcomes). P = 3/4."
    },
    {
      "id": "c11-math-14-mcq-7",
      "question": "If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, then P(A ∪ B) is:",
      "options": [
        "A):   0.9",
        "B):   0.6",
        "C):   0.8",
        "D):   0.7"
      ],
      "correctAnswer": "D",
      "explanation": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.5 + 0.4 − 0.2 = 0.7."
    },
    {
      "id": "c11-math-14-mcq-8",
      "question": "A card is drawn from a well-shuffled pack of 52 cards. The probability that it is an ace is:",
      "options": [
        "A):   1/13",
        "B):   1/52",
        "C):   1/4",
        "D):   4/13"
      ],
      "correctAnswer": "A",
      "explanation": "There are 4 aces in 52 cards. P = 4/52 = 1/13."
    },
    {
      "id": "c11-math-14-mcq-9",
      "question": "Which of the following can never be the probability of an event?",
      "options": [
        "A):   0.001",
        "B):   2/3",
        "C):   15%",
        "D):   −0.5"
      ],
      "correctAnswer": "D",
      "explanation": "By the non-negativity axiom, probability must satisfy 0 ≤ P(E) ≤ 1. Negative probability is impossible."
    },
    {
      "id": "c11-math-14-mcq-10",
      "question": "If E₁ and E₂ are exhaustive events, then:",
      "options": [
        "A):   E₁ ∩ E₂ = ∅",
        "B):   P(E₁ ∪ E₂) = 0",
        "C):   P(E₁) = P(E₂)",
        "D):   E₁ ∪ E₂ = S"
      ],
      "correctAnswer": "D",
      "explanation": "Exhaustive events cover the entire sample space: E₁ ∪ E₂ = S."
    },
    {
      "id": "c11-math-14-mcq-11",
      "question": "In a single throw of a die, what is the probability of getting a number greater than or equal to 3?",
      "options": [
        "A):   1/2",
        "B):   5/6",
        "C):   1/3",
        "D):   2/3"
      ],
      "correctAnswer": "D",
      "explanation": "Favourable outcomes are {3, 4, 5, 6} (4 outcomes). P = 4/6 = 2/3."
    },
    {
      "id": "c11-math-14-mcq-12",
      "question": "A letter is chosen at random from the word 'ASSASSINATION'. What is the probability that it is a vowel?",
      "options": [
        "A):   6/13",
        "B):   7/13",
        "C):   5/13",
        "D):   1/2"
      ],
      "correctAnswer": "A",
      "explanation": "Total 13 letters. Vowels are A, A, A, I, I, O (6 vowels). P = 6/13."
    },
    {
      "id": "c11-math-14-mcq-13",
      "question": "If P(A ∪ B) = 0.88 and P(A ∩ B) = 0.35 with P(A) = 0.54, then P(B) is:",
      "options": [
        "A):   0.69",
        "B):   0.45",
        "C):   0.59",
        "D):   0.72"
      ],
      "correctAnswer": "A",
      "explanation": "P(B) = P(A ∪ B) + P(A ∩ B) − P(A) = 0.88 + 0.35 − 0.54 = 0.69."
    },
    {
      "id": "c11-math-14-mcq-14",
      "question": "By De Morgan's Law, the probability P(A′ ∩ B′) of neither A nor B occurring is equal to:",
      "options": [
        "A):   1 − P(A ∩ B)",
        "B):   1 − P(A ∪ B)",
        "C):   P(A′) × P(B′)",
        "D):   P(A) − P(B)"
      ],
      "correctAnswer": "B",
      "explanation": "A′ ∩ B′ = (A ∪ B)′. Therefore, P(A′ ∩ B′) = 1 − P(A ∪ B)."
    },
    {
      "id": "c11-math-14-mcq-15",
      "question": "If P(E) = 1/4, P(F) = 1/2 and P(E ∩ F) = 1/8, then P(E or F) is:",
      "options": [
        "A):   3/8",
        "B):   5/8",
        "C):   7/8",
        "D):   1/2"
      ],
      "correctAnswer": "B",
      "explanation": "P(E ∪ F) = 1/4 + 1/2 − 1/8 = (2 + 4 − 1)/8 = 5/8."
    },
    {
      "id": "c11-math-14-mcq-16",
      "question": "A fair die with faces {1, 1, 2, 2, 2, 3} is rolled. What is the probability of getting the number 2?",
      "options": [
        "A):   1/3",
        "B):   1/6",
        "C):   1/2",
        "D):   2/3"
      ],
      "correctAnswer": "C",
      "explanation": "Number '2' appears on 3 faces out of 6. P = 3/6 = 1/2."
    },
    {
      "id": "c11-math-14-mcq-17",
      "question": "If P(A) = 0.5, P(B) = 0.7, and P(A ∩ B) = 0.6, these probabilities are:",
      "options": [
        "A):   Consistently defined",
        "B):   Inconsistently defined because P(A ∩ B) > P(A)",
        "C):   Equally likely",
        "D):   Exhaustive"
      ],
      "correctAnswer": "B",
      "explanation": "A ∩ B is a subset of A, so P(A ∩ B) can never exceed P(A). Since 0.6 > 0.5, the assignment is inconsistent."
    },
    {
      "id": "c11-math-14-mcq-18",
      "question": "Three letters are put into three envelopes at random. What is the probability that at least one letter is in its proper envelope?",
      "options": [
        "A):   1/3",
        "B):   1/2",
        "C):   2/3",
        "D):   5/6"
      ],
      "correctAnswer": "C",
      "explanation": "Total permutations = 3! = 6. Derangements (0 correct) = 2. Favourable (at least 1 correct) = 6 − 2 = 4. P = 4/6 = 2/3."
    },
    {
      "id": "c11-math-14-mcq-19",
      "question": "In a class of 60 students, 30 opted for NCC, 32 for NSS, and 24 for both. What is the probability that a randomly chosen student opted for neither?",
      "options": [
        "A):   19/30",
        "B):   11/30",
        "C):   1/5",
        "D):   2/15"
      ],
      "correctAnswer": "B",
      "explanation": "n(A ∪ B) = 30 + 32 − 24 = 38. Neither = 60 − 38 = 22. P = 22/60 = 11/30."
    },
    {
      "id": "c11-math-14-mcq-20",
      "question": "A box has 10 red, 20 blue, and 30 green marbles (total 60). What is the probability that 5 drawn marbles are all blue?",
      "options": [
        "A):   ²⁰C₅ / ⁶⁰C₅",
        "B):   ³⁰C₅ / ⁶⁰C₅",
        "C):   ¹⁰C₅ / ⁶⁰C₅",
        "D):   5 / 60"
      ],
      "correctAnswer": "A",
      "explanation": "Drawing 5 blue from 20 blue out of 60 total gives ²⁰C₅ / ⁶⁰C₅."
    },
    {
      "id": "c11-math-14-mcq-21",
      "question": "In an entrance test, P(Pass 1st) = 0.8, P(Pass 2nd) = 0.7, and P(Pass at least one) = 0.95. The probability of passing both is:",
      "options": [
        "A):   0.50",
        "B):   0.55",
        "C):   0.60",
        "D):   0.65"
      ],
      "correctAnswer": "B",
      "explanation": "P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.8 + 0.7 − 0.95 = 0.55."
    },
    {
      "id": "c11-math-14-mcq-22",
      "question": "A 4-digit number lock on a suitcase opens with a code of 4 distinct digits from 0 to 9. The probability of getting the right sequence on first attempt is:",
      "options": [
        "A):   1 / 10000",
        "B):   1 / 5040",
        "C):   1 / 720",
        "D):   1 / 210"
      ],
      "correctAnswer": "B",
      "explanation": "Total permutations = ¹⁰P₄ = 10 × 9 × 8 × 7 = 5040. Probability = 1/5040."
    },
    {
      "id": "c11-math-14-mcq-23",
      "question": "Out of 100 students, two sections of 40 and 60 are formed. What is the probability that two friends enter the same section?",
      "options": [
        "A):   16/33",
        "B):   17/33",
        "C):   1/2",
        "D):   2/5"
      ],
      "correctAnswer": "B",
      "explanation": "(⁴⁰C₂ + ⁶⁰C₂) / ¹⁰⁰C₂ = (780 + 1770) / 4950 = 2550 / 4950 = 17/33."
    },
    {
      "id": "c11-math-14-mcq-24",
      "question": "If P(not E or not F) = 0.25, what can be concluded about events E and F?",
      "options": [
        "A):   They are mutually exclusive",
        "B):   They are exhaustive",
        "C):   They are not mutually exclusive since P(E ∩ F) = 0.75 ≠ 0",
        "D):   P(E ∪ F) = 0.25"
      ],
      "correctAnswer": "C",
      "explanation": "P(E′ ∪ F′) = 1 − P(E ∩ F) = 0.25 ⇒ P(E ∩ F) = 0.75 ≠ 0, hence they are NOT mutually exclusive."
    },
    {
      "id": "c11-math-14-mcq-25",
      "question": "In a lottery where 6 numbers are chosen from 1 to 20, the probability of matching all 6 numbers fixed by the committee is:",
      "options": [
        "A):   1 / 38760",
        "B):   1 / 20000",
        "C):   1 / 116280",
        "D):   6 / 20"
      ],
      "correctAnswer": "A",
      "explanation": "Total combinations = ²⁰C₆ = (20 × 19 × 18 × 17 × 16 × 15) / 720 = 38760. Probability = 1/38760."
    }
  ];
}

module.exports = {
  buildOverview,
  buildMCQs
};
