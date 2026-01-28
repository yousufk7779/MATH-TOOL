# JIGUU Math Solutions

## Overview

JIGUU is an AI-powered math tutor mobile application built with Expo/React Native that helps students solve math problems step-by-step. The app allows users to capture or type math problems, receive detailed step-by-step solutions powered by OpenAI, and save problems to their history. The repository also contains a secondary JIGUU Solutions project focused on NCERT Class 10 mathematics chapter-based solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Expo SDK 54 with React Native 0.81
- **Navigation**: React Navigation v7 with native stack and bottom tabs
- **State Management**: TanStack React Query for server state
- **UI Components**: Custom themed components with Reanimated animations
- **Styling**: StyleSheet-based with centralized theme constants (Colors, Spacing, Typography, BorderRadius)
- **Path Aliases**: `@/` maps to `./client`, `@shared/` maps to `./shared`

### Navigation Structure
- Root Stack Navigator containing:
  - Main Tab Navigator (3 tabs: History, Solve, Profile)
  - Modal screens (Solution, ProblemDetail)
- Each tab has its own stack navigator for nested navigation

### Backend Architecture
- **Runtime**: Express.js server with TypeScript
- **API Pattern**: RESTful endpoints under `/api/`
- **AI Integration**: OpenAI API for math problem solving (via Replit AI Integrations)
- **CORS**: Dynamic origin handling for Replit domains and localhost development

### Data Storage
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect
- **Current Storage**: In-memory storage class (`MemStorage`) for development
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Database Config**: `drizzle.config.ts` configured for PostgreSQL with migrations in `./migrations`

### Key Design Patterns
- Error boundaries for graceful error handling
- Keyboard-aware scroll views with platform compatibility
- Haptic feedback on user interactions
- Animated press states using Reanimated
- Themed components that respect light/dark mode

## External Dependencies

### AI Services
- **OpenAI API**: Used for math problem solving via structured JSON responses
- **Configuration**: Uses `AI_INTEGRATIONS_OPENAI_API_KEY` and `AI_INTEGRATIONS_OPENAI_BASE_URL` environment variables

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management

### Key npm Dependencies
- `expo` - Mobile app framework
- `expo-camera`, `expo-image-picker` - Camera/photo functionality for capturing math problems
- `expo-haptics` - Haptic feedback
- `react-native-reanimated` - Smooth animations
- `@tanstack/react-query` - Data fetching and caching
- `drizzle-orm` + `drizzle-zod` - Database ORM with Zod validation
- `openai` - OpenAI API client

### Development Tools
- **TypeScript**: Strict mode enabled
- **ESLint**: Expo config with Prettier integration
- **Babel**: Module resolver for path aliases