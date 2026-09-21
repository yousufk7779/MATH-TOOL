# Class 8 Mathematics — Master Blueprint & Gold Standards

This document serves as the permanent, authoritative blueprint for **Class 8 Mathematics** across all chapters. Whenever creating or updating Class 8 Mathematics content, ALWAYS adhere strictly to these core rules and standard specifications.

---

## 1. The 7 Core Directives (Mandatory)

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
     - **Main Question Titles:** `<h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 8px 0;">Question 1</h3>`
     - **Sub-Parts & Roman Numerals:** `<b style="color: ${themeColor}; font-size: 16px;">(i)</b>`, `<b style="color: ${themeColor}; font-size: 16px;">(ii)</b>`, `<b style="color: ${themeColor};">(a)</b>`
     - **Step Labels & Given Headings:** `<b style="color: ${themeColor};">Given:</b>`, `<b style="color: ${themeColor};">Step 1:</b>`, `<b style="color: ${themeColor};">Step 2:</b>`
     - **Card Left Accent Border:** `border-left: 3.5px solid ${themeColor};`
   - Never leave question numbers or sub-parts in default white or generic grey.

5. **Student-Friendly, Crystal-Clear & Concise Solutions (Easy Steps)**:
   - Solutions must be tailored specifically for Class 8 students: intuitive, simple, and encouraging.
   - **Not Too Long:** Avoid unnecessary philosophical essays or cluttered text walls. Keep explanations direct, crisp, and to the point.
   - **Clear 3-Tier Solution Structure:**
     - **Given / Equation:** Clear starting data or algebraic expression.
     - **Step-by-Step Working:** Every calculation step broken down with a concise reason in brackets (e.g., `[Transposing +7 to RHS → -7]`, `[L.C.M of 3 and 5 = 15]`, `[Dividing both sides by 2]`).
     - **Answer Box:** Final answer cleanly highlighted inside a dedicated high-contrast colored box.
   - **Proper Math Typography:**
     - Always use `<sup>2</sup>`, `<sup>3</sup>` for powers (zero raw carets `^`).
     - Mention property/formula badges where applicable (e.g., *Distributive Property*, *Cross-Multiplication*, *Pythagoras Theorem*).

6. **Exact Figures & Geometric Diagrams (Pure White BG & Zero Overlapping)**:
   - For all geometry, mensuration, and data handling questions:
     - **Pure White Background (`#FFFFFF`):** High contrast, crisp visibility inside a sleek dark card wrapper.
     - **Zero Overlapping:** Vertex labels ($A, B, C, D$), angle measurements ($90^\circ, 60^\circ$), dimension indicators ($12\text{ cm}, 5\text{ m}$), and arrow markings must have generous spacing/coordinates so they NEVER collide with lines, arcs, or other text.
     - **Clean Responsive SVG:** Vectors scale sharply across all mobile resolutions.

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

---

## 2. Standard Screen Structure (3 Dedicated Tabs)

1. **Tab 1: Overview (Concept Guide & Formulas)**:
   - Quick Summary & Basic Definitions card.
   - Core concepts explained with simple everyday intuitions.
   - Important properties & identities summary box (e.g. Closure, Commutative, Associative, Distributive).
   - Chapter Master Formula / Rule Cheat Sheet.

2. **Tab 2: Solutions (Exercise-by-Exercise Sub-Tabs)**:
   - Horizontal sub-tabs for each exercise: `Exercise X.1`, `Exercise X.2`, etc.
   - Every question contained in an individual card with distinct borders.
   - Question header and sub-parts highlighted in `themeColor`.

3. **Tab 3: MCQs (Interactive Quiz)**:
   - 10 to 15 kid-friendly, engaging MCQs per chapter.
   - Evenly distributed options (`A`, `B`, `C`, `D`).
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
}
.frac .den {
  padding: 1px 4px;
}
.q-text {
  font-size: 15.5px;
  color: #F1F5F9;
  line-height: 2.1;
  margin-bottom: 16px;
}
.sub-q {
  font-size: 15.5px;
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 2.3;
}
.sol-step {
  font-size: 15px;
  color: #E2E8F0;
  line-height: 2.35;
}
.sol-step div {
  margin-top: 8px;
  margin-bottom: 8px;
}
```

```html
<!-- Example of stacked fraction -->
<span class="frac"><span class="num">3</span><span class="den">7</span></span>
```

### Question-Solution Card Structure (With Theme Color, Spacing & Sub-parts):
```html
<div style="background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(${themeColor}, 0.35); border-radius: 12px; padding: 16px; margin-bottom: 24px;">
  <!-- Question Header with Theme Color -->
  <div style="font-size: 17.5px; font-weight: 700; color: ${themeColor}; margin-bottom: 10px;">
    Question 1
  </div>
  
  <!-- Full Question Statement with 2.1 line-height -->
  <div style="font-size: 15.5px; color: #F1F5F9; line-height: 2.1; margin-bottom: 16px; text-align: justify;">
    Using appropriate properties, find:
  </div>

  <!-- Sub-Part (i) with Theme Color -->
  <div style="margin-top: 18px; padding-top: 18px; border-top: 1px dashed rgba(${themeColor}, 0.2);">
    <div style="font-size: 15.5px; color: #FFFFFF; line-height: 2.3; margin-bottom: 12px;">
      <b style="color: ${themeColor}; font-size: 16px;">(i)</b> 
      -<span class="frac"><span class="num">2</span><span class="den">3</span></span> &times; 
      <span class="frac"><span class="num">3</span><span class="den">5</span></span> + 
      <span class="frac"><span class="num">5</span><span class="den">2</span></span> - 
      <span class="frac"><span class="num">3</span><span class="den">5</span></span> &times; 
      <span class="frac"><span class="num">1</span><span class="den">6</span></span>
    </div>
    
    <!-- Solution Box with generous padding & line spacing -->
    <div style="background: rgba(0, 0, 0, 0.32); border-left: 3.5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin-top: 12px;">
      <div style="font-size: 14.5px; font-weight: 700; color: #4DD0E1; margin-bottom: 10px;">
        💡 Solution:
      </div>
      <div style="font-size: 15px; color: #E2E8F0; line-height: 2.35;">
        <div><b style="color: ${themeColor};">Step 1:</b> Rearrange terms using Commutative Property:</div>
        <div style="margin: 8px 0; padding-left: 12px;">= ...</div>
        <div><b style="color: ${themeColor};">Step 2:</b> Take common factor using Distributive Property:</div>
        <div style="margin: 8px 0; padding-left: 12px;">= ...</div>
      </div>
      
      <!-- Final Answer Box -->
      <div style="background: rgba(76, 175, 80, 0.15); border: 1.5px solid #4CAF50; border-radius: 8px; padding: 8px 14px; margin-top: 14px; display: inline-block; line-height: 1.8;">
        <span style="color: #A5D6A7; font-weight: 700; font-size: 14px;">✓ Final Answer: </span>
        <span style="color: #FFFFFF; font-weight: 700; font-size: 15px;">2</span>
      </div>
    </div>
  </div>
</div>
```

### Number Lines & Geometric Figure Card Structure (Zero Cut-Off Guarantee):
> [!IMPORTANT]
> **NO `min-width` on SVGs:** `min-width` forces horizontal overflow and clips left/right arrows on mobile viewports.
> **Full Visibility Rules:**
> 1. Use `width="100%"` and `height="auto"` on `<svg>` with responsive `viewBox`.
> 2. The `.diagram-wrapper` must be `display: block; width: 100%; box-sizing: border-box; overflow: hidden;`.
> 3. Provide at least 25px - 50px padding between the outer axis endpoints/arrows and the viewBox boundaries so arrows and labels are 100% visible on all mobile screens.

```html
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(${themeColor}, 0.4); border-radius: 10px; padding: 14px; margin: 16px 0; text-align: center;">
  <div style="display: block; background: #FFFFFF; border-radius: 8px; padding: 10px 8px; margin: 0 auto; width: 100%; box-sizing: border-box; overflow: hidden; box-shadow: 0 3px 12px rgba(0,0,0,0.25);">
    <!-- Clean responsive SVG with generous left/right padding inside viewBox -->
    <svg viewBox="0 0 540 105" width="100%" height="auto" style="display: block; width: 100%; max-width: 100%;">
      <!-- Markers, Axis Lines & Point Labels -->
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 13.5px; text-align: center; margin-top: 10px; font-weight: 500;">
    📍 Figure / Caption
  </div>
</div>
```

---

## 4. Class 8 NCERT Mathematics Chapters & Theme Color Palette

| Ch # | Chapter Title | Primary Theme Color | Accent Color |
| :---: | :--- | :---: | :---: |
| **1** | Rational Numbers | `#FF8C00` (Vibrant Orange) | `#FFB74D` |
| **2** | Linear Equations in One Variable | `#00C6FF` (Sky Cyan) | `#80D8FF` |
| **3** | Understanding Quadrilaterals | `#26C6DA` (Teal) | `#80DEEA` |
| **4** | Data Handling | `#9C27B0` (Purple) | `#CE93D8` |
| **5** | Square and Square Roots | `#4CAF50` (Emerald Green) | `#81C784` |
| **6** | Cube and Cube Roots | `#00E676` (Mint Green) | `#69F0AE` |
| **7** | Comparing Quantities | `#E91E63` (Rose Pink) | `#F48FB1` |
| **8** | Algebraic Expressions and Identities | `#3F51B5` (Indigo) | `#9FA8DA` |
| **9** | Mensuration | `#FF5722` (Deep Orange) | `#FF8A65` |
| **10** | Exponents and Powers | `#FDC830` (Amber Gold) | `#FFE082` |
| **11** | Direct and Inverse Proportions | `#00BCD4` (Aqua) | `#80DEEA` |
| **12** | Factorisation | `#AB47BC` (Amethyst) | `#CE93D8` |
| **13** | Introduction to Graphs | `#29B6F6` (Electric Blue) | `#81D4FA` |

---

## 5. Quality Checklist Before Merging Any Chapter

- [ ] `isHtmlView: true` is enabled in chapter definition.
- [ ] Every exercise in the chapter is mapped to a dedicated key in `htmlExercises` matching `exercises[i].id`.
- [ ] Zero questions omitted — total count matches the NCERT / Byju's reference PDF exactly.
- [ ] Every question statement is written out completely without truncation.
- [ ] **Stacked Fractions:** All fractions are strictly in vertical "a over b" format (`<span class="frac">...</span>`), zero inline `a/b`.
- [ ] **Theme Color Applied:** All main question headers, sub-parts `(i), (ii)`, step headings, and card left borders use `themeColor`.
- [ ] Solutions are step-by-step, simple for Class 8, not overly long, with clear calculation notes.
- [ ] All geometric / graphical figures have a clean `#FFFFFF` background with generous label margins and zero overlapping.
- [ ] Powers use `<sup>` tags (zero raw `^` carets).
