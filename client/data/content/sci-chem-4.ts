import { ChapterContent } from "../chapterContent";

export const sciChem4: ChapterContent = {
    id: "sci-chem-4",
    number: 4,
    title: "Carbon and its Compounds",
    introduction: "Carbon is a very special element. It is present in all living things, the food we eat, the clothes we wear, and the fuels we burn. Let's uncover the secret behind carbon's ability to form millions of compounds.",
    definitions: [
        { term: "Covalent Bond", description: "A chemical bond formed by the sharing of electron pairs between two atoms. Carbon always forms covalent bonds." },
        { term: "Allotropes", description: "Different physical forms in which an element can exist. For carbon, these are Diamond, Graphite, and Fullerenes." },
        { term: "Catenation", description: "The unique ability of carbon atoms to link with other carbon atoms to form long chains, branches, or rings." },
        { term: "Hydrocarbons", description: "Compounds made of only Carbon and Hydrogen. They are the main components of fuels like petrol and CNG." },
        { term: "Homologous Series", description: "A series of carbon compounds that have the same functional group and similar chemical properties. Successive members differ by a -CH2 unit." },
        { term: "Functional Group", description: "An atom or group of atoms attached to a carbon chain that gives the compound its specific chemical properties. E.g. -OH (Alcohol), -COOH (Carboxylic Acid)." }
    ],
    keyPoints: [
        "Carbon has an atomic number of 6, giving it 4 valence electrons (tetravalency). It needs 4 more to be stable, which it achieves by sharing.",
        "Carbon cannot form C4+ or C4- ions easily because it takes too much energy, hence it only forms Covalent bonds.",
        "Saturated Hydrocarbons (Alkanes) have only single bonds between carbon atoms. They burn with a clean blue flame.",
        "Unsaturated Hydrocarbons (Alkenes & Alkynes) have double or triple bonds. They are more reactive and burn with a yellow, sooty flame.",
        "Graphite is slippery and conducts electricity because each carbon is bonded to 3 others, leaving one electron free.",
        "Diamond is the hardest known natural substance because each carbon is strongly bonded to 4 others in a rigid 3D structure.",
        "Soaps and detergents are carbon compounds used for cleaning. They have a 'hydrophilic' (water-loving) head and a 'hydrophobic' (water-hating/dirt-loving) tail."
    ],
    formulas: [
        { name: "Alkanes (Single bond)", formula: "C_n H_{2n+2}" },
        { name: "Alkenes (Double bond)", formula: "C_n H_{2n}" },
        { name: "Alkynes (Triple bond)", formula: "C_n H_{2n-2}" }
    ],
    crux: [
        "Carbon is everywhere because it links with itself easily (Catenation).",
        "It forms covalent bonds by sharing electrons.",
        "Diamond is hard; Graphite is soft and conducts electricity.",
        "Fuels (like petrol) are made of Carbon and Hydrogen."
    ],
    mcqs: [
        {
            id: "sc4-mcq-1",
            question: "Which of the following is an allotrope of carbon?",
            options: ["Ozone", "Graphite", "Sulphur", "Phosphorus"],
            correctAnswer: "b"
        },
        {
            id: "sc4-mcq-2",
            question: "The property of carbon to link with itself to form long chains is called:",
            options: ["Allotropy", "Isomerism", "Catenation", "Hydrogenation"],
            correctAnswer: "c"
        },
        {
            id: "sc4-mcq-3",
            question: "What is the general formula of Alkanes?",
            options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
            correctAnswer: "b"
        },
        {
            id: "sc4-mcq-4",
            question: "Which functional group is present in Alcohols?",
            options: ["-COOH", "-CHO", "-OH", "-CO-"],
            correctAnswer: "c"
        },
        {
            id: "sc4-mcq-5",
            question: "Unsaturated hydrocarbons burn with a:",
            options: ["Clean blue flame", "Yellow sooty flame", "Green flame", "Invisible flame"],
            correctAnswer: "b"
        }
    ],
    summary: [
        "Carbon is a versatile element due to its tetravalency and property of catenation.",
        "It forms giant covalent structures like diamond and graphite, and simple molecules like methane.",
        "Carbon chains can be straight, branched, or ring-shaped, leading to millions of organic compounds.",
        "Adding functional groups (like halogens, oxygen, nitrogen) gives new properties to carbon chains.",
        "The cleansing action of soap is based on the formation of clusters called micelles around dirt particles."
    ],
    exercises: [
        {
            id: "sc4-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sc4-ex-q1",
                    number: "1",
                    question: "Explain the nature of the covalent bond using the bond formation in CH3Cl.",
                    solution: [
                        "Carbon needs 4 electrons to complete its octet, Hydrogen needs 1, and Chlorine needs 1.",
                        "In CH3Cl (Chloromethane), the central Carbon atom shares 3 of its electrons with 3 Hydrogen atoms to form 3 C-H single covalent bonds.",
                        "Carbon shares its 4th electron with 1 Chlorine atom to form a C-Cl single covalent bond.",
                        "This sharing satisfies the outer shells of all the atoms involved, creating a stable molecule."
                    ],
                    answer: "Carbon forms 3 single covalent bonds by sharing electrons with 3 hydrogen atoms, and 1 single bond with chlorine."
                },
                {
                    id: "sc4-ex-q2",
                    number: "2",
                    question: "What is a homologous series? Explain with an example.",
                    solution: [
                        "A homologous series is a group of organic compounds having the same functional group and similar chemical properties.",
                        "The successive members of this series differ by a -CH2 unit and a mass of 14 u.",
                        "Example: The Alkane series. Methane (CH4), Ethane (C2H6), Propane (C3H8).",
                        "Notice that the difference between CH4 and C2H6 is exactly one Carbon and two Hydrogens (-CH2)."
                    ],
                    answer: "It is a series of compounds with the same functional group where successive members differ by a -CH2 unit."
                },
                {
                    id: "sc4-ex-q3",
                    number: "3",
                    question: "Why does micelle formation take place when soap is added to water? Will a micelle be formed in other solvents such as ethanol also?",
                    solution: [
                        "Soap molecules have two ends: a hydrophobic (water-hating) tail and a hydrophilic (water-loving) head.",
                        "In water, the hydrophobic tails hide from the water and point inwards towards the dirt/oil, while the hydrophilic heads point outwards into the water. This spherical structure is a micelle.",
                        "In ethanol, soap is completely soluble. Both the head and tail mix easily with the solvent.",
                        "Therefore, micelle formation will NOT take place in ethanol."
                    ],
                    answer: "Micelles form because soap has a water-hating tail and water-loving head. They will not form in ethanol due to high solubility."
                }
            ]
        }
    ],
    examples: []
};
