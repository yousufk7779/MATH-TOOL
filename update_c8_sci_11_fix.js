const fs = require("fs");

const pathEye =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\human_eye_labeled_final_v2_1777804736840.png";
const b64Eye = fs.readFileSync(pathEye).toString("base64");

const pathMirrors =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\two_mirrors_final_v2_1777804761093.png";
const b64Mirrors = fs.readFileSync(pathMirrors).toString("base64");

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci11: ChapterContent = {
  id: "c8-sci-11",
  number: 11,
  title: "Light",
  introduction:
    "<div style='text-align: justify;'>Light makes things visible to us. In this chapter, we learn about the laws of reflection, the structure of the human eye, and how we perceive the world through light and vision.</div>",
  definitions: [
    {
      term: "Reflection",
      description:
        "<div style='text-align: justify;'>The bouncing back of light rays when they strike a smooth or polished surface.</div>",
    },
    {
      term: "Kaleidoscope",
      description:
        "<div style='text-align: justify;'>An optical instrument with two or more reflecting surfaces tilted to each other in an angle, so that one or more objects on one side of the mirrors are seen as a regular symmetrical pattern.</div>",
    },
    {
      term: "Blind Spot",
      description:
        "<div style='text-align: justify;'>The point at the junction of the optic nerve and the retina where no sensory cells are located, and no vision is possible.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>The laws of reflection state that the angle of incidence equals the angle of reflection, and the incident ray, normal, and reflected ray all lie in the same plane.</div>",
    "<div style='text-align: justify;'>The human eye is a complex organ that uses a lens to focus light onto the retina, which sends signals to the brain via the optic nerve.</div>",
    "<div style='text-align: justify;'>Care of eyes is essential and includes reading at proper distances and avoiding looking directly at powerful light sources.</div>",
    "<div style='text-align: justify;'>Visually challenged persons can read and write using the Braille system.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Laws:</b> Angle i = Angle r. Same plane.</div>",
    "<div style='text-align: justify;'><b>Eye:</b> Iris controls pupil size. Retina has rods and cones.</div>",
  ],
  formulas: [],
  mcqs: [
    {
      id: "c8-sci-11-mcq-1",
      question: "<div style='text-align: justify;'>Angle of incidence is equal to the angle of reflection:</div>",
      options: [
        "<div style='text-align: justify;'>(a) Always</div>",
        "<div style='text-align: justify;'>(b) Sometimes</div>",
        "<div style='text-align: justify;'>(c) Under special conditions</div>",
        "<div style='text-align: justify;'>(d) Never</div>",
      ],
      correctAnswer: "a",
    },
    {
      id: "c8-sci-11-mcq-2",
      question: "<div style='text-align: justify;'>Image formed by a plane mirror is:</div>",
      options: [
        "<div style='text-align: justify;'>(a) virtual, behind the mirror and enlarged</div>",
        "<div style='text-align: justify;'>(b) virtual, behind the mirror and of the same size as the object</div>",
        "<div style='text-align: justify;'>(c) real at the surface of the mirror and enlarged</div>",
        "<div style='text-align: justify;'>(d) real, behind the mirror and of the same size</div>",
      ],
      correctAnswer: "b",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Light is a form of energy that enables us to see. Reflection and refraction are the primary phenomena of light.</div>",
    "<div style='text-align: justify;'>Proper lighting and eye care are crucial for maintaining healthy vision throughout life.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-11-ex1",
      name: "Exercise Section I",
      questions: [
        {
          id: "c8-sci-11-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>Suppose you are in a dark room. Can you see objects in the room? Can you see objects outside the room. Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>We cannot see objects in a dark room because there is no light to reflect off them and enter our eyes. However, we can see objects outside the room if there is light available there which can strike the objects and reach our eyes.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>Differentiate between regular and diffused reflection. Does diffused reflection mean the failure of the laws of reflection?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>Regular Reflection:</b> Takes place on smooth surfaces; parallel incident rays are reflected as parallel. <b>Diffused Reflection:</b> Takes place on rough surfaces; parallel incident rays are reflected in different directions.<br/><br/>No, diffused reflection does not mean failure of the laws. Each individual ray still follows the laws of reflection; the scattering is caused by the irregularities of the surface.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>Mention against each of the following whether regular or diffused reflection will take place when a beam of light strikes. Justify your answer in each case.<br/>(a) Polished wooden table<br/>(b) Chalk powder<br/>(c) Cardboard surface<br/>(d) Marble floor with water spread over it<br/>(e) Mirror<br/>(f) Piece of paper</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) Regular: Smooth polished surface.<br/>(b) Diffused: Irregular particles.<br/>(c) Diffused: Minute irregularities on surface.<br/>(d) Regular: Water makes the surface act like a smooth mirror.<br/>(e) Regular: Highly polished smooth surface.<br/>(f) Diffused: Surface has microscopic irregularities.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>State the laws of reflection?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. The angle of incidence is always equal to the angle of reflection.<br/>2. The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>Describe an activity to show that the incident ray, the reflected ray and the normal at the point of incidence lie in the same plane.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Fix a sheet of white paper on a table. Place a small plane mirror vertically. Direct a beam of light from a comb (with one opening) to strike the mirror. The incident and reflected rays are seen on the paper. If you fold the paper at the edge of the table where the rays are, the part of the reflected ray on the folded portion disappears, showing they only lie in one flat plane.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>Fill in the blanks in the following:<br/>(a) A person 1 m in front of a plane mirror seems to be ________ m from his image.<br/>(b) If you touch your ________ ear with right hand in front of a plane mirror it will be seen in the mirror that your right ear is touched with ________.<br/>(c) The size of the pupil becomes ________ when you see in dim light.<br/>(d) Night birds have ________ cones than rods in their eyes.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) 2 m<br/>(b) left, left hand<br/>(c) large<br/>(d) fewer</div>",
          ],
          answer: "",
        },
      ],
    },
    {
      id: "c8-sci-11-ex2",
      name: "Exercise Section II",
      questions: [
        {
          id: "c8-sci-11-ex2-q1",
          number: "9",
          question: "<div style='text-align: justify;'>Describe the construction of a kaleidoscope?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>To make a kaleidoscope, take three rectangular mirror strips of equal size. Join them to form a prism. Fix this arrangement in a cylindrical tube. Close one end with a cardboard disc having a hole for viewing, and the other end with a plane glass plate containing small pieces of colored glass. When you look through the hole and rotate the tube, you see beautiful symmetrical patterns.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q2",
          number: "10",
          question: "<div style='text-align: justify;'>Draw a labeled sketch of the human eye?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Below is the labeled diagram of the human eye:<br/><br/><center><img src='data:image/png;base64,${b64Eye}' style='max-width: 90%; border-radius: 8px; margin: 10px 0; border: 1px solid #ddd;'/></center></div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q3",
          number: "11",
          question: "<div style='text-align: justify;'>Explain how you can take care of your eyes?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>We can take care of our eyes by:<br/>1. Not reading in too dim or too bright light.<br/>2. Avoiding looking directly at the Sun or powerful light sources.<br/>3. Reading at a normal distance (about 25 cm).<br/>4. Washing eyes frequently with clean water.<br/>5. Including Vitamin A rich foods in diet.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q4",
          number: "12",
          question: "<div style='text-align: justify;'>What is the angle of incidence of a ray if the reflected ray is at an angle of 90 deg to the incident ray?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The angle between incident and reflected ray is i + r = 90. According to the law of reflection, i = r. Therefore, 2i = 90, which gives <b>i = 45 deg</b>.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q5",
          number: "13",
          question: "<div style='text-align: justify;'>How many images of a candle will be formed if it is placed between two parallel plane mirrors separated by 40 cm?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>Infinite</b> number of images will be formed when two mirrors are kept parallel to each other.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q6",
          number: "14",
          question: "<div style='text-align: justify;'>Two mirrors meet at right angles. A ray of light is incident on one at an angle of 30 deg as shown in Fig. 11.19. Draw the reflected ray from the second mirror.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Below is the ray diagram for the two mirrors at right angles:<br/><br/><center><img src='data:image/png;base64,${b64Mirrors}' style='max-width: 90%; border-radius: 8px; margin: 10px 0; border: 1px solid #ddd;'/></center></div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q7",
          number: "15",
          question: "<div style='text-align: justify;'>Yasir stands at A just on the side of a plane mirror as shown in Fig. 11.20. Can he see himself in the mirror? Also can he see the image of objects situated at P, Q and R?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Yasir <b>cannot see himself</b> because he is not in front of the mirror.<br/>2. He <b>can see images of P and Q</b> as the light from them can reflect off the mirror to reach his eyes.<br/>3. He <b>cannot see image of R</b> because the light from R cannot reflect into his line of sight from that position.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-11-ex2-q8",
          number: "16",
          question: "<div style='text-align: justify;'>Find out the position of the image of an object situated at A in the plane mirror (Fig. 11.21). Can Saba at B see this image? Can Yasir at C see this image? When Saba moves from B to C, where does the image of A move?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. The image of A is formed at the same distance behind the mirror as the object is in front of it.<br/>2. <b>Yes</b>, Saba at B can see this image.<br/>3. <b>Yes</b>, Yasir at C can see this image.<br/>4. The image of A <b>does not move</b>; its position only depends on the position of the object A, not the viewer.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync("client/data/content/c8-sci-11.ts", content, "utf8");
console.log(
  "Successfully updated Chapter 11 with fresh diagrams and optimized image sizing.",
);
