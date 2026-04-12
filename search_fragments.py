
import json
import sys

# Set encoding
if sys.stdout.encoding != 'utf-8':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

targets = [
    ("P50", "constant while the potential difference across the two ends"),
    ("P59", "Use the data in the table given below"),
    ("P80", "measure the potential difference. As shown in the figure below."),
    ("P96", "1 / 106. Since 1 / 106 is very small"),
    ("P99", "1 + 0.001 + 0.000001 = 1.001001"),
    ("P105", "water filter"),
    ("P109", "31.25"),
    ("P143", "To get 4"),
    ("P144", "understood that 3"),
    ("P147", "resistor 2"),
    ("P153", "To get 1"),
    ("P155", "resistors are connected in parallel"),
    ("P163", "equivalent resistance connected in parallel is"),
    ("P181", "amount of current can be calculated as follows"),
    ("P220", "connected to each other in parallel"),
    ("P267", "ratio of the heat produced in the circuit is given"),
    ("P281", "area of cross-section m2 is given by the formula"),
    ("P287", "potential difference V across the resistor are given below"),
    ("P292", "different values of current for different value"),
    ("P301", "using Ohm’s Law as follows"),
    ("P309", "Now, using Ohm’s law,"),
    ("P315", "The equivalent resistance of the parallel combination"),
    ("P321", "connect all the three resistors in series"),
    ("P326", "Case (i)"),
    ("P327", "If two resistors are connected in parallel"),
    ("P331", "Case (ii)"),
    ("P334", "parallel with 12"),
    ("P341", "Substituting the values, we get"),
    ("P349", "current flowing through each coil as follows"),
    ("P355", "current flowing through the series circuit is calculated as follows"),
    ("P359", "coils are connected in parallel"),
    ("P364", "1 Ohm + 2 Ohm = 3 Ohm"),
    ("P367", "calculate the power consumed by"),
    ("P376", "drawn by the bulb of rating 60 W"),
]

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

final_results = []

for pid, fragment in targets:
    found = False
    for i, p in enumerate(results):
        if fragment.lower() in p['text'].lower():
            res = {
                "pid": pid,
                "fragment": fragment,
                "p_idx": p['p_idx'],
                "text": p['text'],
                "images": []
            }
            # Check p and next 10 p for images
            # Use a slightly larger range to find images that might be a few paragraphs down the solution
            for j in range(i, min(i+11, len(results))):
                if results[j]['images']:
                    for img in results[j]['images']:
                        res["images"].append(img)
            
            final_results.append(res)
            found = True
            break
    if not found:
        final_results.append({"pid": pid, "fragment": fragment, "status": "NOT FOUND"})

with open("search_results.json", "w", encoding="utf-8") as f:
    json.dump(final_results, f, indent=2)

print(f"Processed {len(final_results)} targets. Saved to search_results.json")
