import { ChapterContent } from "../chapterContent";

export const sciBio4: ChapterContent = {
    id: "sci-bio-4",
    number: 4,
    title: "Heredity",
    introduction: "Have you ever wondered why you look like your parents, but not exactly identical? How is it that human parents always have human babies, and a mango seed always grows into a mango tree? This fascinating topic is called Heredity!",
    definitions: [
        { term: "Heredity", description: "The passing down of physical or mental characteristics (traits) from parents to their children (offspring)." },
        { term: "Genetics", description: "The branch of science that studies how heredity and variation occur." },
        { term: "Trait", description: "A specific characteristic of an organism, like eye color, height, forming dimples, or blood group." },
        { term: "DNA (Deoxyribonucleic Acid)", description: "The blueprint of life. It’s a long chemical string present inside a cell’s nucleus that holds genetic instructions." },
        { term: "Gene", description: "A small segment of DNA that provides the instruction to build a specific protein, which in turn controls a specific trait." },
        { term: "Chromosomes", description: "Thread-like structures made of DNA, tightly coiled up. Humans have 23 pairs of chromosomes in each cell." },
        { term: "Dominant Trait", description: "A trait that overpowered the other one and shows up. (E.g., Brown eyes are a dominant trait over blue eyes)." },
        { term: "Recessive Trait", description: "A hidden trait that only shows up when both parents pass it down (E.g., Blue eyes require two blue-eye genes)." }
    ],
    keyPoints: [
        "Gregor Mendel is known as the 'Father of Genetics'. He studied garden pea plants to understand how traits are inherited.",
        "Mendel chose pea plants because they grow fast, have many contrasting traits (tall/dwarf, round/wrinkled seeds), and are easy to cross-pollinate.",
        "Monohybrid Cross: A cross considering only one pair of contrasting traits (like height: tall vs dwarf). Mendel found that in the first generation (F1), all plants were tall. In the second generation (F2), 3 were tall and 1 was dwarf.",
        "Dihybrid Cross: A cross considering two pairs of contrasting traits (like seed shape and seed color).",
        "Humans have 46 chromosomes (23 pairs). The 23rd pair determines the sex of the child.",
        "Females have two X chromosomes (XX). Males have one X and one Y chromosome (XY).",
        "The sex of a human baby is determined by the father's active sperm. If an X-sperm fertilizes the egg, it's a girl (XX). If a Y-sperm fertilizes the egg, it's a boy (XY).",
        "Variations are slight differences among individuals of the same species. They happen naturally during DNA copying and ensure survival during drastic environmental changes."
    ],
    formulas: [],
    crux: [
        "Heredity = Traits passing from parents to kids.",
        "Mendel studied peas to see how traits pass.",
        "Traits can be dominant (strong) or recessive (hidden).",
        "Fathers determine the sex of the baby in humans (X or Y sperm)."
    ],
    mcqs: [
        {
            id: "sb4-mcq-1",
            question: "Which of the following is considered the basic unit of heredity?",
            options: ["Cell", "Gene", "Nucleus", "Ribosome"],
            correctAnswer: "b"
        },
        {
            id: "sb4-mcq-2",
            question: "In human males, the sex chromosomes are represented as:",
            options: ["XX", "XY", "YY", "XO"],
            correctAnswer: "b"
        },
        {
            id: "sb4-mcq-3",
            question: "Gregor Mendel conducted his experiments on inheritance mostly using:",
            options: ["Rat", "Fruit fly", "Garden pea", "Dog"],
            correctAnswer: "c"
        },
        {
            id: "sb4-mcq-4",
            question: "Which of the following traits is typically a recessive trait in Mendel's pea plants?",
            options: ["Tall height", "Round seeds", "Dwarf height", "Yellow seeds"],
            correctAnswer: "c"
        },
        {
            id: "sb4-mcq-5",
            question: "A cross between a tall plant (TT) and a dwarf plant (tt) resulted in F1 plants that were all tall. Because:",
            options: ["Tallness is the dominant trait", "Dwarfness is the dominant trait", "Tallness is the recessive trait", "Height is not inherited"],
            correctAnswer: "a"
        }
    ],
    summary: [
        "Heredity explains how characteristics pass from generation to generation through DNA.",
        "Gregor Mendel's experiments on pea plants gave us the fundamental rules of inheritance.",
        "Traits may be dominant (visibly expressed) or recessive (masked).",
        "Genetic information is packaged in chromosomes. Humans have 23 pairs.",
        "The sex of a human child is genetically determined by the father."
    ],
    exercises: [
        {
            id: "sb4-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sb4-ex-q1",
                    number: "1",
                    question: "How do Mendel's experiments show that traits may be dominant or recessive?",
                    solution: [
                        "Mendel crossed a pure tall pea plant (TT) with a pure dwarf pea plant (tt).",
                        "In the first generation (F1), he found that ALL the plants were tall. None were dwarf or medium height.",
                        "This showed that the 'Tall' trait overpowered the 'Dwarf' trait. The trait that overpowered is DOMINANT (Tall), and the hidden one is RECESSIVE (Dwarf)."
                    ],
                    answer: "By crossing pure tall and dwarf plants, all offspring were tall. This proved the tall trait overpowered/dominated the dwarf one."
                },
                {
                    id: "sb4-ex-q2",
                    number: "2",
                    question: "How is the sex of the child determined in human beings?",
                    solution: [
                        "In humans, a woman has two X chromosomes (XX), and a man has one X and one Y chromosome (XY).",
                        "A mother always passes an X chromosome to her child through the egg.",
                        "A father can pass either an X or a Y chromosome through the sperm.",
                        "If a sperm carrying an X chromosome fertilizes the egg, the child will be a girl (XX).",
                        "If a sperm carrying a Y chromosome fertilizes the egg, the child will be a boy (XY)."
                    ],
                    answer: "It is determined by the father. If he passes an X chromosome, it's a girl (XX). If he passes a Y chromosome, it's a boy (XY)."
                }
            ]
        }
    ],
    examples: []
};
