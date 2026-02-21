import { ChapterContent } from "../chapterContent";

export const sciPhy2: ChapterContent = {
    id: "sci-phy-2",
    number: 2,
    title: "The Human Eye and the Colourful World",
    introduction: "Let's explore how our eyes work like a living camera. We will also learn about the beautiful natural phenomena like rainbows and the blue color of the sky, which happen because of light.",
    definitions: [
        { term: "Accommodation", description: "The ability of the eye lens to adjust its focus so we can see near and far objects clearly." },
        { term: "Near Point", description: "The closest distance at which the eye can see an object clearly. For a normal young adult, it is about 25 cm." },
        { term: "Far Point", description: "The farthest point up to which the eye can see objects clearly. For a normal eye, it is at infinity." },
        { term: "Dispersion", description: "The splitting of white light into its seven beautiful colors when it passes through a prism." },
        { term: "Spectrum", description: "The beautiful band of seven colors (VIBGYOR) formed when white light is dispersed." },
        { term: "Scattering", description: "When light hits small particles (like dust or air molecules) and spreads out in all directions." }
    ],
    keyPoints: [
        "The eye lens forms an inverted real image on the retina.",
        "Retina has light-sensitive cells (rods and cones) which send signals to the brain via the optic nerve.",
        "Myopia (Nearsightedness) means you can see nearby clearly, but far is blurry. Corrected with a concave lens.",
        "Hypermetropia (Farsightedness) means you can see far clearly, but near is blurry. Corrected with a convex lens.",
        "Presbyopia happens in old age when the eye loses its focusing power.",
        "Prisms split white light into 7 colors. Red bends the least, Violet bends the most.",
        "A rainbow is a natural spectrum caused by dispersion in tiny water droplets in the sky.",
        "The sky looks blue because tiny air particles scatter the blue color much more than red.",
        "The sun looks reddish during sunrise and sunset because blue light gets scattered away before reaching our eyes."
    ],
    formulas: [
        { name: "Power of a Lens", formula: "P = 1 / f \n(where f is focal length in meters)" }
    ],
    crux: [
        "Our eyes are living cameras.",
        "Light splits into 7 colors (Dispersion).",
        "Blue sky and red sunsets happen due to Scattering of Light.",
        "Glasses (lenses) fix eye defects like Myopia and Hypermetropia."
    ],
    mcqs: [
        {
            id: "sp2-mcq-1",
            question: "Which part of the eye acts like a screen where images are formed?",
            options: ["Cornea", "Iris", "Retina", "Pupil"],
            correctAnswer: "c"
        },
        {
            id: "sp2-mcq-2",
            question: "What is the near point for a normal human eye?",
            options: ["25 cm", "10 cm", "Infinity", "50 cm"],
            correctAnswer: "a"
        },
        {
            id: "sp2-mcq-3",
            question: "Which color bends the LEAST when passing through a prism?",
            options: ["Violet", "Blue", "Green", "Red"],
            correctAnswer: "d"
        },
        {
            id: "sp2-mcq-4",
            question: "Which natural phenomenon causes a rainbow?",
            options: ["Reflection", "Dispersion", "Scattering", "Absorption"],
            correctAnswer: "b"
        },
        {
            id: "sp2-mcq-5",
            question: "A person suffering from myopia cannot see:",
            options: ["Near objects clearly", "Far objects clearly", "Any object clearly", "Colors correctly"],
            correctAnswer: "b"
        }
    ],
    summary: [
        "The human eye acts like a camera to help us see the world.",
        "Eye defects like myopia, hypermetropia, and presbyopia can be corrected using right viewing lenses.",
        "White light is actually a mix of seven colors (VIBGYOR).",
        "Atmospheric refraction creates illusions like twinkling stars and early sunrises.",
        "Scattering of light explains the blue color of the sky and the red color of sunrise/sunset."
    ],
    exercises: [
        {
            id: "sp2-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sp2-ex-q1",
                    number: "1",
                    question: "What is meant by power of accommodation of the eye?",
                    solution: [
                        "The ability of the eye lens to automatically adjust its focal length to see both near and far objects clearly.",
                        "This adjustment happens with the help of ciliary muscles."
                    ],
                    answer: "It is the ability of the eye to focus on both near and distant objects clearly."
                },
                {
                    id: "sp2-ex-q2",
                    number: "2",
                    question: "Why do stars twinkle?",
                    solution: [
                        "Stars twinkle because of 'Atmospheric Refraction'.",
                        "When starlight enters the Earth's atmosphere, it faces layers of air with different densities and temperatures.",
                        "The optical density of air keeps changing constantly.",
                        "This continuous bending of starlight causes the amount of light reaching our eyes to fluctuate, making it look like it's twinkling."
                    ],
                    answer: "Stars twinkle due to the continuous atmospheric refraction of starlight as it travels through moving layers of Earth's atmosphere."
                },
                {
                    id: "sp2-ex-q3",
                    number: "3",
                    question: "Explain why the planets do not twinkle.",
                    solution: [
                        "Planets are much closer to the Earth than the stars.",
                        "Because they are close, they act as an 'extended source' of light (like a collection of many small light sources).",
                        "The total change in the amount of light entering our eye from all these sources is zero.",
                        "Therefore, the twinkling effect gets cancelled out."
                    ],
                    answer: "Planets do not twinkle because they are close to Earth and act as large sources of light, cancelling out brightness variations."
                }
            ]
        }
    ],
    examples: [] // No extra examples right now
};
