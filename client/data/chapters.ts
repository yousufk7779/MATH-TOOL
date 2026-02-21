
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
  "Social Science": {
    "History": [
      { id: "sst-his-1", number: 1, name: "The Rise of Nationalism in Europe", color: "#F44336" },
      { id: "sst-his-2", number: 2, name: "Nationalism in India", color: "#F44336" },
      { id: "sst-his-3", number: 3, name: "The Making of a Global World", color: "#F44336" },
      { id: "sst-his-4", number: 4, name: "The Age of Industrialisation", color: "#F44336" },
      { id: "sst-his-5", number: 5, name: "Print Culture and the Modern World", color: "#F44336" },
    ],
    "Geography": [
      { id: "sst-geo-1", number: 1, name: "Resources and Development", color: "#2196F3" },
      { id: "sst-geo-2", number: 2, name: "Forest and Wildlife Resources", color: "#2196F3" },
      { id: "sst-geo-3", number: 3, name: "Water Resources", color: "#2196F3" },
      { id: "sst-geo-4", number: 4, name: "Agriculture", color: "#2196F3" },
      { id: "sst-geo-5", number: 5, name: "Minerals and Energy Resources", color: "#2196F3" },
      { id: "sst-geo-6", number: 6, name: "Manufacturing Industries", color: "#2196F3" },
      { id: "sst-geo-7", number: 7, name: "Lifelines of National Economy", color: "#2196F3" },
    ],
    "Political Science": [
      { id: "sst-pol-1", number: 1, name: "Power Sharing", color: "#9C27B0" },
      { id: "sst-pol-2", number: 2, name: "Federalism", color: "#9C27B0" },
      { id: "sst-pol-3", number: 3, name: "Gender, Religion and Caste", color: "#9C27B0" },
      { id: "sst-pol-4", number: 4, name: "Political Parties", color: "#9C27B0" },
      { id: "sst-pol-5", number: 5, name: "Outcomes of Democracy", color: "#9C27B0" },
    ],
    "Disaster Management": [
      { id: "sst-dis-1", number: 1, name: "Protecting Ourselves from Disasters", color: "#FF9800" },
    ],
    "Road Safety": [
      { id: "sst-road-1", number: 1, name: "Road Safety Education", color: "#607D8B" },
    ]
  },
  "English": {
    "Prose": [
      { id: "eng-pro-1", number: 1, name: "A Letter to God", color: "#3F51B5" },
      { id: "eng-pro-2", number: 2, name: "Nelson Mandela: Long Walk to Freedom", color: "#3F51B5" },
      { id: "eng-pro-3", number: 3, name: "Two Stories about Flying", color: "#3F51B5" },
      { id: "eng-pro-4", number: 4, name: "From the Diary of Anne Frank", color: "#3F51B5" },
      { id: "eng-pro-5", number: 5, name: "Glimpses of India", color: "#3F51B5" },
      { id: "eng-pro-6", number: 6, name: "Mijbil the Otter", color: "#3F51B5" },
    ],
    "Poetry": [
      { id: "eng-poe-1", number: 1, name: "Dust of Snow", color: "#E91E63" },
      { id: "eng-poe-2", number: 2, name: "Fire and Ice", color: "#E91E63" },
      { id: "eng-poe-3", number: 3, name: "A Tiger in the Zoo", color: "#E91E63" },
      { id: "eng-poe-4", number: 4, name: "How to Tell Wild Animals", color: "#E91E63" },
      { id: "eng-poe-5", number: 5, name: "The Ball Poem", color: "#E91E63" },
      { id: "eng-poe-6", number: 6, name: "Amanda!", color: "#E91E63" },
    ],
    "Short Stories": [
      { id: "eng-sto-1", number: 1, name: "A Triumph of Surgery", color: "#009688" },
      { id: "eng-sto-2", number: 2, name: "The Thief's Story", color: "#009688" },
      { id: "eng-sto-3", number: 3, name: "The Midnight Visitor", color: "#009688" },
      { id: "eng-sto-4", number: 4, name: "A Question of Trust", color: "#009688" },
      { id: "eng-sto-5", number: 5, name: "Footprints without Feet", color: "#009688" },
      { id: "eng-sto-6", number: 6, name: "The Making of a Scientist", color: "#009688" },
    ],
    "Grammer": [
      { id: "eng-gra-1", number: 1, name: "Tenses", color: "#FF5722" },
      { id: "eng-gra-2", number: 2, name: "Modals", color: "#FF5722" },
      { id: "eng-gra-3", number: 3, name: "Subject-Verb Concord", color: "#FF5722" },
      { id: "eng-gra-4", number: 4, name: "Reported Speech", color: "#FF5722" },
      { id: "eng-gra-5", number: 5, name: "Determiners", color: "#FF5722" },
    ]
  }
};

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
