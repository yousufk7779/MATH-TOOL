import { ChapterContent } from "../types";

export const sciPhy4: ChapterContent = {
  id: "sci-phy-4",
  number: 4,
  title: "Magnetic Effects of Electric Current",
  introduction:
    "In the previous chapter, we learned that electricity can cause heating. In this chapter, we explore a fascinating connection: electricity can also act like a magnet! When current flows through a wire, it creates a magnetic field around it.",
  definitions: [
    {
      term: "Magnetic Field",
      description:
        "The space around a magnet where its force (pull or push) can be felt.",
    },
    {
      term: "Magnetic Field Lines",
      description:
        "Imaginary lines that show the direction and strength of the magnetic force. They always emerge from the North Pole and merge at the South Pole.",
    },
    {
      term: "Electromagnet",
      description:
        "A temporary strong magnet made by wrapping a coil of wire around a soft iron core and passing electric current through it.",
    },
    {
      term: "Solenoid",
      description:
        "A coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.",
    },
    {
      term: "Electric Motor",
      description:
        "A magical machine that converts electrical energy into mechanical energy (movement). Used in fans, mixers, and cars.",
    },
    {
      term: "Electromagnetic Induction",
      description:
        "The process of generating electricity by moving a magnet near a wire, or a wire near a magnet.",
    },
    {
      term: "Electric Generator",
      description:
        "A machine that converts mechanical energy into electrical energy based on the principle of electromagnetic induction.",
    },
  ],
  keyPoints: [
    "A compass needle gets deflected if you bring it near a wire that has current flowing through it. This proves electricity creates magnetism.",
    "Magnetic field lines never intersect (cross) each other.",
    "The magnetic field created by a straight wire is in the form of concentric circles around it (Right-Hand Thumb Rule).",
    "Fleming's Left-Hand Rule helps to find the direction of force acting on a moving charge (used in electric motors).",
    "Fleming's Right-Hand Rule helps to find the direction of induced current (used in electric generators).",
    "In our homes, we receive Alternating Current (AC) which reverses its direction periodically. A battery gives Direct Current (DC) which flows in one direction only.",
  ],
  formulas: [],
  crux: [
    "Electricity can create a magnet.",
    "A moving magnet can create electricity.",
    "Motors run on electricity to spin things.",
    "Generators spin to make electricity.",
  ],
  mcqs: [
    {
      id: "sp4-mcq-1",
      question:
        "What is the direction of magnetic field lines outside a bar magnet?",
      options: [
        "(a) South pole to North pole",
        "(b) North pole to South pole",
        "(c) East to West",
        "(d) West to East",
      ],
      correctAnswer: "b",
    },
    {
      id: "sp4-mcq-2",
      question:
        "Which of the following determines the direction of the magnetic field produced by a straight current-carrying wire?",
      options: [
        "(a) Fleming's Left-Hand Rule",
        "(b) Fleming's Right-Hand Rule",
        "(c) Right-Hand Thumb Rule",
        "(d) Ohm's Law",
      ],
      correctAnswer: "c",
    },
    {
      id: "sp4-mcq-3",
      question: "An electric motor converts:",
      options: [
        "(a) Mechanical energy into electrical energy",
        "(b) Electrical energy into mechanical energy",
        "(c) Heat energy into electrical energy",
        "(d) Chemical energy into mechanical energy",
      ],
      correctAnswer: "b",
    },
    {
      id: "sp4-mcq-4",
      question:
        "The phenomenon of electromagnetic induction involves generating an electric current by:",
      options: [
        "(a) Heating a wire",
        "(b) Moving a magnet inside a coil",
        "(c) Connecting a battery to a wire",
        "(d) Friction between two objects",
      ],
      correctAnswer: "b",
    },
    {
      id: "sp4-mcq-5",
      question:
        "Which of the following safety devices breaks the circuit when there is a short circuit or overloading?",
      options: [
        "(a) Switch",
        "(b) Ammeter",
        "(c) Electric Fuse",
        "(d) Voltmeter",
      ],
      correctAnswer: "c",
    },
    {
      id: "sp4-mcq-6",
      question:
        "Which of the following properties of a proton can change while it moves freely in a magnetic field?",
      options: ["(a) Mass", "(b) Speed", "(c) Velocity", "(d) Momentum"],
      correctAnswer: "c",
    },
    {
      id: "sp4-mcq-7",
      question:
        "The shape of the magnetic field lines produced by a current-carrying circular loop at its centre is:",
      options: [
        "(a) Circular",
        "(b) Straight lines",
        "(c) Elliptical",
        "(d) Concentric circles",
      ],
      correctAnswer: "b",
    },
    {
      id: "sp4-mcq-8",
      question:
        "Which of the following correctly describes the magnetic field near a long straight wire?",
      options: [
        "(a) The field consists of straight lines perpendicular to the wire",
        "(b) The field consists of straight lines parallel to the wire",
        "(c) The field consists of radial lines originating from the wire",
        "(d) The field consists of concentric circles centred on the wire",
      ],
      correctAnswer: "d",
    },
    {
      id: "sp4-mcq-9",
      question:
        "A device that can detect the presence of a current in a circuit is:",
      options: [
        "(a) Voltmeter",
        "(b) Ammeter",
        "(c) Galvanometer",
        "(d) Rheostat",
      ],
      correctAnswer: "c",
    },
    {
      id: "sp4-mcq-10",
      question:
        "A soft iron bar is introduced inside a current-carrying solenoid. The magnetic field inside the solenoid:",
      options: [
        "(a) Will decrease",
        "(b) Will increase",
        "(c) Will become zero",
        "(d) Will remain unaffected",
      ],
      correctAnswer: "b",
    },
  ],
  summary: [
    "A magnetic field exists around a wire carrying current.",
    "Electromagnets are stronger than normal magnets and can be turned on/off using electricity.",
    "Electric motors use the force acting on a current-carrying wire in a magnetic field to create motion.",
    "Electromagnetic induction is the creation of current by changing a magnetic field near a coil.",
    "Safety features like earthing, fuses, and MCBs protect our houses from electrical fires.",
  ],
  exercises: [
    {
      id: "exercise",
      name: "Exercise Questions",
      questions: [
        {
          id: "sp4-ex-q1",
          number: "1",
          question: "<div style=\"text-align: justify;\">Which of the following correctly describes the magnetic field near a long straight wire?<br>(a) The field consists of straight lines perpendicular to the wire.<br>(b) The field consists of straight lines parallel to the wire.<br>(c) The field consists of radial lines originating from the wire.<br>(d) The field consists of concentric circles centred on the wire.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(d) The field consists of concentric circles centred on the wire</b>. The direction of these magnetic field lines can be determined using the Right-Hand Thumb Rule.</div>",
          ],
          answer: "(d) The field consists of concentric circles centred on the wire.",
        },
        {
          id: "sp4-ex-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">The phenomenon of electromagnetic induction is:<br>(a) the process of charging a body.<br>(b) the process of generating magnetic field due to a current passing through a coil.<br>(c) producing induced current in a coil due to relative motion between a magnet and the coil.<br>(d) the process of rotating a coil of an electric motor.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(c) producing induced current in a coil due to relative motion between a magnet and the coil</b>. This discovery was made by Michael Faraday in 1831.</div>",
          ],
          answer: "(c) producing induced current in a coil due to relative motion between a magnet and the coil.",
        },
        {
          id: "sp4-ex-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">The device used for producing electric current is called a:<br>(a) generator.<br>(b) galvanometer.<br>(c) ammeter.<br>(d) motor.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(a) generator</b>. It converts mechanical energy into electrical energy based on the principle of electromagnetic induction.</div>",
          ],
          answer: "(a) generator.",
        },
        {
          id: "sp4-ex-q4",
          number: "4",
          question: "<div style=\"text-align: justify;\">The essential difference between an AC generator and a DC generator is that:<br>(a) AC generator has an electromagnet while a DC generator has permanent magnet.<br>(b) DC generator will generate a higher voltage.<br>(c) AC generator will generate a higher voltage.<br>(d) AC generator has slip rings while the DC generator has a commutator.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(d) AC generator has slip rings while the DC generator has a commutator</b>. Slip rings allow the current to change direction (AC), while the commutator ensures the current flows in only one direction (DC).</div>",
          ],
          answer: "(d) AC generator has slip rings while the DC generator has a commutator.",
        },
        {
          id: "sp4-ex-q5",
          number: "5",
          question: "<div style=\"text-align: justify;\">At the time of short circuit, the current in the circuit:<br>(a) reduces substantially.<br>(b) does not change.<br>(c) increases heavily.<br>(d) vary continuously.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(c) increases heavily</b>. A short circuit occurs when the live wire and neutral wire come into direct contact, leading to a very low resistance path and an abrupt surge in current.</div>",
          ],
          answer: "(c) increases heavily.",
        },
        {
          id: "sp4-ex-q6",
          number: "6",
          question: "<div style=\"text-align: justify;\">State whether the following statements are true or false.<br>(a) An electric motor converts mechanical energy into electrical energy.<br>(b) An electric generator works on the principle of electromagnetic induction.<br>(c) The field at the centre of a long circular coil carrying current will be parallel straight lines.<br>(d) A wire with a green insulation is usually the live wire of an electric supply.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">(a) <b>False:</b> An electric motor converts electrical energy into mechanical energy.<br>(b) <b>True:</b> Generators work on Faraday's law of induction.<br>(c) <b>True:</b> At the center of a circular loop or solenoid, field lines are uniform and parallel.<br>(d) <b>False:</b> Green insulation is for the <b>Earth wire</b>; the live wire is usually Red or Brown.</div>",
          ],
          answer: "(a) False, (b) True, (c) True, (d) False.",
        },
        {
          id: "sp4-ex-q7",
          number: "7",
          question: "<div style=\"text-align: justify;\">List two methods of producing magnetic fields.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Two methods of producing magnetic fields are:<br>1. <b>Using Permanent Magnets:</b> By using natural or artificial bar magnets or horseshoe magnets.<br>2. <b>Electromagnetism:</b> By passing an electric current through a conductor (like a straight wire, circular loop, or solenoid).</div>",
          ],
          answer: "Using permanent magnets and passing electric current through a conductor.",
        },
        {
          id: "sp4-ex-q8",
          number: "8",
          question: "<div style=\"text-align: justify;\">How does a solenoid behave like a magnet? Can you determine the north and south poles of a currentâ€“carrying solenoid with the help of a bar magnet? Explain.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">A solenoid is a long coil containing a large number of close turns of insulated copper wire. When current passes through it, it produces a magnetic field similar to that of a bar magnet. One end acts as a North pole and the other as a South pole.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 280px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
            "<div style=\"text-align: justify;\"><b>Determining Poles:</b> We can use a bar magnet with known poles. If the North pole of the bar magnet is brought near one end of the solenoid and they <b>repel</b>, that end is the North pole. If they <b>attract</b>, that end is the South pole.</div>",
          ],
          answer: "A solenoid behaves like a bar magnet. Poles are determined by attraction/repulsion with a known bar magnet.",
        },
        {
          id: "sp4-ex-q9",
          number: "9",
          question: "<div style=\"text-align: justify;\">When is the force experienced by a currentâ€“carrying conductor placed in a magnetic field largest?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The force experienced by a current-carrying conductor is largest when the direction of current is <b>perpendicular (at 90Â°)</b> to the direction of the magnetic field.</div>",
          ],
          answer: "Largest force occurs when the conductor is perpendicular to the magnetic field.",
        },
        {
          id: "sp4-ex-q10",
          number: "10",
          question: "<div style=\"text-align: justify;\">Imagine that you are sitting in a chamber with your back to one wall. An electron beam, moving horizontally from back wall towards the front wall, is deflected by a strong magnetic field to your right side. What is the direction of magnetic field?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The direction of the magnetic field is <b>vertically upwards</b>.</div>",
            "<div style=\"text-align: justify;\"><b>Explanation:</b> According to Fleming's Left-Hand Rule:<br>1. The electron beam moves from back to front, so the <b>conventional current</b> (direction of middle finger) is from front to back.<br>2. The deflection (Force) is to the <b>right</b> (direction of thumb).<br>3. By orienting the hand, the forefinger (Magnetic Field) points <b>upwards</b>.</div>",
          ],
          answer: "The direction of the magnetic field is vertically upwards.",
        },
        {
          id: "sp4-ex-q11",
          number: "11",
          question: "<div style=\"text-align: justify;\">Draw a labelled diagram of an electric motor. Explain its principle and working. What is the function of a split ring in an electric motor?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 300px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
            "<div style=\"text-align: justify;\"><b>Principle:</b> An electric motor works on the principle that a current-carrying conductor placed in a magnetic field experiences a force (Motor Principle).</div>",
            "<div style=\"text-align: justify;\"><b>Working:</b> Current flows in coil ABCD. According to Fleming's Left-Hand Rule, force on arm AB is downwards and on CD is upwards, causing a rotation. After half a rotation, the commutator (split ring) reverses current direction, maintaining continuous rotation.</div>",
            "<div style=\"text-align: justify;\"><b>Function of Split Ring:</b> It acts as a <b>commutator</b> that reverses the direction of current in the coil after every half revolution, ensuring the motor rotates in one direction.</div>",
          ],
          answer: "Electric motor works on the principle of force on a current conductor in a field. Split rings reverse current to enable rotation.",
        },
        {
          id: "sp4-ex-q12",
          number: "12",
          question: "<div style=\"text-align: justify;\">Name some devices in which electric motors are used.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Electric motors are used in various domestic and industrial devices, such as:<br>1. <b>Electric Fans</b><br>2. <b>Washing Machines</b><br>3. <b>Water Pumps</b><br>4. <b>Mixers and Grinders</b><br>5. <b>Refrigerators</b><br>6. <b>Electric Drills</b></div>",
          ],
          answer: "Fans, washing machines, mixers, refrigerators, and water pumps.",
        },
        {
          id: "sp4-ex-q13",
          number: "13",
          question: "<div style=\"text-align: justify;\">A coil of insulated copper wire is connected to a galvanometer. What will happen if a bar magnet is (i) Pushed into the coil, (ii) Withdrawn from inside the coil, (iii) held stationary inside the coil?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">(i) <b>Pushed into the coil:</b> A momentary deflection is observed in the galvanometer, indicating that an electric current is induced in the coil.<br>(ii) <b>Withdrawn from inside the coil:</b> A momentary deflection is again observed, but in the opposite direction, indicating an induced current in the reverse direction.<br>(iii) <b>Held stationary inside the coil:</b> No deflection is observed in the galvanometer because there is no change in the magnetic field associated with the coil, so no current is induced.</div>",
          ],
          answer: "(i) Momentary deflection, (ii) Deflection in opposite direction, (iii) No deflection.",
        },
        {
          id: "sp4-ex-q14",
          number: "14",
          question: "<div style=\"text-align: justify;\">Two circular coils A and B are placed close to each other. If the current in the coil A is changed, will some current be induced in the coil B? Give reason.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Yes, a current will be induced in coil B. When the current in coil A changes, the <b>magnetic field lines</b> around it also change. Since coil B is close to A, these changing magnetic field lines link with coil B. This changing magnetic flux induces an electromotive force (EMF) in coil B, leading to an induced current. This phenomenon is known as <b>Electromagnetic Induction</b>.</div>",
          ],
          answer: "Yes, due to electromagnetic induction caused by the changing magnetic field of coil A.",
        },
        {
          id: "sp4-ex-q15",
          number: "15",
          question: "<div style=\"text-align: justify;\">State the rule to determine the direction of a (i) magnetic field produced around a straight conductor-carrying current, (ii) force experienced by a current-carrying straight conductor placed in a magnetic field which is perpendicular to it, and (iii) current induced in a coil due to its rotation in a magnetic field.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">(i) <b>Right-Hand Thumb Rule:</b> Imagine holding the current-carrying conductor in your right hand with the thumb pointing toward the current; then your fingers will wrap around the conductor in the direction of the magnetic field lines.<br>(ii) <b>Fleming's Left-Hand Rule:</b> Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular. If the forefinger points in the direction of the magnetic field and the middle finger in the direction of current, then the thumb points in the direction of motion or force.<br>(iii) <b>Fleming's Right-Hand Rule:</b> Stretch the thumb, forefinger, and middle finger of the right hand mutually perpendicular. If the forefinger points in the direction of the magnetic field and the thumb in the direction of motion, then the middle finger points in the direction of the induced current.</div>",
          ],
          answer: "(i) Right-Hand Thumb Rule, (ii) Fleming's Left-Hand Rule, (iii) Fleming's Right-Hand Rule.",
        },
        {
          id: "sp4-ex-q16",
          number: "16",
          question: "<div style=\"text-align: justify;\">Explain the underlying principle and working of an electric generator by drawing a labelled diagram. What is the function of brushes?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\"><b>Principle:</b> An electric generator works on the principle of <b>Electromagnetic Induction</b>. It converts mechanical energy into electrical energy.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 50%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);\"></div>",
            "<div style=\"text-align: justify;\"><b>Working:</b> When the armature coil (ABCD) is rotated in a strong magnetic field, the magnetic flux passing through it changes continuously. According to Faraday's law, an EMF is induced in the coil, which generates an electric current. In an AC generator, slip rings maintain contact with the brushes to allow the current to flow to the external circuit.<br><b>Function of Brushes:</b> Brushes are made of carbon or metal and remain in sliding contact with the rotating slip rings. Their primary function is to transfer the induced current from the rotating coil to the stationary external circuit.</div>",
          ],
          answer: "Principle: Electromagnetic Induction. Working: Rotating a coil in a magnetic field induces current. Brushes transfer the induced current to the external circuit.",
          shortBoardPattern: true,
        },
        {
          id: "sp4-ex-q17",
          number: "17",
          question: "<div style=\"text-align: justify;\">When does an electric short circuit occur?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">An electric short circuit occurs when the <b>live wire</b> and the <b>neutral wire</b> of a circuit come into direct contact with each other. This can happen due to worn-out insulation or a defect in an appliance. In this state, the resistance becomes extremely low, resulting in a sudden, huge flow of current, which can cause heat, sparks, and even fires.</div>",
          ],
          answer: "When live and neutral wires touch directly, leading to low resistance and a huge current surge.",
        },
        {
          id: "sp4-ex-q18",
          number: "18",
          question: "<div style=\"text-align: justify;\">What is the function of an earth wire? Why is it necessary to earth metallic appliances?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\"><b>Function:</b> The earth wire is a safety wire connected to the metal body of an appliance. It provides a low-resistance path for leakage current to flow deep into the ground.<br><b>Necessity:</b> It is necessary for metallic appliances (like iron, toaster, refrigerator) because if the live wire accidentally touches the metal body due to a fault, the earth wire safely carries the excess charge to the earth. This prevents the user from getting a severe electric shock and often blows the fuse to disconnect the faulty circuit.</div>",
          ],
          answer: "Safety: It drains leakage current to the ground, preventing electric shocks from faulty appliances.",
        },
      ],
    },
    {
      id: "in-text",
      name: "In-Text Questions",
      questions: [
        {
          id: "it-1-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 1</strong></div><div style=\"text-align: justify;\">Q1. Why does a compass needle get deflected when brought near a bar magnet?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> A compass needle is itself a tiny bar magnet, with a North pole and a South pole. When it is brought near a bar magnet, the magnetic field of the bar magnet exerts a force on the poles of the compass needle.</div>",
            "<div style=\"text-align: justify;\">The unlike poles attract each other and the like poles repel each other. Due to this force, the compass needle rotates and aligns itself along the direction of the magnetic field of the bar magnet. This is why the compass needle gets <b>deflected</b> when brought near a bar magnet.</div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Key Point:</b></span> The stronger the magnet or the closer the compass, the greater the deflection.</div>",
          ],
          answer: "A compass needle is a tiny bar magnet. When brought near a bar magnet, its poles experience attractive and repulsive forces due to the magnetic field of the bar magnet, causing it to deflect and align along the field lines.",
        },
        {
          id: "it-2-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 2</strong></div><div style=\"text-align: justify;\">Q1. Draw magnetic field lines around a bar magnet.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> Magnetic field lines around a bar magnet emerge from the <b>North pole</b>, loop around through the surrounding space, and re-enter at the <b>South pole</b>. Inside the magnet, they travel from South to North.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"max-width: 320px; width: 100%; height: auto;\" /></div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Note:</b></span> The field lines are closest (densest) near the poles where the magnetic field is strongest, and spread out farther away.</div>",
          ],
          answer: "Field lines emerge from N pole, loop around and enter S pole. Inside the magnet they go from S to N forming closed continuous loops.",
        },
        {
          id: "it-2-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">List the properties of magnetic field lines.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> The properties of magnetic field lines are:</div>",
            "<div style=\"text-align: justify;\"><b>1.</b> Magnetic field lines emerge from the <b>North pole</b> and merge into the <b>South pole</b> outside the magnet.</div>",
            "<div style=\"text-align: justify;\"><b>2.</b> Inside the magnet, field lines travel from <b>South pole to North pole</b>.</div>",
            "<div style=\"text-align: justify;\"><b>3.</b> Field lines are <b>closed continuous curves</b> â€” they form complete loops.</div>",
            "<div style=\"text-align: justify;\"><b>4.</b> Field lines are <b>closer together</b> (denser) near the poles where the field is strong, and farther apart where the field is weak.</div>",
            "<div style=\"text-align: justify;\"><b>5.</b> <b>No two field lines ever intersect</b> each other.</div>",
            "<div style=\"text-align: justify;\"><b>6.</b> Field lines have a definite <b>direction</b>, indicated by arrows pointing from N to S outside the magnet.</div>",
          ],
          answer: "Properties: emerge from N to S outside; S to N inside; closed continuous loops; denser near poles; never intersect; have a definite direction.",
        },
        {
          id: "it-2-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">Why don’t two magnetic field lines intersect each other?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> Two magnetic field lines never intersect each other because <b>at any given point in space, the magnetic field can have only one definite direction</b>.</div>",
            "<div style=\"text-align: justify;\">If two field lines were to intersect at a point, it would mean that the magnetic field at that point has <b>two different directions simultaneously</b> â€” which is physically impossible.</div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Key Rule:</b></span> One point â†’ One direction of magnetic field â†’ Therefore field lines never cross each other.</div>",
          ],
          answer: "Two field lines never intersect because at any point the magnetic field has only one direction. If they crossed, it would imply two directions at the same point, which is impossible.",
        },
        {
          id: "it-3-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 3</strong></div><div style=\"text-align: justify;\">Q1. Consider a circular loop of wire lying in the plane of the table. Let the current pass through the loop clockwise. Apply the right-hand rule to find out the direction of the magnetic field inside and outside the loop.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> According to the <b>Right-Hand Thumb Rule</b>, for a clockwise current in a circular loop:</div>",
            "<div style=\"text-align: justify;\"><b>1. Inside the loop:</b> The magnetic field lines point <b>downwards</b> (perpendicularly into the table).</div>",
            "<div style=\"text-align: justify;\"><b>2. Outside the loop:</b> The magnetic field lines point <b>upwards</b> (perpendicularly out of the table).</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"max-width: 320px; width: 100%; height: auto;\" /></div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Diagram:</b></span> The diagram above shows the magnetic field lines around a current-carrying loop. Note how the lines are circular near the wire and become straight and parallel at the center of the loop.</div>",
          ],
          answer: "Using the right-hand rule: Inside the loop, the field points downwards into the table. Outside the loop, the field points upwards out of the table.",
        },
        {
          id: "it-3-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">The magnetic field in a given region is uniform. Draw a diagram to represent it.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> A <b>uniform magnetic field</b> is defined as a field where the magnetic force and direction are the same at every point.</div>",
            "<div style=\"text-align: justify;\">It is represented by a set of <b>parallel, straight, and equally spaced</b> magnetic field lines pointing in the same direction.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"max-width: 250px; width: 100%; height: auto;\" /></div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Key Characteristic:</b></span> Parallel lines + Equal spacing = Constant magnitude and direction (Uniform Field).</div>",
          ],
          answer: "A uniform magnetic field is represented by parallel, straight, and equally spaced magnetic field lines pointing in the same direction.",
        },
        {
          id: "it-3-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">Choose the correct option. The magnetic field inside a long straight solenoid-carrying current<br>(a) is zero.<br>(b) decreases as we move towards its end.<br>(c) increases as we move towards its end.<br>(d) is the same at all points.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> The correct option is <b>(d) is the same at all points</b>.</div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Explanation:</b></span> Inside a long straight current-carrying solenoid, the magnetic field lines are <b>parallel and straight</b>.</div>",
            "<div style=\"text-align: justify;\">This indicates that the magnetic field is <b>uniform</b> throughout the interior of the solenoid, meaning its strength and direction are identical at every point within it.</div>",
          ],
          answer: "Correct: (d). The field lines are parallel and straight inside a solenoid, indicating a uniform magnetic field that is the same at all points.",
        },
        {
          id: "it-4-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 4</strong></div><div style=\"text-align: justify;\">Q1. Which of the following property of a proton can change while it moves freely in a magnetic field? (There may be more than one correct answer.)<br/>(a) mass<br/>(b) speed<br/>(c) velocity<br/>(d) momentum</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> (c) velocity and (d) momentum</div>",
            "<div style=\"text-align: justify;\">When a charged particle like a proton moves in a magnetic field, the magnetic force is always <b>perpendicular</b> to its motion. This results in a change in the <b>direction</b> of motion, meaning the <b>velocity</b> changes. Since momentum is the product of mass and velocity (p = mv), a change in velocity also causes a change in <b>momentum</b>. The speed and mass remain constant.</div>",
          ],
          answer: "(c) velocity and (d) momentum. The magnetic force changes the direction of the proton, thus changing its velocity and momentum, while speed and mass remain constant.",
        },
        {
          id: "it-4-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">In Activity 13.7, how do we think the displacement of rod AB will be affected if<br/>(i) current in rod AB is increased;<br/>(ii) a stronger horseshoe magnet is used; and<br/>(iii) length of the rod AB is increased?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> The displacement of rod AB is caused by the <b>magnetic force</b> acting on it. This force (F) depends on the current (I), the magnetic field strength (B), and the length of the rod (l).</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"max-width: 320px; width: 100%; height: auto;\" /></div>",
            "<div style=\"text-align: justify;\"><b>(i) Increased Current:</b> If the current in rod AB is increased, the magnetic force increases (F âˆ I), causing a <b>greater displacement</b>.</div>",
            "<div style=\"text-align: justify;\"><b>(ii) Stronger Magnet:</b> Using a stronger horseshoe magnet increases the magnetic field strength (B), leading to a <b>larger force</b> and more displacement (F âˆ B).</div>",
            "<div style=\"text-align: justify;\"><b>(iii) Increased Length:</b> Increasing the length of the rod AB increases the force acting on it (F âˆ l), thus <b>increasing the displacement</b>.</div>",
          ],
          answer: "In all three cases (increased current, stronger magnet, or increased length), the magnetic force acting on the rod increases, resulting in a greater displacement of the rod AB.",
        },
        {
          id: "it-4-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">A positively-charged particle (alpha-particle) projected towards west is deflected towards north by a magnetic field. The direction of magnetic field is<br/>(a) towards south<br/>(b) towards east<br/>(c) downward<br/>(d) upward</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> (d) upward</div>",
            "<div style=\"text-align: justify;\">According to <b>Fleming's Left-Hand Rule</b>, if we hold the forefinger, middle finger, and thumb of the left hand mutually perpendicular to each other:</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"max-width: 250px; width: 100%; height: auto;\" /></div>",
            "<div style=\"text-align: justify;\">1. The <b>middle finger</b> points in the direction of the <b>current</b> (West for a positive alpha-particle).</div>",
            "<div style=\"text-align: justify;\">2. The <b>thumb</b> points in the direction of the <b>force/motion</b> (North, as it is deflected north).</div>",
            "<div style=\"text-align: justify;\">3. Then, the <b>forefinger</b> will point in the direction of the <b>magnetic field</b>, which in this case points <b>upwards</b>.</div>",
          ],
          answer: "(d) upward. By applying Fleming's Left-Hand Rule with current towards West and force towards North, the magnetic field direction is found to be Upward.",
        },
        {
          id: "it-5-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 5</strong></div><div style=\"text-align: justify;\">Q1. State Flemingâ€™s left-hand rule.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">According to <b>Flemingâ€™s Left-Hand Rule</b>, if we stretch the thumb, forefinger, and middle finger of our left hand such that they are mutually perpendicular to each other, then:</div>",
            "<div style=\"text-align: justify;\">1. The <b>Forefinger</b> points in the direction of the <b>Magnetic Field</b>.</div>",
            "<div style=\"text-align: justify;\">2. The <b>Middle finger</b> points in the direction of the <b>Current</b>.</div>",
            "<div style=\"text-align: justify;\">3. The <b>Thumb</b> points in the direction of the <b>Force</b> (or Motion) acting on the conductor.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 250px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
          ],
          answer: "If the thumb, forefinger, and middle finger of the left hand are held mutually perpendicular, the forefinger points to the magnetic field, the middle finger to the current, and the thumb to the force/motion.",
        },
        {
          id: "it-5-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">What is the principle of an electric motor?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The principle of an electric motor is based on the <b>magnetic effect of electric current</b>. When a current-carrying rectangular coil is placed in a magnetic field, it experiences a <b>mechanical force (torque)</b> that causes it to rotate continuously.</div>",
            "<div style=\"text-align: justify;\">This force is generated because of the interaction between the magnetic field produced by the permanent magnets and the magnetic field produced by the current flowing through the coil. The direction of this force is determined by <b>Fleming's Left-Hand Rule</b>.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 300px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
          ],
          answer: "An electric motor works on the principle that when a current-carrying coil is placed in a magnetic field, it experiences a force that causes it to rotate.",
        },
        {
          id: "it-5-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">What is the role of the split ring in an electric motor?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">In an electric motor, the split ring acts as a <b>commutator</b>. Its primary role is to <b>reverse the direction of current</b> flowing through the rectangular coil after every half rotation.</div>",
            "<div style=\"text-align: justify;\">This reversal of current ensures that the direction of the force acting on the two arms of the coil also reverses, allowing the coil to maintain a <b>continuous rotation</b> in the same direction. Without the split ring, the coil would simply oscillate after every half-turn.</div>",
          ],
          answer: "The split ring acts as a commutator, reversing the direction of current every half rotation to keep the coil rotating in a single direction.",
        },
        {
          id: "it-6-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 6</strong></div><div style=\"text-align: justify;\">Q1. Explain different ways to induce current in a coil.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Current can be induced in a coil by changing the magnetic field linked with it. This process is known as <b>electromagnetic induction</b>. There are mainly three ways to induce current in a coil:</div>",
            "<div style=\"text-align: justify;\">1. <b>By moving a magnet</b> towards or away from a stationary coil.</div>",
            "<div style=\"text-align: justify;\">2. <b>By moving the coil</b> towards or away from a stationary magnet.</div>",
            "<div style=\"text-align: justify;\">3. <b>By changing the current</b> in a neighboring coil (primary coil), which changes the magnetic flux linked with the given coil (secondary coil).</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 280px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
          ],
          answer: "Current is induced in a coil by the relative motion between a magnet and a coil, or by changing the magnetic field linked with it.",
        },
        {
          id: "it-7-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 7</strong></div><div style=\"text-align: justify;\">Q1. State the principle of an electric generator.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">An electric generator works on the principle of <b>electromagnetic induction</b>. When a closed coil is rotated in a uniform magnetic field, the magnetic field lines passing through the coil (magnetic flux) change continuously. This change in magnetic flux induces an electric current in the coil.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 280px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
          ],
          answer: "Electric generator works on the principle of electromagnetic induction.",
        },
        {
          id: "it-7-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">Name some sources of direct current.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Sources of direct current (DC) include:<br>1. <b>Dry cells</b><br>2. <b>Batteries</b> (like lead-acid batteries)<br>3. <b>Solar cells</b><br>4. <b>DC Generators</b></div>",
          ],
          answer: "Dry cells, batteries, and DC generators are sources of direct current.",
        },
        {
          id: "it-7-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">Which sources produce alternating current?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Alternating current (AC) is produced by:<br>1. <b>AC Generators</b> (Alternators)<br>2. <b>Hydroelectric power plants</b><br>3. <b>Nuclear power plant generators</b><br>4. <b>Thermal power station generators</b></div>",
          ],
          answer: "AC generators and power plant generators produce alternating current.",
        },
        {
          id: "it-7-q4",
          number: "4",
          question: "<div style=\"text-align: justify;\">Choose the correct option.<br>A rectangular coil of copper wires is rotated in a magnetic field. The direction of the induced current changes once in each<br>(a) two revolutions<br>(b) one revolution<br>(c) half revolution<br>(d) one-fourth revolution</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">The correct option is <b>(c) half revolution</b>.</div>",
            "<div style=\"text-align: justify;\">In an AC generator, the direction of the induced current in the coil changes every time the coil completes <b>half a rotation</b>. This is because the two sides of the coil start moving in opposite directions relative to the magnetic field after every 180Â° rotation.</div>",
          ],
          answer: "(c) half revolution",
        },
        {
          id: "it-8-q1",
          number: "",
          question: "<div style=\"text-align: center; font-size: 22px; color: #FF8A65; font-family: 'NotoSans_700Bold'; margin-top: 15px; margin-bottom: 15px;\"><strong>In-Text - 8</strong></div><div style=\"text-align: justify;\">Q1. Name two safety measures commonly used in electric circuits and appliances.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Two common safety measures are:</div>",
            "<div style=\"text-align: justify;\">1. <b>Electric Fuse:</b> It protects the circuit from overloading and short-circuits by melting and breaking the flow of excessive current.</div>",
            "<div style=\"text-align: justify;\">2. <b>Earthing:</b> It ensures that any leakage current from a metallic appliance is safely directed to the ground, preventing electric shocks to the user.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"width: 280px; height: auto; background-color: #000; border-radius: 8px;\"/></div>",
          ],
          answer: "Electric fuse and earthing are two common safety measures.",
        },
        {
          id: "it-8-q2",
          number: "2",
          question: "<div style=\"text-align: justify;\">An electric oven of 2 kW power rating is operated in a domestic electric circuit (220 V) that has a current rating of 5 A. What result do you expect? Explain.</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\"><b>Calculation:</b><br>Power (P) = 2 kW = 2000 W<br>Voltage (V) = 220 V<br>Current drawn (I) = P / V = 2000 / 220 â‰ˆ 9.09 A</div>",
            "<div style=\"text-align: justify;\"><b>Conclusion:</b><br>The current drawn by the oven (9.09 A) exceeds the circuit's current rating (5 A). As a result, the circuit will be <b>overloaded</b>, and the safety fuse will melt and break the circuit to prevent potential damage or a fire hazard.</div>",
          ],
          answer: "The fuse will melt and break the circuit because the current drawn (9.09 A) exceeds the circuit rating (5 A).",
        },
        {
          id: "it-8-q3",
          number: "3",
          question: "<div style=\"text-align: justify;\">What precaution should be taken to avoid the overloading of domestic electric circuits?</div>",
          solution: [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Precautions to avoid overloading:</div>",
            "<div style=\"text-align: justify;\">1. <b>Avoid multiple connections:</b> Do not connect too many high-power appliances to a single electrical socket.</div>",
            "<div style=\"text-align: justify;\">2. <b>Check Power Ratings:</b> Ensure that the total power consumption of the appliances in a circuit does not exceed the allowed current rating.</div>",
            "<div style=\"text-align: justify;\">3. <b>Use Quality Fuses:</b> Always use fuses of the correct capacity and high-quality wiring in domestic circuits.</div>",
          ],
          answer: "Avoid connecting too many appliances to one socket and ensure the total current is within the circuit's rating.",
        },
      ],
    }
  ],examples: [],
};
