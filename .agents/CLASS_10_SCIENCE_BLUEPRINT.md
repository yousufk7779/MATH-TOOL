# Class 10 Science Master Blueprint & Gold Standards

This document establishes the permanent, authoritative blueprint for all **13 Chapters of Class 10 Science** (Physics, Chemistry, Biology) in the application.

---

## 1. Core Directives & Guarantees

### 1.1 Zero Content Omission Guarantee
- Every single question already present in each chapter (In-Text Questions and Exercise Questions) MUST be 100% preserved verbatim.
- Zero questions may be deleted, truncated, or summarized.
- All 385 questions across the 13 chapters are permanently cataloged and locked.

### 1.2 Zero Extra Questions Guarantee
- Do NOT insert any random or unverified extra questions outside the official NCERT chapter questions already defined.
- Focus 100% on **upgrading content depth, scientific rigor, clarity, and visual presentation** to Class 11 & 12 Gold Standard textbook quality.

### 1.3 Strict Structure Preservation
- Do NOT change the data contract or component schema.
- Each chapter retains its clean `ChapterContent` object structure:
  - `id`: string (e.g. `"sci-phy-1"`)
  - `number`: number
  - `title`: string
  - `introduction`: rich conceptual introduction
  - `definitions`: array of `{ term: string, description: string }`
  - `keyPoints`: array of string (high-yield board exam points)
  - `formulas`: array of `{ name: string, formula: string }`
  - `crux`: array of string (core revision takeaways)
  - `summary`: array of string
  - `exercises`: array of exercise groups with `{ id, name, questions: [{ id, number, question, solution, answer }] }`
  - `mcqs`: array of MCQs `{ id, question, options, correctAnswer }`

### 1.4 Strict Diagram Preservation Guarantee
- All 100 diagrams already embedded as responsive base64 images in `client/data/content/` must be 100% preserved.
- Diagrams are rendered via `<img src="data:image/..." alt="..." />` and displayed inside clean `#FFFFFF` rounded cards with `padding: 8`, `elevation: 3`, and `resizeMode: "contain"` via `HtmlImage.tsx`.
- Never delete or corrupt existing base64 image strings.

---

## 2. 13-Chapter Official Syllabus & Question Inventory

| # | Branch | Chapter ID | Chapter Name | Exercise Groups | Total Qs | MCQs | Diagrams | Theme Color |
|:---:|:---:|:---:|:---|:---:|:---:|:---:|:---:|:---:|
| 1 | **Physics** | `sci-phy-1` | Light - Reflection and Refraction | 2 | **32 Qs** | 10 | 20 | `#E91E63` |
| 2 | **Physics** | `sci-phy-2` | The Human Eye and the Colourful World | 2 | **18 Qs** | 10 | 3 | `#E91E63` |
| 3 | **Physics** | `sci-phy-3` | Electricity | 2 | **39 Qs** | 10 | 10 | `#E91E63` |
| 4 | **Physics** | `sci-phy-4` | Magnetic Effects of Electric Current | 2 | **40 Qs** | 10 | 13 | `#E91E63` |
| 5 | **Chemistry** | `sci-chem-1` | Chemical Reactions and Equations | 2 | **29 Qs** | 10 | 7 | `#9C27B0` |
| 6 | **Chemistry** | `sci-chem-2` | Acids, Bases and Salts | 2 | **25 Qs** | 10 | 11 | `#9C27B0` |
| 7 | **Chemistry** | `sci-chem-3` | Metals and Non-metals | 2 | **32 Qs** | 10 | 5 | `#9C27B0` |
| 8 | **Chemistry** | `sci-chem-4` | Carbon and its Compounds | 2 | **35 Qs** | 10 | 2 | `#9C27B0` |
| 9 | **Biology** | `sci-bio-1` | Life Processes | 2 | **34 Qs** | 10 | 6 | `#4CAF50` |
| 10 | **Biology** | `sci-bio-2` | Control and Coordination | 2 | **27 Qs** | 10 | 6 | `#4CAF50` |
| 11 | **Biology** | `sci-bio-3` | How do Organisms Reproduce? | 2 | **24 Qs** | 10 | 1 | `#4CAF50` |
| 12 | **Biology** | `sci-bio-4` | Heredity | 2 | **30 Qs** | 10 | 15 | `#4CAF50` |
| 13 | **Biology** | `sci-bio-5` | Our Environment | 2 | **20 Qs** | 10 | 1 | `#4CAF50` |
| **Total** | | **13 Chapters** | | **26 Groups** | **385 Qs** | **130** | **100** | |

---

## 3. Class 11 & 12 Gold Standard Pedagogical & Styling Rules

### 3.1 Prose-First & Step-by-Step Solutions
- Do not provide brief 1-line dismissive answers.
- Every numerical problem must follow a structured, student-friendly 4-step layout:
  1. **Given Data**: Clearly stated with standard symbols ($u$, $v$, $f$, $R$, $I$, $V$, $P$) and SI units.
  2. **Formula Applied**: Stated clearly before substituting values.
  3. **Step-by-Step Calculation**: With vertically stacked fractions and clear sign conventions (Cartesian sign convention for optics, Ohm's law / Kirchhoff's rules for electricity).
  4. **Final Conclusion & Nature**: Clean green final answer summary (`✓ Final Answer: ...`).

### 3.2 Strict Typography & Fraction Rules
- **No Raw Carets (`^`)**: Strictly use `<sup>...</sup>` for exponents, powers, and ionic charges (e.g. `10<sup>8</sup> m/s`, `Ca<sup>2+</sup>`).
- **No Raw Slashes in Complex Fractions**: Use vertical stacked fraction format `<span class="frac"><span class="num">a</span><span class="den">b</span></span>` or HTML fraction formatting for clear readability.
- **Proper Math Symbols**: Use `&times;` (never `x`), `&minus;` (never `-`), `&plusmn;`, `&Omega;` (for Ohms), `&mu;`, `&lambda;`, `&infin;`.

### 3.3 Chemistry: Balanced Reactions with State Symbols
- Every chemical equation must be fully balanced with physical states:
  - Solid: `(s)`
  - Liquid: `(l)`
  - Gas: `(g)`
  - Aqueous: `(aq)`
- Reaction conditions (heat `&Delta;`, catalyst, sunlight, electricity) displayed clearly above the reaction arrow `&rarr;`.
- Observations (color changes, gas evolution, precipitate formation) highlighted with bold theme color.

### 3.4 Biology: Scientific Rigor & Clear Anatomical Terms
- Accurate biological mechanisms (e.g. double circulation, peristalsis, nephron filtration, reflex arc, Mendel's law of segregation, trophic level 10% law).
- Contrasts and differences presented in clean, mobile-responsive comparison tables.

---

## 4. Chapter-by-Chapter Execution Workflow

1. **Chapter 1: Light - Reflection and Refraction (`sci-phy-1`)** — 32 Questions, 20 Diagrams
2. **Chapter 2: The Human Eye and the Colourful World (`sci-phy-2`)** — 18 Questions, 3 Diagrams
3. **Chapter 3: Electricity (`sci-phy-3`)** — 39 Questions, 10 Diagrams
4. **Chapter 4: Magnetic Effects of Electric Current (`sci-phy-4`)** — 40 Questions, 13 Diagrams
5. **Chapter 5: Chemical Reactions and Equations (`sci-chem-1`)** — 29 Questions, 7 Diagrams
6. **Chapter 6: Acids, Bases and Salts (`sci-chem-2`)** — 25 Questions, 11 Diagrams
7. **Chapter 7: Metals and Non-metals (`sci-chem-3`)** — 32 Questions, 5 Diagrams
8. **Chapter 8: Carbon and its Compounds (`sci-chem-4`)** — 35 Questions, 2 Diagrams
9. **Chapter 9: Life Processes (`sci-bio-1`)** — 34 Questions, 6 Diagrams
10. **Chapter 10: Control and Coordination (`sci-bio-2`)** — 27 Questions, 6 Diagrams
11. **Chapter 11: How do Organisms Reproduce? (`sci-bio-3`)** — 24 Questions, 1 Diagram
12. **Chapter 12: Heredity (`sci-bio-4`)** — 30 Questions, 15 Diagrams
13. **Chapter 13: Our Environment (`sci-bio-5`)** — 20 Questions, 1 Diagram
