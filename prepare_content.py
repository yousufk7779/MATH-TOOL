import json

def format_text(text):
    if not text: return ""
    # Simplify common patterns
    text = text.replace('Ω', '&Omega;')
    text = text.replace('ρ', '&rho;')
    text = text.replace('×', '&times;')
    text = text.replace('–', '&ndash;')
    # Superscripts
    import re
    text = re.sub(r'10\^(\d+)', r'10<sup>\1</sup>', text)
    text = re.sub(r'10\-\s*(\d+)', r'10<sup>-\1</sup>', text) # Handle 10-8
    text = re.sub(r'10\s*–\s*(\d+)', r'10<sup>-\1</sup>', text) # Handle 10–8
    text = re.sub(r'I2', r'I<sup>2</sup>', text) # Power formula
    text = re.sub(r'V2', r'V<sup>2</sup>', text) # Power formula
    text = re.sub(r'R2', r'R<sup>2</sup>', text) # Option B in Exercise Q2
    
    # Justification
    return f'<div style="text-align: justify;">{text}</div>'

def create_question(id, num, q, sol):
    formatted_sol = []
    for i, s in enumerate(sol):
        if i == 0:
            if not s.startswith("Answer:"):
                s = "Answer: " + s
        formatted_sol.append(format_text(s))
    return {
        "id": id,
        "number": str(num),
        "question": format_text(q),
        "solution": formatted_sol,
        "answer": sol[0] if sol else ""
    }

exercises = []

# In-Text-1
it1 = {
    "id": "sp3-it-1",
    "name": "In-Text-1",
    "questions": [
        create_question("sp3-it-1-1", 1, "Name a device that helps to maintain a potential difference across a conductor.", 
                        ["Battery consisting of one or more electric cells is one of the devices that help to maintain a potential difference across a conductor."]),
        create_question("sp3-it-1-2", 2, "What is meant by saying that the potential difference between two points is 1 V?", 
                        ["When 1 J of work is done to move a charge of 1 C from one point to another, it is said that the potential difference between two points is 1 V."]),
        create_question("sp3-it-1-3", 3, "How much energy is given to each coulomb of charge passing through a 6 V battery?", 
                        ["We know that the potential difference between two points is given by the equation, V = W/Q, where,", "W is the work done in moving the charge from one point to another", "Q is the charge", "From the above equation, we can find the energy given to each coulomb as follows: W = V × Q", "Substituting the values in the equation, we get W = 6V × 1C = 6 J", "Hence, 6 J of energy is given to each coulomb of charge passing through a 6 V of battery."])
    ]
}
exercises.append(it1)

# In-Text-2
it2 = {
    "id": "sp3-it-2",
    "name": "In-Text-2",
    "questions": [
        create_question("sp3-it-2-1", 1, "On what factors does the resistance of a conductor depend?", 
                        ["The resistance of the conductor depends on the following factors:", "1. Temperature of the conductor", "2. Cross-sectional area of the conductor", "3. Length of the conductor", "4. Nature of the material of the conductor"]),
        create_question("sp3-it-2-2", 2, "Will current flow more easily through a thick wire or a thin wire of the same material, when connected to the same source? Why?", 
                        ["Resistance is given by the equation, R = &rho; l/A where, &rho; is the resistivity of the material of the wire, l is the length of the wire and A is the area of the cross-section of the wire.", "From the equation, it is evident that the area of the cross-section of wire is inversely proportional to the resistance. Therefore, thinner the wire, more the resistance and vice versa. Hence, current flows more easily through a thick wire than a thin wire."]),
        create_question("sp3-it-2-3", 3, "Let the resistance of an electrical component remain constant while the potential difference across the two ends of the component decreases to half of its former value. What change will occur in the current through it?", 
                        ["The change in the current flowing through the electrical component can be determined by Ohm’s Law. According to Ohm’s Law, the current is given by I = V/R.", "Now, the potential difference is reduced to half keeping the resistance constant. Let the new voltage be V’ = V/2. Let the new resistance be R’ = R and the new amount of current be I’.", "The change in the current can be determined using Ohm’s law as follows: I' = V'/R' = (V/2)/R = 1/2 (V/R) = I/2. Therefore, the current flowing the electrical component is reduced by half."]),
        create_question("sp3-it-2-4", 4, "Why are coils of electric toasters and electric irons made of an alloy rather than a pure metal?", 
                        ["The melting point of an alloy is much higher than a pure metal because of its high resistivity. At high temperatures, alloys do not melt readily. Therefore, alloys are used in heating appliances such as electric toasters and electric irons."]),
        create_question("sp3-it-2-5", 5, "Use the data in Table 12.2 and answer the following questions: (a) Which among iron and mercury is a better conductor? (b) Which material is the best conductor?", 
                        ["(a) Iron is a better conductor than mercury because the resistivity of mercury is more than the resistivity of iron (Resistivity of iron = 10.0 &times; 10&ndash;8 &Omega; m; Resistivity of mercury = 94.0 &times; 10&ndash;8 &Omega; m).", "(b) Among all the materials listed in the table, silver is the best conductor because the resistivity of silver is lowest among all, i.e., 1.60 &times; 10<sup>-8</sup> &Omega; m."])
    ]
}
exercises.append(it2)

# In-Text-3
it3 = {
    "id": "sp3-it-3",
    "name": "In-Text-3",
    "questions": [
        create_question("sp3-it-3-1", 1, "Draw a schematic diagram of a circuit consisting of a battery of three cells of 2 V each, a 5 &Omega; resistor, an 8 &Omega; resistor, and a 12 &Omega; resistor, and a plug key, all connected in series.", 
                        ["A battery of three cells of 2 V each equals to battery of potential 6 V. The circuit diagram below shows three resistors of resistance 12 &Omega;, 8 &Omega; and 5 &Omega; connected in series along with a battery of potential 6 V."]),
        create_question("sp3-it-3-2", 2, "Redraw the circuit of Question 1, putting in an ammeter to measure the current through the resistors and a voltmeter to measure the potential difference across the 12 &Omega; resistor. What would be the readings in the ammeter and the voltmeter?", 
                        ["An ammeter should always be connected in series with resistors while the voltmeter should be connected in parallel to the resistor to measure the potential difference.", "Using Ohm’s Law, we can obtain the reading of the ammeter and the voltmeter. The total resistance of the circuit is 5 &Omega; + 8 &Omega; + 12 &Omega; = 25 &Omega;.", "We know that the potential difference of the circuit is 6 V, hence the current flowing through the circuit can be calculated as follows: I = V/R = 6/25 = 0.24 A.", "Let the potential difference across the 12 &Omega; resistor be V1. V1 can be calculated as follows: V1 = I &times; R_12 = 0.24A &times; 12 &Omega; = 2.88 V.", "Therefore, the ammeter reading will be 0.24 A and the voltmeter reading be 2.88 V."])
    ]
}
exercises.append(it3)

# In-Text-4
it4 = {
    "id": "sp3-it-4",
    "name": "In-Text-4",
    "questions": [
        create_question("sp3-it-4-1", 1, "Judge the equivalent resistance when the following are connected in parallel – (a) 1 &Omega; and 10<sup>6</sup> &Omega;, (b) 1 &Omega;, 10<sup>3</sup> &Omega;, and 10<sup>6</sup> &Omega;.", 
                        ["(a) When 1 &Omega; and 10<sup>6</sup> &Omega; are connected in parallel, the equivalent resistance R_eq is given by 1/R_eq = 1/1 + 1/10<sup>6</sup>. Since 1/10<sup>6</sup> is very small, 1/R_eq &ap; 1, so R_eq &ap; 1 &Omega;.", "(b) When 1 &Omega;, 10<sup>3</sup> &Omega;, and 10<sup>6</sup> &Omega; are connected in parallel, 1/R_eq = 1/1 + 1/10<sup>3</sup> + 1/10<sup>6</sup> = 1 + 0.001 + 0.000001 = 1.001001. Therefore, R_eq = 1/1.001001 = 0.999 &Omega;."]),
        create_question("sp3-it-4-2", 2, "An electric lamp of 100 &Omega;, a toaster of resistance 50 &Omega;, and a water filter of resistance 500 &Omega; are connected in parallel to a 220 V source. What is the resistance of an electric iron connected to the same source that takes as much current as all three appliances, and what is the current through it?", 
                        ["The equivalent resistance R_eq of the resistors in parallel is 1/R_eq = 1/100 + 1/50 + 1/500 = (5+10+1)/500 = 16/500. So, R_eq = 500/16 = 31.25 &Omega;.", "The current through all three appliances is I = V/R_eq = 220 / 31.25 = 7.04 A.", "Since the electric iron takes as much current as all three, its resistance must be equal to their equivalent resistance, i.e., 31.25 &Omega;, and the current through it is 7.04 A."]),
        create_question("sp3-it-4-3", 3, "What are the advantages of connecting electrical devices in parallel with the battery instead of connecting them in series?", 
                        ["When the electrical devices are connected in parallel, there is no division of voltage among the appliances. The potential difference across the devices is equal to the supply voltage. If one component fails, the others continue to work. Parallel connection also reduces the effective resistance of the circuit."]),
        create_question("sp3-it-4-4", 4, "How can three resistors of resistances 2 &Omega;, 3 &Omega;, and 6 &Omega; be connected to give a total resistance of (a) 4 &Omega;, (b) 1 &Omega;?", 
                        ["(a) To get 4 &Omega;, connect 3 &Omega; and 6 &Omega; resistors in parallel and this combination in series with 2 &Omega; resistor. Equivalent resistance of 3 &Omega; and 6 &Omega; in parallel is (3&times;6)/(3+6) = 18/9 = 2 &Omega;. Total resistance = 2 &Omega; + 2 &Omega; = 4 &Omega;.", "(b) To get 1 &Omega;, connect all three resistors in parallel. 1/R_eq = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1 &Omega;. So, R_eq = 1 &Omega;."]),
        create_question("sp3-it-4-5", 5, "What is (a) the highest, (b) the lowest total resistance that can be secured by combinations of four coils of resistance 4 &Omega;, 8 &Omega;, 12 &Omega;, 24 &Omega;?", 
                        ["(a) The highest resistance is obtained by connecting them in series: R = 4 + 8 + 12 + 24 = 48 &Omega;.", "(b) The lowest resistance is obtained by connecting them in parallel: 1/R = 1/4 + 1/8 + 1/12 + 1/24 = (6+3+2+1)/24 = 12/24 = 1/2. So, lowest resistance = 2 &Omega;."])
    ]
}
exercises.append(it4)

# In-Text-5
it5 = {
    "id": "sp3-it-5",
    "name": "In-Text-5",
    "questions": [
        create_question("sp3-it-5-1", 1, "Why does the cord of an electric heater not glow while the heating element does?", 
                        ["The heating element of an electric heater is made of an alloy which has a high resistance. When current flows, it generates a large amount of heat and glows red. The cord is usually made of copper or aluminum which has very low resistance, so it does not heat up much and does not glow."]),
        create_question("sp3-it-5-2", 2, "Compute the heat generated while transferring 96000 coulomb of charge in one hour through a potential difference of 50 V.", 
                        ["The heat generated can be computed by the formula H = V &times; Q. Given Q = 96000 C and V = 50 V.", "H = 50 V &times; 96000 C = 4.8 &times; 10<sup>6</sup> J."]),
        create_question("sp3-it-5-3", 3, "An electric iron of resistance 20 &Omega; takes a current of 5 A. Calculate the heat developed in 30 s.", 
                        ["Heat developed is given by Joule's law of heating: H = I<sup>2</sup> R t. Given I = 5 A, R = 20 &Omega;, and t = 30 s.", "H = (5)<sup>2</sup> &times; 20 &times; 30 = 25 &times; 600 = 15000 J = 1.5 &times; 10<sup>4</sup> J."])
    ]
}
exercises.append(it5)

# In-Text-6
it6 = {
    "id": "sp3-it-6",
    "name": "In-Text-6",
    "questions": [
        create_question("sp3-it-6-1", 1, "What determines the rate at which energy is delivered by a current?", 
                        ["The rate at which energy is delivered by a current is determined by the power of the appliance."]),
        create_question("sp3-it-6-2", 2, "An electric motor takes 5 A from a 220 V line. Determine the power of the motor and the energy consumed in 2 h.", 
                        ["Power P = V &times; I = 220 V &times; 5 A = 1100 W.", "Energy consumed E = P &times; t. Time t = 2 h = 2 &times; 3600 s = 7200 s.", "E = 1100 W &times; 7200 s = 7.92 &times; 10<sup>6</sup> J."])
    ]
}
exercises.append(it6)

# Exercise
exe = {
    "id": "sp3-ex",
    "name": "Exercise",
    "questions": [
        create_question("sp3-ex-1", 1, "A piece of wire of resistance R is cut into five equal parts. These parts are then connected in parallel. If the equivalent resistance of this combination is R′, then the ratio R/R′ is — (a) 1/25 (b) 1/5 (c) 5 (d) 25", 
                        ["Answer: (d) 25", "Explanation: The resistance of each part is R/5. When connected in parallel, 1/R' = 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) = 5/R + 5/R + 5/R + 5/R + 5/R = 25/R. Therefore, R/R' = 25."]),
        create_question("sp3-ex-2", 2, "Which of the following does not represent electrical power in a circuit? (a) I<sup>2</sup>R (b) IR<sup>2</sup> (c) VI (d) V<sup>2</sup>/R", 
                        ["Answer: (b) IR<sup>2</sup>", "Explanation: Power P = VI. From Ohm's law, V = IR, so P = I<sup>2</sup>R. Also I = V/R, so P = V<sup>2</sup>/R. Thus, IR<sup>2</sup> is incorrect."]),
        create_question("sp3-ex-3", 3, "An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, the power consumed will be — (a) 100 W (b) 75 W (c) 50 W (d) 25 W", 
                        ["Answer: (d) 25 W", "Explanation: Resistance R = V<sup>2</sup>/P = (220)<sup>2</sup>/100 = 484 &Omega;. Power at 110 V = V'<sup>2</sup>/R = (110)<sup>2</sup>/484 = 12100/484 = 25 W."]),
        create_question("sp3-ex-4", 4, "Two conducting wires of the same material and of equal lengths and equal diameters are first connected in series and then parallel in a circuit across the same potential difference. The ratio of heat produced in series and parallel combinations would be — (a) 1:2 (b) 2:1 (c) 1:4 (d) 4:1", 
                        ["Answer: (c) 1:4", "Explanation: Let resistance of each be r. In series, R_s = 2r, so H_s = V<sup>2</sup>/2r. In parallel, R_p = r/2, so H_p = V<sup>2</sup>/(r/2) = 2V<sup>2</sup>/r. Ratio H_s/H_p = (V<sup>2</sup>/2r) / (2V<sup>2</sup>/r) = 1/4."]),
        create_question("sp3-ex-5", 5, "How is a voltmeter connected in the circuit to measure the potential difference between two points?", 
                        ["To measure the potential difference between any two points, the voltmeter should be connected in parallel between those two points."]),
        create_question("sp3-ex-6", 6, "A copper wire has diameter 0.5 mm and resistivity of 1.6 &times; 10&ndash;8 &Omega; m. What will be the length of this wire to make its resistance 10 &Omega;? How much does the resistance change if the diameter is doubled?", 
                        ["Area A = &pi; (d/2)<sup>2</sup> = &pi; (0.0005/2)<sup>2</sup> = 1.9635 &times; 10<sup>-7</sup> m<sup>2</sup>. Length l = RA/&rho; = 10 &times; 1.9635 &times; 10<sup>-7</sup> / 1.6 &times; 10<sup>-8</sup> = 122.72 m.", "If diameter is doubled, area becomes 4 times, so resistance becomes 1/4th. New resistance = 10/4 = 2.5 &Omega;. Change = 10 - 2.5 = 7.5 &Omega;."]),
        create_question("sp3-ex-7", 7, "The values of current I flowing in a given resistor for the corresponding values of potential difference V across the resistor are given below — I (Ampere): 0.5, 1.0, 2.0, 3.0, 4.0; V (Volts): 1.6, 3.4, 6.7, 10.2, 13.2. Plot a graph between V and I and calculate the resistance of that resistor.", 
                        ["Plotting the values on a graph with V on x-axis and I on y-axis gives a straight line. The resistance R = V/I. Taking an average or slope: e.g., R = 13.2 / 4.0 = 3.3 &Omega; or R = (10.2-6.7)/(3-2) = 3.5 &Omega;. The average resistance is approx 3.4 &Omega;."]),
        create_question("sp3-ex-8", 8, "When a 12 V battery is connected across an unknown resistor, there is a current of 2.5 mA in the circuit. Find the value of the resistance of the resistor.", 
                        ["R = V/I = 12 V / (2.5 &times; 10<sup>-3</sup> A) = 4800 &Omega; = 4.8 k&Omega;."]),
        create_question("sp3-ex-9", 9, "A battery of 9 V is connected in series with resistors of 0.2 &Omega;, 0.3 &Omega;, 0.4 &Omega;, 0.5 &Omega; and 12 &Omega;, respectively. How much current would flow through the 12 &Omega; resistor?", 
                        ["Total resistance R = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 &Omega;. In series, current is same everywhere. I = V/R = 9 / 13.4 = 0.67 A. Current through 12 &Omega; resistor is 0.67 A."]),
        create_question("sp3-ex-10", 10, "How many 176 &Omega; resistors (in parallel) are required to carry 5 A on a 220 V line?", 
                        ["For 5 A at 220 V, effective resistance R_eq = V/I = 220/5 = 44 &Omega;. Let n be current number of resistors. 1/44 = n/176. n = 176/44 = 4 resistors."]),
        create_question("sp3-ex-11", 11, "Show how you would connect three resistors, each of resistance 6 &Omega;, so that the combination has a resistance of (i) 9 &Omega;, (ii) 4 &Omega;.", 
                        ["(i) To get 9 &Omega;, connect two 6 &Omega; resistors in parallel and the third in series with them: (6&times;6)/(6+6) + 6 = 3 + 6 = 9 &Omega;.", "(ii) To get 4 &Omega;, connect two 6 &Omega; resistors in series and the third in parallel with them: (12 &times; 6)/(12 + 6) = 72/18 = 4 &Omega;."]),
        create_question("sp3-ex-12", 12, "Several electric bulbs designed to be used on a 220 V electric supply line, are rated 10 W. How many lamps can be connected in parallel with each other across the two wires of 220 V line if the maximum allowable current is 5 A?", 
                        ["Total allowed power P = V &times; I = 220 V &times; 5 A = 1100 W. Each bulb is 10 W. Number of bulbs = 1100 / 10 = 110 bulbs."]),
        create_question("sp3-ex-13", 13, "A hot plate of an electric oven connected to a 220 V line has two resistance coils A and B, each of 24 &Omega; resistance, which may be used separately, in series, or in parallel. What are the currents in the three cases?", 
                        ["(i) Separately: I = V/R = 220/24 = 9.17 A.", "(ii) Series: R_s = 48 &Omega;, I = 220/48 = 4.58 A.", "(iii) Parallel: R_p = 12 &Omega;, I = 220/12 = 18.33 A."]),
        create_question("sp3-ex-14", 14, "Compare the power used in the 2 &Omega; resistor in each of the following circuits: (i) a 6 V battery in series with 1 &Omega; and 2 &Omega; resistors, and (ii) a 4 V battery in parallel with 12 &Omega; and 2 &Omega; resistors.", 
                        ["(i) In series, R = 3 &Omega;, I = 6/3 = 2 A. Power in 2 &Omega; = I<sup>2</sup>R = (2)<sup>2</sup> &times; 2 = 8 W.", "(ii) In parallel, voltage across 2 &Omega; is 4 V. Power in 2 &Omega; = V<sup>2</sup>/R = (4)<sup>2</sup>/2 = 16/2 = 8 W. Both use same power."]),
        create_question("sp3-ex-15", 15, "Two lamps, one rated 100 W at 220 V, and the other 60 W at 220 V, are connected in parallel to electric mains supply. What current is drawn from the line if the supply voltage is 220 V?", 
                        ["Current through 100 W lamp I1 = 100/220 = 0.45 A. Current through 60 W lamp I2 = 60/220 = 0.27 A. Total current = 0.45 + 0.27 = 0.72 A approx (more precisely 160/220 &ap; 0.73 A)."]),
        create_question("sp3-ex-16", 16, "Which uses more energy, a 250 W TV set in 1 hr, or a 1200 W toaster in 10 minutes?", 
                        ["Energy = P &times; t. For TV: E = 250 W &times; 3600 s = 9 &times; 10<sup>5</sup> J. For toaster: E = 1200 W &times; 600 s = 7.2 &times; 10<sup>5</sup> J. TV uses more energy."]),
        create_question("sp3-ex-17", 17, "An electric heater of resistance 8 &Omega; draws 15 A from the service mains 2 hours. Calculate the rate at which heat is developed in the heater.", 
                        ["Rate of heat development is Power P = I<sup>2</sup>R = (15)<sup>2</sup> &times; 8 = 225 &times; 8 = 1800 W (or J/s)."]),
        create_question("sp3-ex-18", 18, "Explain the following: (a) Why is the tungsten used almost exclusively for filament of electric lamps? (b) Why are the conductors of electric heating devices, such as bread-toasters and electric irons, made of an alloy rather than a pure metal? (c) Why is the series arrangement not used for domestic circuits? (d) How does the resistance of a wire vary with its area of cross-section? (e) Why copper and aluminium wires are usually employed for electricity transmission?", 
                        ["(a) Tungsten has a very high melting point and high resistivity, preventing it from melting or burning easily at the high temperatures needed to produce light.", "(b) Alloys have higher resistivity than pure metals and do not oxidize (burn) easily at high temperatures.", "(c) In series, if one device fails, the whole circuit breaks. Also, devices would not get the full voltage and cannot be operated independently.", "(d) Resistance is inversely proportional to the area of cross-section (R &prop; 1/A).", "(e) They are good conductors with low resistivity, minimizing energy loss as heat during transmission."])
    ]
}
exercises.append(exe)

with open('exercises_content.json', 'w', encoding='utf-8') as f:
    json.dump(exercises, f, indent=4)
print('Done')
