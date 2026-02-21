import { ChapterContent } from "../chapterContent";

export const sstEco1: ChapterContent = {
    id: "sst-eco-1",
    number: 1,
    title: "Development",
    introduction: "What does 'development' mean to you? A new smartphone? For a landless farmer, it might mean more days of work. Different people have different goals. Let's explore how we measure development, not just by money, but by health, education, and fairness.",
    definitions: [
        { term: "Per Capita Income", description: "The total income of a country divided by its total population. It is also known as average income." },
        { term: "Infant Mortality Rate (IMR)", description: "The number of children that die before completing one year of age as a proportion of 1000 live children born in that particular year." },
        { term: "Literacy Rate", description: "The proportion of literate population in the 7 and above age group." },
        { term: "Human Development Index (HDI)", description: "A composite index prepared by UNDP that measures development based on health, education, and per capita income." }
    ],
    keyPoints: [
        "Development goals vary from person to person. What may be development for one may even be destructive for another (e.g., a dam displaces tribals).",
        "Money cannot buy all the goods and services that you may need to live well (like a pollution-free environment or protection from infectious diseases).",
        "The World Bank uses only Per Capita Income to classify countries (Rich, Middle, Poor).",
        "UNDP uses the Human Development Index (HDI) which relies on educational levels, health status, and per capita income, providing a much broader picture.",
        "Sustainable development focuses on fulfilling the needs of the present without compromising the ability of future generations to meet their needs."
    ],
    formulas: [],
    crux: [
        "Different people have different development goals.",
        "Income is important, but health and education matter just as much.",
        "HDI is a better measure of development than just World Bank's income average."
    ],
    mcqs: [
        {
            id: "se1-mcq-1",
            question: "Which of the following is the most common indicator of economic development?",
            options: ["Per capita income", "Total population", "Forest cover", "Number of schools"],
            correctAnswer: "a"
        },
        {
            id: "se1-mcq-2",
            question: "The Human Development Report published by UNDP compares countries based on:",
            options: ["Educational levels of people", "Health status", "Per capita income", "All of the above"],
            correctAnswer: "d"
        }
    ],
    summary: [
        "Development is a complex idea. While improving income is strictly necessary, ensuring better health, education, and equality is equally crucial for genuine progress."
    ],
    exercises: [
        {
            id: "se1-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "se1-ex-q1",
                    number: "1",
                    question: "Money in your pocket cannot buy all the goods and services that you may need to live well. Is it true? Explain.",
                    solution: [
                        "Yes, it is entirely true.",
                        "1. Money cannot buy a completely pollution-free environment or ensure that you get unadulterated medicines.",
                        "2. Money may not be able to protect you from infectious diseases unless the whole community takes actively preventive steps.",
                        "3. Things like peace, incredibly equal treatment, freedom, and deep respect from others cannot be bought with money."
                    ],
                    answer: "True. Money cannot genuinely buy a essentially pollution-free environment, guaranteed protection from infectious diseases, or crucial things like peace and freedom."
                }
            ]
        }
    ],
    examples: []
};
