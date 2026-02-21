
export interface Chapter {
  id: string;
  number: number;
  name: string;
  color: string;
  locked?: boolean;
}

export const class10Chapters: Chapter[] = [
  { id: "ch1", number: 1, name: "Real Numbers", color: "#2962FF" }, // Blue
  { id: "ch2", number: 2, name: "Polynomials", color: "#00C853" }, // Green
  { id: "ch3", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" }, // Amber
  { id: "ch4", number: 4, name: "Quadratic Equations", color: "#AA00FF" }, // Purple
  { id: "ch5", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" }, // Cyan
  { id: "ch6", number: 6, name: "Triangles", color: "#C6FF00" }, // Lime
  { id: "ch7", number: 7, name: "Coordinate Geometry", color: "#6200EA" }, // Deep Purple
  { id: "ch8", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" }, // Orange
  { id: "ch9", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" }, // Light Blue
  { id: "ch10", number: 10, name: "Circles", color: "#FFD600" }, // Yellow
  { id: "ch11", number: 11, name: "Areas Related to Circles", color: "#304FFE" },
  { id: "ch12", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" },
  { id: "ch13", number: 13, name: "Statistics", color: "#E040FB" },
  { id: "ch14", number: 14, name: "Probability", color: "#64DD17" },
];

export function getChapter(chapterId: string): Chapter | undefined {
  return class10Chapters.find((ch) => ch.id === chapterId);
}
