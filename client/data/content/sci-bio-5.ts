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
            question: "<div style='text-align: justify;'>Which of the following constitutes a food chain?</div>",
            options: [
                "<div style='text-align: justify;'>(a) Grass, wheat and mango</div>",
                "<div style='text-align: justify;'>(b) Grass, goat and human</div>",
                "<div style='text-align: justify;'>(c) Goat, cow and elephant</div>",
                "<div style='text-align: justify;'>(d) Grass, fish and goat</div>"
            ],
            correctAnswer: "b"
        },
        {
            id: "sb5-mcq-2",
            question: "<div style='text-align: justify;'>Which group of organisms are not included in the 'consumers' category?</div>",
            options: [
                "<div style='text-align: justify;'>(a) Herbivores</div>",
                "<div style='text-align: justify;'>(b) Carnivores</div>",
                "<div style='text-align: justify;'>(c) Producers</div>",
                "<div style='text-align: justify;'>(d) Omnivores</div>"
            ],
            correctAnswer: "c"
        },
        {
            id: "sb5-mcq-3",
            question: "<div style='text-align: justify;'>What percentage of solar energy is typically captured by green plants?</div>",
            options: [
                "<div style='text-align: justify;'>(a) 1%</div>",
                "<div style='text-align: justify;'>(b) 10%</div>",
                "<div style='text-align: justify;'>(c) 50%</div>",
                "<div style='text-align: justify;'>(d) 100%</div>"
            ],
            correctAnswer: "a"
        },
        {
            id: "sb5-mcq-4",
            question: "<div style='text-align: justify;'>The depletion of the ozone layer is primarily caused by:</div>",
            options: [
                "<div style='text-align: justify;'>(a) Carbon dioxide</div>",
                "<div style='text-align: justify;'>(b) Chlorofluorocarbons (CFCs)</div>",
                "<div style='text-align: justify;'>(c) Methane</div>",
                "<div style='text-align: justify;'>(d) Nitrogen</div>"
            ],
            correctAnswer: "b"
        },
        {
            id: "sb5-mcq-5",
            question: "<div style='text-align: justify;'>Biological magnification involves the accumulation of:</div>",
            options: [
                "<div style='text-align: justify;'>(a) Energy</div>",
                "<div style='text-align: justify;'>(b) Nutrients</div>",
                "<div style='text-align: justify;'>(c) Harmful chemicals</div>",
                "<div style='text-align: justify;'>(d) Water</div>"
            ],
            correctAnswer: "c"
        },
        {
            id: "sb5-mcq-6",
            question: "<div style='text-align: justify;'>In an ecosystem, the flow of energy is always:</div>",
            options: [
                "<div style='text-align: justify;'>(a) Unidirectional</div>",
                "<div style='text-align: justify;'>(b) Bidirectional</div>",
                "<div style='text-align: justify;'>(c) Cyclic</div>",
                "<div style='text-align: justify;'>(d) Multidirectional</div>"
            ],
            correctAnswer: "a"
        },
        {
            id: "sb5-mcq-7",
            question: "<div style='text-align: justify;'>What percentage of energy is generally transferred from one trophic level to the next higher trophic level?</div>",
            options: [
                "<div style='text-align: justify;'>(a) 1%</div>",
                "<div style='text-align: justify;'>(b) 10%</div>",
                "<div style='text-align: justify;'>(c) 20%</div>",
                "<div style='text-align: justify;'>(d) 50%</div>"
            ],
            correctAnswer: "b"
        },
        {
            id: "sb5-mcq-8",
            question: "<div style='text-align: justify;'>Which of the following organisms are known as 'Nature's Cleaners'?</div>",
            options: [
                "<div style='text-align: justify;'>(a) Producers</div>",
                "<div style='text-align: justify;'>(b) Herbivores</div>",
                "<div style='text-align: justify;'>(c) Carnivores</div>",
                "<div style='text-align: justify;'>(d) Decomposers</div>"
            ],
            correctAnswer: "d"
        },
        {
            id: "sb5-mcq-9",
            question: "<div style='text-align: justify;'>Which of the following is a non-biodegradable waste substance?</div>",
            options: [
                "<div style='text-align: justify;'>(a) Glass and plastics</div>",
                "<div style='text-align: justify;'>(b) Cotton and paper</div>",
                "<div style='text-align: justify;'>(c) Vegetables and fruits</div>",
                "<div style='text-align: justify;'>(d) Wood and leaves</div>"
            ],
            correctAnswer: "a"
        },
        {
            id: "sb5-mcq-10",
            question: "<div style='text-align: justify;'>An ecosystem consists of which of the following components?</div>",
            options: [
                "<div style='text-align: justify;'>(a) Biotic components only</div>",
                "<div style='text-align: justify;'>(b) Abiotic components only</div>",
                "<div style='text-align: justify;'>(c) Both biotic and abiotic components</div>",
                "<div style='text-align: justify;'>(d) Only primary consumers</div>"
            ],
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
            id: "sb5-it-1",
            name: "In-Text 1",
            questions: [
                {
                    id: "sb5-it1-q1",
                    number: "1",
                    question: "<div style='text-align: justify;'>Why are some substances biodegradable and some non-biodegradable?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Substances are classified based on the action of biological enzymes:</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Biodegradable:</b> These are substances (like paper, fruit peels) that can be broken down by the action of bacteria and fungi (decomposers). Enzymes in nature are <b>specific</b> and can digest these natural materials into simple nutrients.</li></div>",
                        "<div style='text-align: justify;'><li><b>Non-biodegradable:</b> These are substances (like plastics, glass, DDT) that cannot be broken down by biological processes. Natural enzymes are not capable of digesting such man-made synthetic materials, so they persist in the environment for a long time.</li></ul></div>",
                        "<div style='text-align: justify;'><table style='border-collapse: collapse; width: 100%; max-width: 400px; margin: 15px auto; color: #fff; border: 1px solid #444; background: #1a1a1a; font-size: 14px;'></div>",
                        "<div style='text-align: justify;'><tr style='background: #333;'><th style='border: 1px solid #444; padding: 8px;'>Feature</th><th style='border: 1px solid #444; padding: 8px;'>Biodegradable</th><th style='border: 1px solid #444; padding: 8px;'>Non-biodegradable</th></tr></div>",
                        "<div style='text-align: justify;'><tr><td style='border: 1px solid #444; padding: 8px;'><b>Decomposition</b></td><td style='border: 1px solid #444; padding: 8px;'>Rapid by microbes</td><td style='border: 1px solid #444; padding: 8px;'>Does not occur</td></tr></div>",
                        "<div style='text-align: justify;'><tr><td style='border: 1px solid #444; padding: 8px;'><b>Source</b></td><td style='border: 1px solid #444; padding: 8px;'>Natural/Organic</td><td style='border: 1px solid #444; padding: 8px;'>Synthetic/Man-made</td></tr></div>",
                        "<div style='text-align: justify;'></table></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Biodegradable substances are broken down by natural enzymes, while non-biodegradable ones are synthetic and resist biological breakdown.</div>"
                },
                {
                    id: "sb5-it1-q2",
                    number: "2",
                    question: "<div style='text-align: justify;'>Give any two ways in which biodegradable substances would affect the environment.</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Biodegradable substances affect the environment in the following ways:</p></div>",
                        "<div style='text-align: justify;'><ol><li><b>Pollution (Foul Smell):</b> During the process of decomposition, they can release gases that produce a foul odor, polluting the local air.</li></div>",
                        "<div style='text-align: justify;'><li><b>Breeding Ground:</b> Heaps of decomposing waste act as a breeding ground for harmful insects like flies and mosquitoes, which can spread diseases.</li></ol></div>"
                    ],
                    answer: "<div style='text-align: justify;'>They can cause foul odors during decomposition and serve as breeding grounds for disease-causing pests.</div>"
                },
                {
                    id: "sb5-it1-q3",
                    number: "3",
                    question: "<div style='text-align: justify;'>Give any two ways in which non-biodegradable substances would affect the environment.</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Non-biodegradable substances affect the environment in the following ways:</p></div>",
                        "<div style='text-align: justify;'><ol><li><b>Persistence and Pollution:</b> They remain in the environment for hundreds of years, causing land and water pollution and harming soil fertility.</li></div>",
                        "<div style='text-align: justify;'><li><b>Biological Magnification:</b> Chemicals like pesticides enter the food chain and accumulate at higher concentrations in top consumers (like humans), causing serious health issues.</li></ol></div>"
                    ],
                    answer: "<div style='text-align: justify;'>They persist for long periods causing persistent pollution and lead to biological magnification in food chains.</div>"
                }
            ]
        },
        {
            id: "sb5-it-2",
            name: "In-Text 2",
            questions: [
                {
                    id: "sb5-it2-q1",
                    number: "1",
                    question: "<div style='text-align: justify;'>What are trophic levels? Give an example of food chain and state the different trophic levels in it.</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The various steps or levels in a food chain at which the transfer of food (energy) takes place are called <b>trophic levels</b>.</p></div>",
                        "<div style='text-align: justify;'><p><b>Example:</b> Grass &rarr; Goat &rarr; Human</p></div>",
                        
                        "<div style='text-align: justify;'><div style='background: #2e7d32; padding: 5px 15px; border-radius: 5px; width: 80%; text-align: center;'><b>Producer:</b> Grass (1st Trophic Level)</div></div>",
                        "<div style='text-align: justify;'><div style='color: #4fc3f7;'>&darr;</div></div>",
                        "<div style='text-align: justify;'><div style='background: #fbc02d; padding: 5px 15px; border-radius: 5px; width: 80%; text-align: center; color: #000;'><b>Primary Consumer:</b> Goat (2nd Trophic Level)</div></div>",
                        "<div style='text-align: justify;'><div style='color: #4fc3f7;'>&darr;</div></div>",
                        "<div style='text-align: justify;'><div style='background: #d32f2f; padding: 5px 15px; border-radius: 5px; width: 80%; text-align: center;'><b>Secondary Consumer:</b> Human (3rd Trophic Level)</div></div>",
                        "<div style='text-align: justify;'></div></div>",
                        "<div style='text-align: justify;'><p>Energy flows from the 1st trophic level to the next, with only 10% being passed on.</p></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Trophic levels are various steps in a food chain. In Grass -> Goat -> Human, Grass is the producer level, and Human is the secondary consumer level.</div>"
                },
                {
                    id: "sb5-it2-q2",
                    number: "2",
                    question: "<div style='text-align: justify;'>What is the role of decomposers in the ecosystem?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Decomposers (bacteria and fungi) play a vital role in maintaining the balance of the ecosystem:</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Nutrient Recycling:</b> They break down complex organic matter from dead plants and animals into simple inorganic substances that return to the soil.</li></div>",
                        "<div style='text-align: justify;'><li><b>Soil Fertility:</b> By returning nutrients to the soil, they make them available for plants (producers) to use again.</li></div>",
                        "<div style='text-align: justify;'><li><b>Environmental Cleaning:</b> They act as nature's scavengers by disposing of biological waste and preventing the accumulation of dead remains.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Decomposers recycle nutrients back into the soil and keep the environment clean by breaking down dead organic matter.</div>"
                }
            ]
        },
        {
            id: "sb5-it-3",
            name: "In-Text 3",
            questions: [
                {
                    id: "sb5-it3-q1",
                    number: "1",
                    question: "<div style='text-align: justify;'>What is ozone and how does it affect any ecosystem?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> <b>Ozone (O<sub>3</sub>)</b> is a molecule formed by three atoms of oxygen. While oxygen (O<sub>2</sub>) is essential for life, ozone at the ground level is a deadly poison.</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Protection:</b> High up in the atmosphere, the ozone layer performs an essential function by shielding the earth from harmful <b>Ultraviolet (UV) radiation</b> from the Sun.</li></div>",
                        "<div style='text-align: justify;'><li><b>Impact on Ecosystem:</b> Without this shield, UV radiation would reach the earth and cause skin cancer in humans, damage eyes (cataract), and severely impact crops and marine life (phytoplankton).</li></ul></div>",
                        
                    ],
                    answer: "<div style='text-align: justify;'>Ozone is a molecule of 3 oxygen atoms. It shields the Earth from harmful UV rays, preventing diseases like skin cancer and protecting the ecosystem.</div>"
                },
                {
                    id: "sb5-it3-q2",
                    number: "2",
                    question: "<div style='text-align: justify;'>How can you help in reducing the problem of waste disposal? Give any two methods?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> We can reduce the problem of waste disposal using the following two methods:</p></div>",
                        "<div style='text-align: justify;'><ol><li><b>Composting:</b> Biodegradable waste such as fruit and vegetable peels, tea leaves, and garden waste should be buried in pits to convert them into organic manure.</li></div>",
                        "<div style='text-align: justify;'><li><b>Recycling:</b> Non-biodegradable waste like plastic bottles, metal cans, and glass should be collected and sent to recycling units to manufacture new items, reducing environmental pollution.</li></ol></div>"
                    ],
                    answer: "<div style='text-align: justify;'>We can help by composting biodegradable waste into manure and recycling non-biodegradable items like plastics and metals.</div>"
                }
            ]
        },
        {
            id: "sb5-ex",
            name: "Exercise",
            questions: [
                {
                    id: "sb5-ex-q1",
                    number: "1",
                    question: "<div style='text-align: justify;'>The term Ecosystem was introduced by:<br/>(a) Miller<br/>(b) Haldane<br/>(c) Tansley<br/>(d) Darwin</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The correct option is <b>(c) Tansley</b>.</p></div>",
                        "<div style='text-align: justify;'><p>Sir Arthur Tansley, a British ecologist, introduced the term 'Ecosystem' in 1935 to describe the basic unit of nature consisting of living organisms and their non-living environment.</p></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(c) Tansley. The term was coined by A.G. Tansley in 1935.</div>"
                },
                {
                    id: "sb5-ex-q2",
                    number: "2",
                    question: "<div style='text-align: justify;'>In a food chain, there is:<br/>(a) Bidirectional flow of energy<br/>(b) Zig zag flow of energy<br/>(c) Multi directional flow of energy<br/>(d) Unidirectional flow of energy</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The correct option is <b>(d) Unidirectional flow of energy</b>.</p></div>",
                        "<div style='text-align: justify;'><p>Energy flows only in one direction in an ecosystem: from the Sun to Producers, and then to various consumers. It does NOT flow back to the previous level.</p></div>",
                        "<div style='text-align: justify;'><div style='margin: 10px 0; padding: 10px; background: #1a1a1a; border: 1px solid #444; border-radius: 8px; text-align: center; color: #4fc3f7;'></div>",
                        "<div style='text-align: justify;'>SUN &rarr; PRODUCERS &rarr; CONSUMERS</div>",
                        "<div style='text-align: justify;'></div></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(d) Unidirectional flow. Energy moves only one way from producers to consumers.</div>"
                },
                {
                    id: "sb5-ex-q3",
                    number: "3",
                    question: "<div style='text-align: justify;'>Nature’s cleaners are:<br/>(a) Producers<br/>(b) Consumers<br/>(c) Decomposers<br/>(d) Carnivores</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The correct option is <b>(c) Decomposers</b>.</p></div>",
                        "<div style='text-align: justify;'><p>Decomposers are microorganisms that break down dead remains and organic waste, recycling nutrients back into the soil and keeping the environment clean.</p></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(c) Decomposers. They clean the environment by breaking down dead organic matter.</div>"
                },
                {
                    id: "sb5-ex-q4",
                    number: "4",
                    question: "<div style='text-align: justify;'>Which of the following groups contain only biodegradable items?<br/>(a) Grass, flowers and leather<br/>(b) Grass, wood and plastic<br/>(c) Fruit-peels, cake and lime-juice<br/>(d) Cake, wood and grass</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Options <b>(c)</b> and <b>(d)</b> both contain only biodegradable items. In common NCERT context, <b>(c)</b> is often highlighted.</p></div>",
                        "<div style='text-align: justify;'><ul><li>(a) contains leather (slowly biodegradable, but often treated with chemicals).</li></div>",
                        "<div style='text-align: justify;'><li>(b) contains plastic (non-biodegradable).</li></div>",
                        "<div style='text-align: justify;'><li>(c) and (d) contain items that can all be broken down naturally.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(c) and (d) are biodegradable. Fruit-peels, cake, lime-juice, wood, and grass are all natural materials.</div>"
                },
                {
                    id: "sb5-ex-q5",
                    number: "5",
                    question: "<div style='text-align: justify;'>Which of the following constitute a food-chain?<br/>(a) Grass, wheat and mango<br/>(b) Grass, goat and human<br/>(c) Goat, cow and elephant<br/>(d) Grass, fish and goat</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The correct option is <b>(b) Grass, goat and human</b>.</p></div>",
                        "<div style='text-align: justify;'><p>In this sequence, the Goat (herbivore) eats the Grass (producer), and the Human (omnivore) eats the Goat.</p></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(b) Grass, goat and human. This is a valid sequence of producer and consumers.</div>"
                },
                {
                    id: "sb5-ex-q6",
                    number: "6",
                    question: "<div style='text-align: justify;'>Which of the following are environment-friendly practices?<br/>(a) Carrying cloth-bags for shopping<br/>(b) Switching off unnecessary lights/fans<br/>(c) Walking to school instead of using a scooter<br/>(d) All of the above</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> The correct option is <b>(d) All of the above</b>.</p></div>",
                        "<div style='text-align: justify;'><p>Every listed practice helps in reducing waste, saving energy, or decreasing pollution.</p></div>"
                    ],
                    answer: "<div style='text-align: justify;'>(d) All. These practices conserve energy and reduce environmental footprints.</div>"
                },
                {
                    id: "sb5-ex-q7",
                    number: "7",
                    question: "<div style='text-align: justify;'>What will happen if we kill all the organisms in one trophic level?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> If all organisms in one trophic level are killed, it will lead to several severe consequences:</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Food Source:</b> The organisms of the next (higher) trophic level will starve and eventually die.</li></div>",
                        "<div style='text-align: justify;'><li><b>Overpopulation:</b> The population of organisms in the lower trophic level will increase uncontrollably, which can overload the ecosystem's resources.</li></div>",
                        "<div style='text-align: justify;'><li><b>Ecological Balance:</b> The entire flow of energy will be disrupted, leading to the collapse of the ecological balance.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>It will disrupt the ecosystem; higher levels will starve, while lower levels will overpopulate, collapsing the balance.</div>"
                },
                {
                    id: "sb5-ex-q8",
                    number: "8",
                    question: "<div style='text-align: justify;'>Will the impact of removing all the organisms in a trophic level be different for different trophic levels? Can the organisms of any trophic level be removed without causing any damage to the ecosystem?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b></p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Different Impact:</b> Yes, the impact will be different. For example, removing producers (the base) is more devastating than removing top predators.</li></div>",
                        "<div style='text-align: justify;'><li><b>Damage to Ecosystem:</b> No, organisms of <b>any</b> trophic level cannot be removed without causing damage. Every level plays a specific role in energy transfer and population control.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Yes, the impact varies by level, but removing any level will inevitably damage the ecosystem's energy transfer system.</div>"
                },
                {
                    id: "sb5-ex-q9",
                    number: "9",
                    question: "<div style='text-align: justify;'>What is biological magnification? Will the levels of this magnification be different at different levels of the ecosystem?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> <b>Biological magnification</b> is the process by which harmful chemicals like pesticides accumulate at increasing concentrations at each successives trophic level of a food chain.</p></div>",
                        "<div style='text-align: justify;'><div style='margin: 15px auto; padding: 10px; background: #000; border: 1px solid #444; border-radius: 8px; width: 280px; text-align: center;'></div>",
                        "<div style='background: #d32f2f; padding: 5px; margin: 2px; font-weight: normal; width: 100%; border-radius: 3px;'>MAN (Highest) [MAX PPM]</div>",
                        "<div style='background: #f57c00; padding: 5px; margin: 2px; font-weight: normal; width: 80%; border-radius: 3px; display: inline-block;'>BIG FISH</div>",
                        "<div style='background: #fbc02d; padding: 5px; margin: 2px; font-weight: normal; width: 60%; border-radius: 3px; display: inline-block;'>SMALL FISH</div>",
                        "<div style='background: #2e7d32; padding: 5px; margin: 2px; font-weight: normal; width: 40%; border-radius: 3px; display: inline-block;'>ALGAE (Min)</div>",
                        "</div>",
                        "<p><b>Difference:</b> Yes, the levels are different. The concentration is <b>highest</b> in organisms at the topmost trophic level (like humans) and lowest at the base.</p>"
                    ],
                    answer: "<div style='text-align: justify;'>Magnification is the accumulation of toxins up the food chain. It is highest at the top level and lowest at the bottom.</div>"
                },
                {
                    id: "sb5-ex-q10",
                    number: "10",
                    question: "<div style='text-align: justify;'>What are the problems caused by the non-biodegradable wastes that we generate?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> Non-biodegradable wastes cause the following problems:</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Environmental Pollution:</b> They persist for long periods, causing soil, air, and water pollution.</li></div>",
                        "<div style='text-align: justify;'><li><b>Drainage Clogging:</b> Plastic waste often clogs drainage systems, leading to floods and stagnation of water.</li></div>",
                        "<div style='text-align: justify;'><li><b>Harm to Animals:</b> Stray animals (like cows) may ingest plastic bags, which can be fatal.</li></div>",
                        "<div style='text-align: justify;'><li><b>Biological Magnification:</b> Toxins from these wastes enter and harm the food chain.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>They cause soil and water pollution, clog drains, harm livestock, and lead to toxic accumulation in food chains.</div>"
                },
                {
                    id: "sb5-ex-q11",
                    number: "11",
                    question: "<div style='text-align: justify;'>If all the waste we generate is biodegradable, will this have no impact on the environment?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b> No, even if all waste is biodegradable, it will <b>still have an impact</b> if generated in large quantities:</p></div>",
                        "<div style='text-align: justify;'><ul><li><b>Hygiene Issues:</b> Large heaps of decomposing waste cause a foul smell.</li></div>",
                        "<div style='text-align: justify;'><li><b>Disease Breeding:</b> They can provide a breeding ground for flies, rats, and mosquitoes, spreading diseases.</li></div>",
                        "<div style='text-align: justify;'><li><b>Oxygen Depletion:</b> If dumped in water, they use up dissolved oxygen during decomposition, killing aquatic life.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Large amounts of biodegradable waste still impact nature by causing odors, hygiene issues, and oxygen depletion in water.</div>"
                },
                {
                    id: "sb5-ex-q12",
                    number: "12",
                    question: "<div style='text-align: justify;'>Why is damage to the ozone layer a cause for concern? What steps are being taken to limit this damage?</div>",
                    solution: [
                        "<div style='text-align: justify;'><p><b>Answers:</b></p></div>",
                        "<div style='text-align: justify;'><p><b>Concern:</b> Damage to the ozone layer allows harmful UV radiation to reach the earth. This can cause skin cancer, cataract, weakened immune systems, and damage to plants/aquatic life.</p></div>",
                        "<div style='text-align: justify;'><p><b>Steps taken:</b></p></div>",
                        "<div style='text-align: justify;'><ul><li>In 1987, the <b>UNEP</b> (United Nations Environment Programme) succeeded in forging an agreement to freeze <b>CFC</b> (chlorofluorocarbon) production.</li></div>",
                        "<div style='text-align: justify;'><li>Companies are now mandated to manufacture CFC-free refrigerators and air conditioners worldwide.</li></ul></div>"
                    ],
                    answer: "<div style='text-align: justify;'>Damage allows harmful UV rays to reach Earth, causing cancer and environmental harm. CFC production has been frozen globally to limit this.</div>"
                }
            ]
        }
    ],
    examples: []
};
