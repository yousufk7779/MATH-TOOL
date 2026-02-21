import { ChapterContent } from "../chapterContent";

export const sciBio3: ChapterContent = {
    id: "sci-bio-3",
    number: 3,
    title: "How do Organisms Reproduce?",
    introduction: "How do living things create more of their own kind? A mango seed grows into a mango tree, and a dog gives birth to puppies. The beautiful process by which organisms create new individuals similar to themselves is called reproduction.",
    definitions: [
        { term: "Reproduction", description: "The biological process by which living organisms produce new individuals of the same species." },
        { term: "Asexual Reproduction", description: "A mode of reproduction where only a single parent is involved. No sex cells (gametes) are required. Examples: Amoeba splitting, potato budding." },
        { term: "Sexual Reproduction", description: "A mode of reproduction where two parents (male and female) are involved. It requires the fusion of male and female gametes." },
        { term: "DNA Copying", description: "The process of creating a duplicate copy of the DNA molecule during cell division. It is the core of reproduction." },
        { term: "Pollination", description: "The transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower." },
        { term: "Fertilization", description: "The fusion of a male gamete with a female gamete to form a single cell called a zygote." }
    ],
    keyPoints: [
        "Fission is an asexual method where a single-celled organism (like Amoeba) simply splits into two equal halves.",
        "Budding happens in Hydra and Yeast, where a small 'bud' grows on the parent's body, detaches, and becomes a new individual.",
        "Regeneration: If a Planaria worm is cut into pieces, each piece can grow back into a complete worm!",
        "Vegetative Propagation: Growing new plants from roots, stems, or leaves of old plants (e.g., growing a rose from a stem cutting).",
        "In sexual reproduction, the mixture of DNA from two parents creates variations. Variation is crucial for the survival of species in changing environments.",
        "In flowers, the Stamen is the male part (produces pollen) and the Pistil/Carpel is the female part (contains ovary/eggs).",
        "In humans, males produce sperm in the testes, and females produce eggs (ova) in the ovaries.",
        "Puberty brings physical changes preparing the human body for sexual reproduction."
    ],
    formulas: [],
    crux: [
        "Asexual = One parent, offspring look exactly the same.",
        "Sexual = Two parents, offspring have new variations.",
        "Plants reproduce using flowers (seeds) or stems/roots.",
        "Animals and humans reproduce sexually."
    ],
    mcqs: [
        {
            id: "sb3-mcq-1",
            question: "Which of the following reproduces by budding?",
            options: ["Amoeba", "Plasmodium", "Yeast", "Spirogyra"],
            correctAnswer: "c"
        },
        {
            id: "sb3-mcq-2",
            question: "The anther of a flower contains:",
            options: ["Sepals", "Ovules", "Pistil", "Pollen grains"],
            correctAnswer: "d"
        },
        {
            id: "sb3-mcq-3",
            question: "In human females, fertilization of the egg takes place in the:",
            options: ["Uterus", "Cervix", "Fallopian tube (Oviduct)", "Vagina"],
            correctAnswer: "c"
        },
        {
            id: "sb3-mcq-4",
            question: "Vegetative propagation refers to the formation of new plants from:",
            options: ["Stem, roots, and flowers", "Stem, roots, and leaves", "Stem, flowers, and fruits", "Stem, leaves, and flowers"],
            correctAnswer: "b"
        },
        {
            id: "sb3-mcq-5",
            question: "Characters transmitted from parents to offspring are present in:",
            options: ["Cytoplasm", "Ribosome", "Golgi bodies", "Genes (on DNA)"],
            correctAnswer: "d"
        }
    ],
    summary: [
        "Reproduction ensures the continuation of a species on Earth.",
        "Asexual reproduction involves one parent and methods like fission, budding, fragmentation, and vegetative propagation.",
        "Sexual reproduction involves two parents and leads to genetic variation, helping species adapt to evolution.",
        "Flowering plants undergo pollination followed by fertilization to produce seeds and fruits.",
        "In humans, reproduction involves a complex process starting from gamete formation to fertilization, and the development of the embryo inside the mother's womb."
    ],
    exercises: [
        {
            id: "sb3-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sb3-ex-q1",
                    number: "1",
                    question: "How does binary fission differ from multiple fission?",
                    solution: [
                        "In Binary Fission, a single parent cell divides into two equal daughter cells. Example: Amoeba.",
                        "In Multiple Fission, a single parent cell divides into many daughter cells simultaneously. Example: Plasmodium (the malarial parasite)."
                    ],
                    answer: "Binary fission produces two daughter cells, while multiple fission produces many daughter cells from one parent."
                },
                {
                    id: "sb3-ex-q2",
                    number: "2",
                    question: "What is the advantage of sexual reproduction over asexual reproduction?",
                    solution: [
                        "Sexual reproduction involves mixing DNA from two different parents.",
                        "This DNA mixing creates new combinations of genes, leading to 'Variation' in the offspring.",
                        "These variations make the new individuals better equipped to survive in a changing environment, unlike asexual reproduction where offspring are clones of the parent."
                    ],
                    answer: "Sexual reproduction creates genetic variation, which increases the chances of survival of a species in changing environments."
                },
                {
                    id: "sb3-ex-q3",
                    number: "3",
                    question: "What is the function of the placenta during pregnancy?",
                    solution: [
                        "The placenta is a special disc-like tissue embedded in the mother's uterine wall.",
                        "It acts as a connection between the mother's blood and the growing embryo.",
                        "It supplies oxygen and nutrition (glucose) from the mother's blood to the embryo.",
                        "It also helps to remove waste products generated by the embryo into the mother's blood."
                    ],
                    answer: "Placenta provides an exchange surface for supplying nutrition and oxygen to the embryo and removing its waste products."
                }
            ]
        }
    ],
    examples: []
};
