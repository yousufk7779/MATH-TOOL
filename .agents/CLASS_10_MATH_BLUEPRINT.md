# Class 10 Mathematics — Master Blueprint & Gold Standards

This document serves as the permanent, authoritative blueprint for **Class 10 Mathematics** across all 14 chapters. Whenever creating or upgrading Class 10 Mathematics content, ALWAYS adhere strictly to these core rules and standard specifications.

---

## 1. The 9 Core Directives (Mandatory)

1. **100% Web View Architecture (`isHtmlView: true`)**:
   - All Class 10 chapters must be built using the high-performance HTML/CSS Web View model (`isHtmlView: true`).
   - Rich dark-mode typography, stacked fractions, luxury cards, and responsive SVGs.

2. **Full Question Statements & Zero-Omission Guarantee**:
   - **Zero Omission:** Every single question and example from every exercise must be included verbatim.
   - **Full Context:** All word problems, algebraic equations, geometry problem statements, and real-life scenarios must be written out completely in Pure White (`#FFFFFF`). Never summarize or skip sub-parts `(i), (ii), (iii)...`.

3. **Strict Stacked Fractions ("a over b" Format, Never "a/b")**:
   - **Strictly Forbidden:** Raw horizontal slash fractions like `a/b`, `p/q`, `1/2`, or `(a+b)/c`.
   - **Mandatory Format:** Fractions must ALWAYS be rendered in true vertical stacked format ("a over b"):
     ```html
     <span class="frac">
       <span class="num">a</span>
       <span class="den">b</span>
     </span>
     ```
   - Standard line-height: `.sol-step { line-height: 2.35; }`, math row margin: `8px 0;`, and `.frac { margin: 2px 6px; line-height: 1.25; }`.

4. **Chapter Theme Color & Visual Hierarchy**:
   - Primary `themeColor` matches the chapter's button gradient first color exactly.
   - Question Titles: `<div class="q-title" style="color: ${themeColor}; font-size: 17.5px; font-weight: 700;">Question X:</div>`
   - Sub-Parts: `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`
   - Card Left Accent Border: `border-left: 3.5px solid ${themeColor};`
   - Final Answer Box: Crisp Green Box (`border: 1.5px solid #4CAF50;`) with `<span class="ans-label">✓ Final Answer: </span><span class="ans-val">...</span>`.

5. **Student-Friendly, Direct Line-by-Line Algebraic Solutions (NO Bulky Step Headers)**:
   - Clean, direct algebraic steps using `&rArr;` with concise reasons in brackets (e.g., `[By Fundamental Theorem of Arithmetic]`, `[Since HCF(a, b) × LCM(a, b) = a × b]`, `[By Method of Contradiction]`).
   - No repetitive, intimidating "Step 1:", "Step 2:" paragraph titles.

6. **Exact High-Contrast Figures & SVGs (Pure White BG & Zero Overlapping)**:
   - Factor trees, coordinate axes, parabola curves, tangents to circles, geometric triangles, and 3D solids.
   - Clean `#FFFFFF` background enclosed in a sleek `.diagram-wrapper` with generous viewBox padding so endpoint labels and numbers never cut off on narrow screens.

7. **Dedicated Sub-Tabs for Each Exercise & Solved Examples**:
   - Every exercise and example set mapped to its own independent tab via `chapterData.exercises` and `chapterData.htmlExercises`:
     ```typescript
     exercises: [
       { id: "examples", name: "Examples", questions: [] },
       { id: "ex1-1", name: "Exercise 1.1", questions: [] },
       { id: "ex1-2", name: "Exercise 1.2", questions: [] },
     ],
     htmlExercises: {
       "examples": examplesHtml,
       "ex1-1": ex1_1Html,
       "ex1-2": ex1_2Html,
     }
     ```

8. **Zero Raw LaTeX / Markdown Remnants in HTML View (`$`, `\text`, `\times`, `&text`)**:
   - MathJax does not parse raw LaTeX inside HTML string views.
   - Always use standard semantic HTML tags: `<b>...</b>`, `<i>x</i>`, `&times;`, `&minus;`, `<span class="frac">...</span>`, `&radic;`, `&rArr;`.
   - Powers and exponents must use `<sup>2</sup>`, `<sup>n</sup>` (never raw `^`).

9. **Dedicated 3-Tab Architecture**:
   - **Tab 1: Overview** — Comprehensive concept summary, glossary, graphical intuitions, and Master Revision Formula Cheat Sheet.
   - **Tab 2: Solutions** — Exercise-by-exercise horizontal sub-tabs with all questions, sub-parts, and solved examples.
   - **Tab 3: MCQs** — 15 interactive quiz questions with `A):   `, `B):   `, `C):   `, `D):   `, instant green/red feedback, and score dashboard.

---

## 2. Class 10 NCERT Mathematics Chapters & Theme Color Palette

| Ch # | Chapter Title | Primary Theme Color | Button Gradient | Identity |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Real Numbers | `#E91E63` (Rose Pink) | `["#E91E63", "#C2185B"]` | 🌸 Deep Rose |
| **2** | Polynomials | `#00C853` (Vibrant Emerald) | `["#00C853", "#1B5E20"]` | 🌿 Emerald Green |
| **3** | Pair of Linear Equations in Two Variables | `#FFAB00` (Amber Gold) | `["#FFAB00", "#FF6D00"]` | 🍯 Amber Flame |
| **4** | Quadratic Equations | `#AA00FF` (Electric Purple) | `["#AA00FF", "#4A148C"]` | 🔮 Vivid Purple |
| **5** | Arithmetic Progressions | `#00B8D4` (Aqua Cyan) | `["#00B8D4", "#00838F"]` | 🩵 Aqua Cyan |
| **6** | Triangles | `#FF1744` (Crimson Red) | `["#FF1744", "#D50000"]` | 🔴 Bold Crimson |
| **7** | Coordinate Geometry | `#7C4DFF` (Royal Violet) | `["#7C4DFF", "#4A00E0"]` | 🟣 Royal Violet |
| **8** | Introduction to Trigonometry | `#FF6D00` (Tangerine Flame) | `["#FF6D00", "#E65100"]` | 🍊 Bright Tangerine |
| **9** | Some Applications of Trigonometry | `#2979FF` (Cobalt Blue) | `["#2979FF", "#1565C0"]` | 💎 Cobalt Blue |
| **10** | Circles | `#FFD600` (Sunflower Gold) | `["#FFD600", "#F57F17"]` | 🌻 Sunflower Gold |
| **11** | Areas Related to Circles | `#00BCD4` (Teal) | `["#00BCD4", "#006064"]` | 🌊 Deep Teal |
| **12** | Surface Areas and Volumes | `#FF5722` (Deep Orange) | `["#FF5722", "#D84315"]` | 🌋 Fiery Terracotta |
| **13** | Statistics | `#E040FB` (Neon Magenta) | `["#E040FB", "#8E24AA"]` | 💖 Neon Magenta |
| **14** | Probability | `#84CC16` (Electric Lime) | `["#84CC16", "#4D7C0F"]` | 🍏 Electric Lime |
