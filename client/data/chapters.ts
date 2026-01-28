export interface Chapter {
  id: string;
  number: number;
  name: string;
  color: string;
}

export const class10Chapters: Chapter[] = [
  { id: "ch1-real-numbers", number: 1, name: "Real Numbers", color: "#FF6B6B" },
  { id: "ch2-polynomials", number: 2, name: "Polynomials", color: "#FFA726" },
  { id: "ch3-linear-equations", number: 3, name: "Pair of Linear Equations in Two Variables", color: "#00BCD4" },
  { id: "ch4-quadratic-equations", number: 4, name: "Quadratic Equations", color: "#7C4DFF" },
  { id: "ch5-arithmetic-progressions", number: 5, name: "Arithmetic Progressions", color: "#4CAF50" },
  { id: "ch6-triangles", number: 6, name: "Triangles", color: "#E91E63" },
  { id: "ch7-coordinate-geometry", number: 7, name: "Coordinate Geometry", color: "#00E676" },
  { id: "ch8-trigonometry", number: 8, name: "Introduction to Trigonometry", color: "#FF5722" },
  { id: "ch9-applications-trigonometry", number: 9, name: "Some Applications of Trigonometry", color: "#9C27B0" },
  { id: "ch10-circles", number: 10, name: "Circles", color: "#FF7043" },
  { id: "ch12-areas-circles", number: 11, name: "Areas Related to Circles", color: "#29B6F6" },
  { id: "ch13-surface-areas-volumes", number: 12, name: "Surface Areas and Volumes", color: "#42A5F5" },
  { id: "ch14-statistics", number: 13, name: "Statistics", color: "#66BB6A" },
  { id: "ch15-probability", number: 14, name: "Probability", color: "#AB47BC" },
];

export function getChapter(chapterId: string): Chapter | undefined {
  return class10Chapters.find((ch) => ch.id === chapterId);
}
