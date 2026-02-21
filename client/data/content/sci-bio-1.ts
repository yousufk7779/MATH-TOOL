import { ChapterContent } from "../chapterContent";

export const sciBio1: ChapterContent = {
    id: "sci-bio-1",
    number: 1,
    title: "Life Processes",
    introduction: "How do we tell the difference between what is alive and what is not alive? The basic functions performed by living organisms to maintain their life on this earth are called life processes. Nutrition, respiration, transportation, and excretion are some essential life processes.",
    definitions: [
        { term: "Life Processes", description: "The basic activities performed by living organisms to maintain their life. For example: eating, breathing, and throwing out waste." },
        { term: "Nutrition", description: "The beautiful process by which an organism takes in food and uses it for energy, growth, and repair." },
        { term: "Autotrophic Nutrition", description: "A type of nutrition where organisms (like green plants) make their own food from simple inorganic substances using sunlight." },
        { term: "Heterotrophic Nutrition", description: "A type of nutrition where organisms depend on other plants or animals for their food because they cannot make their own." },
        { term: "Photosynthesis", description: "The magic process by which green plants make their food using sunlight, water, carbon dioxide, and chlorophyll." },
        { term: "Respiration", description: "The process of breaking down food (glucose) inside our body cells to release energy." },
        { term: "Excretion", description: "The biological process involved in the removal of harmful metabolic wastes from the body." }
    ],
    keyPoints: [
        "Green plants make their food through Photosynthesis. They take in Carbon dioxide and give out Oxygen.",
        "Stomata are tiny pores on leaves that help in exchanging gases.",
        "Amoeba is a single-celled organism that takes in food using temporary finger-like extensions called pseudopodia.",
        "In human beings, the food is digested in the alimentary canal. The small intestine is the site of complete digestion.",
        "During respiration, glucose is broken down to release energy in the form of ATP.",
        "Aerobic respiration requires oxygen and releases a lot of energy. Anaerobic respiration happens without oxygen and releases less energy.",
        "The human heart pumps blood throughout the body. Arteries carry blood away from the heart, and veins bring blood back.",
        "In humans, kidneys are the main excretory organs that filter out waste from the blood to form urine."
    ],
    formulas: [],
    crux: [
        "Plants make food using sunlight.",
        "We eat food, and our stomach/intestine digests it.",
        "We breathe to get oxygen, which breaks food to give energy.",
        "The heart pumps blood to transport food and oxygen everywhere.",
        "Kidneys clean the blood and throw out liquid waste."
    ],
    mcqs: [
        {
            id: "sb1-mcq-1",
            question: "Which of the following is NOT required for photosynthesis?",
            options: ["Sunlight", "Chlorophyll", "Oxygen", "Carbon dioxide"],
            correctAnswer: "c"
        },
        {
            id: "sb1-mcq-2",
            question: "In which part of the human digestive system is digestion completed?",
            options: ["Stomach", "Small Intestine", "Large Intestine", "Mouth"],
            correctAnswer: "b"
        },
        {
            id: "sb1-mcq-3",
            question: "The breakdown of pyruvate to give carbon dioxide, water and energy takes place in:",
            options: ["Cytoplasm", "Mitochondria", "Chloroplast", "Nucleus"],
            correctAnswer: "b"
        },
        {
            id: "sb1-mcq-4",
            question: "The kidneys in human beings are a part of the system for:",
            options: ["Nutrition", "Respiration", "Excretion", "Transportation"],
            correctAnswer: "c"
        },
        {
            id: "sb1-mcq-5",
            question: "The xylem in plants is responsible for:",
            options: ["Transport of water", "Transport of food", "Transport of amino acids", "Transport of oxygen"],
            correctAnswer: "a"
        }
    ],
    summary: [
        "Life processes are the basic and essential functions for maintaining life.",
        "Nutrition is about getting energy from food. Plants make their own (Autotrophic), animals eat others (Heterotrophic).",
        "Respiration is the cellular process of releasing energy from food.",
        "Transportation systems move materials. Plants use Xylem (for water) and Phloem (for food). Humans use the circulatory system containing the heart and blood.",
        "Excretion removes harmful waste. Humans use Kidneys, while plants simply shed leaves or store waste as gums/resins."
    ],
    exercises: [
        {
            id: "sb1-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sb1-ex-q1",
                    number: "1",
                    question: "Why is diffusion insufficient to meet the oxygen requirements of multicellular organisms like humans?",
                    solution: [
                        "In multicellular organisms, not all cells are in direct contact with the surrounding environment.",
                        "Diffusion is a very slow process.",
                        "If we relied only on diffusion, it would take years for a single molecule of oxygen to reach our toes from our lungs.",
                        "Therefore, a specialized fast transport system (blood circulation) is needed."
                    ],
                    answer: "Diffusion is too slow and our cells are not all in direct contact with air, so we need a faster transport system."
                },
                {
                    id: "sb1-ex-q2",
                    number: "2",
                    question: "What are the differences between autotrophic nutrition and heterotrophic nutrition?",
                    solution: [
                        "1. Autotrophic nutrition: Organisms synthesize their own food from simple inorganic forms (like CO2 and water). Heterotrophic nutrition: Organisms cannot synthesize their own food and depend on others.",
                        "2. Autotrophic: Mostly occurs in green plants and some bacteria. Heterotrophic: Occurs in animals, fungi, and humans.",
                        "3. Autotrophic: Requires sunlight and chlorophyll. Heterotrophic: Does not require sunlight or chlorophyll."
                    ],
                    answer: "Autotrophs make their own food using sunlight. Heterotrophs cannot make food and depend on autotrophs."
                },
                {
                    id: "sb1-ex-q3",
                    number: "3",
                    question: "What is the role of saliva in the digestion of food?",
                    solution: [
                        "Saliva makes the food wet and slippery, making it easy to swallow.",
                        "It contains an enzyme called salivary amylase.",
                        "This enzyme breaks down complex starch (carbohydrates) into simple sugars right in our mouth."
                    ],
                    answer: "Saliva moistens food for easy swallowing and contains an enzyme that breaks down starch into simple sugars."
                }
            ]
        }
    ],
    examples: []
};
