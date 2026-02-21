import { ChapterContent } from "../chapterContent";

export const sciPhy1: ChapterContent = {
    id: "sci-phy-1",
    number: 1,
    title: "Light - Reflection and Refraction",
    introduction: "Light is a simple form of energy that helps us see everything around us. It always travels in a perfectly straight line.",
    definitions: [
        { term: "Reflection", description: "Bouncing back of light when it hits a shiny surface, like a mirror." },
        { term: "Refraction", description: "The simple bending of light when it moves from one clear thing (like air) to another (like water)." },
        { term: "Lens", description: "A transparent curved glass that can bend light to make things look bigger or smaller." }
    ],
    keyPoints: [
        "Light always travels in straight lines.",
        "Mirrors bounce light (reflect).",
        "Lenses bend light (refract).",
        "Convex mirrors are used in cars because they give a wide view.",
        "Concave mirrors are used by dentists to see big images of teeth."
    ],
    formulas: [
        { name: "Mirror Formula", formula: "1/f = 1/v + 1/u" },
        { name: "Lens Formula", formula: "1/f = 1/v - 1/u" },
        { name: "Power of a Lens", formula: "Power = 1 / focal length" }
    ],
    crux: [
        "Remember: Convex mirror is for cars (+ focal length).",
        "Remember: Concave mirror is for dentists (- focal length)."
    ],
    summary: [
        "Reflection means bouncing back.",
        "Angle of hitting (i) is always equal to angle of bouncing (r).",
        "Refraction changes the speed of light."
    ],
    examples: [],
    exercises: [
        {
            id: "in-text-1",
            name: "In-Text Questions",
            questions: [
                {
                    id: "q1",
                    number: "1",
                    question: "Define the principal focus of a concave mirror.",
                    solution: [
                        "When many straight lines of light hit a concave mirror, they bounce back.",
                        "After bouncing, they all join at one single point.",
                        "This special single point is called the principal focus."
                    ],
                    answer: "The point where all parallel light rays meet after bouncing off the mirror."
                }
            ]
        },
        {
            id: "exercise-1",
            name: "Back Exercise Solutions",
            questions: [
                {
                    id: "back-q1",
                    number: "1",
                    question: "Which type of mirror is best for dentists? Why?",
                    solution: [
                        "Dentists always use a Concave mirror.",
                        "A concave mirror acts like a zooming glass.",
                        "It gives a big and straight image of our teeth so dentists can easily spot decay."
                    ],
                    answer: "Concave mirror, because it shows a big image of the tooth."
                }
            ]
        }
    ],
    mcqs: [
        {
            id: "mcq1",
            question: "Which mirror is used as a rear-view mirror in cars?",
            options: ["Plane mirror", "Convex mirror", "Concave mirror", "None"],
            correctAnswer: "Convex mirror"
        },
        {
            id: "mcq2",
            question: "The bending of light when it changes mediums is called?",
            options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
            correctAnswer: "Refraction"
        }
    ]
};
