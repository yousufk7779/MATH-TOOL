# Class 10 Science Master Blueprint & Gold Standards
*(Also serves as the Master Template for Class 9 Science Upgrade)*

This document establishes the permanent, authoritative blueprint for all **13 Chapters of Class 10 Science** (Physics, Chemistry, Biology) in the application, and defines the exact architectural pattern to be replicated for **Class 9 Science**.

---

## 1. Core Directives & Guarantees

### 1.1 100% Rich Web View Architecture (`isHtmlView: true`)
- All Science chapters must have `isHtmlView: true`.
- Native React Native text views flatten styles and produce dull gray borders (`JiguuColors.surface`). Setting `isHtmlView: true` routes rendering through `MathWebView`, enabling **Ultra HD dark cards, vibrant theme-colored borders, stacked fractions, and standalone diagram cards**.

### 1.2 Zero Content Omission Guarantee
- Every single question (both **In-Text Questions** and **NCERT Exercise Questions**) must be 100% preserved verbatim.
- Zero questions, sub-parts `(a), (b), (c)`, or numerical steps may be deleted or summarized.
- All 352 questions across Class 10 Science are cataloged and locked.

### 1.3 Zero Extra Questions Guarantee
- Do NOT insert arbitrary or unverified extra questions outside the official textbook syllabus.
- Focus 100% on **upgrading content depth, scientific rigor, pedagogical clarity, and visual presentation** to Class 11 & 12 Gold Standard textbook quality.

### 1.4 Strict Structure & Diagram Preservation
- Preserve the underlying `ChapterContent` schema:
  - `id`: string (e.g. `"sci-phy-1"`)
  - `number`: number
  - `title`: string
  - `isHtmlView`: `true`
  - `htmlOverview`: string (Class 12 Gold Standard rich HTML)
  - `htmlExercises`: `Record<string, string>` (`{ "exercise": "...", "in-text": "..." }`)
  - `introduction`, `definitions`, `keyPoints`, `formulas`, `crux`, `summary`
  - `exercises`: `Exercise[]`
  - `mcqs`: `MCQ[]` (10 interactive questions)
- All embedded diagrams (base64 images) must be preserved and rendered inside clean `#FFFDF8` high-contrast white rounded cards.

---

## 2. The 3-Tab Gold Standard Architecture

### Tab 1: Quick Revision (`htmlOverview`)
Every chapter's overview tab is built using pure, high-performance HTML/CSS matching the Class 12 Science reference standard:

1. **Quick Glossary & Basic Definitions Card**:
   - Single-frame card at the top with `1.5px solid ${themeColor}` and `background: rgba(${rgb}, 0.05)`.
   - Title: `📖 Quick Glossary & Basic Definitions`
   - Subtitle: `Essential Core Concepts & Key Definitions • Chapter X: Title`
   - Responsive grid of definitions, each with `background: rgba(0,0,0,0.25)`, `border-left: 3.5px solid ${themeColor}`, bold term in `themeColor`, and definition text in pure `#FFFFFF` with SI units and dimensions.
2. **Official Syllabus Section Headings**:
   - Underlined section headers: `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">`
   - Subtopics formatted with Roman numerals `(i), (ii), (iii)` styled with bold `${themeColor}`.
3. **Specialized High-Contrast Educational Boxes**:
   - **`📌 DEFINITION` Box**:
     ```html
     <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(${rgb}, 0.4); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
       <div style="color: ${themeColor}; font-size: 16px; font-weight: bold; margin-bottom: 6px;">📌 DEFINITION: [Term]</div>
       <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">[Text]</div>
     </div>
     ```
   - **`💡 REAL-WORLD INTUITION` Box**:
     ```html
     <div style="background: rgba(30, 41, 59, 0.7); border: 1.2px dashed #38BDF8; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
       <div style="color: #38BDF8; font-size: 15px; font-weight: bold; margin-bottom: 4px;">💡 REAL-WORLD INTUITION: [Topic]</div>
       <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">[Intuition]</div>
     </div>
     ```
   - **`⚠️ EXAM TRAP & BOARD TIP` Box**:
     ```html
     <div style="background: rgba(45, 25, 20, 0.75); border: 1.2px solid #FF9800; border-left: 5px solid #FF9800; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
       <div style="color: #FF9800; font-size: 15px; font-weight: bold; margin-bottom: 4px;">⚠️ EXAM TRAP &amp; BOARD TIP: [Topic]</div>
       <div style="color: #FFE0B2; font-size: 14.5px; line-height: 1.6;">[Tip]</div>
     </div>
     ```
4. **Standalone Clean Diagram Cards**:
   - Placed directly under relevant sections.
   - Zero redundant duplicate top titles.
   - Enclosed in a sleek card (`background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(${rgb}, 0.4); border-radius: 10px;`) with a pure `#FFFDF8` white image container and concise caption below.
5. **✦ Master Revision Formula Cheat Sheet**:
   - Concludes every overview section.
   - Stored in a card with `${themeColor}` border, summarizing all essential equations, constants, SI units, and sign rules in vertically stacked fraction format with zero raw carets (`^`).

---

### Tab 2: NCERT Solutions (`htmlExercises`)
Exercises are divided into dedicated sub-tabs (`"exercise"` for NCERT Exercise Questions, `"in-text"` for In-Text Questions):

1. **Header Banner**:
   - Border: `1.5px solid ${themeColor}`
   - Background: `rgba(${rgb}, 0.08)`
   - Title: `${chapter.title} &mdash; NCERT Exercise Solutions` (or `In-Text Questions & Solutions`)
   - Subtitle: Question count and high-scoring board promise in `#FFD700`.
2. **Individual Question Cards**:
   - Every single question is wrapped in its own sleek dark card:
     ```html
     <div style="background: rgba(0,0,0,0.25); border: 1.2px solid rgba(${rgb}, 0.25); border-radius: 10px; padding: 16px; margin: 18px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
       <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${num}: ${question}</h3>
       <div style="background: rgba(0,0,0,0.3); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; font-size: 15.5px; line-height: 1.7;">
         <b style="color: ${themeColor}; display: block; margin-bottom: 6px; font-size: 15px;">💡 Solution &amp; Explanation:</b>
         ${formattedSteps}
       </div>
       <div style="margin-top: 12px; background: rgba(76, 175, 80, 0.12); border-left: 3.5px solid #4CAF50; padding: 8px 12px; border-radius: 4px; color: #81C784; font-size: 14.5px; font-weight: bold;">
         &check; Final Answer: ${answer}
       </div>
     </div>
     ```
3. **Diagrams in Solutions**:
   - Any diagram in question or solution is automatically rendered inside:
     ```html
     <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(${rgb}, 0.4); border-radius: 10px; padding: 10px; margin: 12px 0; text-align: center;">
       <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; margin: 0 auto; max-width: 420px;">
         <img src="..." style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" />
       </div>
     </div>
     ```
4. **Final Answer Box**:
   - Every question concludes with a crisp `#4CAF50` green box: `✓ Final Answer: ...`.

---

### Tab 3: Interactive MCQs
- Exactly **10 smart interactive MCQs** per chapter.
- Instant Green (`#4CAF50`) / Red (`#F44336`) option feedback.
- Detailed explanation panel opens on incorrect selection.
- Tiered Gamified Result Dashboard (🏆 Outstanding Mastermind, 🎯 Excellent, etc.).

---

## 3. Official Class 10 Science Theme Color & RGB Palette

| # | Branch | Chapter ID | Chapter Name | Theme Color | RGB Values | Questions | MCQs |
|:---:|:---:|:---:|:---|:---:|:---:|:---:|:---:|
| 1 | **Physics** | `sci-phy-1` | Light - Reflection and Refraction | `#FF5722` (Flame Orange) | `255, 87, 34` | 31 | 10 |
| 2 | **Physics** | `sci-phy-2` | The Human Eye and the Colourful World | `#FF9800` (Warm Amber) | `255, 152, 0` | 17 | 10 |
| 3 | **Physics** | `sci-phy-3` | Electricity | `#00E5FF` (Electric Cyan) | `0, 229, 255` | 38 | 10 |
| 4 | **Physics** | `sci-phy-4` | Magnetic Effects of Electric Current | `#BA68C8` (Magnetic Amethyst) | `186, 104, 200` | 39 | 10 |
| 5 | **Chemistry** | `sci-chem-1` | Chemical Reactions and Equations | `#EC407A` (Crimson Pink) | `236, 64, 122` | 28 | 10 |
| 6 | **Chemistry** | `sci-chem-2` | Acids, Bases and Salts | `#26C6DA` (Ocean Teal) | `38, 198, 218` | 34 | 10 |
| 7 | **Chemistry** | `sci-chem-3` | Metals and Non-metals | `#FFB74D` (Metallic Gold) | `255, 183, 77` | 31 | 10 |
| 8 | **Chemistry** | `sci-chem-4` | Carbon and its Compounds | `#7E57C2` (Carbon Royal Violet) | `126, 87, 194` | 24 | 10 |
| 9 | **Biology** | `sci-bio-1` | Life Processes | `#4CAF50` (Vivid Leaf Green) | `76, 175, 80` | 33 | 10 |
| 10 | **Biology** | `sci-bio-2` | Control and Coordination | `#00E676` (Neural Spring Green) | `0, 230, 118` | 26 | 10 |
| 11 | **Biology** | `sci-bio-3` | How do Organisms Reproduce? | `#FF4081` (Floral Rose Pink) | `255, 64, 129` | 23 | 10 |
| 12 | **Biology** | `sci-bio-4` | Heredity | `#42A5F5` (Genetics Azure Blue) | `66, 165, 245` | 29 | 10 |
| 13 | **Biology** | `sci-bio-5` | Our Environment | `#8BC34A` (Ecology Lime Green) | `139, 195, 74` | 19 | 10 |
| **Total** | | **13 Chapters** | | | | **352 Qs** | **130** |

---

## 4. Class 9 Science Upgrade Blueprint & Replication Strategy

When the user requests to upgrade **Class 9 Science**, apply the EXACT same architecture, helper engines, and visual card styling:

### 4.1 Class 9 Science Chapter Mapping & Palette

| Branch | Chapter ID | Chapter Name | Theme Color | RGB Values |
|:---|:---:|:---|:---:|:---:|
| **Physics** | `c9-sci-phy-1` | Motion | `#FF5722` (Flame Orange) | `255, 87, 34` |
| **Physics** | `c9-sci-phy-2` | Force and Laws of Motion | `#FF9800` (Warm Amber) | `255, 152, 0` |
| **Physics** | `c9-sci-phy-3` | Gravitation | `#00E5FF` (Electric Cyan) | `0, 229, 255` |
| **Physics** | `c9-sci-phy-4` | Work and Energy | `#00C853` (Dynamic Green) | `0, 200, 83` |
| **Physics** | `c9-sci-phy-5` | Sound | `#BA68C8` (Acoustic Violet) | `186, 104, 200` |
| **Chemistry** | `c9-sci-chem-1` | Matter in Our Surroundings | `#26C6DA` (States Aqua) | `38, 198, 218` |
| **Chemistry** | `c9-sci-chem-2` | Is Matter Around Us Pure? | `#EC407A` (Mixtures Pink) | `236, 64, 122` |
| **Chemistry** | `c9-sci-chem-3` | Atoms and Molecules | `#7E57C2` (Atomic Purple) | `126, 87, 194` |
| **Chemistry** | `c9-sci-chem-4` | Structure of the Atom | `#3F51B5` (Orbital Indigo) | `63, 81, 181` |
| **Biology** | `c9-sci-bio-1` | The Fundamental Unit of Life (Cell) | `#4CAF50` (Cellular Green) | `76, 175, 80` |
| **Biology** | `c9-sci-bio-2` | Tissues | `#00E676` (Histology Green) | `0, 230, 118` |
| **Biology** | `c9-sci-bio-3` | Improvement in Food Resources | `#8BC34A` (Agri Lime Green) | `139, 195, 74` |

### 4.2 Class 9 Upgrade Playbook
1. **Load Raw Data**: Read `client/data/content/c9-sci-*.ts` using `esbuild.transformSync`.
2. **Generate `htmlOverview`**:
   - Quick Glossary Card with `c9` theme color.
   - Fundamental Principles & Laws (Newton's laws, Kepler's laws, Archimedes' principle, Bohr-Bury scheme, Cell theory).
   - Specialized boxes: `📌 DEFINITION`, `💡 REAL-WORLD INTUITION`, `⚠️ EXAM TRAP`.
   - Master Revision Formula Sheet (Equations of motion, $F = ma$, $W = Fs$, $E_k = \frac{1}{2}mv^2$, mole concept).
3. **Generate `htmlExercises`**:
   - Sub-tabs for `"exercise"` and `"in-text"`.
   - All questions enclosed in individual dark cards with theme color borders.
   - Diagrams placed in clean `#FFFDF8` containers.
   - Final answers in crisp `#4CAF50` green boxes.
4. **Activate Web View**: Set `isHtmlView: true`.
5. **Type Verification**: Run `npx tsc --noEmit` to ensure 0 TypeScript compilation errors.
6. **Autonomy Guarantee**: Execute end-to-end without repeatedly asking for confirmation.

---

## 5. Pedagogical Quality Standards

### 5.1 Physics Problem Layout
Every numerical problem must follow a structured, student-friendly 4-step layout:
1. **Given Data**: Clearly stated with standard symbols ($u$, $v$, $f$, $R$, $I$, $V$, $P$, $m$, $a$, $t$) and SI units.
2. **Formula Applied**: Stated clearly before substituting values.
3. **Step-by-Step Calculation**: With vertically stacked fractions and clear sign conventions.
4. **Final Conclusion & Nature**: Clean green final answer summary (`✓ Final Answer: ...`).

### 5.2 Chemistry Balanced Equations
- Every chemical equation must be fully balanced with physical state symbols: `(s)`, `(l)`, `(g)`, `(aq)`.
- Reaction conditions (heat `&Delta;`, catalyst, sunlight, electricity) displayed clearly above arrows `&rarr;`.
- Observations (color changes, gas evolution, precipitate formation) highlighted with bold theme color.

### 5.3 Biology Scientific Rigor
- Accurate biological mechanisms (double circulation, peristalsis, nephron filtration, reflex arc, Mendel's laws, cell organelles, plant & animal tissues).
- Comparison and differences presented in clean, mobile-responsive comparison tables.
