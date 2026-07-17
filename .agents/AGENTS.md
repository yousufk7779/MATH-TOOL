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
