# Class 9 Science Master Blueprint & Gold Standards

This document establishes the permanent, authoritative blueprint for all **14 Chapters of Class 9 Science** (Physics: 6, Chemistry: 4, Biology: 4) in the application, completely upgraded to the Class 12 Gold Standard rich HTML Web View architecture.

---

## 1. Core Directives & Guarantees

### 1.1 100% Rich Web View Architecture (`isHtmlView: true`)
- All 14 Class 9 Science chapters have `isHtmlView: true`.
- Native React Native text views flatten styles and produce dull gray borders (`JiguuColors.surface`). Setting `isHtmlView: true` routes rendering through `MathWebView`, enabling **Ultra HD dark cards, vibrant theme-colored borders, stacked fractions, and standalone diagram cards**.

### 1.2 Zero Content Omission Guarantee
- Every single question (both **In-Text Questions** and **NCERT Exercise Questions**) is 100% preserved verbatim.
- Zero questions, sub-parts `(a), (b), (c)`, or numerical steps may be deleted or summarized.
- All **399 questions** across Class 9 Science are cataloged and locked.

### 1.3 Zero Extra Questions Guarantee
- No arbitrary or unverified extra questions outside the official textbook syllabus have been added.
- Focus is 100% on **upgrading content depth, scientific rigor, pedagogical clarity, and visual presentation** to Class 11 & 12 Gold Standard textbook quality.

### 1.4 Strict Structure & Diagram Preservation
- Preserves the underlying `ChapterContent` schema:
  - `id`: string (e.g. `"c9-sci-phy-1"`)
  - `number`: number
  - `title`: string
  - `isHtmlView`: `true`
  - `htmlOverview`: string (Class 12 Gold Standard rich HTML)
  - `htmlExercises`: `Record<string, string>` (`{ "exercise": "...", "in-text": "..." }`)
  - `introduction`, `definitions`, `keyPoints`, `formulas`, `crux`, `summary`
  - `exercises`: `Exercise[]`
  - `mcqs`: `MCQ[]` (10 interactive questions per chapter = 140 MCQs total)
- All embedded diagrams (25 base64 image instances) are preserved and rendered inside clean `#FFFDF8` high-contrast white rounded cards with theme borders.

---

## 2. Chapter Inventory & Official Question Counts

| # | Chapter ID | Subject | Title | Exercise Qs | In-Text Qs | Total Qs | MCQs | Images |
|---|---|---|---|---|---|---|---|---|
| 1 | `c9-sci-phy-1` | Physics | Motion | 10 | 20 | **30** | 10 | 2 (4 rendered) |
| 2 | `c9-sci-phy-2` | Physics | Force and Laws of Motion | 18 | 8 | **26** | 10 | 0 |
| 3 | `c9-sci-phy-3` | Physics | Work, Energy and Power | 21 | 12 | **33** | 10 | 0 |
| 4 | `c9-sci-phy-4` | Physics | Gravitation | 22 | 6 | **28** | 10 | 0 |
| 5 | `c9-sci-phy-5` | Physics | Floatation | 4 | 5 | **9** | 10 | 0 |
| 6 | `c9-sci-phy-6` | Physics | Sound | 22 | 26 | **48** | 10 | 0 |
| 7 | `c9-sci-chem-1` | Chemistry | Matter in Our Surroundings | 11 | 21 | **32** | 10 | 2 (3 rendered) |
| 8 | `c9-sci-chem-2` | Chemistry | Is Matter Around Us Pure? | 11 | 10 | **21** | 10 | 3 (5 rendered) |
| 9 | `c9-sci-chem-3` | Chemistry | Atoms and Molecules | 11 | 14 | **25** | 10 | 0 |
| 10 | `c9-sci-chem-4` | Chemistry | Structure of the Atom | 19 | 21 | **40** | 10 | 1 (2 rendered) |
| 11 | `c9-sci-bio-1` | Biology | The Fundamental Unit of Life | 10 | 11 | **21** | 10 | 1 |
| 12 | `c9-sci-bio-2` | Biology | Tissues | 15 | 12 | **27** | 10 | 3 (6 rendered) |
| 13 | `c9-sci-bio-3` | Biology | Improvement in Food Resources | 9 | 28 | **37** | 10 | 0 |
| 14 | `c9-sci-bio-4` | Biology | Prevention of Drug Abuse & STDs | 22 | — | **22** | 10 | 2 (4 rendered) |
| **TOTAL** | | | **14 Chapters** | **205** | **194** | **399** | **140** | **25** |

---

## 3. Dedicated Theme Colors & Two-Tone Gradients

Each chapter is assigned an authentic, pedagogically matched theme color. The primary color is synchronized identically across:
1. The chapter's TS content file (`htmlOverview`, `htmlExercises`, `themeColor`).
2. `otherSubjectsData["Class 9 Science"]` in `client/data/chapters.ts`.
3. `getChapterGradient(chapterId)` in `client/data/chapters.ts`.

### Physics (6 Chapters)
| Chapter ID | Name | Primary Theme Color | Gradient Pair (`getChapterGradient`) | Pedagogical Rationale |
|---|---|---|---|---|
| `c9-sci-phy-1` | Motion | `#FF5722` | `["#FF5722", "#E64A19"]` | Flame Orange (Kinematics, velocity vectors) |
| `c9-sci-phy-2` | Force & Laws of Motion | `#FF9800` | `["#FF9800", "#F57C00"]` | Warm Amber (Newtonian force & momentum) |
| `c9-sci-phy-3` | Work, Energy & Power | `#00C853` | `["#00C853", "#009624"]` | Vibrant Emerald (Energy conservation & work) |
| `c9-sci-phy-4` | Gravitation | `#00E5FF` | `["#00E5FF", "#0097A7"]` | Electric Cyan (Universal gravitational field) |
| `c9-sci-phy-5` | Floatation | `#26C6DA` | `["#26C6DA", "#00838F"]` | Ocean Teal (Archimedes principle & buoyancy) |
| `c9-sci-phy-6` | Sound | `#BA68C8` | `["#BA68C8", "#8E24AA"]` | Acoustic Amethyst (Longitudinal sound waves) |

### Chemistry (4 Chapters)
| Chapter ID | Name | Primary Theme Color | Gradient Pair (`getChapterGradient`) | Pedagogical Rationale |
|---|---|---|---|---|
| `c9-sci-chem-1` | Matter in Our Surroundings | `#00BCD4` | `["#00BCD4", "#00838F"]` | States of Matter Cyan (Thermal diffusion & states) |
| `c9-sci-chem-2` | Is Matter Around Us Pure? | `#EC407A` | `["#EC407A", "#C2185B"]` | Mixtures Crimson Pink (Colloids, solutions & purity) |
| `c9-sci-chem-3` | Atoms & Molecules | `#7E57C2` | `["#7E57C2", "#5E35B1"]` | Molecules Royal Violet (Mole concept & atomic masses) |
| `c9-sci-chem-4` | Structure of the Atom | `#3F51B5` | `["#3F51B5", "#283593"]` | Atomic Shells Indigo (Rutherford / Bohr orbits) |

### Biology (4 Chapters)
| Chapter ID | Name | Primary Theme Color | Gradient Pair (`getChapterGradient`) | Pedagogical Rationale |
|---|---|---|---|---|
| `c9-sci-bio-1` | The Fundamental Unit of Life | `#4CAF50` | `["#4CAF50", "#2E7D32"]` | Cell Leaf Green (Plant/animal cytology & organelles) |
| `c9-sci-bio-2` | Tissues | `#00E676` | `["#00E676", "#00A344"]` | Histology Spring Green (Meristems & vascular tissues) |
| `c9-sci-bio-3` | Improvement in Food Resources | `#8BC34A` | `["#8BC34A", "#558B2F"]` | Agri Lime Green (Sustainable crops & aquaculture) |
| `c9-sci-bio-4` | Prevention of Drug Abuse & STDs | `#FF4081` | `["#FF4081", "#D81B60"]` | Health Rose Pink (Public health, immunology & awareness) |

---

## 4. The 3-Tab Architecture Details

### Tab 1: Reference Overview (`htmlOverview`)
1. **Quick Glossary & Basic Definitions Card**: Responsive grid of 10-12 key terms with `background: rgba(0,0,0,0.25)`, left border `3.5px solid ${themeColor}`, and pure `#FFFFFF` definitions.
2. **Prose-First Chapter Overview**: Explaining microscopic origins, molecular mechanisms, and conceptual intuitions before formulas.
3. **Cardinal Laws & Principles**: Structured cards with theme-colored left borders detailing physical and chemical laws.
4. **Board Exam Golden Traps & Crucial Tips**: High-contrast orange cards (`rgba(45, 25, 20, 0.75)`, border `#FF9800`) highlighting common misconceptions.
5. **Master Revision Formula Cheat Sheet**: End-of-chapter cheat sheet with stacked fractions (`<span class="frac">`) and zero carets.

### Tab 2: Solutions (`htmlExercises`)
1. **Sub-Tab Navigation**:
   - `"exercise"`: NCERT Exercise Questions.
   - `"in-text"`: NCERT In-Text Questions (for all chapters except `c9-sci-bio-4` which has 1 comprehensive exercise).
2. **Question Card Architecture**:
   - Question statement in bold `${themeColor}` with high-contrast `#FFFFFF` problem text.
   - Dark inner solution box (`background: rgba(0,0,0,0.3)`) with `3.5px solid ${themeColor}` left border.
   - Clean line-by-line steps with `&rArr;` and concise bracketed reasons.
   - Dedicated green `✓ Final Answer` box (`#4CAF50`, `rgba(76, 175, 80, 0.12)`).
   - Embedded diagrams wrapped in `#FFFDF8` white rounded cards.

### Tab 3: MCQs (10 Questions per Chapter)
- Exactly 10 interactive questions with green check / red cross feedback.
