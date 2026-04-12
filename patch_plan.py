
import json
import os

with open("p_map.json", "r", encoding="utf-8") as f:
    docx_data = json.load(f)

def get_image(p_idx):
    for p in docx_data:
        if p['p_idx'] == p_idx and p['images']:
            return p['images'][0]
    return None

def get_all_images(p_idx):
    for p in docx_data:
        if p['p_idx'] == p_idx:
            return p['images']
    return []

patches = [
    # P50 area: In-Text 2 Q3
    {
        "fragment": "decreases to half of its former value.",
        "p_idx": 51, # Image for the calculation
        "alt": "P51"
    },
    # P59 area: In-Text 2 Q5
    {
        "fragment": "Use the data in the table given below",
        "p_idx": 60, # Table image
        "alt": "P60"
    },
    # P80 area: In-Text 3 Q2
    {
        "fragment": "measure the potential difference. As shown in the figure below.",
        "p_idx": 81, # Circuit diagram
        "alt": "P81"
    },
    # P96 area: In-Text 4 Q1(a)
    {
        "fragment": "Since 1 / 106 is very small",
        "p_idx": 97, # Formula image
        "alt": "P97"
    },
    # P99 area: In-Text 4 Q1(b)
    {
        "fragment": "1 + 0.001 + 0.000001 = 1.001001",
        "p_idx": 100, # Formula image
        "alt": "P100"
    },
    # P105 area: In-Text 4 Q2
    {
        "fragment": "water filter of resistance 500 &Omega;",
        "p_idx": 106, # Image?
        "alt": "P106"
    },
    # P109 area: In-Text 4 Q2 solution
    {
        "fragment": "7.04 A",
        "p_idx": 110, # Calculation
        "alt": "P110"
    },
    # P143 area: In-Text 4 Q4 (a)
    {
        "fragment": "To get 4 &Omega;",
        "p_idx": 144, # Diagram 1
        "alt": "P144"
    },
    {
        "fragment": "Total resistance = 2 &Omega; + 2 &Omega; = 4 &Omega;.",
        "p_idx": 145, # Calculation 1
        "alt": "P145"
    },
    {
         "fragment": "Total resistance = 2 &Omega; + 2 &Omega; = 4 &Omega;.",
         "p_idx": 148, # Calculation 2 (wait, P148 is actually for (a) too?)
         "alt": "P148"
    },
    # P153 area: In-Text 4 Q4 (b)
    {
        "fragment": "To get 1 &Omega;",
        "p_idx": 154, # Diagram (b)
        "alt": "P154"
    },
    {
        "fragment": "So, R_eq = 1 &Omega;.",
        "p_idx": 156, # Calculation (b)
        "alt": "P156"
    },
    # P309 area: Ohm's Law solution
    {
        "fragment": "Now, using Ohm’s law,",
        "p_idx": 310,
        "alt": "P310"
    },
    # P376 area: Bulb solution
    {
        "fragment": "drawn by the bulb of rating 60 W",
        "p_idx": 377,
        "alt": "P377"
    }
]

# I'll create a more comprehensive list if needed.
# For now, let's try these to see how it works.
