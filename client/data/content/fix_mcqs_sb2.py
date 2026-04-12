import re

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

mcqs_replacement = """    mcqs: [
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
        },
        {
            id: "sb2-mcq-6",
            question: "Which of the following is an inhibitory plant hormone which causes wilting of leaves?",
            options: [
                "(a) Auxin",
                "(b) Gibberellin",
                "(c) Cytokinin",
                "(d) Abscisic acid"
            ],
            correctAnswer: "d"
        },
        {
            id: "sb2-mcq-7",
            question: "Involuntary actions like blood pressure, salivation and vomiting are controlled by the:",
            options: [
                "(a) Cerebrum",
                "(b) Medulla in the hindbrain",
                "(c) Cerebellum",
                "(d) Pons"
            ],
            correctAnswer: "b"
        },
        {
            id: "sb2-mcq-8",
            question: "Which endocrine gland is often referred to as the 'Master Gland'?",
            options: [
                "(a) Thyroid gland",
                "(b) Adrenal gland",
                "(c) Pituitary gland",
                "(d) Pancreas"
            ],
            correctAnswer: "c"
        },
        {
            id: "sb2-mcq-9",
            question: "The dramatic changes in body appearance during puberty are mainly due to the secretion of:",
            options: [
                "(a) Thyroxine and Insulin",
                "(b) Testosterone and Oestrogen",
                "(c) Adrenaline and Thyroxine",
                "(d) Insulin and Testosterone"
            ],
            correctAnswer: "b"
        },
        {
            id: "sb2-mcq-10",
            question: "A person having a very tall and giant-like appearance likely has over-secretion of:",
            options: [
                "(a) Growth hormone",
                "(b) Adrenaline",
                "(c) Insulin",
                "(d) Thyroxine"
            ],
            correctAnswer: "a"
        }
    ],"""

# Regex to find the corrupted mcqs block. 
# It starts at mcqs: [ and ends at the ], right before summary: [
pattern = re.compile(r'mcqs:\s*\[.*\s*\]\s*,(\s*summary:)', re.DOTALL)

if pattern.search(content):
    new_content = pattern.sub(mcqs_replacement + r"\1", content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("MCQs fixed and updated.")
else:
    print("Could not find mcqs block for replacement.")
