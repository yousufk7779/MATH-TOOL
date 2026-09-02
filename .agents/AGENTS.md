# Workspace Customizations & Styling Rules

## Social Science (SST) Chapter Solution Screen Styles

When styling chapter overview and solutions for Class 7, keep these rules:

1. **Theme Color Matching**:
   - The primary theme color of a chapter (`themeColor` variable in the TS file) must match the chapter list button gradient's primary (first) color exactly.
   - For all headings (`h3`, `h4`, etc.), bold elements (`b`), and correct options (`✓ Answer:`), use this `themeColor`.
   - Never use default blue/green colors; use the exact theme color.

2. **Chapter Specific Colors (Geography)**:
   - **Chapter 1**: `#66BB6A` (Green)
   - **Chapter 2**: `#26C6DA` (Teal)
   - **Chapter 3**: `#FF8A65` (Deep Orange - Earthquakes/Volcanoes themed)
   - **Chapter 4**: `#C5E1A5` (Very Light Green/Lime)
   - **Chapter 5**: `#42A5F5` (Blue - Water themed)
   - **Chapter 6**: `#00FFFF` (Cyan)
   - **Chapter 7**: `#FDC830` (Gold - Desert themed)
   - **Chapter 8**: `#FF007F` (Rose - Valley of Flowers themed)

3. **MCQ Format**:
   - Every chapter must contain exactly 10 MCQs in the `mcqs` array.
   - MCQs must be simple, engaging, and kid-friendly for Class 7 level.
   - Structure:
     ```typescript
     {
       id: string,             // unique ID like "cgX-mcq-Y"
       question: string,
       options: string[],      // 4 choices
       correctAnswer: string,  // "a", "b", "c", or "d"
       explanation: string     // kid-friendly concise explanation
     }
     ```

---

## Class 11 & 12 Gold Standard Reference Textbook & Interactive Quiz Blueprint

For ALL Class 11 and Class 12 chapters across all subjects (**Physics, Chemistry, Biology / Botany / Zoology, Mathematics**), ALWAYS follow this 3-Tab Architecture and ultra-deep reference standard without exception:

### 1. Tab Structure (3 Dedicated Tabs)
- **Tab 1: Reference (Overview)** — Comprehensive reference textbook guide (Pradeep's / S.L. Arora / OP Tandon / Trueman's / RD Sharma standard) with deep explanatory prose, real-world intuitions, standalone clean diagram cards, and end-of-chapter master formula cheat sheet.
- **Tab 2: Solutions (Exercises)** — Exactly 100 pure theory, numerical, and derivation questions divided into Sections A, B, C.
- **Tab 3: MCQs** — Dedicated 25-question smart interactive quiz with right-corner check/cross icons, wrong-only explanation cards, and Ultra HD gamified result dashboard.

---

### 2. Tab 1: Reference Theory Standards (Gold Standard Depth & Prose-First Architecture)
1. **Deep Conceptual Explanations First (Prose First Approach)**:
   - Never start topics with short bullet points alone.
   - Every topic and subtopic must begin with rich, deep explanatory paragraphs explaining physical/chemical intuition, principles, atomic/molecular origins, physical mechanisms, and mathematical formulations before formulas.
   - Include complete historical context, rules of thumb (e.g. SNOW rule, Right Hand Grip Rule, Fleming's rules, Le Chatelier's, Markovnikov's), and physical insights.
2. **100% Exact Official Syllabus Headings**:
   - Use official syllabus headings word-for-word as main `<h2>` section titles.
   - Organize every section into Roman-numbered subtopics `(i), (ii), (iii)` as `<h3>` / `<h4>` subtitles.
   - **Theme Color for Subtopics & Colon-Term Headings:** All bold subtopics, key terms, and item titles that end with a colon (`:`) (e.g., `<b style="color: ${themeColor};">(i) Calyx:</b>`, `<b style="color: ${themeColor};">Sporopollenin:</b>`, `<b style="color: ${themeColor};">1. Autogamy:</b>`) MUST strictly be styled with the chapter's `themeColor`.
3. **Quick Glossary Card**:
   - Single-frame "Quick Glossary & Basic Definitions" card at the top of the Overview section summarizing key terms, SI units, and dimensional formulas.
4. **Clean Standalone Diagram Cards (Zero Duplicate Top Titles)**:
   - Every crucial topic must have a dedicated standalone diagram card placed directly under its respective section.
   - **NO Redundant Top Titles:** Since the diagram graphic (image/SVG) itself already boldly displays the topic title and number inside the illustration, **DO NOT add duplicate title divs (`📸 Title` or `Diagram X:`) on top of the card container**.
   - **Clean Card Structure**:
     ```html
     <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(${themeColor}, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
       <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
         <img src="..." style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="..." />
       </div>
       <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
         💡 [Concise Concept Explanation / Caption]
       </div>
     </div>
     ```
   - **Chronological Sequence:** In all chapters, ensure diagrams strictly follow natural chronological progression (1, 2, 3, 4...) matching the theoretical flow.
5. **Specialized High-Contrast Educational Boxes**:
   - `defBox`: Official standard definitions with SI units and dimensional formulas.
   - `analogyBox`: Real-World Intuitive Analogies connecting abstract physics/chemistry concepts to everyday life (e.g., swinging stones, highway bypasses, traffic flows).
   - `stepDerivationBox`: Full step-by-step mathematical proofs with clearly labeled steps (*Step 1: Setup $\to$ Step 2: Law $\to$ Step 3: Components & Integration $\to$ Step 4: Special Boundary Cases*).
   - `examTrapBox`: Board exam traps and common student misconceptions.
   - `solvedExampleBox`: Fully worked out step-by-step board numericals with complete calculations.
   - Master comparison tables/matrices (e.g. Dia vs Para vs Ferro matrix, Ohmic vs Non-Ohmic, Resistance vs Resistivity).
6. **Master Revision Formula Cheat Sheet at End of Overview**:
   - Every single chapter MUST conclude with a comprehensive, full-coverage **Master Revision Formula Cheat Sheet** (Section at the end) summarizing all essential formulas, constants, SI units, and key relations in stacked fraction format with zero carets.

---

### 3. Tab 2: Solutions Standards (100 Questions: Sections A, B, C)
1. **Exact 100 Questions Breakdown**:
   - **Section A: Very Short Answer (VSA) Questions (1 Mark)** — **40 Questions (Q1 to Q40)**: Core definitions, 1-line reasons, SI units, dimensions, and basic physical facts.
   - **Section B: Short Answer (SA) Questions (2 & 3 Marks)** — **40 Questions (Q41 to Q80)**: Numerical calculations, conceptual reasoning, 2-mark derivations, comparisons.
   - **Section C: Long Answer (LA) Questions (5 Marks)** — **20 Long Derivations (Q81 to Q100)**: Comprehensive 5-mark board derivations and deep theoretical proofs.
2. **Formatting Rules**:
   - **Zero Raw Carets (`^`)**: Strictly forbidden in user-facing content strings. Always use `<sup>...</sup>`.
   - **Fractions**: Always use stacked `a over b` format helper (`frac('a', 'b')`).
   - **Powers & Charges**: Always use `<sup>...</sup>` for exponents and ionic charges.
   - **Question Headers**: Clean single-tier `<h3 style="color: ${themeColor}; ...">QXX: Title</h3>`. NO `(HOTS - 5 Marks)` labels.

---

### 4. Tab 3: MCQs Interactive Quiz Standards (25 MCQs)
1. **Question Count & Difficulty Progression**:
   - Exactly **25 MCQs** per chapter.
   - **60% Basic & Engaging (Q1 to Q15)**: Fundamental facts, intuitive situations, units, and clear concepts to build student interest and confidence.
   - **40% Moderate / Advance (Q16 to Q25)**: Core numericals, multi-step reasoning, circuit/flux applications.
2. **Balanced Answer Distribution**:
   - Answers must be evenly distributed across all 4 options (`A`, `B`, `C`, `D`), never all option A.
3. **Option Prefix Formatting**:
   - Every choice must strictly start with `A):   `, `B):   `, `C):   `, `D):   `.
4. **Interactive Option Feedback**:
   - **On Correct Selection**:
     - Option box and text turn **Green** (`#4CAF50`).
     - Right corner displays a crisp **Green Checkmark (`check-circle`)** icon.
     - Explanation panel remains **COMPLETELY HIDDEN**.
   - **On Wrong Selection**:
     - Selected option turns **Red** (`#F44336`) with shake animation.
     - Right corner displays a crisp **Red Cross (`x-circle`)** icon.
     - Correct option in the list is **NOT** colored green.
     - **Explanation Panel OPENS** below showing:
       - `Correct Answer is X)` in bold **Theme Color**.
       - `Explanation:` header with detailed reason in **Pure White (`#FFFFFF`)**.
5. **Ultra HD Tiered Quiz Result Dashboard**:
   - Gamified score tiers with dynamic emojis:
     - $\ge 90\%$: 🏆 **OUTSTANDING MASTERMIND!**
     - $75\% - 89\%$: 🎯 **EXCELLENT PERFORMANCE!**
     - $50\% - 74\%$: 📚 **GOOD EFFORT!**
     - $< 50\%$: 📖 **KEEP PRACTICING!**
   - Live stats (`✓ Correct`, `✗ Wrong`, `🎯 Accuracy`).
   - Gradient **Retake Quiz** and **Close & Review** action buttons.
