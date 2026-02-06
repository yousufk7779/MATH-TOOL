export interface Chapter {
  id: string;
  number: number;
  name: string;
  color: string;
}

export const class10Chapters: Chapter[] = [
  { id: "ch1-real-numbers", number: 1, name: "Real Numbers", color: "#2962FF" }, // Blue
  { id: "ch2-polynomials", number: 2, name: "Polynomials", color: "#00C853" }, // Green
  { id: "ch3-linear-equations", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" }, // Amber
  { id: "ch4-quadratic-equations", number: 4, name: "Quadratic Equations", color: "#AA00FF" }, // Purple
  { id: "ch5-arithmetic-progressions", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" }, // Cyan
  { id: "ch6-triangles", number: 6, name: "Triangles", color: "#C6FF00" }, // Lime
  { id: "ch7-coordinate-geometry", number: 7, name: "Coordinate Geometry", color: "#6200EA" }, // Deep Purple
  { id: "ch8-trigonometry", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" }, // Orange
  { id: "ch9-applications-trigonometry", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" }, // Light Blue
  { id: "ch10-circles", number: 10, name: "Circles", color: "#FFD600" }, // Yellow
  { id: "ch12-areas-circles", number: 11, name: "Areas Related to Circles", color: "#304FFE" }, // Indigo
  { id: "ch13-surface-areas-volumes", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" }, // Teal
  { id: "ch14-statistics", number: 13, name: "Statistics", color: "#E040FB" }, // Purple Accent
  { id: "ch15-probability", number: 14, name: "Probability", color: "#64DD17" }, // Light Green
];

export function getChapter(chapterId: string): Chapter | undefined {
  return class10Chapters.find((ch) => ch.id === chapterId);
}
