# Class 12 Mathematics — Master Blueprint & Gold Standards

This document serves as the permanent, authoritative blueprint for **Class 12 Mathematics** across all 13 chapters and 6 board units (JKBOSE & CBSE). Whenever creating or updating Class 12 Mathematics content, ALWAYS adhere strictly to these core rules, mathematical styling tokens, and standard specifications.

---

## 1. The 10 Core Directives (Mandatory)

1. **100% Web View Architecture (`isHtmlView: true`)**:
   - All chapters must be created using the high-performance HTML/CSS Web View model (`isHtmlView: true`).
   - Rich custom CSS guarantees crisp mathematical typography, stacked fractions, matrices, determinants, vector symbols, responsive coordinate/LPP charts, and high-contrast dark-mode cards.

2. **Zero Content Omission Guarantee (Verbatim Textbook Questions)**:
   - Every single question from every exercise and miscellaneous exercise in the NCERT textbook / BYJU'S curriculum must be included without abbreviation.
   - Complete question statements and all sub-parts `(i), (ii), (iii)...` must be written word-for-word before solving.

3. **Student-Friendly, Direct Solutions (NO Bulky Step Headers)**:
   - Eliminate verbose, robotic textbook filler like "Step 1: Write given values", "Step 2: Differentiating both sides".
   - Solutions must flow naturally, line-by-line using `&rArr;` with **concise bracketed algebraic reasons**:
     - `&rArr; 2x + 3y = 12 &nbsp;&nbsp; [Given]`
     - `&rArr; \frac{dy}{dx} = ... &nbsp;&nbsp; [Differentiating both sides w.r.t. x]`
     - `&rArr; I = \int u\,dv = ... &nbsp;&nbsp; [Applying Integration by Parts]`
     - `[Using identity: sin²x + cos²x = 1]`
     - `[Transposing terms to RHS]`

4. **Strict Vertical Stacked Fractions ("a over b" Format, Never Raw "a/b")**:
   - Raw slash fractions like `a/b`, `dy/dx`, or `(x+1)/(x-1)` in solution calculations are **strictly forbidden**.
   - Always format fractions using the vertical stacked component:
     ```html
     <span class="frac">
       <span class="num">numerator</span>
       <span class="den">denominator</span>
     </span>
     ```
   - In calculus:
     - Derivatives: `<span class="frac"><span class="num">dy</span><span class="den">dx</span></span>`
     - Second derivatives: `<span class="frac"><span class="num">d<sup>2</sup>y</span><span class="den">dx<sup>2</sup></span></span>`
     - Integrals: `&int; <span class="frac"><span class="num">1</span><span class="den">x<sup>2</sup> + a<sup>2</sup></span></span> dx`
   - Enforce `.sol-step { line-height: 2.35; }` and `.frac { margin: 2px 6px; line-height: 1.25; }` to prevent any vertical clumping.

5. **High-Definition Matrices & Determinants Typography**:
   - Matrices must never be written as flat ascii text or comma lists.
   - Use clean, styled inline-flex CSS tables with bracket borders:
     - **Matrix Container:** Enclosed with square brackets `[` `]`.
     - **Determinant Container:** Enclosed with vertical bars `|` `|`.
     - Cells must be centered with proper column and row padding.

6. **Vector Algebra & 3D Geometry Notation**:
   - Vectors: `<b>a&#8407;</b>` or `<b>a&#8407;</b> = <i>x</i><b>i&#770;</b> + <i>y</i><b>j&#770;</b> + <i>z</i><b>k&#770;</b>` (unit vectors with hats).
   - Dot Product: `<b>a&#8407; &middot; b&#8407;</b> = |<b>a&#8407;</b>||<b>b&#8407;</b>| cos &theta;`.
   - Cross Product: `<b>a&#8407; &times; b&#8407;</b> = |<b>a&#8407;</b>||<b>b&#8407;</b>| sin &theta; <b>n&#770;</b>`.
   - Magnitude: `|<b>a&#8407;</b>| = &radic;(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>)`.

7. **Linear Programming (LPP) & Probability Tables**:
   - **LPP Corner Point Method:** Clean high-contrast responsive table with columns `Corner Point (x, y)` and `Value of Objective Function Z = ax + by`, highlighting the Optimal Max/Min row in theme/green color.
   - **Probability Distributions:** Clean table showing random variable values $X$ and their probabilities $P(X)$, verifying $\sum P(X) = 1$.

8. **Chapter Theme Color Hierarchy & Green Final Answer Box**:
   - **Main Question Titles:** Theme color (e.g. `<div class="q-title" style="color: ${themeColor};">Question 1:</div>`).
   - **Question Statement:** Pure White `<div class="q-text" style="color: #FFFFFF; font-size: 15.5px; line-height: 2.1;">...</div>`.
   - **Sub-Part Labels:** Numbering in Theme Color `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`, problem text in `#FFFFFF`.
   - **Solution Card:** Dark container with left accent border in theme color (`border-left: 3.5px solid ${themeColor};`).
   - **Final Answer Box:** Crisp green box with `border: 1.5px solid #4CAF50;`:
     ```html
     <div class="ans-box">
       <span class="ans-label">✓ Answer: </span>
       <span class="ans-val">dy/dx = (x - 1)/(x + 1)</span>
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

10. **Zero Raw LaTeX / Markdown Remnants in HTML View (`$`, `\frac`, `\int`, `\text`)**:
    - MathJax is not active in HTML Web View. Raw LaTeX like `$\frac{a}{b}$` or `\text{...}` is strictly forbidden.
    - Always use semantic HTML tags (`<b>`, `<i>`, `&times;`, `&minus;`, `&radic;`, `&int;`, `<span class="frac">...</span>`, `&rArr;`).

---

## 2. Standard 3-Tab Architecture (Gold-Standard Model)

### Tab 1: Overview (Reference & Master Formula Cheat Sheet)
1. **Quick Glossary & Definitions Card:** Essential terms, domains, ranges, order/degree, definitions.
2. **Key Theorems & Properties:**
   - Relations (Reflexive, Symmetric, Transitive, Equivalence)
   - Matrix properties ($AB \neq BA$, $(AB)^T = B^T A^T$, $|AB| = |A||B|$, $A \cdot \text{adj}(A) = |A|I$)
   - Calculus standard derivative rules & 20+ integral formulas table.
3. **Master Formula & Identity Cheat Sheet:** End-of-overview full formula summary with stacked fractions.
4. **Standalone Crisp SVG Diagrams:** Trigonometric branches, function mappings (one-one, onto), curves, area under curve, 3D coordinate octants, LPP feasible region graphs with `#FFFFFF` canvas inside sleek dark cards (zero duplicate top titles).

### Tab 2: Solutions (Exercise-by-Exercise Sub-Tabs)
- Individual horizontal sub-tab per exercise (`Exercise X.1`, `Exercise X.2`... `Miscellaneous Exercise`).
- Every question contained in an individual `.q-card` with theme-colored left accent.
- Line-by-line algebraic solving using `&rArr;` with bracketed justifications.
- Final answer in a glowing green `.ans-box`.

### Tab 3: MCQs (25 Interactive Questions — Tiered Progression)
- Exactly **25 Smart MCQs** per chapter.
- **Tier 1 (Q1 to Q10 - Easy Recall):** Direct formulas, definitions, principal value branches, matrix orders, degrees of differential equations.
- **Tier 2 (Q11 to Q18 - Moderate Calculation):** 1-2 step numericals, determinant value evaluation, matrix multiplications, simple derivatives/integrals.
- **Tier 3 (Q19 to Q25 - Advance / Board & CUET/JEE Level):** Higher-order derivations, probability Bayes' theorem, vector cross products, LPP maximums.
- Options formatted as `A):   `, `B):   `, `C):   `, `D):   `.
- **Instant Interactive Feedback:**
  - Correct &rarr; Green option + Green checkmark icon. Explanation hidden.
  - Wrong &rarr; Red option + Red cross icon + Explanation panel opens with bold theme-colored correct answer and white explanation text.
- Gamified Ultra HD Result Dashboard (Outstanding / Excellent / Good / Keep Practicing).

---

## 3. Class 12 Syllabus, JKBOSE 6 Units & Theme Colors

| JKBOSE Unit | Marks | NCERT Chapter | Chapter Name | Theme Color | Accent Color | Current Status |
|---|:---:|:---:|---|:---:|:---:|:---:|
| **Unit I: Relations & Functions** | **08 Marks** | **Ch 1** | **Relations and Functions** | `#FF512F` | `#FF8A65` | ✅ Complete (Gold Standard) |
| | | **Ch 2** | **Inverse Trigonometric Functions** | `#00C6FF` | `#80D8FF` | ✅ Complete (Gold Standard) |
| **Unit II: Algebra** | **10 Marks** | **Ch 3** | **Matrices** | `#7C4DFF` | `#B388FF` | ✅ Complete (Gold Standard) |
| | | **Ch 4** | **Determinants** | `#FF9100` | `#FFB74D` | ✅ Complete (Gold Standard) |
| **Unit III: Calculus** | **35 Marks** | **Ch 5** | **Continuity and Differentiability** | `#00E676` | `#69F0AE` | ✅ Complete (Gold Standard) |
| *(Highest Weightage!)* | | **Ch 6** | **Application of Derivatives** | `#FF007F` | `#FF80AB` | ✅ Complete (Gold Standard) |
| | | **Ch 7** | **Integrals** | `#2979FF` | `#82B1FF` | ⏳ Up next tomorrow |
| | | **Ch 8** | **Application of Integrals** | `#FFD600` | `#FFE082` | ⏳ Pending |
| | | **Ch 9** | **Differential Equations** | `#E040FB` | `#EA80FC` | ⏳ Pending |
| **Unit IV: Vectors & 3D Geometry** | **14 Marks** | **Ch 10** | **Vector Algebra** | `#00E5FF` | `#18FFFF` | ⏳ Pending |
| | | **Ch 11** | **Three Dimensional Geometry** | `#FF3D00` | `#FF6E40` | ⏳ Pending |
| **Unit V: Linear Programming** | **05 Marks** | **Ch 12** | **Linear Programming** | `#00B0FF` | `#80D8FF` | ⏳ Pending |
| **Unit VI: Probability** | **08 Marks** | **Ch 13** | **Probability** | `#11998E` | `#38EF7D` | ⏳ Pending |
| **TOTAL THEORY** | **80 M** | | **All 13 Chapters** | | | **6/13 Finished** |

---

## 4. Reusable CSS Styles for Class 12 Mathematics

```css
/* Stacked Fraction */
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

/* Matrix & Determinant Grid Layouts */
.matrix-wrap {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin: 4px 6px;
  border-left: 2.5px solid currentColor;
  border-right: 2.5px solid currentColor;
  border-radius: 4px;
  padding: 2px 8px;
}
.det-wrap {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin: 4px 6px;
  border-left: 2px solid currentColor;
  border-right: 2px solid currentColor;
  padding: 2px 8px;
}
.matrix-table {
  border-collapse: collapse;
  text-align: center;
}
.matrix-table td {
  padding: 3px 8px;
  text-align: center;
  font-size: 14.5px;
  font-weight: 600;
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

## 5. Resume Trigger for Class 12 Mathematics
Whenever the user says:
> **"class 12 math chapter X karo"** OR **"class 12 maths continue karo"**

The assistant will:
1. Refer to this blueprint (`.agents/CLASS_12_MATH_BLUEPRINT.md`).
2. Read the user's provided BYJU'S PDF for Chapter X.
3. Extract all exact questions and sub-parts verbatim.
4. Construct student-friendly, direct solutions using `&rArr;`, stacked fractions, and concise reasons.
5. Create Tab 1 (Overview with Master Formula Cheat Sheet), Tab 2 (Exercise-by-Exercise Sub-Tabs), and Tab 3 (25 Tiered MCQs).
6. Verify with `npx tsc --noEmit` and present the completed chapter.
