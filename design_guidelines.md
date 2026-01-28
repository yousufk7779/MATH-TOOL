# JIGUU Math Solutions - Design Guidelines

## Brand Identity

**Purpose**: An AI-powered math tutor that helps students solve problems step-by-step, building confidence and understanding.

**Aesthetic Direction**: Confident & Approachable
- Clean, breathable layouts that reduce math anxiety
- Warm, inviting colors that feel supportive, not clinical
- Clear visual hierarchy that guides students through solutions
- Celebratory moments when problems are solved

**Memorable Element**: Glowing gradient accents on action buttons that feel like "unlocking" understanding, combined with smooth step-by-step reveal animations.

## Navigation Architecture

**Root Navigation**: Tab Bar (3 tabs)
- **Solve** (center, primary) - Camera icon - Main problem-solving interface
- **History** - Clock icon - Past solved problems
- **Profile** - User icon - Account and settings

**Screen List**:
1. Solve Screen - Capture/input math problems
2. Solution Screen - Step-by-step problem breakdown (modal)
3. History Screen - Grid of previously solved problems
4. Problem Detail Screen - View past solution
5. Profile Screen - User info, settings, subscription
6. Auth Screen - Sign in with SSO (stack-only, pre-tab)

## Screen-by-Screen Specifications

### Solve Screen (Solve Tab)
- **Header**: Transparent, centered "JIGUU" wordmark, no buttons
- **Layout**: 
  - Scrollable root view with top inset: headerHeight + Spacing.xl, bottom inset: tabBarHeight + Spacing.xl
  - Hero section with welcoming message: "What math problem can I help with?"
  - Large, prominent camera button (floating visual style with gradient background)
  - Alternative input: "Or type your problem" text input field
  - Quick action chips: "Photo from library", "Scan worksheet"
- **Empty State**: Subtle illustration of pencil and paper (hero-illustration.png)
- **Components**: Text input, camera button, action chips

### Solution Screen (Modal)
- **Header**: Default navigation, left: "Close" button, title: "Solution"
- **Layout**:
  - Non-scrollable root, main area is scrollable with top inset: Spacing.xl, bottom inset: insets.bottom + Spacing.xl
  - Problem statement card at top
  - Expandable step cards (tap to reveal explanation)
  - Visual representations (graphs, diagrams) where applicable
  - "Save to History" button at bottom
- **Components**: Cards, expandable sections, math rendering, save button

### History Screen (History Tab)
- **Header**: Default navigation, centered title "History", right: Filter icon button
- **Layout**:
  - List/grid view with top inset: Spacing.xl, bottom inset: tabBarHeight + Spacing.xl
  - Each item shows: problem preview, date solved, difficulty tag
  - Tap to open Problem Detail Screen
- **Empty State**: Illustration of empty folder with encouraging text (empty-history.png)
- **Components**: Grid/list of problem cards, filter button

### Problem Detail Screen (Stack)
- **Header**: Default navigation with back button, title: Problem type (e.g., "Calculus")
- **Layout**: Same as Solution Screen but read-only, add "Solve Similar" button at bottom
- **Components**: Reuse Solution Screen layout

### Profile Screen (Profile Tab)
- **Header**: Transparent, no title
- **Layout**:
  - Scrollable with top inset: headerHeight + Spacing.xl, bottom inset: tabBarHeight + Spacing.xl
  - User avatar (circular, editable)
  - Display name
  - "Problems Solved" stat counter
  - Settings list: Theme, Notifications, Help & Support, Privacy Policy, Terms
  - Log Out button (bottom of list)
  - Delete Account (nested: Settings > Account > Delete Account)
- **Components**: Avatar, stats, settings list, buttons

### Auth Screen (Pre-tab Stack)
- **Header**: None
- **Layout**:
  - Non-scrollable, centered content with top inset: insets.top + Spacing.xl, bottom inset: insets.bottom + Spacing.xl
  - App logo with tagline
  - "Sign in with Apple" button
  - "Sign in with Google" button
  - Privacy policy & terms links (small text)
- **Components**: SSO buttons, legal links

## Color Palette

- **Primary**: #4F46E5 (Confident indigo - knowledge, trust)
- **Primary Gradient**: Linear gradient from #6366F1 to #8B5CF6 (for hero buttons)
- **Background**: #FAFAFA (Soft warm white)
- **Surface**: #FFFFFF (Cards, inputs)
- **Text Primary**: #1F2937 (Deep charcoal)
- **Text Secondary**: #6B7280 (Neutral gray)
- **Success**: #10B981 (Correct answers)
- **Error**: #EF4444 (Incorrect, try again)
- **Border**: #E5E7EB (Subtle divisions)

## Typography

- **Font**: Inter (system fallback: SF Pro for iOS, Roboto for Android)
- **Scale**:
  - Hero: 32px, Bold (welcome messages)
  - Title: 24px, Semibold (screen titles)
  - Heading: 18px, Semibold (section headers)
  - Body: 16px, Regular (explanations)
  - Caption: 14px, Regular (metadata)
  - Small: 12px, Regular (legal text)

## Visual Design

- **Icons**: Feather icons from @expo/vector-icons
- **Touchable Feedback**: Scale down to 0.97 on press for buttons, opacity 0.6 for text links
- **Floating Buttons**: Use shadow (offset: {width: 0, height: 2}, opacity: 0.10, radius: 2)
- **Cards**: 12px border radius, subtle border (#E5E7EB)
- **Spacing Scale**: xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32

## Assets to Generate

1. **icon.png** - App icon: Stylized "J" with subtle mathematical symbols integrated, indigo gradient background
2. **splash-icon.png** - Same as icon.png, used during app launch
3. **hero-illustration.png** - Minimalist illustration of floating pencil and paper with light sparkles, used on Solve Screen empty state
4. **empty-history.png** - Open folder with subtle calculator/ruler icons, warm and encouraging, used on History Screen when no problems saved
5. **avatar-preset.png** - Simple geometric avatar (circle with gradient), used as default user avatar in Profile Screen