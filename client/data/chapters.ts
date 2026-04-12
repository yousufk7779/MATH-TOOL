import { JiguuColors } from "@/constants/theme";

export interface Chapter {
  id: string;
  number: number;
  name: string;
  color: string;
  locked?: boolean;
}

export const class10Chapters: Chapter[] = [
  { id: "ch1", number: 1, name: "Real Numbers", color: "#E91E63" }, // Pink
  { id: "ch2", number: 2, name: "Polynomials", color: "#00C853" }, // Green
  { id: "ch3", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" }, // Amber
  { id: "ch4", number: 4, name: "Quadratic Equations", color: "#AA00FF" }, // Purple
  { id: "ch5", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" }, // Cyan
  { id: "ch6", number: 6, name: "Triangles", color: "#F06292" }, // Pink
  { id: "ch7", number: 7, name: "Coordinate Geometry", color: "#6200EA" }, // Deep Purple
  { id: "ch8", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" }, // Orange
  { id: "ch9", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" }, // Light Blue
  { id: "ch10", number: 10, name: "Circles", color: "#FFD600" }, // Yellow
  { id: "ch11", number: 11, name: "Areas Related to Circles", color: "#00D4FF" },
  { id: "ch12", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" },
  { id: "ch13", number: 13, name: "Statistics", color: "#E040FB" },
  { id: "ch14", number: 14, name: "Probability", color: "#64DD17" },
];

export const otherSubjectsData: Record<string, Record<string, Chapter[]>> = {
  "Science": {
    "Physics": [
      { id: "sci-phy-1", number: 1, name: "Light - Reflection and Refraction", color: "#E91E63" },
      { id: "sci-phy-2", number: 2, name: "The Human Eye and the Colourful World", color: "#E91E63" },
      { id: "sci-phy-3", number: 3, name: "Electricity", color: "#E91E63" },
      { id: "sci-phy-4", number: 4, name: "Magnetic Effects of Electric Current", color: "#E91E63" },
    ],
    "Chemistry": [
      { id: "sci-chem-1", number: 1, name: "Chemical Reactions and Equations", color: "#9C27B0" },
      { id: "sci-chem-2", number: 2, name: "Acids, Bases and Salts", color: "#9C27B0" },
      { id: "sci-chem-3", number: 3, name: "Metals and Non-metals", color: "#9C27B0" },
      { id: "sci-chem-4", number: 4, name: "Carbon and its Compounds", color: "#9C27B0" },
    ],
    "Biology": [
      { id: "sci-bio-1", number: 1, name: "Life Processes", color: "#4CAF50" },
      { id: "sci-bio-2", number: 2, name: "Control and Coordination", color: "#4CAF50" },
      { id: "sci-bio-3", number: 3, name: "How do Organisms Reproduce?", color: "#4CAF50" },
      { id: "sci-bio-4", number: 4, name: "Heredity", color: "#4CAF50" },
      { id: "sci-bio-5", number: 5, name: "Our Environment", color: "#4CAF50" },
    ]
  },
};

export function getChapterGradient(chapter: Chapter | string): string[] {
  const chapterId = typeof chapter === "string" ? chapter : chapter.id;
  const gradientList = Object.values(JiguuColors.gradients) as string[][];
  
  // Deterministic mapping for consistency between list and screen
  if (chapterId.startsWith("ch")) {
    const num = parseInt(chapterId.replace("ch", ""));
    return gradientList[(num - 1) % gradientList.length];
  }
  
  if (chapterId.startsWith("sci-phy")) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    // Physics is Deep Orange / Orange / Pink themed
    const physicsGradients = [gradientList[7], gradientList[0], gradientList[1]]; 
    return physicsGradients[(num - 1) % physicsGradients.length];
  }

  if (chapterId.startsWith("sci-chem")) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    // Chemistry is Purple / Indigo / Pink themed
    const chemGradients = [gradientList[2], gradientList[6], gradientList[1]];
    return chemGradients[(num - 1) % chemGradients.length];
  }

  if (chapterId.startsWith("sci-bio")) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    // Biology is Green / Teal / Blue themed
    const bioGradients = [gradientList[4], gradientList[5], gradientList[18] ? gradientList[18] : gradientList[3]];
    return bioGradients[(num - 1) % bioGradients.length];
  }

  return JiguuColors.primaryGradient;
}

export function getChapter(chapterId: string): Chapter | undefined {
  const mathChapter = class10Chapters.find((ch) => ch.id === chapterId);
  if (mathChapter) return mathChapter;

  for (const subject of Object.values(otherSubjectsData)) {
    for (const topicChapters of Object.values(subject)) {
      const found = topicChapters.find((ch) => ch.id === chapterId);
      if (found) return found;
    }
  }
  return undefined;
}
