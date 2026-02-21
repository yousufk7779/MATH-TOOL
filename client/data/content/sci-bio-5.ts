import { ChapterContent } from "../chapterContent";

export const sciBio5: ChapterContent = {
    id: "sci-bio-5",
    number: 5,
    title: "Our Environment",
    introduction: "We live on a beautiful planet filled with forests, rivers, animals, and humans. Everything around us that affects our life makes up our environment. Let's learn how living things depend on each other and how our actions impact nature.",
    definitions: [
        { term: "Environment", description: "Everything around us, including all living things (plants, animals, people) and non-living things (air, water, soil)." },
        { term: "Ecosystem", description: "A community of living organisms interacting with their non-living physical environment. Examples: a forest, a pond, or even an aquarium." },
        { term: "Producers", description: "Organisms that can make their own food using sunlight. All green plants and some bacteria are producers." },
        { term: "Consumers", description: "Organisms that depend on others for food. This includes all animals. They can be herbivores, carnivores, or omnivores." },
        { term: "Decomposers", description: "Microorganisms (like bacteria and fungi) that break down dead remains of plants and animals, returning nutrients back to the soil." },
        { term: "Food Chain", description: "A simple, straight sequence representing 'who eats whom' in an ecosystem, showing the flow of energy." },
        { term: "Food Web", description: "A complex network of interconnected food chains in an ecosystem." },
        { term: "Ozone Layer", description: "A protective shield of gas (O3) high up in the atmosphere that blocks harmful Ultraviolet (UV) radiation from the Sun." },
        { term: "Biological Magnification", description: "The harmful accumulation of toxic chemicals (like pesticides) in the bodies of organisms, which increases at each step of a food chain." }
    ],
    keyPoints: [
        "An ecosystem consists of biotic (living) and abiotic (non-living) components.",
        "Energy flow in an ecosystem is unidirectional. It always flows from the Sun -> Producers -> Consumers.",
        "According to the 10% Law, only 10% of the energy is transferred from one trophic level to the next. The rest is lost as heat to the environment.",
        "Because so much energy is lost at each step, food chains usually have only 3 or 4 steps.",
        "Biomagnification means that the animals at the highest trophic level (like humans or eagles) get the maximum concentration of harmful chemicals from their food.",
        "The ozone layer is being destroyed by man-made chemicals called CFCs (Chlorofluorocarbons) used in old refrigerators and ACs.",
        "Without the ozone layer, UV rays from the sun would cause skin cancer, cataract, and damage to plants.",
        "Waste management is crucial. We must separate biodegradable waste (vegetable peels, paper) from non-biodegradable waste (plastics, glass) to protect our environment."
    ],
    formulas: [],
    crux: [
        "Everything is connected. Plants make food, animals eat it.",
        "Only 10% of energy moves up the food chain.",
        "Poisons (like DDT) increase as they go up the food chain.",
        "The Ozone layer protects us from the Sun's UV rays.",
        "Plastic waste ruins the environment because it doesn't rot."
    ],
    mcqs: [
        {
            id: "sb5-mcq-1",
            question: "Which of the following constitutes a food chain?",
            options: ["Grass, wheat and mango", "Grass, goat and human", "Goat, cow and elephant", "Grass, fish and goat"],
            correctAnswer: "b"
        },
        {
            id: "sb5-mcq-2",
            question: "Which group of organisms are not included in the 'consumers' category?",
            options: ["Herbivores", "Carnivores", "Producers", "Omnivores"],
            correctAnswer: "c"
        },
        {
            id: "sb5-mcq-3",
            question: "What percentage of solar energy is typically captured by green plants?",
            options: ["1%", "10%", "50%", "100%"],
            correctAnswer: "a"
        },
        {
            id: "sb5-mcq-4",
            question: "The depletion of the ozone layer is primarily caused by:",
            options: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Nitrogen"],
            correctAnswer: "b"
        },
        {
            id: "sb5-mcq-5",
            question: "Biological magnification involves the accumulation of:",
            options: ["Energy", "Nutrients", "Harmful chemicals", "Water"],
            correctAnswer: "c"
        }
    ],
    summary: [
        "An ecosystem is a self-sustaining unit composed of living and non-living components.",
        "Food chains and food webs represent the flow of energy and nutrients in nature.",
        "The 10% Law explains why food chains are relatively short.",
        "Human activities like using CFCs have severely damaged the ozone layer, exposing us to harmful UV radiation.",
        "Improper disposal of non-biodegradable waste presents a huge environmental threat."
    ],
    exercises: [
        {
            id: "sb5-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sb5-ex-q1",
                    number: "1",
                    question: "What are trophic levels? Give an example of a food chain and state the different trophic levels in it.",
                    solution: [
                        "The various steps or levels in a food chain at which the transfer of food (energy) takes place are called trophic levels.",
                        "Example: Grass -> Deer -> Tiger.",
                        "1. Grass is the producer (First Trophic Level).",
                        "2. Deer is the primary consumer or herbivore (Second Trophic Level).",
                        "3. Tiger is the secondary consumer or carnivore (Third Trophic Level)."
                    ],
                    answer: "Trophic levels are the steps in a food chain. In Grass -> Deer -> Tiger, Grass is 1st, Deer is 2nd, and Tiger is 3rd level."
                },
                {
                    id: "sb5-ex-q2",
                    number: "2",
                    question: "What is the role of decomposers in the ecosystem?",
                    solution: [
                        "Decomposers (like bacteria and fungi) break down the complex organic matter present in dead plants and animals.",
                        "They convert this complex matter into simple inorganic substances that get mixed into the soil.",
                        "Plants then use these nutrients from the soil to grow again.",
                        "Therefore, decomposers act as nature's 'cleaners' and help in recycling vital nutrients."
                    ],
                    answer: "They act as nature's cleaners by breaking down dead matter and recycling its nutrients back into the soil for plants."
                },
                {
                    id: "sb5-ex-q3",
                    number: "3",
                    question: "Why are some substances biodegradable and some non-biodegradable?",
                    solution: [
                        "Substances that CAN easily be broken down by biological processes (action of bacteria/fungi) are called biodegradable. Example: paper, food waste.",
                        "Substances that CANNOT be broken down by biological processes are called non-biodegradable. Example: plastic wrappers, glass.",
                        "This happens because decomposers release specific enzymes, which can digest natural materials but not synthetic, man-made materials."
                    ],
                    answer: "Biodegradable substances are easily broken down by bacterial enzymes naturally, whereas non-biodegradable substances cannot be."
                }
            ]
        }
    ],
    examples: []
};
