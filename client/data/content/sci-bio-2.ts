import { ChapterContent } from "../chapterContent";

export const sciBio2: ChapterContent = {
    id: "sci-bio-2",
    number: 2,
    title: "Control and Coordination",
    introduction: "If you touch a hot pan, you instantly pull your hand away. If a plant is kept near a window, it bends towards the light. How do our bodies and plants know what to do? This is all managed by control and coordination systems!",
    definitions: [
        { term: "Stimulus", description: "Any change in the environment (like heat, light, sound) to which an organism responds." },
        { term: "Neuron", description: "The structural and functional unit of the nervous system. It's the longest cell in our body designed to carry electrical signals." },
        { term: "Synapse", description: "The microscopic gap between the end of one neuron and the beginning of the next, where chemical signals cross over." },
        { term: "Reflex Action", description: "A sudden, automatic, and involuntary response to a stimulus, handled directly by the spinal cord to protect us from harm." },
        { term: "Hormones", description: "Chemical messengers secreted directly into the blood by endocrine glands to regulate body functions and growth." },
        { term: "Tropism", description: "The directional growth or movement of a plant part in response to an external stimulus like light or gravity." }
    ],
    keyPoints: [
        "In humans, Control & Coordination is done by the Nervous System (brain, spinal cord, nerves) and the Endocrine System (hormones).",
        "A Neuron has three main parts: Dendrites (receive signals), Cell body (processes them), and Axon (transmits signals away).",
        "The Brain has three major parts: Forebrain (thinking, memory), Midbrain (reflex movements of eye/head), and Hindbrain (balance, involuntary actions like breathing).",
        "Cerebellum (in hindbrain) controls balance and posture (like riding a bicycle).",
        "Medulla (in hindbrain) controls involuntary actions like blood pressure, salivation, and vomiting.",
        "Plants don't have a nervous system. They use chemical hormones (Phytohormones) like Auxin (for growth towards light) and Abscisic acid (for stopping growth, wilting leaves).",
        "Adrenaline is the 'emergency hormone' that prepares our body to fight or run away during scary situations.",
        "Thyroxine hormone requires Iodine to work properly. Lack of iodine causes Goitre (swollen neck)."
    ],
    formulas: [],
    crux: [
        "Nerves send fast electrical messages.",
        "Hormones send slower, chemical messages.",
        "The brain thinks, while the spinal cord handles quick reflexes.",
        "Plants move or grow towards light/water using plant hormones."
    ],
    mcqs: [
        {
            id: "sb2-mcq-1",
            question: "Which part of the brain is responsible for maintaining posture and balance of the body?",
            options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
            correctAnswer: "b"
        },
        {
            id: "sb2-mcq-2",
            question: "The gap between two neurons is called a:",
            options: ["Dendrite", "Synapse", "Axon", "Impulse"],
            correctAnswer: "b"
        },
        {
            id: "sb2-mcq-3",
            question: "Which plant hormone promotes cell division and rapid growth in fruits and seeds?",
            options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
            correctAnswer: "c"
        },
        {
            id: "sb2-mcq-4",
            question: "Iodine is necessary for the synthesis of which hormone?",
            options: ["Adrenaline", "Thyroxine", "Insulin", "Testosterone"],
            correctAnswer: "b"
        },
        {
            id: "sb2-mcq-5",
            question: "If a plant's roots grow downwards towards gravity, it shows:",
            options: ["Phototropism", "Geotropism", "Hydrotropism", "Chemotropism"],
            correctAnswer: "b"
        }
    ],
    summary: [
        "Control and coordination are essential functions to adapt to changes in the environment.",
        "The nervous system provides quick, short-lived responses via neurons and the central nervous system (Brain + Spinal Cord).",
        "Reflex actions are survival mechanisms that bypass thinking so they can be incredibly fast.",
        "The endocrine system provides slow, long-lasting responses using hormones distributed through the blood.",
        "Plants respond to stimuli by growing towards or away from them (tropisms) regulated by plant hormones."
    ],
    exercises: [
        {
            id: "sb2-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sb2-ex-q1",
                    number: "1",
                    question: "What is the difference between a reflex action and walking?",
                    solution: [
                        "Reflex action is an involuntary, sudden action that happens without our conscious thought. It is controlled mainly by the spinal cord. Example: Pulling a hand away from a hot object.",
                        "Walking is a voluntary action. It is a conscious decision controlled by the brain (specifically the cerebellum for balance and coordination)."
                    ],
                    answer: "Reflex action is involuntary and controlled by the spinal cord. Walking is voluntary and controlled by the brain."
                },
                {
                    id: "sb2-ex-q2",
                    number: "2",
                    question: "How does our body respond when adrenaline is secreted into the blood?",
                    solution: [
                        "Adrenaline is the emergency hormone. When we are scared or stressed, it is secreted directly into the blood.",
                        "It makes the heart beat faster, supplying more oxygen to our muscles.",
                        "Breathing rate increases.",
                        "Blood supply is directed away from the digestive system and skin, straight to the skeletal muscles so we can fight or run away."
                    ],
                    answer: "Adrenaline prepares the body for action by increasing heart rate, breathing rate, and directing blood to muscles."
                },
                {
                    id: "sb2-ex-q3",
                    number: "3",
                    question: "Why are some patients of diabetes treated by giving injections of insulin?",
                    solution: [
                        "Insulin is a hormone produced by the pancreas that regulates the sugar levels in the blood.",
                        "In some diabetic patients, the pancreas does not produce enough insulin.",
                        "This causes blood sugar levels to rise dangerously high.",
                        "Therefore, doctors administer insulin injections to help control their blood sugar levels."
                    ],
                    answer: "Insulin injections are given to diabetic patients to regulate high blood sugar levels when their body doesn't produce enough."
                }
            ]
        }
    ],
    examples: []
};
