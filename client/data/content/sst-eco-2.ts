import { ChapterContent } from "../chapterContent";

export const sstEco2: ChapterContent = {
    id: "sst-eco-2",
    number: 2,
    title: "Sectors of the Indian Economy",
    introduction: "When you buy milk, take a bus, or get a haircut, you are participating in the economy. Economists classify these activities into different sectors to understand how the country is growing. Let's learn about the Primary, Secondary, and Tertiary sectors.",
    definitions: [
        { term: "Primary Sector", description: "Activities undertaken by directly using natural resources. It forms the base for all other products. E.g., agriculture, mining, fishing, forestry." },
        { term: "Secondary Sector", description: "Activities in which natural products are changed into other forms through ways of manufacturing. It is also called the industrial sector. E.g., making sugar from sugarcane, cars from steel." },
        { term: "Tertiary Sector", description: "Activities that help in the development of the primary and secondary sectors. They don't produce goods, but provide services. E.g., transport, banking, teaching, doctors." },
        { term: "GDP (Gross Domestic Product)", description: "The value of all final goods and services produced within a country during a particular year. It shows how big the economy is." },
        { term: "Underemployment", description: "A situation where people are seemingly working but all of them are made to work less than their potential. Also called disguised unemployment." }
    ],
    keyPoints: [
        "Historically, economies shift from Primary to Secondary, and then to the Tertiary sector as they develop.",
        "In India, the Tertiary sector has grown massively and has replaced the Primary sector as the largest producing sector.",
        "However, a very disturbing fact is that while the Tertiary sector produces the most money, the majority of the population (more than half) is still employed in the Primary sector (agriculture).",
        "This means agricultural workers are underemployed (disguised unemployment). Even if you remove a few people from a field, production won't drop.",
        "The economy is also divided into Organised (registered, rules followed, job security) and Unorganised (small, scattered, no job security) sectors.",
        "NREGA 2005 (National Rural Employment Guarantee Act) guarantees 100 days of employment in a year to all those who are able to work in rural areas."
    ],
    formulas: [],
    crux: [
        "Primary = Nature (Farming). Secondary = Factories (Manufacturing). Tertiary = Services (Teaching, Banking).",
        "Tertiary makes the most money in India now.",
        "But Primary employs the most people, leading to massive underemployment.",
        "Organised sector is safe; Unorganised sector is risky and exploitative."
    ],
    mcqs: [
        {
            id: "se2-mcq-1",
            question: "Which sector involves changing natural products into other forms through manufacturing?",
            options: ["Primary Sector", "Secondary Sector", "Tertiary Sector", "Quaternary Sector"],
            correctAnswer: "b"
        },
        {
            id: "se2-mcq-2",
            question: "Underemployment is typically hidden in contrast to someone who does not have a job. Hence it is also called:",
            options: ["Seasonal unemployment", "Frictional unemployment", "Disguised unemployment", "Structural unemployment"],
            correctAnswer: "c"
        },
        {
            id: "se2-mcq-3",
            question: "Which of the following acts guarantees 100 days of employment in rural areas?",
            options: ["Right to Information Act", "NREGA 2005", "Equal Remuneration Act", "Minimum Wages Act"],
            correctAnswer: "b"
        }
    ],
    summary: [
        "Understanding the three sectors helps us see how India's economy functions.",
        "The massive shift in production towards the tertiary sector is a sign of a developing nation, but the lack of an equivalent shift in employment remains a huge challenge."
    ],
    exercises: [
        {
            id: "se2-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "se2-ex-q1",
                    number: "1",
                    question: "Explain the difference between primary, secondary and tertiary sectors using examples.",
                    solution: [
                        "1. Primary Sector: Produces goods by simply exploiting natural resources. Example: A farmer growing wheat.",
                        "2. Secondary Sector: Processes natural resources into highly manufactured goods. Example: A factory grinding wheat into flour and making biscuits.",
                        "3. Tertiary Sector: Provides incredibly vital services that deeply support the other two sectors. Example: A truck driver heavily transporting the biscuits to shops."
                    ],
                    answer: "Primary extracts from nature (farming). Secondary intensely manufactures goods (factories). Tertiary provides vital services (transport/banking)."
                }
            ]
        }
    ],
    examples: []
};
