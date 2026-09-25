# Class 10 Mathematics Master Blueprint & Upgrade Strategy

## 1. Core Mission & Philosophy
Class 10 Mathematics is already fully solved in the app. The upgrade mission is to transform existing chapters into the **Gold-Standard Ultra Model** established by Class 8 Mathematics, maintaining 100% integrity of all existing questions while dramatically improving readability, design, and mathematical clarity.

---

## 2. The Golden Rules (Non-Negotiable)

1. **Zero Content Omission Guarantee:**
   - Every single question, sub-part `(i), (ii), (iii)...`, and solved example present in the app must be preserved verbatim.
   - Absolutely NO questions or examples are to be deleted or skipped.

2. **Zero Extra Questions Added:**
   - Do NOT invent or add extra textbook questions outside of what is already in the syllabus / existing app content.
   - Keep the exact question inventory.

3. **Student-Friendly, Direct Solutions (NO Bulky Step Headers):**
   - Eliminate bulky paragraph titles like "Step 1: Write equation", "Step 2: Transpose terms".
   - Use clean, line-by-line algebraic steps using `&rArr;` with concise reasons in brackets (e.g., `[From equation (1)]`, `[Multiplying by 3]`, `[Transposing 5 to RHS]`).
   - Keep explanations crisp, direct, and easy to follow for Class 10 board students.

4. **100% Rich Web View Architecture (`isHtmlView: true`):**
   - All content rendered via `htmlOverview` and `htmlExercises`.
   - Dark-mode card container `.q-card` with theme-colored border `1.5px solid rgba(themeColor, 0.35)`.
   - Card left border or accent in `themeColor`.
   - Final answers cleanly presented in crisp green boxes:
     ```html
     <div class="ans-box">
       <span class="ans-label">✓ Solution: </span>
       <span class="ans-val">x = 2, y = 3</span>
     </div>
     ```

5. **Strict Vertical Stacked Fractions (Never Raw "a/b"):**
   - Raw `a/b` in calculations is strictly forbidden.
   - Always format fractions using:
     ```html
     <span class="frac"><span class="num">numerator</span><span class="den">denominator</span></span>
     ```
   - Ensure generous line-height (`.sol-step { line-height: 2.35; }`) and margin to prevent vertical collisions.

6. **Clean Coordinate & Data Tables:**
   - Tables styled with dark background, theme-colored headers, and light borders.
   - Never clip on mobile; wrap in responsive containers if wide.

7. **Dedicated Sub-Tab For Each Exercise & Solved Examples:**
   - In `exercises` array:
     ```typescript
     exercises: [
       { id: "examples", name: "Examples", questions: [] },
       { id: "exercise1", name: "Exercise X.1", questions: [] },
       { id: "exercise2", name: "Exercise X.2", questions: [] },
       ...
     ]
     ```
   - Corresponding keys in `htmlExercises`: `{ examples, exercise1, exercise2, ... }`.

8. **Theme Color Palette for Class 10 Math:**
   - **Ch 1 (Real Numbers):** `#00E5FF` (Electric Cyan)
   - **Ch 2 (Polynomials):** `#00C853` (Vibrant Emerald Green)
   - **Ch 3 (Pair of Linear Equations):** `#FFAB00` (Amber Gold)
   - **Ch 4 (Quadratic Equations):** `#FF6D00` (Vibrant Orange)
   - **Ch 5 (Arithmetic Progressions):** `#7C4DFF` (Deep Purple / Violet)
   - **Ch 6 (Triangles):** `#00B0FF` (Bright Sky Blue)
   - **Ch 7 (Coordinate Geometry):** `#FF4081` (Rose Pink)
   - **Ch 8 (Introduction to Trigonometry):** `#E040FB` (Neon Magenta)
   - **Ch 9 (Applications of Trigonometry):** `#1DE9B6` (Teal / Turquoise)
   - **Ch 10 (Circles):** `#FFD600` (Bright Yellow)
   - **Ch 11 (Areas Related to Circles):** `#64DD17` (Lime Green)
   - **Ch 12 (Surface Areas and Volumes):** `#FF3D00` (Deep Coral Red)
   - **Ch 13 (Statistics):** `#00E676` (Spring Green)
   - **Ch 14 (Probability):** `#2979FF` (Electric Blue)

---

## 3. Resume Trigger / Quick Prompt for Future Sessions
Whenever the user says:
> **"bhai class 10 math continue karo"** OR **"bhai class 10 math chapter X karo"** OR mentions **"same strategy se class 10 math upgrade karo"**

The agent should immediately:
1. Refer to this blueprint (`.agents/CLASS_10_MATH_BLUEPRINT.md`).
2. Audit the target chapter in `client/data/content/math-chX.ts` (identify all examples, exercises, and questions).
3. Check and apply the theme color gradient in `client/data/chapters.ts` for that chapter.
4. Upgrade the chapter with `isHtmlView: true`, `htmlOverview`, `htmlExercises`, and MCQs following all rules above.
5. Verify with `npx tsc --noEmit` (ensure 0 errors).
6. Present the summary to the user for review.
