import { ChapterContent } from "../chapterContent";

export const sciChem3: ChapterContent = {
    id: "sci-chem-3",
    number: 3,
    title: "Metals and Non-metals",
    introduction: "Look around you. The iron grills, copper wires, and gold jewelry are metals. Meanwhile, the oxygen we breathe and the carbon in our pencils are non-metals. Let's study how they behave and react.",
    definitions: [
        { term: "Ductility", description: "The property of metals that allows them to be drawn into thin wires. Gold is the most ductile metal." },
        { term: "Malleability", description: "The property of metals that allows them to be beaten into thin sheets. Gold and silver are highly malleable." },
        { term: "Lustre", description: "The shiny appearance of the pure surface of metals." },
        { term: "Sonorous", description: "The property of metals to produce a ringing sound when struck hard. This is why school bells are made of metal." },
        { term: "Aqua Regia", description: "A highly corrosive mixture of concentrated hydrochloric acid and concentrated nitric acid (in 3:1 ratio). It can dissolve gold!" },
        { term: "Roasting & Calcination", description: "Processes to convert metal ores into metal oxides by heating them, either in the presence of air (Roasting) or absence of air (Calcination)." },
        { term: "Alloy", description: "A homogeneous mixture of two or more metals, or a metal and a non-metal, to improve their properties. E.g. Steel, Brass, Bronze." }
    ],
    keyPoints: [
        "Most metals are solid at room temperature. Mercury is the only metal that is liquid at room temperature.",
        "Non-metals are generally poor conductors of heat and electricity. Exception: Graphite (carbon) is a good conductor of electricity.",
        "Metals react with oxygen to form metal oxides, which are basic in nature.",
        "Non-metals react with oxygen to form non-metal oxides, which are acidic in nature.",
        "Highly reactive metals like Sodium and Potassium catch fire if left in the open. They are stored under kerosene.",
        "Less reactive metals like Gold and Platinum do not react easily, so they are found in the free state in nature.",
        "Ionic compounds are formed when metals give their electrons to non-metals. They have high melting points and conduct electricity when dissolved in water."
    ],
    formulas: [
        { name: "Metal + Oxygen", formula: "Metal + Oxygen -> Metal Oxide" },
        { name: "Metal + Acid", formula: "Metal + Dilute Acid -> Metal Salt + Hydrogen Gas" }
    ],
    crux: [
        "Metals are shiny, hard, and can be stretched into wires/sheets.",
        "Non-metals break easily and don't conduct electricity (usually).",
        "Sodium catches fire in water. Gold does not react.",
        "Alloys make metals stronger and rust-free (like steel)."
    ],
    mcqs: [
        {
            id: "sc3-mcq-1",
            question: "Which of the following metals is a liquid at room temperature?",
            options: ["Iron", "Mercury", "Sodium", "Gold"],
            correctAnswer: "b"
        },
        {
            id: "sc3-mcq-2",
            question: "Which of the following non-metals is a good conductor of electricity?",
            options: ["Sulphur", "Phosphorus", "Graphite", "Iodine"],
            correctAnswer: "c"
        },
        {
            id: "sc3-mcq-3",
            question: "The property of metals by which they can be beaten into thin sheets is called:",
            options: ["Ductility", "Sonorousity", "Conductivity", "Malleability"],
            correctAnswer: "d"
        },
        {
            id: "sc3-mcq-4",
            question: "Which of these metals is stored in kerosene to prevent it from catching fire?",
            options: ["Sodium", "Magnesium", "Zinc", "Iron"],
            correctAnswer: "a"
        },
        {
            id: "sc3-mcq-5",
            question: "Bronze is an alloy of:",
            options: ["Copper and Zinc", "Copper and Tin", "Iron and Carbon", "Lead and Tin"],
            correctAnswer: "b"
        }
    ],
    summary: [
        "Elements can be classified as metals and non-metals based on their physical and chemical properties.",
        "Metals generally lose electrons to form positive ions, while non-metals gain electrons to form negative ions.",
        "The Reactivity Series arranges metals from the most reactive to the least reactive.",
        "Metals are extracted from their ores using processes like roasting, calcination, and electrolytic refining.",
        "Alloying is an excellent method of improving the properties of a metal and preventing corrosion."
    ],
    exercises: [
        {
            id: "sc3-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sc3-ex-q1",
                    number: "1",
                    question: "Why is sodium kept immersed in kerosene oil?",
                    solution: [
                        "Sodium is a highly reactive metal.",
                        "If it is kept in the open, it reacts vigorously with the oxygen and moisture in the air and catches fire.",
                        "To prevent this accidental fire and protect the metal, it is completely immersed in kerosene oil where it cannot come in contact with air or water."
                    ],
                    answer: "Sodium is highly reactive and catches fire in contact with air and moisture. Kerosene prevents this contact."
                },
                {
                    id: "sc3-ex-q2",
                    number: "2",
                    question: "State two ways to prevent the rusting of iron.",
                    solution: [
                        "1. Painting or Greasing: Applying a layer of paint, oil, or grease on the iron surface prevents oxygen and moisture from reaching the iron.",
                        "2. Galvanization: Coating the iron items with a thin layer of zinc. Zinc is more reactive than iron, so it protects the iron from rusting even if the coating is scratched."
                    ],
                    answer: "Painting/Oiling the surface or Galvanization (coating with zinc) prevents iron from rusting."
                },
                {
                    id: "sc3-ex-q3",
                    number: "3",
                    question: "What are amphoteric oxides? Give two examples.",
                    solution: [
                        "Most metal oxides are basic in nature. However, some metal oxides show both acidic as well as basic behavior.",
                        "Such metal oxides which react with both acids as well as bases to produce salt and water are known as amphoteric oxides.",
                        "Examples: Aluminum oxide (Al2O3) and Zinc oxide (ZnO)."
                    ],
                    answer: "Amphoteric oxides are metal oxides that show both acidic and basic behavior. Examples: Aluminum oxide and Zinc oxide."
                }
            ]
        }
    ],
    examples: []
};
