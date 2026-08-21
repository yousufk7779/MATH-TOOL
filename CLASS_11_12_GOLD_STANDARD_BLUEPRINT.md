# 🌟 CLASS 11 & 12 GOLD STANDARD BLUEPRINT (MASTER SPECIFICATION)

> **Quick Command for Next Sessions:**
> *"Blueprint file analyse karo aur kaam start karo."*
> Whenever instructed to analyse the blueprint, follow this document strictly to build or upgrade any Class 11 or Class 12 chapter across Physics, Chemistry, Biology (Botany/Zoology), and Mathematics.

---

## 🏛️ CORE PHILOSOPHY & BRAND VISION
- **Reference Book Benchmark**: All content must meet or exceed high-level reference textbook standards (**Pradeep's Fundamental Physics / Chemistry**, **S.L. Arora**, **Trueman's Biology**).
- **Prose-First Approach**: Always provide deep conceptual explanatory paragraphs before any formula or question. Never use brief summary bullet points in place of real explanations.
- **Zero Raw Formatting Glitches**: Strictly **0 raw carets (`^`)**, 100% stacked fractions, proper `<sup>` and `<sub>` tags, and 100% valid SVG/XML code.
- **Dedicated 3-Tab Architecture**:
  1. **Tab 1: Reference** (Comprehensive Textbook Guide & Large 3D SVGs)
  2. **Tab 2: Solutions** (Exactly 100 Pure Questions: Sections A, B, C)
  3. **Tab 3: MCQs** (25 Interactive Quiz Questions with Right-Corner Feedback & Ultra HD Result Modal)

---

## 📑 TAB 1: REFERENCE THEORY STANDARDS (OVERVIEW)

### 1. 100% Official NCERT Syllabus Headings
- Main section titles must use official NCERT syllabus titles word-for-word as `<h2>` tags:
  ```html
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Exact Syllabus Topic Title
  </h2>
  ```
- Subtopics must be organized into Roman numerals `(i), (ii), (iii)` as `<h3>` subtitles.

### 2. Single-Frame Quick Glossary Card
- Must be placed at the very top of the Reference Overview:
  - Summarizes 5 to 7 key terms with concise, high-value definitions in a two-column responsive grid.

### 3. Large High-Definition 3D Vector Diagrams (Maximum Visibility)
- **Dimensions**: `viewBox="0 0 960 540"` with `width="100%"` and `height="100%"`.
- **Typography & Stroke**: Font sizes **16px to 20px bold**, stroke lines **2.5px to 4.5px thick**.
- **Color Palette**: High-contrast neon colors on dark glassmorphic cards:
  - Cyan (`#00E5FF`), Gold (`#FFD700`), Electric Green (`#76FF03`), Fiery Coral (`#FF512F`), Pure White (`#FFFFFF`).
- **Android WebView XML Rules**:
  - Never put `<br>`, `<sup>`, or `<sub>` inside SVG `<text>`.
  - Use numeric XML entities: `&#952;` ($\theta$), `&#934;` ($\Phi$), `&#964;` ($\tau$), `&#955;` ($\lambda$), `&#960;` ($\pi$), `&#949;` ($\varepsilon$), `&#963;` ($\sigma$), `&#8594;` ($\to$), `&#183;` ($\cdot$).

### 4. Specialized Learning Cards
- **`defBox(title, content)`**: Official definitions with SI units and dimensional formulas.
- **`stepDerivationBox(title, stepsHtml)`**: Full step-by-step mathematical/physical derivations with boundary conditions.
- **`examTrapBox(title, content)`**: Common student misconceptions and board exam focus traps.
- **`solvedExampleBox(num, qText, solHtml)`**: Fully worked-out board numerical examples.
- **Master Comparison Matrices**: Structured comparison tables (e.g. Dielectric insertion Battery Connected vs Disconnected).
- **Master Revision Cheat Sheet**: Grid summarizing all key formulas at the end of the overview.

---

## 📝 TAB 2: SOLUTIONS STANDARDS (EXACTLY 100 QUESTIONS)

The Solutions Tab contains **100 pure theory, numerical, and derivation questions** divided into **Sections A, B, C**:

| Section | Question Type | Mark Weightage | Question Range | Total Count |
|:---:|:---:|:---:|:---:|:---:|
| **Section A** | **Very Short Answer (VSA)** | 1 Mark each | **Q1 to Q40** | **40 Questions** |
| **Section B** | **Short Answer (SA)** | 2 & 3 Marks each | **Q41 to Q80** | **40 Questions** |
| **Section C** | **Long Answer (LA)** | 5 Marks each | **Q81 to Q100** | **20 Long Derivations** |

### Formatting Rules for Questions:
- **Clean Single-Tier Headers**: `<h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">QXX: Title</h3>`
- **NO `(HOTS - 5 Marks)`** labels in question titles.
- **Stacked Fractions**: Always use helper function:
  ```javascript
  function frac(num, den) {
    return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
      <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
      <span style="padding: 0 2px; display: inline-block;">${den}</span>
    </span>`;
  }
  ```
- **Powers & Exponents**: Format cleanly with `<sup>...</sup>` (e.g., `10<sup>-19</sup> C`, `V m<sup>-1</sup>`).

---

## 🎯 TAB 3: MCQS INTERACTIVE QUIZ STANDARDS (25 MCQS)

### 1. Difficulty & Question Breakdown (25 MCQs)
- **60% Basic & Engaging (Q1 to Q15)**: Fundamental facts, intuitive physical situations, SI units, and basic definitions that build student interest and confidence.
- **40% Moderate / Advance (Q16 to Q25)**: Core numericals, multi-step conceptual reasoning, circuit/flux applications.

### 2. Balanced Answer Key Distribution
- Answers must be evenly distributed across all 4 options (`A`, `B`, `C`, `D`):
  - ~6 to 7 questions for Option A
  - ~6 to 7 questions for Option B
  - ~6 to 7 questions for Option C
  - ~6 to 7 questions for Option D

### 3. Option Prefix Format
Every option must strictly start with `A):   `, `B):   `, `C):   `, `D):   `:
```typescript
options: [
  "A):   Option text 1",
  "B):   Option text 2",
  "C):   Option text 3",
  "D):   Option text 4"
]
```

### 4. Interactive Feedback & Icons
- **On Correct Selection**:
  - Option box and text turn **Green** (`#4CAF50`, background `rgba(76, 175, 80, 0.1)`).
  - Far right corner displays a crisp **Green Checkmark (`check-circle`)** icon.
  - Explanation panel remains **COMPLETELY HIDDEN** (zero visual clutter).
- **On Wrong Selection**:
  - Selected option turns **Red** (`#F44336`, background `rgba(244, 67, 54, 0.1)`) with shake animation.
  - Far right corner displays a crisp **Red Cross (`x-circle`)** icon.
  - Correct option in the list is **NOT** colored green.
  - The **Explanation Panel OPENS** below showing:
    - `Correct Answer is X)` in bold **Theme Color**.
    - `Explanation:` header in bold white, followed by the physical reasoning in **Pure White (`#FFFFFF`)**.

### 5. Ultra HD Tiered Quiz Result Dashboard
When student completes the 25 MCQs, an Ultra HD Modal popup displays:

| Score Tier | Badge & Emoji | Title | Feedback Message |
|:---:|:---:|:---:|---|
| **$\ge$ 90%** | 🏆 (Gold Glow) | **OUTSTANDING MASTERMIND!** | *"Incredible performance! You've mastered this chapter with top-tier excellence! 🚀✨"* |
| **75% – 89%** | 🎯 (Neon Cyan) | **EXCELLENT PERFORMANCE!** | *"Strong grasp of concepts! Just a quick brush-up on minor topics and you'll hit a perfect 100%! 👏⚡"* |
| **50% – 74%** | 📚 (Amber Glow) | **GOOD EFFORT!** | *"Good attempt! Review the step-by-step solutions and key formulas to take your score to the next level! 💡📈"* |
| **< 50%** | 📖 (Coral Glow) | **KEEP PRACTICING!** | *"Don't worry! Read the Reference Theory guide thoroughly, understand the key explanations, and try again! 🌟💪"* |

- **Live Stats**: Displays `✓ Correct`, `✗ Wrong`, and `🎯 Accuracy %`.
- **Glossy Actions**: Linear gradient **"Retake Quiz"** button + **"Close & Review"** action.

---

## 💻 CODE & FILE STRUCTURE TEMPLATE

### Chapter Content File (`client/data/content/cXX-subject-YY.ts`):
```typescript
// Class 12 Subject Chapter YY (JKBOSE / NCERT Official Syllabus)
// Gold Standard Reference Textbook & 3-Tab Architecture

export const c12SubYYHtmlOverview = `...`;  // 5-Layer Theory + Large 3D SVGs

export const c12SubYYHtmlSolutions = `...`; // 100 Pure Questions (Sections A, B, C)

export const c12SubYYMcqs = [               // 25 Interactive Quiz MCQs
  {
    id: "c12-sub-yy-mcq-1",
    question: "Question text...",
    options: [
      "A):   Option 1",
      "B):   Option 2",
      "C):   Option 3",
      "D):   Option 4"
    ],
    correctAnswer: "b", // "a", "b", "c", or "d"
    explanation: "Concise, step-by-step physical reasoning..."
  },
  // ... 25 MCQs
];
```

### Integration in `client/data/chapterContent.ts`:
```typescript
import { c12SubYYHtmlOverview, c12SubYYHtmlSolutions, c12SubYYMcqs } from "./content/c12-sub-yy";

const ch12SubYY = chapterContents["c12-sub-yy"];
if (ch12SubYY) {
  ch12SubYY.htmlOverview = c12SubYYHtmlOverview;
  ch12SubYY.htmlExercises = {
    "ex-c12-qa": c12SubYYHtmlSolutions,
  };
  ch12SubYY.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12SubYY.mcqs = c12SubYYMcqs;
}
```

---

## 🛡️ QUALITY & VERIFICATION CHECKLIST (MANDATORY BEFORE COMMIT)

1. [ ] **0 Raw Carets (`^`)**: Verified with automated regex test.
2. [ ] **Div / Span Tag Balances**: All opening `<div>` and `<span>` tags equal closing tags.
3. [ ] **100% Valid SVG Code**: No `<br>`, `<sup>`, `<sub>` inside SVG `<text>`, large `viewBox="0 0 960 540"`.
4. [ ] **Exact 100 Questions in Solutions**: 40 VSAs, 40 SAs, 20 LAs with single-tier headers.
5. [ ] **Exact 25 MCQs in Quiz**: 60% basic, 40% advance, balanced A/B/C/D, prefixed with `A):   `.
6. [ ] **Theme Color Matching**: Matches chapter list gradient color 1.
