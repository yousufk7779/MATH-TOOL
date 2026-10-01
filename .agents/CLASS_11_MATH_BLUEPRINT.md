# Class 11 Mathematics — Master Blueprint & Gold Standards

This document serves as the permanent, authoritative blueprint for **Class 11 Mathematics** across all 14 chapters and 5 board units (CBSE & JKBOSE). Whenever creating, upgrading, or expanding Class 11 Mathematics content, ALWAYS adhere strictly to these core rules, mathematical styling tokens, and standard specifications.

---

## 1. The 10 Core Directives (Mandatory)

1. **100% Web View Architecture (`isHtmlView: true`)**:
   - All chapters must be created using the high-performance HTML/CSS Web View model (`isHtmlView: true`).
   - Rich custom CSS guarantees crisp mathematical typography, stacked fractions, sets, intervals, permutations & combinations notation, binomial expansions, coordinate geometry formulas, limit definitions, statistical variance tables, and high-contrast dark-mode cards.

2. **Zero Content Omission Guarantee (Verbatim Textbook Questions)**:
   - Every single question from every exercise and miscellaneous exercise in the NCERT textbook / BYJU'S curriculum must be included without abbreviation.
   - Complete question statements and all sub-parts `(i), (ii), (iii)...` must be written word-for-word before solving.

3. **Student-Friendly, Direct Solutions (NO Bulky Step Headers)**:
   - Eliminate verbose, robotic textbook filler like "Step 1: Write given values", "Step 2: Apply formula".
   - Solutions must flow naturally, line-by-line using `&rArr;` with **concise bracketed algebraic reasons**:
     - `&rArr; 2x + 5 < 15 &nbsp;&nbsp; [Given inequality]`
     - `&rArr; 2x < 10 &nbsp;&nbsp; [Subtracting 5 from both sides]`
     - `&rArr; x < 5 &nbsp;&nbsp; [Dividing both sides by 2]`
     - `[Using identity: sin(A + B) = sin A cos B + cos A sin B]`
     - `[Applying Binomial Theorem for index n]`
     - `[By Fundamental Principle of Multiplication]`

4. **Strict Vertical Stacked Fractions ("a over b" Format, Never Raw "a/b")**:
   - Raw slash fractions like `a/b`, `3/4`, or `(x+1)/(x-1)` in solution calculations are **strictly forbidden**.
   - Always format fractions using the vertical stacked component:
     ```html
     <span class="frac">
       <span class="num">numerator</span>
       <span class="den">denominator</span>
     </span>
     ```
   - In algebra & calculus:
     - Derivatives: `<span class="frac"><span class="num">d</span><span class="den">dx</span></span> (x<sup>n</sup>) = n x<sup>n&minus;1</sup>`
     - Combinatorics: `<span class="frac"><span class="num">n!</span><span class="den">r!(n &minus; r)!</span></span>`
     - Statistics: `&sigma;<sup>2</sup> = <span class="frac"><span class="num">1</span><span class="den">N</span></span> &sum; f<sub>i</sub>(x<sub>i</sub> &minus; x̄)<sup>2</sup>`
   - Enforce `.sol-step { line-height: 2.35; }` and `.frac { margin: 2px 6px; line-height: 1.25; }` to prevent any vertical clumping.

5. **Sets, Relations, Intervals & Complex Numbers Typography**:
   - Set notation: `A = {x : x &isin; &naturals;, 1 &le; x &le; 10}`.
   - Intervals: `[a, b]` (closed), `(a, b)` (open), `[a, b)` (semi-closed).
   - Empty set: `&empty;` or `{ }`. Set operations: `&cup;` (union), `&cap;` (intersection), `&sub;` (subset), `&isin;` (belongs to).
   - Complex numbers: `z = a + ib`, with conjugate `z̄ = a &minus; ib` and modulus `|z| = &radic;(a<sup>2</sup> + b<sup>2</sup>)`.

6. **Permutations, Combinations & Binomial Expansion Notation**:
   - Factorials: `n! = n &times; (n &minus; 1) &times; ... &times; 1`.
   - Permutations: `<sup>n</sup>P<sub>r</sub> = <span class="frac"><span class="num">n!</span><span class="den">(n &minus; r)!</span></span>`.
   - Combinations: `<sup>n</sup>C<sub>r</sub> = <span class="frac"><span class="num">n!</span><span class="den">r!(n &minus; r)!</span></span>`.
   - General term of binomial expansion: `T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> a<sup>n&minus;r</sup> b<sup>r</sup>`.

7. **Straight Lines, Conics & 3D Geometry**:
   - Slope: `m = <span class="frac"><span class="num">y<sub>2</sub> &minus; y<sub>1</sub></span><span class="den">x<sub>2</sub> &minus; x<sub>1</sub></span></span> = tan &theta;`.
   - Perpendicular distance: `d = <span class="frac"><span class="num">|Ax<sub>1</sub> + By<sub>1</sub> + C|</span><span class="den">&radic;(A<sup>2</sup> + B<sup>2</sup>)</span></span>`.
   - 3D Distance: `d = &radic;((x<sub>2</sub> &minus; x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> &minus; y<sub>1</sub>)<sup>2</sup> + (z<sub>2</sub> &minus; z<sub>1</sub>)<sup>2</sup>)`.

8. **Chapter Theme Color Hierarchy & Green Final Answer Box**:
   - **Main Question Titles:** Theme color (e.g. `<div class="q-title" style="color: ${themeColor};">Question 1</div>`).
   - **Question Statement:** Pure White `<div class="q-text" style="color: #FFFFFF; font-size: 15.5px; line-height: 2.1;">...</div>`.
   - **Sub-Part Labels:** Numbering in Theme Color `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`, problem text in `#FFFFFF`.
   - **Solution Card:** Dark container with left accent border in theme color (`border-left: 3.5px solid ${themeColor};`).
   - **Final Answer Box:** Crisp green box with `border: 1.5px solid #4CAF50;`:
     ```html
     <div class="ans-box">
       <span class="ans-label">✓ Answer: </span>
       <span class="ans-val">{x : x &isin; ℝ, x &ge; 4} or [4, &infin;)</span>
     </div>
     ```

9. **Dedicated Independent Sub-Tabs For Each Exercise & Per-Tab Style Prepending**:
   - Every NCERT exercise + Miscellaneous Exercise must be organized in its own sub-tab via `chapterData.exercises` and `chapterData.htmlExercises`:
     ```typescript
     exercises: [
       { id: "ex1-1", name: "Exercise 1.1", questions: [] },
       { id: "ex1-2", name: "Exercise 1.2", questions: [] },
       { id: "misc", name: "Miscellaneous", questions: [] },
     ],
     htmlExercises: {
       "ex1-1": `${styleBlock}\n<div style="padding: 4px 2px;">...</div>`,
       "ex1-2": `${styleBlock}\n<div style="padding: 4px 2px;">...</div>`,
       "misc": `${styleBlock}\n<div style="padding: 4px 2px;">...</div>`,
     }
     ```
   - **CRITICAL PER-TAB STYLING GUARANTEE:** Every individual exercise HTML string in `htmlExercises` (as well as `htmlOverview`) **MUST strictly prepend the full `<style>...</style>` block at the very top**. When students tap between sub-tabs in `SolutionScreen.tsx`, the web view swaps HTML strings. Prepending the style block ensures theme colors, stacked fractions, and dark-card borders NEVER collapse or glitch on tab switching.

10. **Zero Raw LaTeX / Markdown Remnants in HTML View (`$`, `\frac`, `\text`)**:
    - MathJax is not active in HTML Web View. Raw LaTeX like `$\frac{a}{b}$` or `\text{...}` is strictly forbidden.
    - Always use semantic HTML tags (`<b>`, `<i>`, `&times;`, `&minus;`, `&radic;`, `&sum;`, `&isin;`, `&notin;`, `&cup;`, `&cap;`, `<span class="frac">...</span>`, `&rArr;`).

---

## 2. Standard 3-Tab Architecture (Gold-Standard Model)

### Tab 1: Overview (Reference & Master Formula Cheat Sheet)
1. **Quick Glossary & Definitions Card:** Essential terms, set classifications, domains, ranges, quadrant signs, conic parameters.
2. **Key Theorems & Properties:**
   - De Morgan's Laws for sets: `(A ∪ B)′ = A′ ∩ B′` and `(A ∩ B)′ = A′ ∪ B′`
   - Trigonometric transformations (Sum-to-product & product-to-sum identities)
   - Fundamental Principle of Counting and Pascal's identity: `ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ`
   - Conic sections table comparing standard Parabola, Ellipse, and Hyperbola
   - Calculus standard derivative rules (Power rule, Product rule, Quotient rule)
3. **Master Formula & Identity Cheat Sheet:** End-of-overview full formula summary with stacked fractions.
4. **Standalone Crisp SVG Diagrams:** Venn diagrams, ASTC quadrant circle, Argand plane, standard conics with foci/directrix, 3D coordinate octants with `#FFFFFF` canvas inside sleek dark cards (zero duplicate top titles).

### Tab 2: Solutions (Exercise-by-Exercise Sub-Tabs)
- Individual horizontal sub-tab per exercise (`Exercise X.1`, `Exercise X.2`... `Miscellaneous Exercise`).
- Every question contained in an individual `.q-card` with theme-colored left accent.
- Line-by-line algebraic solving using `&rArr;` with bracketed justifications.
- Final answer in a glowing green `.ans-box`.

### Tab 3: MCQs (25 Interactive Questions — Tiered Progression)
- Exactly **25 Smart MCQs** per chapter.
- **Tier 1 (Q1 to Q10 - Easy Recall):** Direct formulas, definitions, power set sizes, quadrant signs of trig functions, degree-to-radian conversions, standard form of conics.
- **Tier 2 (Q11 to Q18 - Moderate Calculation):** 1-2 step calculations, evaluate ⁿCᵣ / ⁿPᵣ, modulus of complex number, equation of line through two points, simple limit evaluation.
- **Tier 3 (Q19 to Q25 - Advance / Board & CUET/JEE Level):** General term in binomial expansion, conic eccentricity problems, standard deviation from grouped data, trigonometric identities, derivative from first principles.
- Options formatted strictly as `A):   `, `B):   `, `C):   `, `D):   `.
- **Instant Interactive Feedback:**
  - Correct &rarr; Green option + Green checkmark icon. Explanation hidden.
  - Wrong &rarr; Red option + Red cross icon + Explanation panel opens with bold theme-colored correct answer and white explanation text.
- Gamified Ultra HD Result Dashboard (Outstanding / Excellent / Good / Keep Practicing).

---

## 3. Class 11 Syllabus, 5 Board Units & Theme Colors

| Unit | Marks | NCERT Chapter | Chapter Name | Theme Color | Accent Color | Sub-Tabs / Exercises |
|---|:---:|:---:|---|:---:|:---:|---|
| **Unit I: Sets & Functions** | **23 Marks** | **Ch 1** | **Sets** | `#FF512F` | `#FF8A65` | Ex 1.1, 1.2, 1.3, 1.4, 1.5, Misc |
| | | **Ch 2** | **Relations and Functions** | `#00C6FF` | `#80D8FF` | Ex 2.1, 2.2, 2.3, Misc |
| | | **Ch 3** | **Trigonometric Functions** | `#7C4DFF` | `#B388FF` | Ex 3.1, 3.2, 3.3, 3.4, Misc |
| **Unit II: Algebra** | **25 Marks** | **Ch 4** | **Complex Numbers & Quadratic Eqns** | `#FF9100` | `#FFB74D` | Ex 4.1, 4.2, Misc |
| | | **Ch 5** | **Linear Inequalities** | `#00E676` | `#69F0AE` | Ex 5.1, 5.2, Misc |
| | | **Ch 6** | **Permutations and Combinations** | `#FF007F` | `#FF80AB` | Ex 6.1, 6.2, 6.3, 6.4, Misc |
| | | **Ch 7** | **Binomial Theorem** | `#2979FF` | `#82B1FF` | Ex 7.1, 7.2, Misc |
| | | **Ch 8** | **Sequences and Series** | `#FDC830` | `#FFE082` | Ex 8.1, 8.2, 8.3, Misc |
| **Unit III: Coordinate Geometry**| **12 Marks** | **Ch 9** | **Straight Lines** | `#E040FB` | `#EA80FC` | Ex 9.1, 9.2, 9.3, Misc |
| | | **Ch 10** | **Conic Sections** | `#00E5FF` | `#18FFFF` | Ex 10.1, 10.2, 10.3, 10.4, Misc |
| | | **Ch 11** | **3D Geometry** | `#FF3D00` | `#FF6E40` | Ex 11.1, 11.2, 11.3, Misc |
| **Unit IV: Calculus** | **08 Marks** | **Ch 12** | **Limits and Derivatives** | `#00B0FF` | `#80D8FF` | Ex 12.1, 12.2, Misc |
| **Unit V: Stats & Probability** | **12 Marks** | **Ch 13** | **Statistics** | `#11998E` | `#38EF7D` | Ex 13.1, 13.2, Misc |
| | | **Ch 14** | **Probability** | `#8E2DE2` | `#B388FF` | Ex 14.1, 14.2, 14.3, Misc |
| **TOTAL THEORY** | **80 M** | | **All 14 Chapters** | | | **100% Comprehensive Coverage** |

---

## 4. Reusable CSS Styles for Class 11 Mathematics

```css
/* Stacked Fraction (Vertical a over b) */
.frac {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  text-align: center;
  font-size: 0.95em;
  margin: 2px 6px;
  line-height: 1.25;
}
.frac .num {
  border-bottom: 1.5px solid currentColor;
  padding: 1px 4px;
  text-align: center;
}
.frac .den {
  padding: 1px 4px;
  text-align: center;
}

/* Question & Card Containers */
.q-card {
  background: rgba(15, 23, 42, 0.75);
  border: 1.5px solid rgba(var(--theme-rgb), 0.35);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.25);
}
.q-title {
  font-size: 17.5px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.q-text {
  font-size: 15.5px;
  color: #FFFFFF;
  line-height: 2.1;
  margin-bottom: 14px;
  font-weight: 500;
  text-align: left !important;
}

/* Solutions Box */
.sol-box {
  background: rgba(0, 0, 0, 0.35);
  border-left: 3.5px solid var(--theme-color);
  border-radius: 8px;
  padding: 14px 16px;
  margin-top: 12px;
  text-align: left !important;
}
.sol-step {
  font-size: 15px;
  color: #E2E8F0;
  line-height: 2.35;
  text-align: left !important;
}
.sol-step div {
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: left !important;
}

/* Algebraic Reason Badge */
.reason {
  color: #94A3B8;
  font-size: 13.5px;
  font-style: italic;
  display: inline-block;
  margin-left: 8px;
}

/* Final Answer Box */
.ans-box {
  background: rgba(76, 175, 80, 0.15);
  border: 1.5px solid #4CAF50;
  border-radius: 8px;
  padding: 8px 14px;
  margin-top: 14px;
  display: inline-block;
  line-height: 1.8;
}
.ans-label {
  color: #A5D6A7;
  font-weight: 700;
  font-size: 14px;
}
.ans-val {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
}

/* Standalone Crisp White Diagram Card */
.diagram-wrapper {
  display: block;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 10px 8px;
  margin: 12px auto;
  width: 100%;
  max-width: 440px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0,0,0,0.25);
  text-align: center;
}
.diagram-wrapper svg {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.diagram-caption {
  color: #CBD5E1;
  font-size: 13.5px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 12px;
  font-weight: 500;
}
```

---

## 5. Resume Trigger for Class 11 Mathematics
Whenever the user says:
> **"class 11 math chapter X karo"** OR **"class 11 maths continue karo"**

The assistant will:
1. Refer to this blueprint (`.agents/CLASS_11_MATH_BLUEPRINT.md`).
2. Read the user's provided NCERT / BYJU'S PDF for Chapter X.
3. Extract all exact questions and sub-parts verbatim (Zero Omission Guarantee).
4. Construct student-friendly, direct solutions using `&rArr;`, stacked fractions (`<span class="frac">...</span>`), and concise reasons.
5. Create Tab 1 (Overview with Master Formula Cheat Sheet), Tab 2 (Exercise-by-Exercise Sub-Tabs), and Tab 3 (25 Tiered MCQs).
6. Verify with `npx tsc --noEmit` and present the completed chapter.
