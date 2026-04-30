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
  "Class 9": {
    "Mathematics": [
      { id: "c9-math-1", number: 1, name: "Number Systems", color: "#E91E63" },
      { id: "c9-math-2", number: 2, name: "Polynomials", color: "#00C853" },
      { id: "c9-math-3", number: 3, name: "Linear Equations in Two Variables", color: "#FFAB00" },
      { id: "c9-math-4", number: 4, name: "Coordinate Geometry", color: "#AA00FF" },
      { id: "c9-math-5", number: 5, name: "Lines and Angles", color: "#00B8D4" },
      { id: "c9-math-6", number: 6, name: "Triangles", color: "#F06292" },
      { id: "c9-math-7", number: 7, name: "Quadrilaterals", color: "#6200EA" },
      { id: "c9-math-8", number: 8, name: "Circles", color: "#FF6D00" },
      { id: "c9-math-9", number: 9, name: "Heron’s Formula", color: "#0091EA" },
      { id: "c9-math-10", number: 10, name: "Surface Area and Volumes", color: "#FFD600" },
      { id: "c9-math-11", number: 11, name: "Statistics", color: "#00D4FF" }
    ]
  },
  "Class 8": {
    "Mathematics": [
      { id: "c8-math-1", number: 1, name: "Real Numbers", color: "#E91E63" },
      { id: "c8-math-2", number: 2, name: "Polynomials", color: "#00C853" },
      { id: "c8-math-3", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" },
      { id: "c8-math-4", number: 4, name: "Quadratic Equations", color: "#AA00FF" },
      { id: "c8-math-5", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" },
      { id: "c8-math-6", number: 6, name: "Triangles", color: "#F06292" },
      { id: "c8-math-7", number: 7, name: "Coordinate Geometry", color: "#6200EA" },
      { id: "c8-math-8", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" },
      { id: "c8-math-9", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" },
      { id: "c8-math-10", number: 10, name: "Circles", color: "#FFD600" },
      { id: "c8-math-11", number: 11, name: "Areas Related to Circles", color: "#00D4FF" },
      { id: "c8-math-12", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" },
      { id: "c8-math-13", number: 13, name: "Statistics", color: "#E040FB" },
      { id: "c8-math-14", number: 14, name: "Probability", color: "#64DD17" },
    ]
  },
  "Class 7": {
    "Mathematics": [
      { id: "c7-math-1", number: 1, name: "Real Numbers", color: "#E91E63" },
      { id: "c7-math-2", number: 2, name: "Polynomials", color: "#00C853" },
      { id: "c7-math-3", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" },
      { id: "c7-math-4", number: 4, name: "Quadratic Equations", color: "#AA00FF" },
      { id: "c7-math-5", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" },
      { id: "c7-math-6", number: 6, name: "Triangles", color: "#F06292" },
      { id: "c7-math-7", number: 7, name: "Coordinate Geometry", color: "#6200EA" },
      { id: "c7-math-8", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" },
      { id: "c7-math-9", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" },
      { id: "c7-math-10", number: 10, name: "Circles", color: "#FFD600" },
      { id: "c7-math-11", number: 11, name: "Areas Related to Circles", color: "#00D4FF" },
      { id: "c7-math-12", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" },
      { id: "c7-math-13", number: 13, name: "Statistics", color: "#E040FB" },
      { id: "c7-math-14", number: 14, name: "Probability", color: "#64DD17" },
    ]
  },
  "Class 9 Science": {
    "Physics": [
      { id: "c9-sci-phy-1", number: 1, name: "Motion", color: "#E91E63" },
      { id: "c9-sci-phy-2", number: 2, name: "Force and Laws of Motion", color: "#E91E63" },
      { id: "c9-sci-phy-3", number: 3, name: "Work, Energy and Power", color: "#E91E63" },
      { id: "c9-sci-phy-4", number: 4, name: "Gravitation", color: "#E91E63" },
      { id: "c9-sci-phy-5", number: 5, name: "Floatation", color: "#E91E63" },
      { id: "c9-sci-phy-6", number: 6, name: "Sound", color: "#E91E63" }
    ],
    "Chemistry": [
      { id: "c9-sci-chem-1", number: 1, name: "Matter in Our Surroundings", color: "#9C27B0" },
      { id: "c9-sci-chem-2", number: 2, name: "Is Matter Around Us Pure?", color: "#9C27B0" },
      { id: "c9-sci-chem-3", number: 3, name: "Atoms and Molecules", color: "#9C27B0" },
      { id: "c9-sci-chem-4", number: 4, name: "Structure of the Atom", color: "#9C27B0" }
    ],
    "Biology": [
      { id: "c9-sci-bio-1", number: 1, name: "The Fundamental Unit of Life", color: "#4CAF50" },
      { id: "c9-sci-bio-2", number: 2, name: "Tissues", color: "#4CAF50" },
      { id: "c9-sci-bio-3", number: 3, name: "Improvement in Food Resources", color: "#4CAF50" },
      { id: "c9-sci-bio-4", number: 4, name: "Prevention of Drug Abuse and Sexually Transmitted Diseases", color: "#4CAF50" }
    ]
  },
  "Class 8 Science": {
    "Science": [
      { id: "c8-sci-1", number: 1, name: "Crop Production and Management", color: "#E91E63" },
      { id: "c8-sci-2", number: 2, name: "Microorganisms: Friend and Foe", color: "#E91E63" },
      { id: "c8-sci-3", number: 3, name: "Coal and Petroleum", color: "#E91E63" },
      { id: "c8-sci-4", number: 4, name: "Combustion and Flame", color: "#E91E63" },
      { id: "c8-sci-5", number: 5, name: "Conservation of Plants and Animals", color: "#E91E63" },
      { id: "c8-sci-6", number: 6, name: "Reproduction in Animals", color: "#E91E63" },
      { id: "c8-sci-7", number: 7, name: "Reaching the Age of Adolescence", color: "#E91E63" },
      { id: "c8-sci-8", number: 8, name: "Force and Pressure", color: "#E91E63" },
      { id: "c8-sci-9", number: 9, name: "Friction", color: "#E91E63" },
      { id: "c8-sci-10", number: 10, name: "Sound", color: "#E91E63" },
      { id: "c8-sci-11", number: 11, name: "Chemical Effects of Electric Current", color: "#E91E63" },
      { id: "c8-sci-12", number: 12, name: "Some Natural Phenomena", color: "#E91E63" },
      { id: "c8-sci-13", number: 13, name: "Light", color: "#E91E63" }
    ]
  },
  "Class 7 Science": {
    "Science": [
      { id: "c7-sci-1", number: 1, name: "Nutrition in Plants", color: "#E91E63" },
      { id: "c7-sci-2", number: 2, name: "Nutrition in Animals", color: "#E91E63" },
      { id: "c7-sci-3", number: 3, name: "Heat", color: "#E91E63" },
      { id: "c7-sci-4", number: 4, name: "Acids, Bases and Salts", color: "#E91E63" },
      { id: "c7-sci-5", number: 5, name: "Physical and Chemical Changes", color: "#E91E63" },
      { id: "c7-sci-6", number: 6, name: "Respiration in Organisms", color: "#E91E63" },
      { id: "c7-sci-7", number: 7, name: "Transportation in Animals and Plants", color: "#E91E63" },
      { id: "c7-sci-8", number: 8, name: "Reproduction in Plants", color: "#E91E63" },
      { id: "c7-sci-9", number: 9, name: "Motion and Time", color: "#E91E63" },
      { id: "c7-sci-10", number: 10, name: "Electric Current and its Effects", color: "#E91E63" },
      { id: "c7-sci-11", number: 11, name: "Light", color: "#E91E63" },
      { id: "c7-sci-12", number: 12, name: "Forests: Our Lifeline", color: "#E91E63" },
      { id: "c7-sci-13", number: 13, name: "Wastewater Story", color: "#E91E63" }
    ]
  }
};

export function getChapterGradient(chapter: Chapter | string): string[] {
  const chapterId = typeof chapter === "string" ? chapter : chapter.id;
  
  // Targeted theme color replacement for Chemistry Chapter 2 and Math Chapter 7
  const cyanTargetedIds = [
    "sci-chem-2", "c9-sci-chem-2", "c8-sci-chem-2", "c7-sci-chem-2",
    "ch7", "c9-math-7", "c8-math-7", "c7-math-7"
  ];
  
  if (cyanTargetedIds.includes(chapterId)) {
    return ["#00E5FF", "#0099CC"];
  }

  // Targeted theme color replacement for Math Chapter 6 (Pink)
  const pinkTargetedIds = [
    "ch6", "c9-math-6", "c8-math-6", "c7-math-6"
  ];

  if (pinkTargetedIds.includes(chapterId)) {
    return ["#FF6CAB", "#D61A8D"];
  }

  // Targeted theme color replacement for Chemistry Chapter 4 (Green-Cyan)
  const greenCyanTargetedIds = [
    "sci-chem-4", "c9-sci-chem-4", "c8-sci-chem-4", "c7-sci-chem-4"
  ];

  if (greenCyanTargetedIds.includes(chapterId)) {
    return ["#FFA726", "#FB8C00"];
  }
  
  // Targeted theme color replacement for Biology Chapter 4 (Pink -> Orange Glossy)
  const pinkOrangeTargetedIds = [
    "sci-bio-4", "c9-sci-bio-4", "c8-sci-bio-4", "c7-sci-bio-4", "c6-sci-bio-4"
  ];

  if (pinkOrangeTargetedIds.includes(chapterId)) {
    return JiguuColors.gradients.pinkOrange;
  }

  const gradientList = Object.values(JiguuColors.gradients) as string[][];
  
  // Deterministic mapping for consistency between list and screen
  if (chapterId.startsWith("ch") || chapterId.match(/^c[789]-math/)) {
    const numStr = chapterId.startsWith("ch") ? chapterId.replace("ch", "") : chapterId.split("-").pop() || "1";
    const num = parseInt(numStr);
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

  if (chapterId.match(/^c[789]-sci-phy/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const physicsGradients = [gradientList[7], gradientList[0], gradientList[1]]; 
    return physicsGradients[(num - 1) % physicsGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-chem/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const chemGradients = [gradientList[2], gradientList[6], gradientList[1]];
    return chemGradients[(num - 1) % chemGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-bio/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const bioGradients = [gradientList[4], gradientList[5], gradientList[18] ? gradientList[18] : gradientList[3]];
    return bioGradients[(num - 1) % bioGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-\d+$/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    // Science chapters get a variety of gradients
    const sciGradients = [
      gradientList[2], // Purple
      gradientList[4], // Green
      gradientList[7], // Orange
      gradientList[0], // Pink
      gradientList[6], // Indigo
      gradientList[5], // Teal
    ];
    return sciGradients[(num - 1) % sciGradients.length];
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
