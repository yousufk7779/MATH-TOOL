import { ChapterContent } from "../chapterContent";

export const sciPhy4: ChapterContent = {
    id: "sci-phy-4",
    number: 4,
    title: "Magnetic Effects of Electric Current",
    introduction: "In the previous chapter, we learned that electricity can cause heating. In this chapter, we explore a fascinating connection: electricity can also act like a magnet! When current flows through a wire, it creates a magnetic field around it.",
    definitions: [
        { term: "Magnetic Field", description: "The space around a magnet where its force (pull or push) can be felt." },
        { term: "Magnetic Field Lines", description: "Imaginary lines that show the direction and strength of the magnetic force. They always emerge from the North Pole and merge at the South Pole." },
        { term: "Electromagnet", description: "A temporary strong magnet made by wrapping a coil of wire around a soft iron core and passing electric current through it." },
        { term: "Solenoid", description: "A coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder." },
        { term: "Electric Motor", description: "A magical machine that converts electrical energy into mechanical energy (movement). Used in fans, mixers, and cars." },
        { term: "Electromagnetic Induction", description: "The process of generating electricity by moving a magnet near a wire, or a wire near a magnet." },
        { term: "Electric Generator", description: "A machine that converts mechanical energy into electrical energy based on the principle of electromagnetic induction." }
    ],
    keyPoints: [
        "A compass needle gets deflected if you bring it near a wire that has current flowing through it. This proves electricity creates magnetism.",
        "Magnetic field lines never intersect (cross) each other.",
        "The magnetic field created by a straight wire is in the form of concentric circles around it (Right-Hand Thumb Rule).",
        "Fleming’s Left-Hand Rule helps to find the direction of force acting on a moving charge (used in electric motors).",
        "Fleming’s Right-Hand Rule helps to find the direction of induced current (used in electric generators).",
        "In our homes, we receive Alternating Current (AC) which reverses its direction periodically. A battery gives Direct Current (DC) which flows in one direction only."
    ],
    formulas: [],
    crux: [
        "Electricity can create a magnet.",
        "A moving magnet can create electricity.",
        "Motors run on electricity to spin things.",
        "Generators spin to make electricity."
    ],
    mcqs: [
        {
            id: "sp4-mcq-1",
            question: "What is the direction of magnetic field lines outside a bar magnet?",
            options: ["South pole to North pole", "North pole to South pole", "East to West", "West to East"],
            correctAnswer: "b"
        },
        {
            id: "sp4-mcq-2",
            question: "Which of the following determines the direction of the magnetic field produced by a straight current-carrying wire?",
            options: ["Fleming's Left-Hand Rule", "Fleming's Right-Hand Rule", "Right-Hand Thumb Rule", "Ohm's Law"],
            correctAnswer: "c"
        },
        {
            id: "sp4-mcq-3",
            question: "An electric motor converts:",
            options: ["Mechanical energy into electrical energy", "Electrical energy into mechanical energy", "Heat energy into electrical energy", "Chemical energy into mechanical energy"],
            correctAnswer: "b"
        },
        {
            id: "sp4-mcq-4",
            question: "The phenomenon of electromagnetic induction involves generating an electric current by:",
            options: ["Heating a wire", "Moving a magnet inside a coil", "Connecting a battery to a wire", "Friction between two objects"],
            correctAnswer: "b"
        },
        {
            id: "sp4-mcq-5",
            question: "Which of the following safety devices breaks the circuit when there is a short circuit or overloading?",
            options: ["Switch", "Ammeter", "Electric Fuse", "Voltmeter"],
            correctAnswer: "c"
        }
    ],
    summary: [
        "A magnetic field exists around a wire carrying current.",
        "Electromagnets are stronger than normal magnets and can be turned on/off using electricity.",
        "Electric motors use the force acting on a current-carrying wire in a magnetic field to create motion.",
        "Electromagnetic induction is the creation of current by changing a magnetic field near a coil.",
        "Safety features like earthing, fuses, and MCBs protect our houses from electrical fires."
    ],
    exercises: [
        {
            id: "sp4-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sp4-ex-q1",
                    number: "1",
                    question: "Why does a compass needle get deflected when brought near a bar magnet?",
                    solution: [
                        "A compass needle is itself a tiny bar magnet.",
                        "When it is brought near another magnet, their magnetic fields interact.",
                        "According to the rule 'like poles repel, unlike poles attract', the needle feels a magnetic force.",
                        "This force causes the compass needle to deflect and align with the magnetic field line."
                    ],
                    answer: "A compass needle is a small magnet, so it defelcts due to the magnetic force acting upon it from the bar magnet."
                },
                {
                    id: "sp4-ex-q2",
                    number: "2",
                    question: "State the principle of an electric generator.",
                    solution: [
                        "An electric generator works on the principle of 'Electromagnetic Induction'.",
                        "When a coil of wire (armature) is rotated continuously inside a strong magnetic field, the magnetic field passing through the coil changes.",
                        "This changing field 'induces' or creates an electric current in the coil."
                    ],
                    answer: "It works on electromagnetic induction, where rotating a coil within a magnetic field induces an electric current in the coil."
                },
                {
                    id: "sp4-ex-q3",
                    number: "3",
                    question: "What is the function of an earth wire? Why is it necessary to earth metallic appliances?",
                    solution: [
                        "The earth wire provides a low resistance path directly to the deep ground.",
                        "If a live wire accidentally touches the metallic body of an appliance (like a fridge, or iron), the body gets highly charged.",
                        "The earth wire safely carries this leakage current to the earth.",
                        "This prevents the user from getting a severe electric shock when touching the appliance."
                    ],
                    answer: "It provides a safe path for leakage current to the ground, preventing electric shocks to users touching metallic appliances."
                }
            ]
        }
    ],
    examples: []
};
