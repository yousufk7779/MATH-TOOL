import { Platform } from "react-native";

export const JiguuColors = {
  background: "#0B0F1A", // Darkest navy for seamless splash handoff
  surface: "#1E1E2E",    // Slightly lighter dark surface
  surfaceLight: "#2A2A3C",
  border: "#3B3B52",

  // Vibrant Gradients
  primaryGradient: ["#304FFE", "#8E24AA", "#E91E63"], // Blue -> Purple -> Pink
  successGradient: ["#4CAF50", "#1B5E20"],           // Green gradient for completed solutions

  // Multi-color Button Gradients (from SS)
  gradients: {
    orange: ["#FFB74D", "#FF9800", "#F44336"],
    pink: ["#FF4081", "#D81B60", "#880E4F"],
    purple: ["#AB47BC", "#8E24AA", "#4A148C"],
    blue: ["#42A5F5", "#2196F3", "#0D47A1"],
    green: ["#66BB6A", "#43A047", "#1B5E20"],
    teal: ["#26C6DA", "#00ACC1", "#006064"],
    indigo: ["#7986CB", "#3F51B5", "#1A237E"],
    deepOrange: ["#FF8A65", "#F4511E", "#BF360C"],
    brightBlue: ["#00C6FF", "#0072FF"],
    neonGreen: ["#7CFF00", "#DFFF00"],
    pinkOrange: ["#FF4DA6", "#FFA64D"],
  },

  realNumbers: "#FF6B6B",
  polynomials: "#FFA726",
  linearEquations: "#00BCD4",
  quadraticEquations: "#7C4DFF",
  arithmetic: "#4CAF50",
  triangles: "#E91E63",
  coordinate: "#00E676",
  circles: "#FF5722",
  constructions: "#9C27B0",
  areas: "#795548",
  surfaceVolume: "#607D8B",
  statistics: "#3F51B5",
  probability: "#009688",

  newsEvents: "#7C4DFF",
  quickNotes: "#26A69A",

  accent1: "#00D4FF",
  accent2: "#FF6B9D",
  accent3: "#7C4DFF",
  accent4: "#00E676",

  textPrimary: "#FFFFFF",
  textSecondary: "#E0E0E0", // Brighter secondary text for better contrast on dark
  textOnColor: "#FFFFFF",
};

const tintColorLight = JiguuColors.realNumbers;
const tintColorDark = "#818CF8";

export const Colors = {
  light: {
    text: JiguuColors.textPrimary,
    buttonText: JiguuColors.textOnColor,
    tabIconDefault: JiguuColors.textSecondary,
    tabIconSelected: tintColorLight,
    link: JiguuColors.accent1,
    backgroundRoot: JiguuColors.background,
    backgroundDefault: JiguuColors.surface,
    backgroundSecondary: JiguuColors.surfaceLight,
    backgroundTertiary: JiguuColors.border,
  },
  dark: {
    text: "#ECEDEE",
    buttonText: "#FFFFFF",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    link: "#818CF8",
    backgroundRoot: "#1A1A2E",
    backgroundDefault: "#252538",
    backgroundSecondary: "#303045",
    backgroundTertiary: "#3B3B52",
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  inputHeight: 48,
  buttonHeight: 56,
};

export const BorderRadius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 30,
  "2xl": 40,
  "3xl": 50,
  full: 9999,
};

export const Typography = {
  logo: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: "NotoSans_400Regular",
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "NotoSans_400Regular",
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: "NotoSans_400Regular",
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "NotoSans_400Regular",
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "NotoSans_400Regular",
  },
  button: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "NotoSans_700Bold",
    letterSpacing: 0.8,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "NotoSans_400Regular",
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "NotoSans_400Regular",
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "NotoSans_400Regular",
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "NotoSans_400Regular",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "NotoSans_400Regular",
    serif: "ui-serif",
    rounded: "NotoSans_400Regular",
    mono: "ui-monospace",
  },
  default: {
    sans: "NotoSans_400Regular",
    serif: "serif",
    rounded: "NotoSans_400Regular",
    mono: "monospace",
  },
  web: {
    sans: "NotoSans_400Regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "NotoSans_400Regular, 'SF Pro Rounded', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
