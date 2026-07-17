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
  {
    id: "ch8",
    number: 8,
    name: "Introduction to Trigonometry",
    color: "#FF6D00",
  }, // Orange
  {
    id: "ch9",
    number: 9,
    name: "Some Applications of Trigonometry",
    color: "#0091EA",
  }, // Light Blue
  { id: "ch10", number: 10, name: "Circles", color: "#FFD600" }, // Yellow
  {
    id: "ch11",
    number: 11,
    name: "Areas Related to Circles",
    color: "#00D4FF",
  },
  {
    id: "ch12",
    number: 12,
    name: "Surface Areas and Volumes",
    color: "#00BFA5",
  },
  { id: "ch13", number: 13, name: "Statistics", color: "#E040FB" },
  { id: "ch14", number: 14, name: "Probability", color: "#64DD17" },
];

export const otherSubjectsData: Record<string, Record<string, Chapter[]>> = {
  "Class 10 Social Science": {
    History: [
      {
        id: "sst-his-1",
        number: 1,
        name: "The Rise of Nationalism in Europe",
        color: "#FF8A65",
      },
      {
        id: "sst-his-2",
        number: 2,
        name: "Nationalism in India",
        color: "#FF8A65",
      },
      {
        id: "sst-his-3",
        number: 3,
        name: "The Making of a Global World",
        color: "#FF8A65",
      },
      {
        id: "sst-his-4",
        number: 4,
        name: "The Age of Industrialisation",
        color: "#FF8A65",
      },
      {
        id: "sst-his-5",
        number: 5,
        name: "Print Culture and the Modern World",
        color: "#FF8A65",
      },
      {
        id: "sst-his-6",
        number: 6,
        name: "Post Independence Era: Jammu and Kashmir on the Path of Modernisation",
        color: "#FF8A65",
      },
    ],
    Geography: [
      {
        id: "sst-geo-1",
        number: 1,
        name: "Resources and Development",
        color: "#4CAF50",
      },
      {
        id: "sst-geo-2",
        number: 2,
        name: "Forest and Wildlife Resources",
        color: "#4CAF50",
      },
      { id: "sst-geo-3", number: 3, name: "Water Resources", color: "#4CAF50" },
      { id: "sst-geo-4", number: 4, name: "Agriculture", color: "#4CAF50" },
      {
        id: "sst-geo-5",
        number: 5,
        name: "Minerals and Energy Resources",
        color: "#4CAF50",
      },
      {
        id: "sst-geo-6",
        number: 6,
        name: "Manufacturing Industries",
        color: "#4CAF50",
      },
      {
        id: "sst-geo-7",
        number: 7,
        name: "Lifelines of National Economy",
        color: "#4CAF50",
      },
    ],
    Civics: [
      { id: "sst-civ-1", number: 1, name: "Power Sharing", color: "#9C27B0" },
      { id: "sst-civ-2", number: 2, name: "Federalism", color: "#9C27B0" },
      {
        id: "sst-civ-3",
        number: 3,
        name: "Gender, Religion and Caste",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-4",
        number: 4,
        name: "Political Parties",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-5",
        number: 5,
        name: "Outcomes of Democracy",
        color: "#9C27B0",
      },
    ],
    Economics: [
      { id: "sst-eco-1", number: 1, name: "Development", color: "#FFD600" },
      {
        id: "sst-eco-2",
        number: 2,
        name: "Sectors of the Indian Economy",
        color: "#FFD600",
      },
      {
        id: "sst-eco-3",
        number: 3,
        name: "Money and Credit",
        color: "#FFD600",
      },
      {
        id: "sst-eco-4",
        number: 4,
        name: "Globalization and the Indian Economy",
        color: "#FFD600",
      },
      { id: "sst-eco-5", number: 5, name: "Consumer Rights", color: "#FFD600" },
    ],
  },
  "Class 9 Social Science": {
    History: [
      {
        id: "sst-his-c9-1",
        number: 1,
        name: "The French Revolution",
        color: "#FF8A65",
      },
      {
        id: "sst-his-c9-2",
        number: 2,
        name: "Socialism in Europe and the Russian Revolution",
        color: "#FF4081",
      },
      {
        id: "sst-his-c9-3",
        number: 3,
        name: "Nazism and the Rise of Hitler",
        color: "#FFA726",
      },
      {
        id: "sst-his-c9-4",
        number: 4,
        name: "Forest Society and Colonialism",
        color: "#FF4DA6",
      },
      {
        id: "sst-his-c9-5",
        number: 5,
        name: "Pastoralists in the Modern World",
        color: "#FF1744",
      },
      {
        id: "sst-his-c9-6",
        number: 6,
        name: "The Integration of Princely States: A case study of Jammu and Kashmir",
        color: "#FDC830",
      },
    ],
    Geography: [
      {
        id: "sst-geo-c9-1",
        number: 1,
        name: "India - Size and Location",
        color: "#66BB6A",
      },
      {
        id: "sst-geo-c9-2",
        number: 2,
        name: "Physical Features of India",
        color: "#26C6DA",
      },
      {
        id: "sst-geo-c9-3",
        number: 3,
        name: "Drainage",
        color: "#00C6FF",
      },
      {
        id: "sst-geo-c9-4",
        number: 4,
        name: "Climate",
        color: "#43A047",
      },
      {
        id: "sst-geo-c9-5",
        number: 5,
        name: "Natural Vegetation and Wildlife",
        color: "#42A5F5",
      },
      {
        id: "sst-geo-c9-6",
        number: 6,
        name: "Population",
        color: "#00FFFF",
      },
      {
        id: "sst-geo-c9-7",
        number: 7,
        name: "Geography of Jammu & Kashmir and Ladakh",
        color: "#00FFAB",
      },
    ],
    Civics: [
      {
        id: "sst-civ-c9-1",
        number: 1,
        name: "What is Democracy? Why Democracy?",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-c9-2",
        number: 2,
        name: "Constitutional Design",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-c9-3",
        number: 3,
        name: "Electoral Politics",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-c9-4",
        number: 4,
        name: "Working of Institutions",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-c9-5",
        number: 5,
        name: "Democratic Rights",
        color: "#9C27B0",
      },
      {
        id: "sst-civ-c9-6",
        number: 6,
        name: "Electoral Politics in the Erstwhile State of Jammu & Kashmir",
        color: "#9C27B0",
      },
    ],
    Economics: [
      {
        id: "sst-eco-c9-1",
        number: 1,
        name: "Money & Banking",
        color: "#FFD600",
      },
      {
        id: "sst-eco-c9-2",
        number: 2,
        name: "Understanding the Indian Economy",
        color: "#FFD600",
      },
      {
        id: "sst-eco-c9-3",
        number: 3,
        name: "Natural Disasters",
        color: "#FFD600",
      },
      {
        id: "sst-eco-c9-4",
        number: 4,
        name: "Man-Made Disasters",
        color: "#FFD600",
      },
      {
        id: "sst-eco-c9-5",
        number: 5,
        name: "Road Safety Education (Part- I)",
        color: "#FFD600",
      },
    ],
  },
  "Class 8 Social Science": {
    History: [
      { id: "sst-his-c8-1", number: 1, name: "Chapter 1", color: "#FF8A65" },
      { id: "sst-his-c8-2", number: 2, name: "Chapter 2", color: "#FF8A65" },
      { id: "sst-his-c8-3", number: 3, name: "Chapter 3", color: "#FF8A65" },
      { id: "sst-his-c8-4", number: 4, name: "Chapter 4", color: "#FF8A65" },
      { id: "sst-his-c8-5", number: 5, name: "Chapter 5", color: "#FF8A65" },
      { id: "sst-his-c8-6", number: 6, name: "Chapter 6", color: "#FF8A65" },
    ],
    Geography: [
      { id: "sst-geo-c8-1", number: 1, name: "Chapter 1", color: "#4CAF50" },
      { id: "sst-geo-c8-2", number: 2, name: "Chapter 2", color: "#4CAF50" },
      { id: "sst-geo-c8-3", number: 3, name: "Chapter 3", color: "#4CAF50" },
      { id: "sst-geo-c8-4", number: 4, name: "Chapter 4", color: "#4CAF50" },
      { id: "sst-geo-c8-5", number: 5, name: "Chapter 5", color: "#4CAF50" },
      { id: "sst-geo-c8-6", number: 6, name: "Chapter 6", color: "#4CAF50" },
    ],
    Civics: [
      { id: "sst-civ-c8-1", number: 1, name: "Chapter 1", color: "#9C27B0" },
      { id: "sst-civ-c8-2", number: 2, name: "Chapter 2", color: "#9C27B0" },
      { id: "sst-civ-c8-3", number: 3, name: "Chapter 3", color: "#9C27B0" },
      { id: "sst-civ-c8-4", number: 4, name: "Chapter 4", color: "#9C27B0" },
      { id: "sst-civ-c8-5", number: 5, name: "Chapter 5", color: "#9C27B0" },
      { id: "sst-civ-c8-6", number: 6, name: "Chapter 6", color: "#9C27B0" },
    ],
  },
  Science: {
    Physics: [
      {
        id: "sci-phy-1",
        number: 1,
        name: "Light - Reflection and Refraction",
        color: "#E91E63",
      },
      {
        id: "sci-phy-2",
        number: 2,
        name: "The Human Eye and the Colourful World",
        color: "#E91E63",
      },
      { id: "sci-phy-3", number: 3, name: "Electricity", color: "#E91E63" },
      {
        id: "sci-phy-4",
        number: 4,
        name: "Magnetic Effects of Electric Current",
        color: "#E91E63",
      },
    ],
    Chemistry: [
      {
        id: "sci-chem-1",
        number: 1,
        name: "Chemical Reactions and Equations",
        color: "#9C27B0",
      },
      {
        id: "sci-chem-2",
        number: 2,
        name: "Acids, Bases and Salts",
        color: "#9C27B0",
      },
      {
        id: "sci-chem-3",
        number: 3,
        name: "Metals and Non-metals",
        color: "#9C27B0",
      },
      {
        id: "sci-chem-4",
        number: 4,
        name: "Carbon and its Compounds",
        color: "#9C27B0",
      },
    ],
    Biology: [
      { id: "sci-bio-1", number: 1, name: "Life Processes", color: "#4CAF50" },
      {
        id: "sci-bio-2",
        number: 2,
        name: "Control and Coordination",
        color: "#4CAF50",
      },
      {
        id: "sci-bio-3",
        number: 3,
        name: "How do Organisms Reproduce?",
        color: "#4CAF50",
      },
      { id: "sci-bio-4", number: 4, name: "Heredity", color: "#4CAF50" },
      { id: "sci-bio-5", number: 5, name: "Our Environment", color: "#4CAF50" },
    ],
  },
  "Class 9": {
    Mathematics: [
      { id: "c9-math-1", number: 1, name: "Number Systems", color: "#FFB74D" },
      { id: "c9-math-2", number: 2, name: "Polynomials", color: "#FF4081" },
      {
        id: "c9-math-3",
        number: 3,
        name: "Linear Equations in Two Variables",
        color: "#AB47BC",
      },
      {
        id: "c9-math-4",
        number: 4,
        name: "Coordinate Geometry",
        color: "#42A5F5",
      },
      {
        id: "c9-math-5",
        number: 5,
        name: "Lines and Angles",
        color: "#66BB6A",
      },
      { id: "c9-math-6", number: 6, name: "Triangles", color: "#FF4081" },
      { id: "c9-math-7", number: 7, name: "Quadrilaterals", color: "#FFA726" },
      { id: "c9-math-8", number: 8, name: "Circles", color: "#FF8A65" },
      { id: "c9-math-9", number: 9, name: "Heron’s Formula", color: "#00C6FF" },
      {
        id: "c9-math-10",
        number: 10,
        name: "Surface Area and Volumes",
        color: "#FFA726",
      },
      { id: "c9-math-11", number: 11, name: "Statistics", color: "#FF4DA6" },
    ],
  },
  "Class 8": {
    Mathematics: [
      {
        id: "c8-math-1",
        number: 1,
        name: "Rational Numbers",
        color: "#E91E63",
      },
      {
        id: "c8-math-2",
        number: 2,
        name: "Linear Equations in One Variable",
        color: "#D81B60",
      },
      {
        id: "c8-math-3",
        number: 3,
        name: "Understanding Quadrilaterals",
        color: "#FFAB00",
      },
      { id: "c8-math-4", number: 4, name: "Data Handling", color: "#AA00FF" },
      {
        id: "c8-math-5",
        number: 5,
        name: "Squares and Square Roots",
        color: "#00B8D4",
      },
      {
        id: "c8-math-6",
        number: 6,
        name: "Cubes and Cube Roots",
        color: "#F06292",
      },
      {
        id: "c8-math-7",
        number: 7,
        name: "Comparing Quantities",
        color: "#6200EA",
      },
      {
        id: "c8-math-8",
        number: 8,
        name: "Algebraic Expressions and Identities",
        color: "#FF6D00",
      },
      { id: "c8-math-9", number: 9, name: "Mensuration", color: "#0091EA" },
      {
        id: "c8-math-10",
        number: 10,
        name: "Exponents and Powers",
        color: "#FFD600",
      },
      {
        id: "c8-math-11",
        number: 11,
        name: "Direct and Inverse Proportion",
        color: "#00D4FF",
      },
      { id: "c8-math-12", number: 12, name: "Factorisation", color: "#00BFA5" },
      {
        id: "c8-math-13",
        number: 13,
        name: "Introduction to Graphs",
        color: "#E040FB",
      },
    ],
  },
  "Class 7": {
    Mathematics: [
      { id: "c7-math-1", number: 1, name: "Integers", color: "#FF9800" },
      {
        id: "c7-math-2",
        number: 2,
        name: "Fractions and Decimals",
        color: "#FF4081",
      },
      { id: "c7-math-3", number: 3, name: "Data Handling", color: "#FFAB00" },
      {
        id: "c7-math-4",
        number: 4,
        name: "Simple Equations",
        color: "#2196F3",
      },
      {
        id: "c7-math-5",
        number: 5,
        name: "Lines and Angles",
        color: "#43A047",
      },
      {
        id: "c7-math-6",
        number: 6,
        name: "The Triangle and its Properties",
        color: "#F06292",
      },
      {
        id: "c7-math-7",
        number: 7,
        name: "Comparing Quantities",
        color: "#FFA726",
      },
      {
        id: "c7-math-8",
        number: 8,
        name: "Rational Numbers",
        color: "#FF6D00",
      },
      {
        id: "c7-math-9",
        number: 9,
        name: "Perimeter and Area",
        color: "#D81B60",
      },
      {
        id: "c7-math-10",
        number: 10,
        name: "Algebraic Expressions",
        color: "#FFD600",
      },
      {
        id: "c7-math-11",
        number: 11,
        name: "Exponents and Powers",
        color: "#FF4081",
      },
      { id: "c7-math-12", number: 12, name: "Symmetry", color: "#00BFA5" },
      {
        id: "c7-math-13",
        number: 13,
        name: "Visualising Solid Shapes",
        color: "#E040FB",
      },
    ],
  },
  "Class 9 Science": {
    Physics: [
      { id: "c9-sci-phy-1", number: 1, name: "Motion", color: "#E91E63" },
      {
        id: "c9-sci-phy-2",
        number: 2,
        name: "Force and Laws of Motion",
        color: "#E91E63",
      },
      {
        id: "c9-sci-phy-3",
        number: 3,
        name: "Work, Energy and Power",
        color: "#E91E63",
      },
      { id: "c9-sci-phy-4", number: 4, name: "Gravitation", color: "#E91E63" },
      { id: "c9-sci-phy-5", number: 5, name: "Floatation", color: "#E91E63" },
      { id: "c9-sci-phy-6", number: 6, name: "Sound", color: "#E91E63" },
    ],
    Chemistry: [
      {
        id: "c9-sci-chem-1",
        number: 1,
        name: "Matter in Our Surroundings",
        color: "#9C27B0",
      },
      {
        id: "c9-sci-chem-2",
        number: 2,
        name: "Is Matter Around Us Pure?",
        color: "#9C27B0",
      },
      {
        id: "c9-sci-chem-3",
        number: 3,
        name: "Atoms and Molecules",
        color: "#9C27B0",
      },
      {
        id: "c9-sci-chem-4",
        number: 4,
        name: "Structure of the Atom",
        color: "#9C27B0",
      },
    ],
    Biology: [
      {
        id: "c9-sci-bio-1",
        number: 1,
        name: "The Fundamental Unit of Life",
        color: "#4CAF50",
      },
      { id: "c9-sci-bio-2", number: 2, name: "Tissues", color: "#4CAF50" },
      {
        id: "c9-sci-bio-3",
        number: 3,
        name: "Improvement in Food Resources",
        color: "#4CAF50",
      },
      {
        id: "c9-sci-bio-4",
        number: 4,
        name: "Prevention of Drug Abuse and Sexually Transmitted Diseases",
        color: "#4CAF50",
      },
    ],
  },
  "Class 8 Science": {
    Science: [
      {
        id: "c8-sci-1",
        number: 1,
        name: "Micro-Organisms: Friend and Foe",
        color: "#E91E63",
      },
      {
        id: "c8-sci-2",
        number: 2,
        name: "Coal and Petroleum",
        color: "#E91E63",
      },
      {
        id: "c8-sci-3",
        number: 3,
        name: "Conservation of Plants and Animals",
        color: "#E91E63",
      },
      {
        id: "c8-sci-4",
        number: 4,
        name: "Reproduction in Animals",
        color: "#E91E63",
      },
      { id: "c8-sci-5", number: 5, name: "Sound", color: "#E91E63" },
      {
        id: "c8-sci-6",
        number: 6,
        name: "Food Production and Management",
        color: "#E91E63",
      },
      {
        id: "c8-sci-7",
        number: 7,
        name: "Combustion and Flame",
        color: "#E91E63",
      },
      {
        id: "c8-sci-8",
        number: 8,
        name: "Chemical Effects of Electric Current",
        color: "#E91E63",
      },
      {
        id: "c8-sci-9",
        number: 9,
        name: "Force and Pressure",
        color: "#E91E63",
      },
      {
        id: "c8-sci-10",
        number: 10,
        name: "Reaching the Age of Adolescence",
        color: "#E91E63",
      },
      { id: "c8-sci-11", number: 11, name: "Light", color: "#E91E63" },
      { id: "c8-sci-12", number: 12, name: "Friction", color: "#E91E63" },
      {
        id: "c8-sci-13",
        number: 13,
        name: "Some Natural Phenomenon",
        color: "#E91E63",
      },
    ],
  },
  "Class 7 Science": {
    Science: [
      {
        id: "c7-sci-1",
        number: 1,
        name: "Nutrition in Plants",
        color: "#E91E63",
      },
      {
        id: "c7-sci-2",
        number: 2,
        name: "Nutrition in Animals",
        color: "#E91E63",
      },
      { id: "c7-sci-3", number: 3, name: "Heat", color: "#E91E63" },
      {
        id: "c7-sci-4",
        number: 4,
        name: "Acids, Bases and Salts",
        color: "#E91E63",
      },
      {
        id: "c7-sci-5",
        number: 5,
        name: "Physical and Chemical Changes",
        color: "#E91E63",
      },
      {
        id: "c7-sci-6",
        number: 6,
        name: "Respiration in Organisms",
        color: "#E91E63",
      },
      {
        id: "c7-sci-7",
        number: 7,
        name: "Transportation in Animals and Plants",
        color: "#E91E63",
      },
      {
        id: "c7-sci-8",
        number: 8,
        name: "Reproduction in Plants",
        color: "#E91E63",
      },
      { id: "c7-sci-9", number: 9, name: "Motion and Time", color: "#E91E63" },
      {
        id: "c7-sci-10",
        number: 10,
        name: "Electric Current and its Effects",
        color: "#E91E63",
      },
      { id: "c7-sci-11", number: 11, name: "Light", color: "#E91E63" },
      {
        id: "c7-sci-12",
        number: 12,
        name: "Forests: Our Lifeline",
        color: "#E91E63",
      },
      {
        id: "c7-sci-13",
        number: 13,
        name: "Wastewater Story",
        color: "#E91E63",
      },
    ],
  },
  "Class 7 Social Science": {
    History: [
      {
        id: "c7-hist-1",
        number: 1,
        name: "Tracing Changes Through A Thousand Years",
        color: "#FF5722",
      },
      {
        id: "c7-hist-2",
        number: 2,
        name: "New Kings And Kingdoms",
        color: "#FF5722",
      },
      {
        id: "c7-hist-3",
        number: 3,
        name: "The Delhi Sultans",
        color: "#FF5722",
      },
      {
        id: "c7-hist-4",
        number: 4,
        name: "The Mughal Empire",
        color: "#FF5722",
      },
      {
        id: "c7-hist-5",
        number: 5,
        name: "Tribes, Nomads And Settled Communities",
        color: "#FF5722",
      },
      {
        id: "c7-hist-6",
        number: 6,
        name: "Devotional Paths To The Divine",
        color: "#FF5722",
      },
      {
        id: "c7-hist-7",
        number: 7,
        name: "The Making Of Regional Cultures",
        color: "#FF5722",
      },
      {
        id: "c7-hist-8",
        number: 8,
        name: "Eighteenth-Century Political Formations",
        color: "#FF5722",
      },
    ],
    Geography: [
      { id: "c7-geo-1", number: 1, name: "Environment", color: "#4CAF50" },
      { id: "c7-geo-2", number: 2, name: "Inside Our Earth", color: "#4CAF50" },
      {
        id: "c7-geo-3",
        number: 3,
        name: "Our Changing Earth",
        color: "#4CAF50",
      },
      { id: "c7-geo-4", number: 4, name: "Air", color: "#4CAF50" },
      { id: "c7-geo-5", number: 5, name: "Water", color: "#4CAF50" },
      {
        id: "c7-geo-6",
        number: 6,
        name: "Human Environment Interactions - The Tropical and the Subtropical Region",
        color: "#4CAF50",
      },
      {
        id: "c7-geo-7",
        number: 7,
        name: "Life in the Deserts",
        color: "#4CAF50",
      },
      {
        id: "c7-geo-8",
        number: 8,
        name: "Jammu & Kashmir - Life and People",
        color: "#4CAF50",
      },
    ],
    Civics: [
      { id: "c7-civ-1", number: 1, name: "On Equality", color: "#9C27B0" },
      {
        id: "c7-civ-2",
        number: 2,
        name: "Role of the Government in Health",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-3",
        number: 3,
        name: "How the State Government Works",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-4",
        number: 4,
        name: "Growing up as Boys and Girls",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-5",
        number: 5,
        name: "Women Change the World",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-6",
        number: 6,
        name: "Understanding Media",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-7",
        number: 7,
        name: "Markets Around Us",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-8",
        number: 8,
        name: "A Shirt in the Market",
        color: "#9C27B0",
      },
      {
        id: "c7-civ-9",
        number: 9,
        name: "Structures of the Governance in J&K and Ladakh",
        color: "#9C27B0",
      },
    ],
  },
};

export function getChapterGradient(chapter: Chapter | string): string[] {
  const chapterId = typeof chapter === "string" ? chapter : chapter.id;

  // Targeted theme color replacement for Chemistry Chapter 2 and Math Chapter 7
  const cyanTargetedIds = [
    "sci-chem-2",
    "c9-sci-chem-2",
    "c8-sci-chem-2",
    "c7-sci-chem-2",
  ];

  if (cyanTargetedIds.includes(chapterId)) {
    return ["#00E5FF", "#0099CC"];
  }

  // Targeted theme color replacement for Math Chapter 6 (Pink)
  const pinkTargetedIds = [
    "ch6",
    "c9-math-6",
    "c8-math-6",
    "c7-math-6",
    "c7-math-9",
  ];

  if (pinkTargetedIds.includes(chapterId)) {
    return ["#FF4081", "#D81B60"];
  }

  // Targeted theme color replacement for Chemistry Chapter 4 (Green-Cyan)
  const greenCyanTargetedIds = [
    "sci-chem-4",
    "c9-sci-chem-4",
    "c8-sci-chem-4",
    "c7-sci-chem-4",
  ];

  if (greenCyanTargetedIds.includes(chapterId)) {
    return ["#FFA726", "#FB8C00"];
  }

  // Targeted theme color replacement for Biology Chapter 4 (Pink -> Orange Glossy)
  const pinkOrangeTargetedIds = [
    "sci-bio-4",
    "c9-sci-bio-4",
    "c8-sci-bio-4",
    "c7-sci-bio-4",
    "c6-sci-bio-4",
  ];

  if (pinkOrangeTargetedIds.includes(chapterId)) {
    return JiguuColors.gradients.pinkOrange;
  }

  // Targeted theme color replacement for Chapter 10 (Red-Orange Gradient)
  const redTargetedIds = [
    "ch10",
    "c9-math-10",
    "c8-math-10",
    "c7-math-10",
    "ch7",
    "c9-math-7",
    "c8-math-7",
    "c7-math-7",
  ];

  if (redTargetedIds.includes(chapterId)) {
    return JiguuColors.gradients.premiumOrange as string[];
  }

  // Targeted theme color replacement for Class 7 Math Chapters 10-13
  if (chapterId === "c7-civ-6") return JiguuColors.gradients.teal; // Teal for Chapter 6 (distinguish from Chapter 3 Blue)
  if (chapterId === "c7-geo-3") return JiguuColors.gradients.deepOrange; // Deep Orange for Changing Earth (Volcanoes/Lava)
  if (chapterId === "c7-geo-4") return ["#C5E1A5", "#9CCC65", "#1B5E20"]; // Very Light Green for Chapter 4
  if (chapterId === "c7-geo-5") return JiguuColors.gradients.blue; // Blue for Water
  if (chapterId === "c7-geo-7") return JiguuColors.gradients.gold; // Gold for Deserts
  if (chapterId === "c7-geo-8") return JiguuColors.gradients.rose; // Rose for J&K (Valley of Flowers/Traditional)
  if (chapterId === "c7-math-10") return JiguuColors.gradients.gold;
  if (chapterId === "c7-math-11") return JiguuColors.gradients.pink;
  if (chapterId === "c7-math-12") return JiguuColors.gradients.teal;
  if (chapterId === "c7-math-13") return JiguuColors.gradients.magenta;

  const gradientList = Object.values(JiguuColors.gradients) as string[][];

  // Deterministic mapping for consistency between list and screen
  if (chapterId.startsWith("ch") || chapterId.match(/^c[789]-math/)) {
    const numStr = chapterId.startsWith("ch")
      ? chapterId.replace("ch", "")
      : chapterId.split("-").pop() || "1";
    const num = parseInt(numStr);
    return gradientList[(num - 1) % gradientList.length];
  }

  if (chapterId.startsWith("sci-phy")) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    // Physics is Deep Orange / Orange / Pink themed
    const physicsGradients = [
      gradientList[7],
      gradientList[0],
      gradientList[1],
    ];
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
    const bioGradients = [
      gradientList[4],
      gradientList[5],
      gradientList[18] ? gradientList[18] : gradientList[3],
    ];
    return bioGradients[(num - 1) % bioGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-phy/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const physicsGradients = [
      gradientList[7],
      gradientList[0],
      gradientList[1],
    ];
    return physicsGradients[(num - 1) % physicsGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-chem/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const chemGradients = [gradientList[2], gradientList[6], gradientList[1]];
    return chemGradients[(num - 1) % chemGradients.length];
  }

  if (chapterId.match(/^c[789]-sci-bio/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const bioGradients = [
      gradientList[4],
      gradientList[5],
      gradientList[18] ? gradientList[18] : gradientList[3],
    ];
    return bioGradients[(num - 1) % bioGradients.length];
  }

  if (chapterId.match(/^sst-his/) || chapterId.match(/^c[789]-hist/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const histPool = [
      JiguuColors.gradients.deepOrange,
      JiguuColors.gradients.pink,
      JiguuColors.gradients.premiumOrange,
      JiguuColors.gradients.pinkOrange,
      JiguuColors.gradients.premiumRed,
      JiguuColors.gradients.gold,
      JiguuColors.gradients.rose,
      JiguuColors.gradients.orange,
    ];
    return histPool[(num - 1) % histPool.length] as string[];
  }

  if (chapterId.match(/^sst-geo/) || chapterId.match(/^c[789]-geo/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const geoPool = [
      JiguuColors.gradients.green,
      JiguuColors.gradients.teal,
      JiguuColors.gradients.brightBlue,
      JiguuColors.gradients.premiumGreen,
      JiguuColors.gradients.blue, // Chapter 5: Water -> Blue
      JiguuColors.gradients.cyan,
      JiguuColors.gradients.mint,
      JiguuColors.gradients.sky,
    ];
    return geoPool[(num - 1) % geoPool.length] as string[];
  }

  if (chapterId.match(/^sst-civ/) || chapterId.match(/^c[789]-civ/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const civPool = [
      JiguuColors.gradients.purple,
      JiguuColors.gradients.indigo,
      JiguuColors.gradients.blue,
      JiguuColors.gradients.violet,
      JiguuColors.gradients.magenta,
      JiguuColors.gradients.brightBlue,
      JiguuColors.gradients.premiumRed, // Switching to something bold for variety
      JiguuColors.gradients.pinkOrange,
      JiguuColors.gradients.gold,
    ];
    return civPool[(num - 1) % civPool.length] as string[];
  }

  if (chapterId.match(/^sst-eco/)) {
    const num = parseInt(chapterId.split("-").pop() || "1");
    const ecoPool = [
      JiguuColors.gradients.gold,
      JiguuColors.gradients.pinkOrange,
      JiguuColors.gradients.orange,
      JiguuColors.gradients.deepOrange,
      JiguuColors.gradients.violet,
      JiguuColors.gradients.teal,
    ];
    return ecoPool[(num - 1) % ecoPool.length] as string[];
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
