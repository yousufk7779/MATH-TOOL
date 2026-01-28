# JIGUU Math Solutions

## Overview

JIGUU Math Solutions is a Class 10 NCERT mathematics educational mobile app built with Expo/React Native. It provides chapter-based solutions with step-by-step explanations, definitions, formulas, exercises, and MCQs. Currently in testing phase with 4 integrated chapters.

## User Preferences

Preferred communication style: Simple, everyday language.

## Current Status

**Testing Phase**: 4 chapters fully integrated with content
- Chapter 1: Real Numbers
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

### Navigation Structure
- Root Stack Navigator containing:
  - ChapterListScreen (Home) - All 15 chapters
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
- MCQs (interactive with answer checking)
- Summary (numbered list)

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
- `QuestionCard.tsx` - Expandable Q&A with solution toggle
- `MCQSection.tsx` - Interactive MCQ with answer checking

### Data Files
- `client/data/chapters.ts` - Chapter metadata (id, name, color)
- `client/data/chapterContent.ts` - Full chapter content

## Adding New Chapters

1. Add chapter content to `chapterContents` object in `client/data/chapterContent.ts`
2. Use the `ChapterContent` interface structure
3. Chapter will automatically become available (no longer "Coming Soon")

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
