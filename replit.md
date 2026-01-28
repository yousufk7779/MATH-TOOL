# JIGUU Math Solutions

## Overview

JIGUU Math Solutions is a Class 10 NCERT mathematics educational mobile app built with Expo/React Native. It provides chapter-based solutions with step-by-step explanations, definitions, formulas, exercises, examples, theorems, and MCQs. Currently in testing phase with 4 integrated chapters.

## User Preferences

Preferred communication style: Simple, everyday language.

## Current Status

**Testing Phase**: 4 chapters fully integrated with content
- Chapter 1: Real Numbers (includes Theorems)
- Chapter 2: Polynomials
- Chapter 3: Pair of Linear Equations in Two Variables
- Chapter 4: Quadratic Equations

Remaining 11 chapters show "Coming Soon" and are non-interactive.

## System Architecture

### Frontend Architecture
- **Framework**: Expo SDK 54 with React Native 0.81
- **Navigation**: React Navigation v7 with native stack
- **UI Components**: Custom themed components with dark theme (#1A1A2E)
- **Styling**: StyleSheet-based with centralized JiguuColors theme
- **Fonts**: Nunito (Google Fonts) for premium educational feel
- **Path Aliases**: `@/` maps to `./client`
- **Text Alignment**: Justified text for all content

### Navigation Structure
- Root Stack Navigator containing:
  - ChapterListScreen (Home) - All 15 chapters with colorful buttons
  - SolutionScreen - Chapter content with tabbed interface

### Chapter Content System
- **Data Location**: `client/data/chapterContent.ts`
- **Modular Structure**: TypeScript interfaces for all content types
- **Hot-swappable**: Add new chapters by adding entries to chapterContents object

### Content Types per Chapter
- Introduction text
- Definitions (term + description)
- Key Points (bullet list)
- Formulas (name + formula)
- Chapter Crux (numbered key takeaways)
- Exercises (questions with step-by-step solutions)
- **Examples** (NCERT textbook examples with solutions)
- **Theorems** (optional - statements, proofs, and examples)
- MCQs (interactive with answer checking)
- Summary (numbered list)

### Exercises Tab - Button Navigation
- Menu-based navigation with colorful buttons:
  - Exercise buttons (Exercise 1.1, Exercise 1.2, etc.)
  - NCERT Examples button
  - Important Theorems button (only visible if chapter has theorems)
- Clicking exercise shows question buttons (Q.1, Q.2, etc.)
- Clicking question shows expandable solution
- Back to Menu button for navigation

### Color-Coded Chapters
- Real Numbers: #FF6B6B
- Polynomials: #FFA726
- Linear Equations: #00BCD4
- Quadratic Equations: #7C4DFF

### Backend Architecture
- **Runtime**: Express.js server with TypeScript
- **Port**: 5000
- **Purpose**: Landing page and API placeholder

## Key Components

### Solution Screen Components (`client/components/solution/`)
- `SectionCard.tsx` - Colored section container with icon
- `DefinitionItem.tsx` - Term and definition display
- `FormulaItem.tsx` - Formula with colored border
- `QuestionCard.tsx` - Expandable Q&A with solution toggle (justified text)
- `MCQSection.tsx` - Interactive MCQ with answer checking

### Data Files
- `client/data/chapters.ts` - Chapter metadata (id, name, color)
- `client/data/chapterContent.ts` - Full chapter content with exercises, examples, theorems

## Adding New Chapters

1. Add chapter content to `chapterContents` object in `client/data/chapterContent.ts`
2. Use the `ChapterContent` interface structure
3. Include `examples` array (required)
4. Include `theorems` array (optional - only for chapters with theorems)
5. Chapter will automatically become available (no longer "Coming Soon")

## Key npm Dependencies
- `expo` - Mobile app framework
- `@expo-google-fonts/nunito` - Nunito font family
- `expo-haptics` - Haptic feedback
- `react-native-reanimated` - Smooth animations
- `@react-navigation/native` - Navigation

## Development Tools
- **TypeScript**: Strict mode enabled
- **ESLint**: Expo config with Prettier integration
- **Babel**: Module resolver for path aliases
