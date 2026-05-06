const fs = require('fs');

const pathTable = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\endocrine_glands_hormones_table_1777803695474.png';
const b64Table = fs.readFileSync(pathTable).toString('base64');

const pathSex = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\sex_determination_chromosomes_diagram_1777803722696.png';
const b64Sex = fs.readFileSync(pathSex).toString('base64');

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci10: ChapterContent = {
  id: "c8-sci-10",
  number: 10,
  title: "Reaching the Age of Adolescence",
  introduction:
    "<div style='text-align: justify;'>Adolescence is the phase of life between childhood and adulthood. It is a period of significant physical, mental, and emotional changes triggered by hormones. In this chapter, we learn about puberty, endocrine glands, and reproductive health.</div>",
  definitions: [
    {
      term: "Adolescence",
      description:
        "<div style='text-align: justify;'>The period of life, when the body undergoes changes, leading to reproductive maturity.</div>",
    },
    {
      term: "Puberty",
      description:
        "<div style='text-align: justify;'>The beginning of adolescence when a person reaches reproductive maturity.</div>",
    },
    {
      term: "Hormones",
      description:
        "<div style='text-align: justify;'>Chemical substances secreted by endocrine glands that control various body functions and changes.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Puberty is marked by physical changes like increase in height, voice change, and development of sex organs.</div>",
    "<div style='text-align: justify;'>Endocrine glands like pituitary, thyroid, and adrenal glands secrete hormones directly into the bloodstream.</div>",
    "<div style='text-align: justify;'>Reproductive health depends on a balanced diet, personal hygiene, and regular physical exercise.</div>",
    "<div style='text-align: justify;'>The sex of an unborn baby is determined by the sex chromosomes inherited from the parents.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Adolescence:</b> Period between ages 11 and 19.</div>",
    "<div style='text-align: justify;'><b>Sex Hormones:</b> Testosterone (male) and Estrogen (female).</div>",
    "<div style='text-align: justify;'><b>Chromosomes:</b> Female (XX) and Male (XY).</div>",
  ],
  formulas: [],
  mcqs: [
    {
      id: "c8-sci-10-mcq-1",
      question: "<div style='text-align: justify;'>The right meal for adolescents consists of:</div>",
      options: [
        "<div style='text-align: justify;'>(a) chips, noodles, coke</div>",
        "<div style='text-align: justify;'>(b) chapati, dal, vegetables</div>",
        "<div style='text-align: justify;'>(c) rice, noodles and burger</div>",
        "<div style='text-align: justify;'>(d) vegetable cutlets, chips and lemon drink</div>",
      ],
      correctAnswer: "b",
    },
    {
      id: "c8-sci-10-mcq-2",
      question: "<div style='text-align: justify;'>Reproductive age in women starts when their:</div>",
      options: [
        "<div style='text-align: justify;'>(a) menstruation starts</div>",
        "<div style='text-align: justify;'>(b) breasts start developing</div>",
        "<div style='text-align: justify;'>(c) body weight increases</div>",
        "<div style='text-align: justify;'>(d) height increases</div>",
      ],
      correctAnswer: "a",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Adolescence is a natural process of growth. It is important to maintain emotional and physical health during this time.</div>",
    "<div style='text-align: justify;'>Understanding hormonal changes helps in dealing with puberty effectively.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-10-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-10-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>What is the term used for secretions of endocrine glands responsible for changes taking place in the body?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The term used for these secretions is <b>Hormones</b>.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>Define adolescence?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Adolescence is the period of life between childhood and adulthood (roughly from ages 11 to 19) during which the body undergoes various physical and biological changes leading to reproductive maturity.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>What is menstruation? Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>In females, when the ovaries mature, they start releasing eggs. Every month, the uterus prepares itself to receive a fertilized egg by thickening its lining. If fertilization does not occur, the released egg and the thickened lining of the uterus, along with its blood vessels, are shed off. This causes bleeding in females, which is known as menstruation. It occurs once in about 28 to 30 days.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>List changes in the body that take place at puberty?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The major changes that take place at puberty include:<br/>1. Sudden increase in height.<br/>2. Change in body shape (shoulders broaden in boys, hips widen in girls).<br/>3. Voice change (larynx grows, often resulting in a deep voice in boys).<br/>4. Increased activity of sweat and sebaceous glands.<br/>5. Development of sex organs.<br/>6. Reaching mental, intellectual, and emotional maturity.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>Prepare a Table having two columns depicting names of endocrine glands and hormones secreted by them.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Below is the table of major endocrine glands and their hormones:<br/><br/><center><img src='data:image/png;base64,${b64Table}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center></div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>What are sex hormones? Why are they named so? State their function.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Sex hormones are hormones that control the development of secondary sexual characters and reproductive functions. They are called sex hormones because they are produced by the sex organs (testes in males and ovaries in females).<br/><br/><b>Functions:</b><br/>1. <b>Testosterone:</b> Causes development of facial hair, deepening of voice, and production of sperms in males.<br/>2. <b>Estrogen:</b> Causes development of breasts and maturation of eggs in females.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>Choose the correct option (Answers provided in solutions).<br/>(a) Adolescents should be careful about what they eat, because...<br/>(b) Reproductive age in women starts when their...<br/>(c) The right meal for adolescents consists of...</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) (ii) proper diet is needed for the rapid growth taking place in their body.<br/>(b) (i) menstruation starts.<br/>(c) (ii) chapati, dal, vegetables.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-10-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>Write notes on—<br/>(a) Adam\'s apple.<br/>(b) Secondary sexual characters.<br/>(c) Sex determination in the unborn baby.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>(a) Adam\'s apple:</b> At puberty, the voice box or the larynx begins to grow. In boys, the larynx grows larger and can be seen as a protruding part of the throat called Adam\'s apple.<br/><br/><b>(b) Secondary sexual characters:</b> These are features that help to distinguish a male from a female during puberty. Examples include breast development in girls and growth of facial hair (mustache and beard) in boys.<br/><br/><b>(c) Sex determination:</b> The sex of a baby is determined by the sex chromosomes inherited from the parents. Females have two X chromosomes (XX), while males have one X and one Y chromosome (XY).<br/><br/><center><img src='data:image/png;base64,${b64Sex}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center><br/>If an X chromosome from the father fuses with the X from the mother, it results in a girl (XX). If a Y chromosome from the father fuses with the X from the mother, it results in a boy (XY).</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync('client/data/content/c8-sci-10.ts', content, 'utf8');
console.log('Successfully updated Chapter 10 content with diagrams.');
