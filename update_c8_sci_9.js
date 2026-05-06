const fs = require('fs');

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci9: ChapterContent = {
  id: "c8-sci-9",
  number: 9,
  title: "Force and Pressure",
  introduction:
    "<div style='text-align: justify;'>Force is a push or a pull on an object that can change its state of motion or its shape. Pressure is the force acting per unit area. In this chapter, we explore various types of forces and the concept of pressure in solids, liquids, and gases.</div>",
  definitions: [
    {
      term: "Force",
      description:
        "<div style='text-align: justify;'>A push or a pull on an object that results from its interaction with another object.</div>",
    },
    {
      term: "Pressure",
      description:
        "<div style='text-align: justify;'>The force acting on a unit area of a surface (Pressure = Force / Area).</div>",
    },
    {
      term: "Atmospheric Pressure",
      description:
        "<div style='text-align: justify;'>The pressure exerted by the weight of air in the atmosphere of Earth.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Forces can be classified into Contact forces (Muscular, Friction) and Non-contact forces (Magnetic, Electrostatic, Gravitational).</div>",
    "<div style='text-align: justify;'>Force can change the speed, direction of motion, and shape of an object.</div>",
    "<div style='text-align: justify;'>Liquids and gases also exert pressure on the walls of their containers.</div>",
    "<div style='text-align: justify;'>Pressure increases as the area over which a force acts decreases.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Contact Force:</b> Requires physical touch (e.g., Friction).</div>",
    "<div style='text-align: justify;'><b>Non-contact Force:</b> Acts from a distance (e.g., Gravity).</div>",
    "<div style='text-align: justify;'><b>Pressure:</b> Force per unit Area (P = F / A).</div>",
  ],
  formulas: [
    {
      name: "Pressure",
      formula: "Pressure (P) = Force (F) / Area (A)",
    },
  ],
  mcqs: [
    {
      id: "c8-sci-9-mcq-1",
      question: "<div style='text-align: justify;'>The rise of water in a dropper when its bulb is released is due to:</div>",
      options: [
        "<div style='text-align: justify;'>(a) Pressure of water</div>",
        "<div style='text-align: justify;'>(b) Gravity of earth</div>",
        "<div style='text-align: justify;'>(c) Shape of rubber bulb</div>",
        "<div style='text-align: justify;'>(d) Atmospheric pressure</div>",
      ],
      correctAnswer: "d",
    },
    {
      id: "c8-sci-9-mcq-2",
      question: "<div style='text-align: justify;'>Which of the following is a non-contact force?</div>",
      options: [
        "<div style='text-align: justify;'>(a) Muscular force</div>",
        "<div style='text-align: justify;'>(b) Friction</div>",
        "<div style='text-align: justify;'>(c) Magnetic force</div>",
        "<div style='text-align: justify;'>(d) Tilling force</div>",
      ],
      correctAnswer: "c",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Force and pressure are fundamental concepts in physics that explain how objects move and interact.</div>",
    "<div style='text-align: justify;'>Atmospheric pressure is vital for many everyday phenomena, such as using a straw or a dropper.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-9-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-9-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>Give two examples each of situations in which you push or pull to change the state of motion of objects?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>Push:</b><br/>1. Pushing a stationary football to make it move.<br/>2. Pushing a heavy trunk to shift it from one place to another.<br/><br/><b>Pull:</b><br/>1. Pulling a drawer to open it.<br/>2. Pulling a rope to draw water from a well.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>Give two examples of situations in which applied force causes a change in the shape of an object?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Squeezing a plastic bottle or a lemon between fingers.<br/>2. Stretching a rubber band or compressing a spring.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>Fill in the blanks in the following statements:<br/>(a) To draw water from a well we have to ________ at the rope.<br/>(b) A charged body ________ an uncharged body towards it.<br/>(c) To move a loaded trolley we have to ________ it.<br/>(d) The north pole of a magnet ________ the north pole of another magnet.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) pull<br/>(b) attracts<br/>(c) push or pull<br/>(d) repels</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>An archer stretches her bow while taking aim at the target. She then releases the arrow, which begins to move towards the target. Based on this information fill up the gaps in the following statements using the following terms: (muscular, contact, non-contact, gravity, friction, shape, attraction)<br/>(a) To stretch the bow, the archer applies a force that causes a change in its ________.<br/>(b) The force applied by the archer to stretch the bow is an example of ________ force.<br/>(c) The type of force responsible for a change in the state of motion of the arrow is an example of a ________ force.<br/>(d) While the arrow moves towards its target, the forces acting on it are due to ________ and that due to ________ of air.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) shape<br/>(b) muscular<br/>(c) contact<br/>(d) gravity, friction</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>In the following situations identify the agent exerting the force and the object on which it acts. State the effect of the force in each case.<br/>(a) Squeezing a piece of lemon between the fingers to extract its juice.<br/>(b) Taking out paste from a toothpaste tube.<br/>(c) A load suspended from a spring while its other end is on a hook fixed to a wall.<br/>(d) An athlete making a high jump to clear the bar at a certain height.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) <b>Agent:</b> Fingers, <b>Object:</b> Lemon, <b>Effect:</b> Change in shape.<br/>(b) <b>Agent:</b> Fingers, <b>Object:</b> Toothpaste tube, <b>Effect:</b> Change in shape (paste comes out).<br/>(c) <b>Agent:</b> Load (Gravity), <b>Object:</b> Spring, <b>Effect:</b> Change in length/shape.<br/>(d) <b>Agent:</b> Muscles of the athlete, <b>Object:</b> Athlete\'s body, <b>Effect:</b> Change in state of motion.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>A blacksmith hammers a hot piece of iron while making a tool. How does the force due to hammering effect the piece of iron?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The force applied by hammering causes a change in the <b>shape</b> of the hot piece of iron, allowing the blacksmith to mold it into a desired tool.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>An inflated balloon was pressed against a wall after it has been rubbed with a piece of synthetic cloth. It was found that the balloon sticks to the wall. What force might be responsible for the attraction between the balloon and the wall?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The <b>electrostatic force</b> is responsible. Rubbing the balloon with a synthetic cloth makes it electrically charged, which then attracts the neutral wall.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>Name the forces acting on a plastic bucket containing water held above ground level in your hand. Discuss why the forces acting on the bucket do not bring a change in its state of motion.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Two forces are acting on the bucket:<br/>1. <b>Gravitational force</b> acting downwards.<br/>2. <b>Muscular force</b> of the hand acting upwards.<br/><br/>The state of motion does not change because these two forces are equal in magnitude and opposite in direction. They are <b>balanced forces</b>, so the net force on the bucket is zero.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q9",
          number: "9",
          question: "<div style='text-align: justify;'>A rocket has been fired upwards to launch a satellite in its orbit. Name the two forces acting on the rocket immediately after leaving the launching pad.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The two forces acting on the rocket are:<br/>1. <b>Force of Gravity</b> pulling the rocket downwards.<br/>2. <b>Force of Friction</b> (air resistance) acting against the upward motion of the rocket.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-9-ex1-q10",
          number: "10",
          question: "<div style='text-align: justify;'>When we press the bulb of a dropper with its nozzle kept in water, air in the dropper is seen to escape in the form of bubbles. Once we release the pressure on the bulb, water gets filled in the dropper. The rise of water in the dropper is due to:<br/>(a) pressure of water<br/>(b) gravity of the earth<br/>(c) shape of rubber bulb<br/>(d) atmospheric pressure</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The correct answer is <b>(d) atmospheric pressure</b>. When the bulb is released, the pressure inside the dropper decreases, and the outside atmospheric pressure forces the water into the dropper.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync('client/data/content/c8-sci-9.ts', content, 'utf8');
console.log('Successfully updated Chapter 9 content.');
