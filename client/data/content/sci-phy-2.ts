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
            options: ["(a) Cornea", "(b) Iris", "(c) Retina", "(d) Pupil"],
            correctAnswer: "c"
        },
        {
            id: "sp2-mcq-2",
            question: "What is the near point for a normal human eye?",
            options: ["(a) 25 cm", "(b) 10 cm", "(c) Infinity", "(d) 50 cm"],
            correctAnswer: "a"
        },
        {
            id: "sp2-mcq-3",
            question: "Which color bends the LEAST when passing through a prism?",
            options: ["(a) Violet", "(b) Blue", "(c) Green", "(d) Red"],
            correctAnswer: "d"
        },
        {
            id: "sp2-mcq-4",
            question: "Which natural phenomenon causes a rainbow?",
            options: ["(a) Reflection", "(b) Dispersion", "(c) Scattering", "(d) Absorption"],
            correctAnswer: "b"
        },
        {
            id: "sp2-mcq-5",
            question: "A person suffering from myopia cannot see:",
            options: ["(a) Near objects clearly", "(b) Far objects clearly", "(c) Any object clearly", "(d) Colors correctly"],
            correctAnswer: "b"
        },
        {
            id: "sp2-mcq-6",
            question: "The far point of a normal human eye is at:",
            options: ["(a) 25 cm", "(b) 100 cm", "(c) Infinity", "(d) 2 km"],
            correctAnswer: "c"
        },
        {
            id: "sp2-mcq-7",
            question: "Corrective lens used for hypermetropia is a:",
            options: ["(a) Concave lens", "(b) Convex lens", "(c) Bifocal lens", "(d) Cylindrical lens"],
            correctAnswer: "b"
        },
        {
            id: "sp2-mcq-8",
            question: "The color of light that deviates the most on passing through a glass prism is:",
            options: ["(a) Red", "(b) Yellow", "(c) Blue", "(d) Violet"],
            correctAnswer: "d"
        },
        {
            id: "sp2-mcq-9",
            question: "The blue color of the sky is due to the:",
            options: ["(a) Reflection of light", "(b) Refraction of light", "(c) Scattering of light", "(d) Dispersion of light"],
            correctAnswer: "c"
        },
        {
            id: "sp2-mcq-10",
            question: "The loss of power of accommodation of the eye with old age is called:",
            options: ["(a) Myopia", "(b) Hypermetropia", "(c) Presbyopia", "(d) Astigmatism"],
            correctAnswer: "c"
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
            id: "in-text",
            name: "In-Text Questions",
            questions: [
                {
                    id: "sp2-it-1",
                    number: "1",
                    question: "What is meant by power of accommodation of the eye?",
                    solution: [
                        "Answer:",
                        "The ability of the eye lens to adjust its focal length to see both nearby and distant objects clearly is called the power of accommodation.",
                        "This is achieved by the ciliary muscles, which can change the curvature and thickness of the eye lens."
                    ],
                    answer: "The ability of the eye lens to adjust its focal length using ciliary muscles to focus on objects at various distances is called power of accommodation."
                },
                {
                    id: "sp2-it-2",
                    number: "2",
                    question: "A person with a myopic eye cannot see objects beyond 1.2 m distinctly. What should be the type of corrective lens used to restore proper vision?",
                    solution: [
                        "Answer:",
                        "The person is suffering from myopia (short-sightedness).",
                        "To correct this, a <b>concave lens</b> (diverging lens) of suitable power must be used to bring the image back onto the retina."
                    ],
                    answer: "A concave lens (diverging lens) of appropriate power should be used to restore proper vision."
                },
                {
                    id: "sp2-it-3",
                    number: "3",
                    question: "What is the far point and near point of the human eye with normal vision?",
                    solution: [
                        "Answer:",
                        "For a normal human eye:",
                        "1. The <b>near point</b> is the minimum distance at which objects can be seen clearly without strain, which is <b>25 cm</b>.",
                        "2. The <b>far point</b> is the maximum distance up to which the eye can see objects clearly, which is <b>infinity</b>."
                    ],
                    answer: "Near point = 25 cm, Far point = Infinity."
                },
                {
                    id: "sp2-it-4",
                    number: "4",
                    question: "A student has difficulty reading the blackboard while sitting in the last row. What could be the defect the child is suffering from? How can it be corrected?",
                    solution: [
                        "Answer:",
                        "Since the student cannot see the far-off blackboard clearly but can likely see nearby objects, the student is suffering from <b>myopia</b> (short-sightedness).",
                        "This defect can be corrected by using spectacles fitted with a <b>concave lens</b> of suitable focal length or power."
                    ],
                    answer: "The student is suffering from myopia. It can be corrected using a concave lens."
                }
            ]
        },
        {
            id: "exercise",
            name: "Exercise Questions",
            questions: [
                {
                    id: "sp2-ex-1",
                    number: "1",
                    question: "The human eye can focus objects at different distances by adjusting the focal length of the eye lens. This is due to:<br/><br/>(a) presbyopia<br/>(b) accommodation<br/>(c) near-sightedness<br/>(d) far-sightedness",
                    solution: ["Answer: (b) accommodation"],
                    answer: "(b) accommodation"
                },
                {
                    id: "sp2-ex-2",
                    number: "2",
                    question: "The human eye forms the image of an object at its:<br/><br/>(a) cornea<br/>(b) iris<br/>(c) pupil<br/>(d) retina",
                    solution: ["Answer: (d) retina"],
                    answer: "(d) retina"
                },
                {
                    id: "sp2-ex-3",
                    number: "3",
                    question: "The least distance of distinct vision for a young adult with normal vision is about:<br/><br/>(a) 25 m<br/>(b) 2.5 cm<br/>(c) 25 cm<br/>(d) 2.5 m",
                    solution: ["Answer: (c) 25 cm"],
                    answer: "(c) 25 cm"
                },
                {
                    id: "sp2-ex-4",
                    number: "4",
                    question: "The change in focal length of an eye lens is caused by the action of the:<br/><br/>(a) pupil<br/>(b) retina<br/>(c) ciliary muscles<br/>(d) iris",
                    solution: ["Answer: (c) muscles"],
                    answer: "(c) muscles"
                },
                {
                    id: "sp2-ex-5",
                    number: "5",
                    question: "A person needs a lens of power –5.5 dioptres for correcting his distant vision. For correcting his near vision he needs a lens of power +1.5 dioptre. What is the focal length of the lens required for correcting (i) distant vision, and (ii) near vision?",
                    solution: [
                        "Answer:",
                        "(i) For distant vision: P = -5.5 D",
                        "Focal length f = 1/P = 1/(-5.5) = <b>-0.182 m</b>",
                        "(ii) For near vision: P = +1.5 D",
                        "Focal length f = 1/P = 1/(+1.5) = <b>+0.667 m</b>"
                    ],
                    answer: "(i) -0.182 m, (ii) +0.667 m"
                },
                {
                    id: "sp2-ex-6",
                    number: "6",
                    question: "The far point of a myopic person is 80 cm in front of the eye. What is the nature and power of the lens required to correct the problem?",
                    solution: [
                        "Answer:",
                        "Object distance u = \u221e (infinity)",
                        "Image distance v = -80 cm = -0.8 m",
                        "Using lens formula: 1/f = 1/v - 1/u",
                        "1/f = 1/(-0.8) - 1/(\u221e) = -1.25",
                        "Power P = 1/f = <b>-1.25 D</b>",
                        "Since power is negative, it is a <b>concave lens</b>."
                    ],
                    answer: "Power: -1.25 D, Nature: Concave lens."
                },
                {
                    id: "sp2-ex-7",
                    number: "7",
                    question: "Make a diagram to show how hypermetropia is corrected. The near point of a hypermetropic eye is 1 m. What is the power of the lens required to correct this defect? Assume that the near point of the normal eye is 25 cm.",
                    solution: [
                        "Answer:",
                        "Near point of defective eye = 1 m = 100 cm",
                        "Near point of normal eye = 25 cm",
                        "Object distance u = -25 cm = -0.25 m",
                        "Image distance v = -1 m = -1.0 m",
                        "1/f = 1/v - 1/u = 1/(-1.0) - 1/(-0.25)",
                        "1/f = -1 + 4 = +3 D",
                        "Power P = <b>+3.0 D</b>",
                        "Positive power indicates a <b>convex lens</b>."
                    ],
                    answer: "P = +3.0 D, Nature: Convex lens."
                },
                {
                    id: "sp2-ex-8",
                    number: "8",
                    question: "Why is a normal eye not able to see clearly the objects placed closer than 25 cm?",
                    solution: [
                        "Answer:",
                        "The ciliary muscles cannot contract infinitely to increase the curvature of the lens.",
                        "If the object is closer than 25 cm, the lens cannot become thick enough to focus the image exactly on the retina, resulting in a blurred image."
                    ],
                    answer: "Because the ciliary muscles cannot contract enough to decrease the focal length beyond a certain limit."
                },
                {
                    id: "sp2-ex-9",
                    number: "9",
                    question: "What happens to the image distance in the eye when we increase the distance of an object from the eye?",
                    solution: [
                        "Answer:",
                        "The image distance in the eye remains <b>constant</b> as it is fixed by the distance between the lens and the retina.",
                        "Any change in object distance is compensated by the change in focal length using ciliary muscles (accommodation)."
                    ],
                    answer: "The image distance remains constant."
                },
                {
                    id: "sp2-ex-10",
                    number: "10",
                    question: "Why do stars twinkle?",
                    solution: [
                        "Answer:",
                        "Stars twinkle due to <b>atmospheric refraction</b>.",
                        "Star light passes through layers of atmosphere with varying refractive indices. This causes the apparent position of the star to change slightly and the amount of light entering the eye to flicker."
                    ],
                    answer: "Due to atmospheric refraction of starlight."
                },
                {
                    id: "sp2-ex-11",
                    number: "11",
                    question: "Explain why the planets do not twinkle.",
                    solution: [
                        "Answer:",
                        "Planets are much closer to Earth than stars and appear as extended sources (disks) rather than points.",
                        "The total variation in light intensity from different parts of the planet averages out to zero, making them appear steady."
                    ],
                    answer: "Planets are close and act as extended sources, so flicker effects average out."
                },
                {
                    id: "sp2-ex-12",
                    number: "12",
                    question: "Why does the Sun appear reddish early in the morning?",
                    solution: [
                        "Answer:",
                        "During sunrise, sunlight travels a long distance through the atmosphere.",
                        "Most of the shorter wavelengths (blue) are scattered away by atmospheric particles. Only the longer wavelengths (red) reach our eyes."
                    ],
                    answer: "Due to scattering of light, where blue light is scattered away leaving mainly red light."
                },
                {
                    id: "sp2-ex-13",
                    number: "13",
                    question: "Why does the sky appear dark instead of blue to an astronaut?",
                    solution: [
                        "Answer:",
                        "Space is a vacuum and has no atmosphere.",
                        "Since there are no particles to scatter sunlight, the light does not spread, and the sky appears dark to an astronaut."
                    ],
                    answer: "Absence of atmosphere means no scattering of light occurs."
                }
            ]
        }
    ],
    examples: [] // No extra examples right now
};
