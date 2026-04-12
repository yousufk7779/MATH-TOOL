import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'
b64_ha_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_homo_ana.txt'
b64_sg_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_somatic_germ.txt'

def read_b64(path):
    if not os.path.exists(path): return ""
    with open(path, 'r', encoding='utf-8') as f:
        data = f.read().strip()
        if data.startswith('\ufeff'): data = data[1:]
        return data

b64_ha = read_b64(b64_ha_path)
b64_sg = read_b64(b64_sg_path)

questions = """            questions: [
                {
                    id: "sb4-ex-q1",
                    number: "1",
                    question: "A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. The progeny all bore violet flowers, but almost half of them were short. This suggests that the genetic make-up of the tall parent can be depicted as",
                    solution: [
                        "<p><b>Answers:</b> The correct option is <b>(c) TtWW</b>.</p>",
                        "<p><b>Reasoning:</b></p>",
                        "<ul><li>All progeny had <b>violet flowers</b>: This means the 'Violet' trait is dominant and the tall parent must be homozygous (WW) for it.</li><li>Half the progeny were <b>short</b>: For short offspring (tt) to appear, the tall parent must carry one 't' allele (heterozygous - Tt).</li></ul>",
                        "<table style='border-collapse: collapse; width: 100%; max-width: 300px; margin: 10px auto; color: #fff; border: 1px solid #444; background: #1a1a1a; font-size: 14px;'><tr><td style='border: 1px solid #444; padding: 5px;'>Gametes</td><td style='border: 1px solid #444; padding: 5px;'><b>tw</b></td><td style='border: 1px solid #444; padding: 5px;'><b>tw</b></td></tr><tr><td style='border: 1px solid #444; padding: 5px;'><b>TW</b></td><td style='border: 1px solid #444; padding: 5px;'>TtWw (Tall-V)</td><td style='border: 1px solid #444; padding: 5px;'>TtWw (Tall-V)</td></tr><tr><td style='border: 1px solid #444; padding: 5px;'><b>tW</b></td><td style='border: 1px solid #444; padding: 5px;'>ttWw (Short-V)</td><td style='border: 1px solid #444; padding: 5px;'>ttWw (Short-V)</td></tr></table>"
                    ],
                    answer: "(c) TtWW. All offspring were violet (dominance) while 50% were short (heterozygous parent)."
                },
                {
                    id: "sb4-ex-q2",
                    number: "2",
                    question: "An example of homologous organs is",
                    solution: [
                        "<p><b>Answers:</b> The correct option is <b>(d) All of the above</b>.</p>",
                        "<ul><li>All listed examples share a <b>common basic structure</b> and origin, despite performing different functions in their respective species.</li></ul>"
                    ],
                    answer: "(d) All of the above. Human arms/dog legs, human teeth/elephant tusks, and potato tubers/grass runners are all homologous."
                },
                {
                    id: "sb4-ex-q3",
                    number: "3",
                    question: "In evolutionary terms, we have more in common with",
                    solution: [
                        "<p><b>Answers:</b> The correct option is <b>(a) a Chinese school-boy</b>.</p>",
                        "<ul><li>A Chinese school-boy belongs to the same species (<i>Homo sapiens</i>) as we do. We share over <b>99.9%</b> of our DNA with members of our own species.</li></ul>"
                    ],
                    answer: "(a) A Chinese school-boy. We share more DNA with our own species than with any other animal."
                },
                {
                    id: "sb4-ex-q4",
                    number: "4",
                    question: "A study found that children with light-coloured eyes are likely to have parents with light-coloured eyes. On this basis, can we say anything about whether the light eye colour trait is dominant or recessive? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> No, this information is <b>not enough</b> to conclusively state if the trait is dominant or recessive.</p>",
                        "<ul><li>If light eyes were <b>recessive</b>, both parents must be homozygous recessive (ee). They would only pass 'e' to children, resulting in all light-eyed children.</li><li>If light eyes were <b>dominant</b>, parents could be homozygous (EE) or heterozygous (Ee). They could still produce light-eyed offspring.</li><li>To determine dominance, we need a cross between light eyes and dark eyes to see which trait is masked in the F1 generation.</li></ul>"
                    ],
                    answer: "No. Without seeing a cross involving dark eyes, we cannot tell which trait hides (recedes) in a hybrid state."
                },
                {
                    id: "sb4-ex-q5",
                    number: "5",
                    question: "How are the areas of study – evolution and classification – interlinked?",
                    solution: [
                        "<p><b>Answers:</b> Evolution and Classification are deeply interlinked because <b>classification reflects evolutionary history</b>:</p>",
                        "<ul><li><b>Characteristics:</b> Organisms are classified based on similarities. More similarities suggest a <b>recent common ancestor</b>.</li><li><b>Tree of Life:</b> Evolution maps how species diverge over time; classification captures these branches into groups (Kingdoms, Phyla, etc.).</li><li><b>Evidence:</b> Homologous organs found during classification studies provide direct evidence of evolutionary descent.</li></ul>"
                    ],
                    answer: "Classification is based on similarities that arise due to shared ancestry, making it essentially a roadmap of evolution."
                },
                {
                    id: "sb4-ex-q6",
                    number: "6",
                    question: "Explain the terms analogous and homologous organs with examples.",
                    solution: [
                        "<p><b>Answers:</b></p>",
                        "<ul><li><b>Homologous Organs:</b> Organs having a similar basic design and origin but different functions. <i>Example:</i> Forelimbs of a human (gripping) and a bird (flying).</li><li><b>Analogous Organs:</b> Organs having different structures and origins but similar functions. <i>Example:</i> Wings of a butterfly and wings of a bat.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_ha + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Organs Comparison' /></div>"
                    ],
                    answer: "Homologous organs show common ancestry (similar structure), while analogous organs show adaptive evolution (similar function, different structure)."
                },
                {
                    id: "sb4-ex-q7",
                    number: "7",
                    question: "Outline a project which aims to find the dominant coat colour in dogs.",
                    solution: [
                        "<p><b>Answers:</b> A Mendelian cross project can be used:</p>",
                        "<ul><li><b>Parents:</b> Cross a pure-bred Black dog (BB) with a pure-bred White dog (bb).</li><li><b>F1 Results:</b> If all F1 puppies are Black, then <b>Black is dominant</b>.</li><li><b>F2 Analysis:</b> Self-breed the F1 generation. A phenotypic ratio of 3:1 (3 Black : 1 White) in the F2 generation would confirm that Black is the dominant trait.</li></ul>"
                    ],
                    answer: "By crossing pure-bred dogs of different colors and observing the traits in F1 and F2 generations, the dominant coat color can be identified."
                },
                {
                    id: "sb4-ex-q8",
                    number: "8",
                    question: "Explain the importance of fossils in deciding evolutionary relationships.",
                    solution: [
                        "<p><b>Answers:</b> Fossils are crucial evidence for evolution:</p>",
                        "<ul><li><b>Ancestral Records:</b> They tell us about organisms that lived millions of years ago.</li><li><b>Linking Groups:</b> 'Connecting links' (e.g., *Archaeopteryx*) show how one group of animals evolved into another.</li><li><b>Phylogenetic Sequences:</b> Fossil series (like the evolution of horses) show gradual structural changes over time.</li></ul>"
                    ],
                    answer: "Fossils provide direct evidence of past life, showing how simple organisms evolved into complex ones and linking different species."
                },
                {
                    id: "sb4-ex-q9",
                    number: "9",
                    question: "What evidence do we have for the origin of life from inanimate matter?",
                    solution: [
                        "<p><b>Answers:</b> The <b>Miller-Urey Experiment</b> (1953) is the primary evidence:</p>",
                        "<ul><li>They simulated Earth’s early, harsh atmosphere (methane, ammonia, etc.) in a laboratory.</li><li>By using electric sparks (lightning), they triggered chemical reactions.</li><li>After several days, they found <b>amino acids</b> (organic matter) formed from simple gases (inanimate matter).</li></ul>"
                    ],
                    answer: "The Miller-Urey experiment showed that complex organic molecules like amino acids can form from simple inorganic substances under early Earth conditions."
                },
                {
                    id: "sb4-ex-q10",
                    number: "10",
                    question: "Explain how sexual reproduction gives rise to more viable variations than asexual reproduction. How does this affect the evolution of those organisms that reproduce sexually?",
                    solution: [
                        "<p><b>Answers:</b> Sexual reproduction leads to higher variation through:</p>",
                        "<ul><li><b>Gametic Fusion:</b> Combining DNA from two different individuals.</li><li><b>Recombination:</b> Shuffling of genes during meiosis creates unique offspring.</li><li><b>Impact:</b> Greater variation ensures that some individuals can survive environmental shifts, driving <b>natural selection</b> and helping the species evolve faster.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_sg + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Variation' /></div>"
                    ],
                    answer: "Combining genes from two parents creates unique offspring. This high variation allows faster adaptation and evolution."
                },
                {
                    id: "sb4-ex-q11",
                    number: "11",
                    question: "How is the equal genetic contribution of male and female parents ensured in the progeny?",
                    solution: [
                        "<p><b>Answers:</b> This is ensured through <b>meiosis</b> and <b>fertilization</b>:</p>",
                        "<ul><li>Each parent has two sets of chromosomes.</li><li>During gamete formation, cells divide into half (Haploid gametes).</li><li>A child receives one set of 23 chromosomes from the mother (egg) and one set of 23 from the father (sperm), restoring the full set of 46.</li></ul>"
                    ],
                    answer: "Each parent contributes one haploid set of chromosomes through their gametes, which combine to form a diploid offspring."
                },
                {
                    id: "sb4-ex-q12",
                    number: "12",
                    question: "Only variations that confer an advantage to an individual organism will survive in a population. Do you agree with this statement? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> I do <b>not agree</b> with this statement entirely.</p>",
                        "<ul><li><b>Genetic Drift:</b> Random changes can cause neutral or even slightly harmful variations to survive by pure chance.</li><li><b>Recessive Traits:</b> Harmful variations can remain hidden (carriers) in a population's gene pool for generations.</li><li><b>Environment:</b> A variation that is neutral today might become advantageous tomorrow if the environment changes.</li></ul>"
                    ],
                    answer: "No. While natural selection favors advantageous traits, random genetic drift and hidden recessive alleles also allow neutral variations to survive."
                }
            ]"""

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_start = 'id: "sb4-ex",'
target_questions = 'questions: []'

block_pos = content.find(target_start)
if block_pos != -1:
    q_pos = content.find(target_questions, block_pos)
    if q_pos != -1:
        new_content = content[:q_pos] + questions + content[q_pos + len(target_questions):]
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated sci-bio-4.ts with Exercise tab")
    else:
        print("Could not find questions placeholder")
else:
    print("Could not find Exercise tab")
