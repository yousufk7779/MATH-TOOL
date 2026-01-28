# JIGUU Math Solutions Class 10 - Design Guidelines

## Brand Identity

**Purpose**: Help Class 10 students master mathematics through structured, step-by-step solutions.

**Aesthetic Direction**: Premium Educational - Sophisticated dark interface with refined typography, clear mathematical hierarchy, and color-coded organization. Think luxury learning platform, not flashy gaming app. Calm, focused, confidence-inspiring.

**Memorable Element**: Color-coded chapter system with gradient accent cards against the dark canvas, creating a visual taxonomy of mathematical domains.

## Navigation Architecture

**Root Navigation**: Tab Navigation (3 tabs)
- **Chapters** (Home) - Browse all chapters with color-coded cards
- **Bookmarks** - Saved solutions and formulas
- **Profile** - Settings, progress, preferences

All screens use transparent headers by default.

## Color Palette

**Background**
- Primary Background: #1A1A2E
- Surface (cards): #252541
- Surface Elevated: #2E2E4D

**Text**
- Primary Text: #FFFFFF (100% opacity)
- Secondary Text: #B8B8D1 (70% opacity)
- Tertiary Text: #8585A3 (50% opacity)

**Accent Colors (for chapter color-coding)**
- Algebra: #FF6B9D (coral pink)
- Geometry: #4ECDC4 (teal)
- Trigonometry: #FFD93D (golden yellow)
- Statistics: #95E1D3 (mint green)
- Coordinate Geometry: #A78BFA (soft purple)
- Probability: #FB8B24 (warm orange)

**Semantic**
- Success: #4ADE80
- Warning: #FBBF24
- Error: #F87171
- Info: #60A5FA

## Typography

**Font**: Nunito (Google Font)

**Type Scale**
- Display (Chapter Titles): Nunito Bold, 28px, line-height 34px
- Headline (Solution Steps): Nunito SemiBold, 20px, line-height 28px
- Body Large (Math Content): Nunito Regular, 17px, line-height 26px
- Body (Descriptions): Nunito Regular, 15px, line-height 22px
- Caption (Metadata): Nunito Regular, 13px, line-height 18px
- Label (Buttons): Nunito SemiBold, 15px

**Math Content**: For mathematical expressions, use monospace fallback (Courier New) at 16px for clarity. Display equations should be 20px.

## Screen Specifications

### 1. Chapters Screen (Home Tab)
**Purpose**: Browse and select math chapters

**Layout**
- Header: Transparent, title "JIGUU Math Solutions", right button (search icon)
- Main: Scrollable grid (2 columns on most devices)
- Root view padding: top (headerHeight + 24px), bottom (tabBarHeight + 24px), horizontal 16px

**Components**
- Chapter Cards (Grid Items):
  - Height: 140px
  - Background: Gradient using chapter accent color (20% opacity to 5% opacity, top-left to bottom-right)
  - Border: 1px solid accent color at 15% opacity
  - Corner radius: 16px
  - Content: Chapter number (caption), chapter name (body large), topic count (caption in secondary text)
  - Touchable with scale feedback (0.97 on press)

**Empty State**: None (always populated with curriculum)

### 2. Chapter Detail Screen (Stack, from Chapters)
**Purpose**: View topics within a chapter

**Layout**
- Header: Default navigation with back button, title is chapter name, right button (bookmark icon)
- Main: Scrollable list
- Root view padding: top 24px, bottom (tabBarHeight + 24px), horizontal 16px

**Components**
- Chapter header card with gradient (matching chapter color)
- Topic list items (cards):
  - Background: #252541
  - Border radius: 12px
  - Padding: 16px
  - Content: Topic number, topic name, completion indicator (checkmark if solved)
  - Spacing between items: 12px

### 3. Solution Screen (Stack, from Chapter Detail)
**Purpose**: Display complete solution with steps, formulas, definitions

**Layout**
- Header: Default navigation with back button, title is topic name, right button (bookmark icon)
- Main: Scrollable content
- Root view padding: top 24px, bottom (tabBarHeight + 24px), horizontal 20px

**Components**
- Problem Statement Card:
  - Background: #2E2E4D
  - Border radius: 12px
  - Padding: 20px
  - Mathematical expression in monospace
  
- Step-by-Step Section:
  - Each step in separate card (#252541 background)
  - Step number badge (circular, accent color background, 32px diameter)
  - Step title (headline typography)
  - Step explanation (body typography)
  - Spacing between steps: 16px

- Formula Reference Card:
  - Background: accent color at 10% opacity
  - Border-left: 3px solid accent color
  - Padding: 16px
  - Formula in monospace, definition in body text

- Definition Cards:
  - Background: #252541
  - Icon (Feather "info" in accent color)
  - Term (body large, semibold)
  - Meaning (body regular)

### 4. Exercises Screen (Stack, from Chapter Detail)
**Purpose**: Practice problems and MCQs

**Layout**
- Header: Default navigation with back button, title "Practice"
- Main: Scrollable form with submit button below
- Root view padding: top 24px, bottom (tabBarHeight + 80px), horizontal 16px

**Components**
- Exercise question cards (#252541)
- MCQ options as radio buttons (custom styled with accent color when selected)
- Floating action button: "Submit Answers" (accent color background, white text, bottom-right corner, 16px from edges)
  - Shadow: offset {width: 0, height: 2}, opacity 0.10, radius 2

### 5. Bookmarks Screen (Bookmarks Tab)
**Purpose**: Access saved solutions and formulas

**Layout**
- Header: Transparent, title "Bookmarks"
- Main: Scrollable list or empty state
- Root view padding: top (headerHeight + 24px), bottom (tabBarHeight + 24px), horizontal 16px

**Components**
- Bookmark cards similar to topic cards with chapter color accent
- Empty state illustration centered

**Empty State**: Shows "empty-bookmarks.png" with text "No bookmarks yet" (secondary text)

### 6. Profile Screen (Profile Tab)
**Purpose**: User preferences and app settings

**Layout**
- Header: Transparent, title "Profile"
- Main: Scrollable content
- Root view padding: top (headerHeight + 24px), bottom (tabBarHeight + 24px), horizontal 16px

**Components**
- User avatar (preset generated avatar, 80px diameter, circular)
- Display name field (editable)
- Settings sections:
  - Theme preferences (dark mode toggle - always on)
  - Notifications toggle
  - Progress statistics (cards showing solved topics)
  - About JIGUU (version, links)

## Visual Design

- All touchable elements use scale feedback (0.97) or opacity change (0.7)
- Floating action button uses shadow: offset {width: 0, height: 2}, opacity 0.10, radius 2
- Card elevations achieved through layered backgrounds, not shadows
- Icons from Feather icon set (@expo/vector-icons)
- Mathematical expressions should have 1.5x line-height for readability

## Assets to Generate

**Required**

1. **icon.png** - App icon: Stylized "JIGUU" monogram with mathematical symbols (∑, π) integrated, dark background with coral pink accent
   - WHERE USED: Device home screen

2. **splash-icon.png** - Same as app icon, optimized for splash screen
   - WHERE USED: App launch screen

3. **empty-bookmarks.png** - Minimal illustration of empty bookmark ribbon in coral pink outline style against dark background
   - WHERE USED: Bookmarks screen when no items saved

4. **avatar-preset.png** - Circular avatar with geometric pattern in chapter accent colors
   - WHERE USED: Profile screen default avatar

5. **formula-bg-pattern.png** - Subtle mathematical grid pattern (very low opacity ~5%)
   - WHERE USED: Background texture for formula reference cards

**Image Style**: Minimal line-art illustrations, single accent color outlines, dark backgrounds, educational and refined (not playful).