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

## Class 11 & 12 Deep Reference Book Textbook Standard Strategy

For all Class 11 and Class 12 chapters across all subjects (Chemistry, Physics, Biology, Math), ALWAYS follow these rules without exception:

1. **Deep Conceptual Explanations First (Prose First Approach)**:
   - Never start topics with short bullet points alone.
   - Every topic and subtopic must begin with rich, deep, textbook-level explanatory paragraphs so students can understand the core concept thoroughly before jumping to questions.

2. **100% Exact Official NCERT Syllabus Headings**:
   - Use official NCERT syllabus headings word-for-word as main `<h2>` section titles.
   - Organize every section into Roman-numbered subtopics `(i), (ii), (iii)` as `<h3>` subtitles.

3. **Quick Glossary Card**:
   - Include a single-frame "Quick Glossary & Basic Definitions" card at the top of the Overview section summarizing key terms.

4. **Mathematical & Chemical Formatting**:
   - **Fractions**: Always use stacked `a over b` format using helper function (`frac('a', 'b')`).
   - **Powers & Charges**: Always use `<sup>...</sup>` for exponents and ionic charges (e.g. `10<sup>23</sup>`, `kJ mol<sup>-1</sup>`, `Fe<sup>2+</sup>`).
   - **NO Raw Caret (`^`) Signs**: Caret signs are strictly forbidden in user-facing content strings.

5. **Question Headers & Structure**:
   - **NO `(HOTS - 5 Marks)`**: Completely omit any `(HOTS - 5 Marks)` or similar labels from all question titles. Use clean format like `Q86: Title`.
   - Maintain 100 questions per chapter (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) with ~73% theoretical/reasoning balance.

6. **Theme Color Matching**:
   - The primary theme color of a chapter must match the chapter list button gradient's primary (first) color in `chapters.ts` exactly.
   - Use this exact theme color for all headings, bold subtopic badges, border highlights, glossary borders, and solution answer boxes.
