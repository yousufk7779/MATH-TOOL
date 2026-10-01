const { themeColor, accentColor, styleBlock, frac } = require('./ch7_common');

function makePascalsTriangleSvg() {
  const width = 440;
  const height = 220;
  const rows = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1]
  ];

  let rowsSvg = '';
  const rowH = 32;
  const startY = 30;

  rows.forEach((row, n) => {
    const y = startY + n * rowH;
    const numItems = row.length;
    const spacing = 46;
    const startX = width / 2 - ((numItems - 1) * spacing) / 2;

    row.forEach((val, r) => {
      const x = startX + r * spacing;
      rowsSvg += `
        <circle cx="${x}" cy="${y}" r="14" fill="#F0F9FF" stroke="${themeColor}" stroke-width="1.6" />
        <text x="${x}" y="${y + 4.5}" fill="#0F172A" font-size="11.5" font-weight="800" text-anchor="middle" font-family="sans-serif">${val}</text>
      `;
    });
    // Row label on left
    rowsSvg += `<text x="35" y="${y + 4}" fill="#64748B" font-size="10" font-weight="700" font-family="sans-serif">n = ${n}</text>`;
  });

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#FFFFFF" rx="8" />
      ${rowsSvg}
      <text x="${width / 2}" y="${height - 8}" fill="#334155" font-size="10.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Pascal's Identity: <sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r&minus;1</sub> = <sup>n+1</sup>C<sub>r</sub> (Each number is the sum of two above it)</text>
    </svg>
    <div class="diagram-caption">💡 Diagram 1: Pascal&rsquo;s Triangle Architecture &amp; Binomial Coefficients (n = 0 to 5)</div>
  </div>`;
}

function getChapter7Overview() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Hero Header -->
  <div style="background: linear-gradient(135deg, rgba(41, 121, 255, 0.22), rgba(21, 101, 192, 0.15)); border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <div style="font-size: 22px; font-weight: 800; color: ${themeColor}; margin-bottom: 6px;">
      ✦ Chapter 7: Binomial Theorem
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.55; max-width: 600px; margin: 0 auto;">
      Class 11 NCERT Mathematics &bull; The Architecture of Polynomial Powers &bull; General &amp; Middle Terms &bull; Master Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Core Foundations</div>
    <div class="q-text">
      The <b>Binomial Theorem</b> provides a definitive algebraic expansion for any non-negative integer power of a binomial sum (<i>a</i> + <i>b</i>)<sup><i>n</i></sup>, eliminating the need for tedious manual multi-bracket multiplications.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Principles &amp; Notations:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">The Binomial Expansion Theorem:</b> For any positive integer <i>n</i>:</div>
        <div style="padding-left: 12px; margin: 6px 0; color: #82B1FF; font-weight: 700;">
          (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> = <sup><i>n</i></sup>C<sub>0</sub> <i>a</i><sup><i>n</i></sup> + <sup><i>n</i></sup>C<sub>1</sub> <i>a</i><sup><i>n</i>&minus;1</sup> <i>b</i> + <sup><i>n</i></sup>C<sub>2</sub> <i>a</i><sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup> + ... + <sup><i>n</i></sup>C<sub><i>n</i></sub> <i>b</i><sup><i>n</i></sup> = &sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup>
        </div>
        <div>• <b style="color: ${themeColor};">Total Number of Terms:</b> An expansion of (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> contains exactly <b>(<i>n</i> + 1) terms</b> (one more than the index).</div>
        <div>• <b style="color: ${themeColor};">Symmetry of Coefficients:</b> Coefficients equidistant from the beginning and the end are equal: <b><sup><i>n</i></sup>C<sub><i>r</i></sub> = <sup><i>n</i></sup>C<sub><i>n</i>&minus;<i>r</i></sub></b>.</div>
        <div>• <b style="color: ${themeColor};">Sum of Exponents:</b> In every single term, the sum of the powers of <i>a</i> and <i>b</i> is constant and identically equal to <b><i>n</i></b> ((<i>n</i> &minus; <i>r</i>) + <i>r</i> = <i>n</i>).</div>
      </div>
    </div>
  </div>

  <!-- Pascal's Triangle Card -->
  <div class="q-card">
    <div class="q-title">✦ 2. Pascal&rsquo;s Triangle &amp; Combinatorial Geometry</div>
    <div class="q-text">
      The coefficients in the expansion of (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> can be arranged into an equilateral triangular array known as <b>Pascal&rsquo;s Triangle</b> (historically discovered in India by Pingala as <i>Meru Prastara</i>).
      <br/>Every interior entry is the exact arithmetic sum of the two numbers directly above it: <b><sup><i>n</i></sup>C<sub><i>r</i></sub> + <sup><i>n</i></sup>C<sub><i>r</i>&minus;1</sub> = <sup><i>n</i>+1</sup>C<sub><i>r</i></sub></b>.
    </div>

    <!-- Standalone Diagram Card 1 -->
    ${makePascalsTriangleSvg()}
  </div>

  <!-- General & Middle Terms Card -->
  <div class="q-card">
    <div class="q-title">✦ 3. The General Term &amp; Middle Term Rules</div>
    <div class="sol-box">
      <div class="sol-title">Formulas &amp; Rules of Thumb:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">(i) The General Term (T<sub><i>r</i>+1</sub>):</b></div>
        <div style="padding-left: 14px; color: #82B1FF; font-weight: 700;">
          T<sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup> &nbsp;&nbsp;(for 0 &le; <i>r</i> &le; <i>n</i>)
        </div>
        <div style="padding-left: 14px; font-size: 13.5px; color: #94A3B8;">To find the 5th term (T<sub>5</sub>), set <i>r</i> = 4; to find the 10th term, set <i>r</i> = 9.</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(ii) Middle Term Rules:</b></div>
        <div>• <b>Case 1: When <i>n</i> is EVEN:</b> The total number of terms (<i>n</i> + 1) is odd, so there is exactly <b>one middle term</b>:</div>
        <div style="padding-left: 14px; color: #CBD5E1;">Middle Term = (${frac('<i>n</i>', '2')} + 1)<sup>th</sup> term = <b>T<sub>${frac('<i>n</i>', '2')} + 1</sub></b></div>
        
        <div style="margin-top: 6px;">• <b>Case 2: When <i>n</i> is ODD:</b> The total number of terms (<i>n</i> + 1) is even, so there are <b>two middle terms</b>:</div>
        <div style="padding-left: 14px; color: #CBD5E1;">
          First Middle Term = (${frac('<i>n</i> + 1', '2')})<sup>th</sup> term = <b>T<sub>${frac('<i>n</i> + 1', '2')}</sub></b><br/>
          Second Middle Term = (${frac('<i>n</i> + 3', '2')})<sup>th</sup> term = <b>T<sub>${frac('<i>n</i> + 3', '2')}</sub></b>
        </div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(iii) Term Independent of <i>x</i> (Constant Term):</b></div>
        <div style="padding-left: 14px; color: #CBD5E1;">In expansions involving <i>x</i> and 1/<i>x</i>, write T<sub><i>r</i>+1</sub> with net power of <i>x</i> as <i>x</i><sup><i>f</i>(<i>r</i>)</sup>, then equate <b><i>f</i>(<i>r</i>) = 0</b> to solve for <i>r</i>.</div>
      </div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet Card -->
  <div class="q-card" style="border-color: ${themeColor};">
    <div class="q-title" style="color: ${themeColor}; font-size: 18.5px;">✦ 4. Master Revision Formula Cheat Sheet</div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b>Standard Expansion:</b> (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> = &sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup></div>
        <div>• <b>Alternating Expansion:</b> (<i>a</i> &minus; <i>b</i>)<sup><i>n</i></sup> = &sum;<sub><i>r</i>=0</sub><sup><i>n</i></sup> (&minus;1)<sup><i>r</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup></div>
        <div>• <b>Sum of Binomial Coefficients:</b> <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>1</sub> + <sup><i>n</i></sup>C<sub>2</sub> + ... + <sup><i>n</i></sup>C<sub><i>n</i></sub> = <b>2<sup><i>n</i></sup></b> &nbsp;(Putting <i>a</i> = 1, <i>b</i> = 1)</div>
        <div>• <b>Alternating Sum of Coefficients:</b> <sup><i>n</i></sup>C<sub>0</sub> &minus; <sup><i>n</i></sup>C<sub>1</sub> + <sup><i>n</i></sup>C<sub>2</sub> &minus; ... + (&minus;1)<sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>n</i></sub> = <b>0</b></div>
        <div>• <b>Even &amp; Odd Powers Cancellation Identities:</b></div>
        <div style="padding-left: 14px; color: #CBD5E1;">
          &ndash; (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> + (<i>a</i> &minus; <i>b</i>)<sup><i>n</i></sup> = 2 [<sup><i>n</i></sup>C<sub>0</sub> <i>a</i><sup><i>n</i></sup> + <sup><i>n</i></sup>C<sub>2</sub> <i>a</i><sup><i>n</i>&minus;2</sup> <i>b</i><sup>2</sup> + ...]<br/>
          &ndash; (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> &minus; (<i>a</i> &minus; <i>b</i>)<sup><i>n</i></sup> = 2 [<sup><i>n</i></sup>C<sub>1</sub> <i>a</i><sup><i>n</i>&minus;1</sup> <i>b</i> + <sup><i>n</i></sup>C<sub>3</sub> <i>a</i><sup><i>n</i>&minus;3</sup> <i>b</i><sup>3</sup> + ...]
        </div>
        <div>• <b>Term from End:</b> The <i>k</i><sup>th</sup> term from the end in (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> is the <b>(<i>n</i> &minus; <i>k</i> + 2)<sup>th</sup> term from the beginning</b>.</div>
      </div>
    </div>
  </div>
</div>
`;
}

const chapter7MCQs = [
  {
    id: "c11-math-7-mcq-1",
    question: "The total number of terms in the algebraic expansion of (a + b)ⁿ for any positive integer n is:",
    options: [
      "A):   n",
      "B):   2n",
      "C):   n − 1",
      "D):   n + 1"
    ],
    correctAnswer: "d",
    explanation: "Since r ranges from 0 to n in the summation formula ∑ ⁿCᵣ aⁿ⁻ʳ bʳ, there are exactly (n + 1) terms."
  },
  {
    id: "c11-math-7-mcq-2",
    question: "What is the sum of all binomial coefficients in the expansion of (1 + x)ⁿ?",
    options: [
      "A):   2ⁿ",
      "B):   2ⁿ⁻¹",
      "C):   n²",
      "D):   2n"
    ],
    correctAnswer: "a",
    explanation: "Setting x = 1 in the expansion gives (1 + 1)ⁿ = ⁿC₀ + ⁿC₁ + ... + ⁿCₙ = 2ⁿ."
  },
  {
    id: "c11-math-7-mcq-3",
    question: "The general term Tᵣ₊₁ in the expansion of (x − 2y)¹² is given by:",
    options: [
      "A):   ¹²Cᵣ x¹²⁻ʳ (2y)ʳ",
      "B):   (−1)ʳ ¹²Cᵣ x¹²⁻ʳ 2ʳ yʳ⁻¹",
      "C):   (−1)ʳ ¹²Cᵣ x¹²⁻ʳ 2ʳ yʳ",
      "D):   ¹²Cᵣ xʳ (−2y)¹²⁻ʳ"
    ],
    correctAnswer: "c",
    explanation: "Tᵣ₊₁ = ¹²Cᵣ x¹²⁻ʳ (−2y)ʳ = (−1)ʳ ¹²Cᵣ 2ʳ x¹²⁻ʳ yʳ."
  },
  {
    id: "c11-math-7-mcq-4",
    question: "If n is even, the number of middle terms in the expansion of (a + b)ⁿ is:",
    options: [
      "A):   2",
      "B):   1",
      "C):   0",
      "D):   Depends on the value of a and b"
    ],
    correctAnswer: "b",
    explanation: "When n is even, the total number of terms (n + 1) is odd, so there is exactly one central middle term at position (n/2 + 1)."
  },
  {
    id: "c11-math-7-mcq-5",
    question: "What is the coefficient of x⁵ in the expansion of (x + 3)⁸?",
    options: [
      "A):   56",
      "B):   216",
      "C):   1512",
      "D):   4032"
    ],
    correctAnswer: "c",
    explanation: "Tᵣ₊₁ = ⁸Cᵣ x⁸⁻ʳ 3ʳ. For x⁵, 8 - r = 5 ⇒ r = 3. Coefficient = ⁸C₃ × 3³ = 56 × 27 = 1512."
  },
  {
    id: "c11-math-7-mcq-6",
    question: "Which of the following is larger: (1.1)¹⁰⁰⁰⁰ or 1000?",
    options: [
      "A):   (1.1)¹⁰⁰⁰⁰",
      "B):   1000",
      "C):   Both are strictly equal",
      "D):   Cannot be determined without a calculator"
    ],
    correctAnswer: "a",
    explanation: "(1 + 0.1)¹⁰⁰⁰⁰ = 1 + 10000(0.1) + [positive terms] = 1 + 1000 + ... = 1001 + ... > 1000."
  },
  {
    id: "c11-math-7-mcq-7",
    question: "The value of (√3 + √2)⁴ − (√3 − √2)⁴ is equal to:",
    options: [
      "A):   24√6",
      "B):   40√6",
      "C):   80√6",
      "D):   40"
    ],
    correctAnswer: "b",
    explanation: "(a + b)⁴ − (a − b)⁴ = 8ab(a² + b²). For a = √3, b = √2: 8(√6)(3 + 2) = 40√6."
  },
  {
    id: "c11-math-7-mcq-8",
    question: "In the expansion of (x + 1/x)⁶, the term independent of x is:",
    options: [
      "A):   15",
      "B):   6",
      "C):   1",
      "D):   20"
    ],
    correctAnswer: "d",
    explanation: "Tᵣ₊₁ = ⁶Cᵣ x⁶⁻ʳ (1/x)ʳ = ⁶Cᵣ x⁶⁻²ʳ. For constant term, 6 - 2r = 0 ⇒ r = 3. Term = ⁶C₃ = 20."
  },
  {
    id: "c11-math-7-mcq-9",
    question: "For any positive integer n, 9ⁿ⁺¹ − 8n − 9 is always divisible by:",
    options: [
      "A):   16",
      "B):   32",
      "C):   128",
      "D):   64"
    ],
    correctAnswer: "d",
    explanation: "9ⁿ⁺¹ = (1 + 8)ⁿ⁺¹ = 1 + 8(n + 1) + 64k = 8n + 9 + 64k ⇒ 9ⁿ⁺¹ − 8n − 9 = 64k, which is divisible by 64."
  },
  {
    id: "c11-math-7-mcq-10",
    question: "The value of ∑ᵣ₌₀ⁿ 3ʳ ⁿCᵣ is identically equal to:",
    options: [
      "A):   3ⁿ",
      "B):   2²ⁿ",
      "C):   4ⁿ",
      "D):   3ⁿ⁺¹"
    ],
    correctAnswer: "c",
    explanation: "∑ᵣ₌₀ⁿ ⁿCᵣ 3ʳ = (1 + 3)ⁿ = 4ⁿ."
  },
  {
    id: "c11-math-7-mcq-11",
    question: "The middle term in the expansion of (x/3 + 9y)¹⁰ is:",
    options: [
      "A):   61236 x⁵ y⁵",
      "B):   252 x⁵ y⁵",
      "C):   30618 x⁵ y⁵",
      "D):   122472 x⁵ y⁵"
    ],
    correctAnswer: "a",
    explanation: "n = 10 (even). Middle term is 6th term (r = 5): T₆ = ¹⁰C₅ (x/3)⁵ (9y)⁵ = 252 × (x⁵/243) × 59049 y⁵ = 61236 x⁵ y⁵."
  },
  {
    id: "c11-math-7-mcq-12",
    question: "If the coefficient of x² in the expansion of (1 + x)ᵐ is 6, then the positive value of m is:",
    options: [
      "A):   3",
      "B):   4",
      "C):   5",
      "D):   6"
    ],
    correctAnswer: "b",
    explanation: "ᵐC₂ = 6 ⇒ m(m - 1)/2 = 6 ⇒ m² - m - 12 = 0 ⇒ (m - 4)(m + 3) = 0. Positive m = 4."
  },
  {
    id: "c11-math-7-mcq-13",
    question: "In the expansion of (1 + a)ᵐ⁺ⁿ, the coefficients of aᵐ and aⁿ are:",
    options: [
      "A):   In the ratio m : n",
      "B):   Unequal",
      "C):   Equal",
      "D):   Reciprocals of each other"
    ],
    correctAnswer: "c",
    explanation: "Coefficient of aᵐ is ᵐ⁺ⁿCₘ and coefficient of aⁿ is ᵐ⁺ⁿCₙ. By the complementary property ᵐ⁺ⁿCₘ = ᵐ⁺ⁿCₙ, they are equal."
  },
  {
    id: "c11-math-7-mcq-14",
    question: "If the coefficients of (r − 1)th, rth, and (r + 1)th terms in (x + 1)ⁿ are in ratio 1 : 3 : 5, then:",
    options: [
      "A):   n = 6, r = 2",
      "B):   n = 8, r = 4",
      "C):   n = 7, r = 4",
      "D):   n = 7, r = 3"
    ],
    correctAnswer: "d",
    explanation: "ⁿCᵣ₋₂ : ⁿCᵣ₋₁ : ⁿCᵣ = 1 : 3 : 5 gives n - 4r + 5 = 0 and 3n - 8r + 3 = 0, solving to n = 7 and r = 3."
  },
  {
    id: "c11-math-7-mcq-15",
    question: "The value of (96)³ evaluated using the Binomial Theorem is:",
    options: [
      "A):   884736",
      "B):   941192",
      "C):   884700",
      "D):   848736"
    ],
    correctAnswer: "a",
    explanation: "(100 - 4)³ = 1000000 - 3(10000)(4) + 3(100)(16) - 64 = 1000000 - 120000 + 4800 - 64 = 884736."
  },
  {
    id: "c11-math-7-mcq-16",
    question: "The 13th term in the expansion of (9x − 1/(3√x))¹⁸ is independent of x and equal to:",
    options: [
      "A):   12376",
      "B):   31824",
      "C):   14756",
      "D):   18564"
    ],
    correctAnswer: "d",
    explanation: "T₁₃ = ¹⁸C₁₂ (9x)⁶ (1/(3√x))¹² = ¹⁸C₆ × 3¹² x⁶ × (1/(3¹² x⁶)) = ¹⁸C₆ = 18564."
  },
  {
    id: "c11-math-7-mcq-17",
    question: "The coefficient of x⁵ in the product (1 + 2x)⁶ (1 − x)⁷ is:",
    options: [
      "A):   171",
      "B):   192",
      "C):   −21",
      "D):   150"
    ],
    correctAnswer: "a",
    explanation: "Summing cross-terms gives -21 + 420 - 2100 + 3360 - 1680 + 192 = 171."
  },
  {
    id: "c11-math-7-mcq-18",
    question: "If a and b are distinct integers, then (a − b) is always a factor of:",
    options: [
      "A):   aⁿ + bⁿ for all n",
      "B):   aⁿ − bⁿ for all positive integers n",
      "C):   Only when n is an even integer",
      "D):   Only when n is a prime number"
    ],
    correctAnswer: "b",
    explanation: "By expanding aⁿ = [(a - b) + b]ⁿ, all terms contain (a - b) except bⁿ, which cancels out: aⁿ - bⁿ = (a - b)k."
  },
  {
    id: "c11-math-7-mcq-19",
    question: "The value of (√2 + 1)⁶ + (√2 − 1)⁶ is:",
    options: [
      "A):   99",
      "B):   144",
      "C):   198",
      "D):   256"
    ],
    correctAnswer: "c",
    explanation: "2 [x⁶ + 15x⁴ + 15x² + 1] with x = √2 gives 2 [8 + 60 + 30 + 1] = 2(99) = 198."
  },
  {
    id: "c11-math-7-mcq-20",
    question: "In the expansion of (a + b)ⁿ, the first three terms are 729, 7290, and 30375. The value of n is:",
    options: [
      "A):   6",
      "B):   5",
      "C):   7",
      "D):   8"
    ],
    correctAnswer: "a",
    explanation: "T₁ = aⁿ = 729, T₂ = n aⁿ⁻¹ b = 7290, T₃ = n(n-1)/2 aⁿ⁻² b² = 30375. Solving yields a = 3, b = 5, n = 6."
  },
  {
    id: "c11-math-7-mcq-21",
    question: "The coefficient of a⁵b⁷ in (a − 2b)¹² is:",
    options: [
      "A):   101376",
      "B):   −792",
      "C):   −101376",
      "D):   −50688"
    ],
    correctAnswer: "c",
    explanation: "T₈ = ¹²C₇ a⁵ (−2b)⁷ = 792 × (−128) a⁵ b⁷ = −101376 a⁵ b⁷."
  },
  {
    id: "c11-math-7-mcq-22",
    question: "The value of (0.99)⁵ approximated using the first three terms of the binomial expansion is:",
    options: [
      "A):   0.949",
      "B):   0.951",
      "C):   0.950",
      "D):   0.960"
    ],
    correctAnswer: "b",
    explanation: "(1 - 0.01)⁵ ≈ 1 - 5(0.01) + 10(0.0001) = 1 - 0.05 + 0.001 = 0.951."
  },
  {
    id: "c11-math-7-mcq-23",
    question: "If the ratio of 5th term from beginning to 5th term from end in (⁴√2 + 1/⁴√3)ⁿ is √6 : 1, then n is:",
    options: [
      "A):   8",
      "B):   12",
      "C):   6",
      "D):   10"
    ],
    correctAnswer: "d",
    explanation: "The ratio reduces to 6^{(n-8)/4} = 6^{1/2} ⇒ (n - 8)/4 = 1/2 ⇒ n - 8 = 2 ⇒ n = 10."
  },
  {
    id: "c11-math-7-mcq-24",
    question: "If the coefficients of x² and x³ in (3 + ax)⁹ are equal, the value of a is:",
    options: [
      "A):   7/9",
      "B):   3/7",
      "C):   9/7",
      "D):   1/3"
    ],
    correctAnswer: "c",
    explanation: "⁹C₂ 3⁷ a² = ⁹C₃ 3⁶ a³ ⇒ 36 × 3 = 84a ⇒ 108 = 84a ⇒ a = 9/7."
  },
  {
    id: "c11-math-7-mcq-25",
    question: "The coefficient of xⁿ in (1 + x)²ⁿ compared to that in (1 + x)²ⁿ⁻¹ is:",
    options: [
      "A):   Twice as large",
      "B):   Half as large",
      "C):   Equal",
      "D):   Four times as large"
    ],
    correctAnswer: "a",
    explanation: "²ⁿCₙ = (2n)! / (n! n!) = 2 × (2n - 1)! / (n! (n - 1)!) = 2 × ²ⁿ⁻¹Cₙ."
  }
];

module.exports = {
  getChapter7Overview,
  chapter7MCQs
};
