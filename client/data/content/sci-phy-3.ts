import { ChapterContent } from "../chapterContent";

export const sciPhy3: ChapterContent = {
    id: "sci-phy-3",
    number: 3,
    title: "Electricity",
    introduction: "Imagine a world without electricity. It's difficult! Electricity powers our homes, schools, hospitals, and trains. Let's learn what electricity actually is, what makes it flow, and how we can control it using wires and switches.",
    definitions: [
        { term: "Electric Current", description: "The continuous flow of electric charge (electrons) through a wire. We measure it in Amperes (A)." },
        { term: "Potential Difference (Voltage)", description: "The 'push' that makes electrons move from one point to another in a wire. We measure it in Volts (V)." },
        { term: "Resistance", description: "The property of a wire that opposes or stops the flow of electric current. We measure it in Ohms (Ω)." },
        { term: "Ohm's Law", description: "A rule stating that the current flowing through a wire is directly proportional to the voltage applied across it, provided temperature remains constant." },
        { term: "Power", description: "The rate at which electric energy is used by an appliance. We measure it in Watts (W)." }
    ],
    keyPoints: [
        "An electric circuit is a closed path for current to flow.",
        "A battery or a cell provides the 'push' (voltage) needed to start the current.",
        "Good conductors (like copper and aluminum) let current flow easily because they have low resistance.",
        "Insulators (like rubber and plastic) do not let current flow because they have very high resistance.",
        "When resistances are connected in Series, the total resistance increases. If one bulb blows, the whole circuit stops.",
        "When resistances are connected in Parallel, the total resistance decreases. If one bulb blows, the others still work.",
        "Electric current produces heat. This is used in electric irons, toasters, and water heaters (Joule's Law of Heating)."
    ],
    formulas: [
        { name: "Current (I)", formula: "I = Q / t \n(Charge / Time)" },
        { name: "Ohm's Law", formula: "V = I × R \n(Voltage = Current × Resistance)" },
        { name: "Resistors in Series", formula: "R_total = R1 + R2 + R3" },
        { name: "Resistors in Parallel", formula: "1 / R_total = 1/R1 + 1/R2 + 1/R3" },
        { name: "Electric Power (P)", formula: "P = V × I" }
    ],
    crux: [
        "Current is flowing electrons.",
        "Voltage pushes the electrons.",
        "Resistance tries to stop the electrons.",
        "Parallel circuits are best for home wiring."
    ],
    mcqs: [
        {
            id: "sp3-mcq-1",
            question: "Which of the following is the SI unit of electric current?",
            options: ["Volt", "Joule", "Ampere", "Ohm"],
            correctAnswer: "c"
        },
        {
            id: "sp3-mcq-2",
            question: "The device used for measuring potential difference is known as:",
            options: ["Ammeter", "Voltmeter", "Galvanometer", "Potentiometer"],
            correctAnswer: "b"
        },
        {
            id: "sp3-mcq-3",
            question: "What happens to the total resistance when resistors are connected in parallel?",
            options: ["It increases", "It decreases", "It remains the same", "It becomes zero"],
            correctAnswer: "b"
        },
        {
            id: "sp3-mcq-4",
            question: "Which formula correctly represents Ohm's Law?",
            options: ["I = V / R", "V = I + R", "R = V × I", "P = V × I"],
            correctAnswer: "a"
        },
        {
            id: "sp3-mcq-5",
            question: "The heating element of an electric iron is made of:",
            options: ["Copper", "Tungsten", "Nichrome", "Iron"],
            correctAnswer: "c"
        }
    ],
    summary: [
        "Electric current is the rate of flow of charges.",
        "Voltage drives the current through a circuit, while resistance opposes it.",
        "Ohm's Law relates voltage, current, and resistance (V=IR).",
        "Household circuits consist of appliances connected in parallel so they can operate independently.",
        "Electrical energy is commonly converted into heat or light energy."
    ],
    exercises: [
        {
            id: "sp3-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sp3-ex-q1",
                    number: "1",
                    question: "What does an electric circuit mean?",
                    solution: [
                        "An electric circuit is a continuous, closed path through which electric current flows.",
                        "It usually consists of a power source (like a battery), connecting wires, a switch, and an appliance (like a bulb)."
                    ],
                    answer: "It is a closed path consisting of electrical components through which electric current can flow."
                },
                {
                    id: "sp3-ex-q2",
                    number: "2",
                    question: "Why does the cord of an electric heater not glow while the heating element does?",
                    solution: [
                        "The heating element is made of an alloy (like nichrome) which has very high resistance. So, it produces a lot of heat when current passes and glows red hot.",
                        "The connecting cord is usually made of copper wire, which has very low resistance. So, it produces very little heat and doesn't glow."
                    ],
                    answer: "The heating element has high resistance and gets very hot, whereas the cord has low resistance."
                },
                {
                    id: "sp3-ex-q3",
                    number: "3",
                    question: "Why is tungsten used almost exclusively for filament of electric lamps?",
                    solution: [
                        "Tungsten has a very high melting point (around 3380 °C).",
                        "It does not melt even when it gets extremely hot and emits light.",
                        "It is also very strong and does not easily burn (oxidize) at high temperatures."
                    ],
                    answer: "Tungsten has a very high melting point and emits light without melting at high temperatures."
                }
            ]
        }
    ],
    examples: []
};
