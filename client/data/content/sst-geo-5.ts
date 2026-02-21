import { ChapterContent } from "../chapterContent";

export const sstGeo5: ChapterContent = {
    id: "sst-geo-5",
    number: 5,
    title: "Minerals and Energy Resources",
    introduction: "Think about the toothbrush you use, the bus you ride, and the electricity that powers your phone. All of these depend heavily on minerals extracted from the earth. Minerals are an indispensable part of our lives, and in this chapter, we will learn about their occurrence, classification, and conservation.",
    definitions: [
        { term: "Mineral", description: "A homogenous, naturally occurring substance with a definable internal structure found in the earth's crust." },
        { term: "Ore", description: "An accumulation of any mineral mixed with other elements. A mineral must be found in sufficient concentration to make its extraction commercially viable." },
        { term: "Ferrous Minerals", description: "Metallic minerals that contain iron. Examples: Iron ore, Manganese, Nickel, Cobalt. They account for about three-fourths of the total value of metallic minerals produced in India." },
        { term: "Non-Ferrous Minerals", description: "Metallic minerals that do not contain iron but may contain other metals like copper, bauxite (aluminum), lead, or zinc." },
        { term: "Conventional Energy", description: "Traditional sources of energy that have been in use for a long time and are exhaustible. Examples: Firewood, cattle dung cake, coal, petroleum, natural gas." },
        { term: "Non-Conventional Energy", description: "Renewable sources of energy that are modern and eco-friendly. Examples: Solar, Wind, Tidal, Geothermal, Biogas." }
    ],
    keyPoints: [
        "Minerals occur in different forms: in igneous/metamorphic rocks (veins and lodes), sedimentary rocks (beds/layers), surface rocks (residual mass), and alluvial deposits (placer deposits like gold).",
        "Iron Ore is the basic mineral and the backbone of industrial development. India is rich in good-quality iron ore (Magnetite and Hematite). Major belts: Odisha-Jharkhand, Durg-Bastar, Bellary-Chitradurga, Maharashtra-Goa.",
        "Manganese is mainly used in the manufacturing of steel and ferro-manganese alloy.",
        "Aluminum is obtained from Bauxite ore. Aluminum is light, strong, and highly conductive. Odisha is the largest bauxite producing state in India.",
        "Mica is a non-metallic mineral with excellent dielectric strength and insulating properties, making it indispensable in the electrical and electronic industries.",
        "Coal is the most abundantly available fossil fuel in India. Types of coal: Lignite (low grade brown coal), Bituminous (commercial use), and Anthracite (highest quality hard coal).",
        "Petroleum provides fuel for heat, lighting, lubricants, and raw materials for many manufacturing industries. Mumbai High, Gujarat, and Assam are major production areas."
    ],
    formulas: [],
    crux: [
        "Minerals are natural substances found in rocks/ores.",
        "India is rich in Iron (ferrous) but lacks Copper (non-ferrous).",
        "Coal & Petroleum are conventional (finite) energy sources.",
        "Solar & Wind are non-conventional (infinite) clean energy."
    ],
    mcqs: [
        {
            id: "sg5-mcq-1",
            question: "Which of the following minerals is indispensable for electrical and electronic industries?",
            options: ["Iron ore", "Manganese", "Bauxite", "Mica"],
            correctAnswer: "d"
        },
        {
            id: "sg5-mcq-2",
            question: "Which state is the largest producer of Bauxite in India?",
            options: ["Odisha", "Gujarat", "Jharkhand", "Chhattisgarh"],
            correctAnswer: "a"
        },
        {
            id: "sg5-mcq-3",
            question: "The highest quality hard coal is called:",
            options: ["Peat", "Lignite", "Bituminous", "Anthracite"],
            correctAnswer: "d"
        },
        {
            id: "sg5-mcq-4",
            question: "Which of the following is a non-conventional source of energy?",
            options: ["Coal", "Petroleum", "Natural Gas", "Solar Energy"],
            correctAnswer: "d"
        },
        {
            id: "sg5-mcq-5",
            question: "Khetri mines in Rajasthan are famous for the production of:",
            options: ["Copper", "Gold", "Iron ore", "Mica"],
            correctAnswer: "a"
        }
    ],
    summary: [
        "Minerals and energy resources form the foundation of industrialization.",
        "While India has excellent reserves of ferrous minerals (iron, manganese) and coal, we are deficient in non-ferrous minerals (copper) and petroleum.",
        "Fossil fuels are highly polluting and exhaustible, leading to environmental concerns and an energy crisis.",
        "To achieve a sustainable future, we must actively shift towards non-conventional sources of energy (like solar and wind) and strictly practice the conservation of both minerals and energy."
    ],
    exercises: [
        {
            id: "sg5-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sg5-ex-q1",
                    number: "1",
                    question: "Distinguish between conventional and non-conventional sources of energy.",
                    solution: [
                        "Conventional energy sources (e.g. coal, petroleum, firewood) are exhaustible. They pollute the environment and have been used for a very long time.",
                        "Non-conventional energy sources (e.g. solar, wind, tidal) are renewable. They are eco-friendly (do not pollute) and are relatively modern in terms of extensive use."
                    ],
                    answer: "Conventional sources are exhaustible and polluting (coal/oil), while non-conventional sources are renewable and clean (solar/wind)."
                },
                {
                    id: "sg5-ex-q2",
                    number: "2",
                    question: "Why do we need to conserve mineral resources?",
                    solution: [
                        "Minerals take millions of years to be created and concentrated under the earth.",
                        "The geological processes of mineral formation are so slow that the rates of replenishment are infinitely small compared to our rapid rate of consumption.",
                        "Since they are non-renewable and exhaustible, we must conserve them in a planned and sustainable manner, use advanced tech to mine low-grade ores, and recycle metals."
                    ],
                    answer: "Minerals form extremely slowly over millions of years. Since their consumption is much faster than replenishment, we must conserve them before they completely run out."
                },
                {
                    id: "sg5-ex-q3",
                    number: "3",
                    question: "What is an ore? Provide an example.",
                    solution: [
                        "An ore is a rock containing a high concentration of a specific mineral, effectively mixed with other elements.",
                        "It must have sufficient concentration to make extraction commercially profitable for industries.",
                        "Example: Bauxite is the ore from which Aluminum is extracted."
                    ],
                    answer: "An ore is an accumulation of a mineral mixed with other elements in sufficient quantity to make extraction profitable. Example: Bauxite for aluminum."
                }
            ]
        }
    ],
    examples: []
};
