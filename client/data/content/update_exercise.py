import re
import os
import base64

ts_file = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts'
neuron_b64_file = r'd:\All NCERT SOLUTIONS\client\data\content\neuron_base64.txt'

# Read Neuron base64
with open(neuron_b64_file, 'r') as f:
    neuron_b64 = f.read().strip()

neuron_data_uri = f"data:image/png;base64,{neuron_b64}"

# Extract Phototropism base64 from existing file to reuse
with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

photo_match = re.search(r"alt='Phototropism Diagram' /></div>\"\s*\],\s*answer:\s*\"Movement in the sensitive plant is a quick,\s*nastic,\s*and growth-independent response to touch\.\s*Shoot movement towards light is a slow,\s*tropic,\s*and growth-dependent response\.\"\s*\}", content)
# That's too specific. Let's find any data:image/png;base64,...alt='Phototropism Diagram'
photo_data_uri_match = re.search(r"src='(data:image/png;base64,[^']+)'.*?alt='Phototropism Diagram'", content)
photo_data_uri = photo_data_uri_match.group(1) if photo_data_uri_match else ""

exercise_questions = [
    {
        "id": "sb2-ex-q1",
        "number": "1",
        "question": "Which of the following is a plant hormone?\na) Insulin\nb) Thyroxin\nc) Oestrogen\nd) Cytokinin",
        "solution": [
            "<p><b>Answers:</b> (d) <b>Cytokinin</b> is a plant hormone.</p>",
            "<p>It is responsible for promoting cell division and is typically found in areas of rapid growth like seeds and fruits.</p>"
        ],
        "answer": "(d) Cytokinin is a plant hormone that promotes cell division."
    },
    {
        "id": "sb2-ex-q2",
        "number": "2",
        "question": "The gap between two neurons is called a\na) Dendrite.\nb) Synapse.\nc) Axon.\nd) Impulse.",
        "solution": [
            "<p><b>Answers:</b> (b) <b>Synapse</b>.</p>",
            "<p>A synapse is the functional junction between the axon ending of one neuron and the dendrite of the next neuron where chemical signals are transmitted.</p>"
        ],
        "answer": "(b) The gap between two neurons is called a synapse."
    },
    {
        "id": "sb2-ex-q3",
        "number": "3",
        "question": "The brain is responsible for\na) Thinking.\nb) Regulating the heartbeat.\nc) Balancing the body.\nd) all of the above",
        "solution": [
            "<p><b>Answers:</b> (d) <b>All of the above</b>.</p>",
            "<p>The human brain controls all voluntary activities (thinking), involuntary actions (heartbeat), and maintains posture/balance.</p>"
        ],
        "answer": "(d) The brain is responsible for thinking, regulating heartbeat, and balancing the body."
    },
    {
        "id": "sb2-ex-q4",
        "number": "4",
        "question": "What is the function of receptors in our body? Think of situations where receptors do not work properly. What problems are likely to arise?",
        "solution": [
            "<p><b>Answers:</b> Receptors are specialized cells located in our sense organs that detect stimuli from the environment.</p>",
            "<ul><li><b>Functions:</b> They convert external stimuli (light, sound, smell) into electrical impulses for the nervous system.</li><li><b>Malfunction:</b> If receptors fail, the body cannot detect hazards (e.g., cannot feel pain from a hot object), leading to severe injuries.</li></ul>"
        ],
        "answer": "Receptors detect external stimuli. If they malfunction, the body cannot respond to environment changes, increasing the risk of injury."
    },
    {
        "id": "sb2-ex-q5",
        "number": "5",
        "question": "Draw the structure of a neuron and explain its function.",
        "solution": [
            "<p><b>Answers:</b> A <b>neuron</b> is the structural and functional unit of the nervous system.</p>",
            "<div style='text-align: center; margin: 15px 0;'><img src='" + neuron_data_uri + "' style='width: 100%; max-width: 400px; height: auto; border-radius: 8px;' alt='Structure of a Neuron' /></div>",
            "<ul><li><b>Dendrites:</b> Receive signals from other neurons.</li><li><b>Cyton (Cell Body):</b> Processes information.</li><li><b>Axon:</b> Carries electrical impulses away from the cell body.</li><li><b>Nerve Endings:</b> Release chemicals to cross the synapse.</li></ul>"
        ],
        "answer": "Neurons transmit information via electrical impulses. Dendrites receive signals, the axon carries them, and nerve endings transmit them across synapses."
    },
    {
        "id": "sb2-ex-q6",
        "number": "6",
        "question": "How does phototropism occur in plants?",
        "solution": [
            "<p><b>Answers:</b> Phototropism is the growth movement of a plant part towards or away from light.</p>",
            "<div style='text-align: center; margin: 15px 0;'><img src='" + photo_data_uri + "' style='width: 100%; max-width: 350px; height: auto; border-radius: 8px;' alt='Phototropism' /></div>",
            "<ul><li>When light shines on one side of a shoot, <b>auxin</b> diffuses towards the shady side.</li><li>This higher concentration of auxin stimulates cells on the shady side to grow longer.</li><li>Consequently, the shoot bends towards the light source.</li></ul>"
        ],
        "answer": "Auxin accumulates on the shady side of the shoot, causing those cells to elongate faster, which results in the stem bending towards light."
    },
    {
        "id": "sb2-ex-q7",
        "number": "7",
        "question": "Which signals will get disrupted in case of a spinal cord injury?",
        "solution": [
            "<p><b>Answers:</b> A spinal cord injury disrupts both sensory and motor pathways:</p>",
            "<ul><li><b>Reflex actions:</b> Instantaneous responses to stimuli will be lost.</li><li><b>Sensory signals:</b> Information from the skin/muscles below the injury point will not reach the brain.</li><li><b>Motor signals:</b> Commands from the brain to skeletal muscles will be blocked, causing paralysis.</li></ul>"
        ],
        "answer": "Spinal cord injury disrupts reflex actions and the communication between the brain and body parts below the site of injury."
    },
    {
        "id": "sb2-ex-q8",
        "number": "8",
        "question": "How does chemical coordination occur in plants?",
        "solution": [
            "<p><b>Answers:</b> Plants coordinate their behavior using chemical messengers called <b>phytohormones</b>.</p>",
            "<ul><li>Phytohormones are produced in minute quantities and diffuse to their target areas.</li><li><b>Growth Promoters:</b> Auxins, Gibberellins, and Cytokinins.</li><li><b>Growth Inhibitors:</b> Abscisic acid (ABA).</li><li>These chemicals regulate growth, cell division, and responses to stimuli like light and gravity.</li></ul>"
        ],
        "answer": "Plant coordination is achieved by hormones like auxins and gibberellins, which regulate growth and movements through diffusion."
    },
    {
        "id": "sb2-ex-q9",
        "number": "9",
        "question": "What is the need for a system of control and coordination in an organism?",
        "solution": [
            "<p><b>Answers:</b> Control and coordination are essential for survival:</p>",
            "<ul><li><b>Unity:</b> It allows different organs to work together in a synchronized manner.</li><li><b>Response:</b> It helps the organism respond appropriately to changes in the environment (stimuli).</li><li><b>Homeostasis:</b> It maintains internal balance within the body.</li></ul>"
        ],
        "answer": "Control and coordination allow multi-cellular organisms to synchronize various organs for environmental responses and internal stability."
    },
    {
        "id": "sb2-ex-q10",
        "number": "10",
        "question": "How are involuntary actions and reflex actions different from each other?",
        "solution": [
            "<p><b>Answers:</b></p><table><tr><th>Involuntary Action</th><th>Reflex Action</th></tr><tr><td>Controlled by midbrain or hindbrain.</td><td>Mainly controlled by the spinal cord.</td><td>Occur relatively slowly (e.g., digestion, heartbeat).</td><td>Occur extremely fast and suddenly (e.g., blinking).</td></tr></table>"
        ],
        "answer": "Involuntary actions are slow and controlled by the brain, while reflex actions are sudden, automated responses controlled by the spinal cord."
    },
    {
        "id": "sb2-ex-q11",
        "number": "11",
        "question": "Compare and contrast nervous and hormonal mechanisms for control and coordination in animals.",
        "solution": [
            "<p><b>Answers:</b></p><table><tr><th>Feature</th><th>Nervous System</th><th>Hormonal System</th></tr><tr><td>Messenger</td><td>Electrical Impulse</td><td>Chemical Hormone</td></tr><tr><td>Speed</td><td>Very Fast</td><td>Relatively Slow</td></tr><tr><td>Reach</td><td>Only up to nerve endings</td><td>All body cells (via blood)</td></tr></table>"
        ],
        "answer": "The nervous system uses fast electrical impulses but has limited reach, while hormones use slow chemical signals that reach every cell."
    },
    {
        "id": "sb2-ex-q12",
        "number": "12",
        "question": "What is the difference between the manner in which movement takes place in a sensitive plant and the movement in our legs?",
        "solution": [
            "<p><b>Answers:</b></p>",
            "<ul><li><b>Plant Movement:</b> Occurs due to changes in the amount of <b>water</b> (turgor pressure) in specialized cells. There is no specialized muscle tissue.</li><li><b>Leg Movement:</b> Occurs when <b>muscle cells</b> contract and relax. Muscle cells contain specialized proteins that change their shape in response to nerve impulses.</li></ul>"
        ],
        "answer": "Plant movement relies on water pressure changes in cells, whereas leg movement is caused by the contraction of muscle proteins."
    }
]

import json

def format_obj(obj, indent_level=4):
    ind = " " * indent_level
    if isinstance(obj, list):
        if not obj: return "[]"
        res = "[\n"
        for item in obj:
            res += format_obj(item, indent_level + 4) + ",\n"
        res = res.rstrip(",\n") + "\n" + ind + "]"
        return res
    elif isinstance(obj, dict):
        res = "{\n"
        for k, v in obj.items():
            res += ind + "    " + k + ': ' + format_obj(v, indent_level + 4) + ",\n"
        res = res.rstrip(",\n") + "\n" + ind + "}"
        return res
    elif isinstance(obj, str):
        return json.dumps(obj)
    else:
        return str(obj)

new_questions_js = format_obj(exercise_questions, 12)

# Replace the Exercise tab questions
# Use a broad pattern to match the sb2-ex block
pattern = re.compile(r'(id:\s*"sb2-ex",\s*name:\s*"Exercise",\s*questions:\s*)\[.*?\](\s*\})', re.DOTALL)

if pattern.search(content):
    new_content = pattern.sub(lambda m: m.group(1) + new_questions_js + m.group(2), content)
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Exercise update successful")
else:
    print("Could not find Exercise block")
