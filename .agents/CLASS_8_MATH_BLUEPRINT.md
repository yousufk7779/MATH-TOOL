# Class 8 Mathematics — Master Blueprint & Gold Standards

This document serves as the permanent, authoritative blueprint for **Class 8 Mathematics** across all chapters. Whenever creating or updating Class 8 Mathematics content, ALWAYS adhere strictly to these core rules and standard specifications.

---

## 1. The 9 Core Directives (Mandatory)

1. **100% Web View Architecture (`isHtmlView: true`)**:
   - All chapters must be created using the high-performance HTML/CSS Web View model (`isHtmlView: true`).
   - Pure, custom-styled HTML ensures rich typography, stacked fractions, vibrant cards, dark-mode styling, and smooth scrolling without plain text limits.

2. **Full Question Statements & Zero-Omission Guarantee**:
   - Every single question from every exercise must be included without exception.
   - **Full Statements:** Write the complete, verbatim statement for every question. Never abbreviate, summarize, or omit word problems or instructions.
   - **All Sub-Parts:** Every sub-question `(i), (ii), (iii), (iv)...` must be explicitly numbered and fully stated before its solution.

3. **Strict Stacked Fractions ("a over b" Format, Never "a/b")**:
   - **Strictly Forbidden:** Raw horizontal slash fractions like `a/b`, `3/4`, `-5/7`, or `(2x+3)/(5x-2)`.
   - **Mandatory Format:** Fractions must ALWAYS be rendered in true vertical stacked format ("a over b") with numerator positioned directly above denominator separated by a crisp fraction bar line.
   - **Standard Helper / HTML Structure:**
     ```html
     <span class="frac">
       <span class="num">a</span>
       <span class="den">b</span>
     </span>
     ```
   - In template literals, use a concise helper function:
     ```javascript
     const frac = (n, d) => `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`;
     ```

4. **Chapter Theme Color For Questions & Sub-Parts**:
   - Every question header and sub-question part MUST strictly use the chapter's primary `themeColor`:
     - **Main Question Titles:** `<div class="q-title" style="color: ${themeColor}; font-size: 17.5px; font-weight: 700;">Question 1:</div>`
     - **Sub-Parts & Roman Numerals:** `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`, `<b style="color: ${themeColor}; font-size: 16px;">(ii)</b>`, `<b style="color: ${themeColor};">(a)</b>`
     - **Step Labels & Given Headings:** `<b style="color: ${themeColor};">Given:</b>`, `<b style="color: ${themeColor};">Finding x:</b>`
     - **Card Left Accent Border:** `border-left: 3.5px solid ${themeColor};`
   - Never leave question numbers or sub-parts in default white or generic grey.

5. **Student-Friendly, Crystal-Clear & Direct Concise Solutions (No Bulky Step Headers)**:
   - Solutions must be tailored specifically for Class 8 students: intuitive, simple, encouraging, and non-intimidating.
   - **Direct Algebraic Working (NO Bulky "Step 1:", "Step 2:" Headers):** Do not overwhelm students with repetitive verbose text headers like `Step 1: ...`, `Step 2: ...`. Write direct, elegant, line-by-line mathematical solutions using `&rArr;` with concise bracketed reasons (e.g., `[Transposing &minus;2 to RHS]`, `[By Cross-Multiplication]`, `[L.C.M of 3 and 15 = 15]`).
   - **Color Hierarchy:**
     - **Main Question Titles:** Theme color (e.g. `<div class="q-title" style="color: ${themeColor};">Question 1:</div>`).
     - **Question Statement:** Pure White `<div class="q-text" style="color: #FFFFFF; font-size: 15.5px; line-height: 2.1;">...</div>`.
     - **Sub-Part Labels:** Numbering in Theme Color `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`, followed by problem text in `#FFFFFF`.
     - **Solution Card:** Dark container with left accent border in theme color (`border-left: 3.5px solid ${themeColor};`).
     - **Final Answer Box:** Crisp green box with `border: 1.5px solid #4CAF50;` and `<span class="ans-label">✓ Final Answer: </span><span class="ans-val">...</span>`.

6. **Exact Figures & Geometric Diagrams (Pure White BG & Zero Overlapping)**:
   - For all geometry, mensuration, graphs, and data handling questions:
     - **Pure White Background (`#FFFFFF`):** High contrast, crisp visibility inside a sleek dark card wrapper.
     - **Zero Overlapping:** Vertex labels ($A, B, C, D$), angle measurements ($90^\circ, 60^\circ$), dimension indicators ($12\text{ cm}, 5\text{ m}$), and arrow markings must have generous spacing/coordinates so they NEVER collide with lines, arcs, or other text.
     - **Clean Responsive SVG:** Vectors scale sharply across all mobile resolutions.
     - **NO `min-width` on SVGs:** Use `width="100%"` and `height="auto"` on `<svg>` inside `.diagram-wrapper` with generous viewBox padding (minimum 25px - 50px).

7. **Dedicated Independent Tab For Each Exercise**:
   - Every exercise must be placed in its own separate sub-tab using `htmlExercises`.
   - **Data Structure:**
     ```typescript
     exercises: [
       { id: "ex1-1", name: "Exercise 1.1", questions: [] },
       { id: "ex1-2", name: "Exercise 1.2", questions: [] },
     ],
     htmlExercises: {
       "ex1-1": ex1_1HtmlContent,
       "ex1-2": ex1_2HtmlContent,
     }
     ```
   - This ensures instant loading, clean separation, and effortless navigation between exercises.

8. **Zero Raw LaTeX / Markdown Remnants in HTML View (`$`, `\text`, `\times`, `&text`)**:
   - In `isHtmlView: true`, MathJax is NOT automatically parsing raw LaTeX strings.
   - **Strictly Forbidden:** Writing raw LaTeX like `$\text{Central angle} \times 1.5$` or `&text{...}`. In JS template literals, `\t` gets escaped as a literal tab character, displaying broken artifacts like `$ext{...} imes 1.5$`.
   - **Mandatory Clean HTML:**
     - Always use standard semantic HTML tags: `<b>Central angle</b> &times; 1.5`, `<i>x</i>`, `<span class="frac">...</span>`, and `&rArr;`.
     - Probabilities: `<b>P(Event)</b> = <span class="frac"><span class="num">Favourable outcomes</span><span class="den">Total outcomes</span></span>`.
     - Powers and exponents: always use `<sup>2</sup>`, `<sup>3</sup>` (never raw `^`).

9. **Table Mobile Responsiveness & Text Anti-Wrap**:
   - In statistical and data tables (frequency tables, survey marks, languages, shopper tallies):
     - Always set `white-space: nowrap; font-weight: 700; text-align: left; padding-left: 12px; min-width: 105px;` on textual category/subject cells.
     - **Never allow words like "Mathematics" or "Social Science" to wrap or break into broken fragments like "Mathema" and "tics".**
     - Table wrapper `.table-card` must ALWAYS have `overflow-x: auto; -webkit-overflow-scrolling: touch;` so tables scroll smoothly on narrow mobile screens.

---

## 2. Standard Screen Structure (3 Dedicated Tabs)

1. **Tab 1: Overview (Concept Guide & Formulas)**:
   - Quick Summary & Basic Definitions card.
   - Core concepts explained with simple everyday intuitions.
   - Important properties & identities summary box (e.g. Closure, Commutative, Associative, Distributive, Histograms, Central Angles).
   - Chapter Master Formula / Rule Cheat Sheet.

2. **Tab 2: Solutions (Exercise-by-Exercise Sub-Tabs)**:
   - Horizontal sub-tabs for each exercise: `Exercise X.1`, `Exercise X.2`, etc.
   - Every question contained in an individual card with distinct borders.
   - Question header and sub-parts highlighted in `themeColor`.

3. **Tab 3: MCQs (Interactive Quiz)**:
   - 10 to 15 kid-friendly, engaging MCQs per chapter.
   - Evenly distributed options (`A`, `B`, `C`, `D`).
   - Format: `A):   `, `B):   `, `C):   `, `D):   `.
   - Instant Green (correct) / Red (wrong with explanation) interactive feedback.
   - Gamified result summary dashboard.

---

## 3. UI Component Specs & Math Styling

### Stacked Fraction CSS & Vertical Line Spacing Standards:
```css
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
.q-text {
  font-size: 15.5px;
  color: #FFFFFF;
  line-height: 2.1;
  margin-bottom: 14px;
  font-weight: 500;
  text-align: left !important;
}
.sub-q {
  font-size: 15.5px;
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 2.3;
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
.reason {
  color: #94A3B8;
  font-size: 13.5px;
  font-style: italic;
  display: inline-block;
  margin-left: 8px;
}
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
.table-card {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 10px 8px;
  margin: 16px 0;
  overflow-x: auto;
  box-shadow: 0 3px 12px rgba(0,0,0,0.25);
  -webkit-overflow-scrolling: touch;
}
.styled-table {
  width: 100%;
  min-width: 290px;
  border-collapse: collapse;
  color: #0F172A;
  font-size: 13.5px;
  text-align: center;
}
.styled-table th {
  background: #00B8D4;
  color: #FFFFFF;
  font-weight: 700;
  padding: 9px 8px;
  border: 1px solid #CBD5E1;
  font-size: 13.5px;
  white-space: nowrap;
}
.styled-table td {
  padding: 8px 6px;
  border: 1px solid #CBD5E1;
  font-weight: 500;
  font-size: 13px;
}
.styled-table td.col-label {
  font-weight: 700;
  white-space: nowrap;
  text-align: left;
  padding-left: 12px;
}
```

---

## 4. Class 8 NCERT Mathematics Chapters & Theme Color Palette

| Ch # | Chapter Title | Primary Theme Color | Accent Color |
| :---: | :--- | :---: | :---: |
| **1** | Rational Numbers | `#FF8C00` (Vibrant Orange) | `#FFB74D` |
| **2** | Linear Equations in One Variable | `#00C6FF` (Sky Cyan) | `#80D8FF` |
| **3** | Understanding Quadrilaterals | `#FF1744` (Crimson Red) | `#FF8A80` |
| **4** | Practical Geometry | `#7C4DFF` (Royal Violet) | `#B388FF` |
| **5** | Data Handling | `#84CC16` (Electric Lime) | `#A3E635` |
| **6** | Squares and Square Roots | `#FF007F` (Hot Magenta) | `#FF80AB` |
| **7** | Cubes and Cube Roots | `#00E676` (Mint Green) | `#69F0AE` |
| **8** | Comparing Quantities | `#E91E63` (Rose Pink) | `#F48FB1` |
| **9** | Algebraic Expressions and Identities | `#3F51B5` (Indigo) | `#9FA8DA` |
| **10** | Mensuration | `#FF5722` (Deep Orange) | `#FF8A65` |
| **11** | Exponents and Powers | `#FDC830` (Amber Gold) | `#FFE082` |
| **12** | Direct and Inverse Proportions | `#00897B` (Deep Sea Teal) | `#80CBC4` |
| **13** | Factorisation | `#AB47BC` (Amethyst) | `#CE93D8` |
| **14** | Introduction to Graphs | `#2979FF` (Cobalt Royal Blue) | `#82B1FF` |

---

## 5. Quality Checklist Before Merging Any Chapter

- [ ] `isHtmlView: true` is enabled in chapter definition.
- [ ] Every exercise in the chapter is mapped to a dedicated key in `htmlExercises` matching `exercises[i].id`.
- [ ] Zero questions omitted — total count matches the NCERT / reference PDF exactly.
- [ ] Every question statement is written out completely in Pure White (`#FFFFFF`).
- [ ] **Stacked Fractions:** All fractions are strictly in vertical "a over b" format (`<span class="frac">...</span>`), zero inline `a/b`.
- [ ] **Theme Color Applied:** All main question headers (`Question X:`), sub-parts `(i), (ii)`, and card left borders use `themeColor`.
- [ ] **Direct Algebraic Solutions:** Zero bulky `Step 1:`, `Step 2:` headers. Direct line-by-line algebraic steps (`&rArr;`) with concise reasons in brackets.
- [ ] **Crisp Green Answer Box:** Every question concludes with a green-bordered answer box (`border: 1.5px solid #4CAF50`).
- [ ] All geometric / graphical figures have a clean `#FFFFFF` background with generous label margins and zero overlapping.
- [ ] Powers use `<sup>` tags (zero raw `^` carets).
- [ ] **Zero Raw LaTeX:** Absolutely no unparsed `$\text{...}$`, `&text`, or `\times` remnants.
- [ ] **Table Anti-Wrap:** Textual column values have `white-space: nowrap;` and `min-width` so long words never break.
