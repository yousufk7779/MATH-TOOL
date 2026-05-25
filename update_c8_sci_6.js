const fs = require("fs");

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci6: ChapterContent = {
  id: "c8-sci-6",
  number: 6,
  title: "Food Production and Management",
  introduction:
    "<div style='text-align: justify;'>Food is one of the basic needs of all living organisms. To provide food for a large population, regular production, proper management, and distribution are necessary. In this chapter, we study various agricultural practices and animal husbandry.</div>",
  definitions: [
    {
      term: "Crop",
      description:
        "<div style='text-align: justify;'>Plants of the same kind grown and cultivated at one place on a large scale.</div>",
    },
    {
      term: "Animal Husbandry",
      description:
        "<div style='text-align: justify;'>The branch of agriculture concerned with animals that are raised for meat, fibre, milk, or other products.</div>",
    },
    {
      term: "Irrigation",
      description:
        "<div style='text-align: justify;'>The supply of water to crops at different intervals.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Agricultural practices involve preparation of soil, sowing, adding manure and fertilizers, irrigation, protecting from weeds, harvesting, and storage.</div>",
    "<div style='text-align: justify;'>Crops are categorized into Kharif (rainy season) and Rabi (winter season).</div>",
    "<div style='text-align: justify;'>Modern methods of irrigation like sprinkler and drip systems save water.</div>",
    "<div style='text-align: justify;'>Animal products like milk, eggs, and honey are important sources of nutrition.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Kharif Crops:</b> Sown in June/July (e.g., Paddy, Maize).</div>",
    "<div style='text-align: justify;'><b>Rabi Crops:</b> Sown in October/November (e.g., Wheat, Gram).</div>",
    "<div style='text-align: justify;'><b>Soil Preparation:</b> Loosening and turning the soil (Tilling).</div>",
  ],
  formulas: [],
  mcqs: [
    {
      id: "c8-sci-6-mcq-1",
      question: "<div style='text-align: justify;'>Which of the following is a Kharif crop?</div>",
      options: [
        "<div style='text-align: justify;'>(a) Wheat</div>",
        "<div style='text-align: justify;'>(b) Gram</div>",
        "<div style='text-align: justify;'>(c) Paddy</div>",
        "<div style='text-align: justify;'>(d) Mustard</div>",
      ],
      correctAnswer: "c",
    },
    {
      id: "c8-sci-6-mcq-2",
      question: "<div style='text-align: justify;'>The process of loosening and turning the soil is called:</div>",
      options: [
        "<div style='text-align: justify;'>(a) Irrigation</div>",
        "<div style='text-align: justify;'>(b) Tilling</div>",
        "<div style='text-align: justify;'>(c) Harvesting</div>",
        "<div style='text-align: justify;'>(d) Levelling</div>",
      ],
      correctAnswer: "b",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Agriculture is the primary source of food for humans.</div>",
    "<div style='text-align: justify;'>Systematic farming practices ensure high yields and food security.</div>",
    "<div style='text-align: justify;'>Animal husbandry complements agriculture by providing proteins and other nutrients.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-6-ex1",
      name: "Exercise Section I & II",
      questions: [
        {
          id: "c8-sci-6-ex1-q1",
          number: "I",
          question: "<div style='text-align: justify;'><b>Name the following:</b><br/>1. Five requirements essential for obtaining good crop production.<br/>2. Two types of fertilizers.<br/>3. Some chemicals used to protect crops from insects pests and weeds.<br/>4. Some animal products.<br/>5. Members of a colony of bees.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>1. Preparation of soil, quality seeds, irrigation, manure/fertilizers, and protection from pests.<br/>2. Urea and NPK.<br/>3. Insecticides (like Malathion) and Weedicides (like 2,4-D).<br/>4. Milk, Eggs, Meat, and Honey.<br/>5. Queen bee, Drones, and Workers.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-6-ex1-q2",
          number: "II",
          question: "<div style='text-align: justify;'><b>Fill in the blanks:</b><br/>1. A ________ is used to remove weeds from the soil.<br/>2. A ________ is used to trowel the soil by breaking the lumps of soil after preliminary ploughing.<br/>3. Kharif crops are sown during the months of ________.<br/>4. ________ seeds are not sown directly into the soil.<br/>5. Rabi crops are harvested during the months of ________.<br/>6. The practice of taking the seedlings from the nursery to the main field is known as ________.<br/>7. Pearls are used in ________.<br/>8. Honey contains ________ water and ________ sugar with minerals.<br/>9. The hen-houses are called ________.<br/>10. Murrah and Jaffarabadi are well-known breeds of ________.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>1. Khurpi (or Hoe)<br/>2. Leveller<br/>3. June-July<br/>4. Paddy<br/>5. March-April<br/>6. Transplantation<br/>7. Jewellery<br/>8. 17%, 78%<br/>9. Poultry farms<br/>10. Buffaloes</div>",
          ],
          answer: "",
        },
      ],
    },
    {
      id: "c8-sci-6-ex2",
      name: "Exercise Section III & IV",
      questions: [
        {
          id: "c8-sci-6-ex2-q1",
          number: "III",
          question: "<div style='text-align: justify;'><b>Answer in only one word or in figure:</b><br/>1. Process of turning and loosening the soil?<br/>2. Which implement is used for tilling soil?<br/>3. Which implement is used for breaking up the large lumps of soil?<br/>4. What is the implement used for sowing called?<br/>5. What is the top part of the drill called?<br/>6. What is an egg-laying bird called?<br/>7. Name the members of the bee colony?<br/>8. Which material is used to cover the floor of a hen-house?<br/>9. Which is the common food of poultry chicken?<br/>10. Which bee is responsible for laying eggs?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>1. Tilling (or Ploughing)<br/>2. Plough<br/>3. Leveller<br/>4. Seed drill<br/>5. Funnel<br/>6. Layer<br/>7. Queen, Drones, Workers<br/>8. Litter (Straw or Sawdust)<br/>9. Grains (Maize, Bajra)<br/>10. Queen bee</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-6-ex2-q2",
          number: "IV",
          question: "<div style='text-align: justify;'><b>Give the scientific reasons for the following:</b><br/>1. Grains, pulses, vegetables and fruits should be used in daily life?<br/>2. The soil should be loosened before seeds are sown?<br/>3. Seeds should be sown at a proper depth in the soil?<br/>4. Fruits and vegetables should be washed thoroughly before eating?<br/>5. Grains are dried thoroughly before they are stored?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>1. They provide essential nutrients like carbohydrates, proteins, vitamins, and minerals needed for health.<br/>2. Loosening allows the roots to breathe easily and penetrate deep into the soil.<br/>3. To protect them from birds and ensure they get enough moisture and space to grow.<br/>4. To remove harmful chemicals (pesticides) and dirt from their surface.<br/>5. To prevent the growth of fungi and microorganisms that thrive in moisture and can spoil the grains.</div>",
          ],
          answer: "",
        },
      ],
    },
    {
      id: "c8-sci-6-ex3",
      name: "Exercise Section V",
      questions: [
        {
          id: "c8-sci-6-ex3-q1",
          number: "V",
          question: "<div style='text-align: justify;'><b>Answer the following questions:</b><br/>1. What are the requirements of farming which would lead to high yields of crops?<br/>2. What is tilling? How is it done?<br/>3. Write a short note on the process of sowing?<br/>4. What are manures? Discuss their important types.<br/>5. What is a fertilizer? Explain its importance.<br/>6. What are broadcasting and transplanting?<br/>7. What is the difference between manure and fertilizer?<br/>8. Why are weeds harmful? What is used to remove them?<br/>9. What are insecticides? Give examples.<br/>10. How do insecticides protect crops?<br/>11. Which are the two main seasons in India for cultivating crops?<br/>12. Name some harvest festivals of India.<br/>13. Name four factors responsible for the improvement of a crop.<br/>14. Write short note on the process of harvesting.<br/>15. Why does a farmer rotate crops in the field?<br/>16. What do you understand by mixed cropping?<br/>17. Why are fields sometimes allowed to remain fallow?<br/>18. List the importance of fish in our life?<br/>19. What is nutrient value of honey?<br/>20. How are domesticated animals useful to us?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>1. Good quality seeds, proper irrigation, tilling, use of manures/fertilizers, and crop protection.<br/>2. Tilling is the process of loosening and turning the soil using a plough.<br/>3. Sowing is putting seeds into the soil. It is done manually or using a seed drill.<br/>4. Manures are organic substances obtained from decomposition of plant/animal wastes. Types: Compost, Green manure.<br/>5. Fertilizers are chemical substances rich in nutrients (NPK). They provide instant nourishment.<br/>6. Broadcasting: Scattering seeds manually. Transplanting: Moving seedlings from nursery to field.<br/>7. Manure is natural/organic and provides humus. Fertilizer is synthetic and provides specific nutrients.<br/>8. Weeds compete with crops for nutrients, space, and light. Removed using weedicides or manually.<br/>9. Chemicals used to kill insects. Examples: Malathion, BHC.<br/>10. They kill pests that damage crops, ensuring healthy plant growth.<br/>11. Kharif (Rainy) and Rabi (Winter).<br/>12. Pongal, Baisakhi, Holi, Diwali, Nabanya, and Bihu.<br/>13. Selection of seeds, soil preparation, irrigation, and protection from pests.<br/>14. Harvesting is the cutting of mature crops, done manually or by machines.<br/>15. To maintain soil fertility by replenishing different nutrients.<br/>16. Growing two or more crops together on the same piece of land.<br/>17. To let the soil naturally regain its lost nutrients over time.<br/>18. Fish is a rich source of proteins and Vitamin D (Cod liver oil).<br/>19. Honey is rich in sugars (fructose/glucose), water, minerals, and enzymes.<br/>20. They provide milk, meat, eggs, and help in agricultural tasks (draught animals).</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync("client/data/content/c8-sci-6.ts", content, "utf8");
console.log("Successfully updated Chapter 6 content.");
