import { ChapterContent } from "../types";

const themeColor = "#FF1744"; // Chapter 7 theme (Premium Red)

export const c7Civ7: ChapterContent = {
  id: "c7-civ-7",
  number: 7,
  title: "Markets Around Us",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>A market is a place where we go to buy many things—vegetables, soap, toothpaste, masala, bread, rice, dal, clothes, notebooks, biscuits, etc. There are many kinds of markets that we may visit for our everyday needs.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Weekly Market</h3>
            <p>A weekly market is so-called because it is held on a specific day of the week. Weekly markets do not have permanent shops. Traders set up shops for the day and then close them up in the evening.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Shops in the Neighbourhood</h3>
            <p>Many shops in our neighbourhoods sell goods and services. We may buy milk from the dairy, groceries from departmental stores, or stationery, eatables or medicines from other shops.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Shopping Complexes and Malls</h3>
            <p>In urban areas, we also have multi-storeyed air-conditioned buildings with shops on different floors, known as malls. These urban markets sell both branded and non-branded goods.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Chain of Markets</h3>
            <p>Goods are produced in factories, on farms and in homes. However, we don’t buy directly from them. The people in between the producer and the final consumer are the traders.</p>
        </div>
    `,
  htmlExercises: {
    "c7c7-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. In what ways is a hawker different from a shop owner?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> A <b>hawker</b> moves with a cart; a <b>shop owner</b> has a permanent location.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. Compare weekly markets and shopping complexes:</p>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; color: #fff; margin-top: 10px; font-size: 0.85em;">
                                <thead>
                                    <tr style="background-color: ${themeColor}; color: #fff;">
                                        <th style="padding: 5px; border: 1px solid #555;">Market</th>
                                        <th style="padding: 5px; border: 1px solid #555;">Goods</th>
                                        <th style="padding: 5px; border: 1px solid #555;">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Weekly</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">Unbranded</td>
                                        <td style="padding: 5px; border: 1px solid #555;">Cheap</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Complex</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">Branded</td>
                                        <td style="padding: 5px; border: 1px solid #555;">High</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. How is a chain of markets formed?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Goods go from <b>Producer</b> &rarr; <b>Wholesaler</b> &rarr; <b>Retailer</b> &rarr; <b>Consumer</b>.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. ‘All persons have equal rights to visit any shop.’ Is this true for malls?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Legally yes, but poor people often feel unwelcome in expensive malls.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q5. ‘Buying and selling can take place without going to a market.’ Explain.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> We can order goods over the <b>internet</b> or phone using apps.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction:
    "There are many kinds of markets that we visit for our everyday needs.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7c7-mcq-1",
      question:
        "A market that is held on a specific day of the week is called:",
      options: [
        "Neighbourhood shop",
        "Weekly market",
        "Mall",
        "Wholesale market",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-2",
      question: "Shop owners in weekly markets are usually:",
      options: [
        "Big Businessmen",
        "Small traders",
        "Government officers",
        "Farmers",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-3",
      question:
        "Multi-storeyed air-conditioned buildings with shops are called:",
      options: ["Shacks", "Malls", "Warehouses", "Factories"],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-4",
      question: "Goods sold in malls are usually:",
      options: ["Cheap", "Branded and expensive", "Used items", "Home-made"],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-5",
      question: "Who is a wholesale trader?",
      options: [
        "One who sells directly to consumers",
        "One who buys in large quantities",
        "One who produces goods",
        "One who works in a mall",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-6",
      question:
        "The last link in the chain of markets who sells to consumers is:",
      options: ["Wholesaler", "Retailer", "Producer", "Agent"],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-7",
      question: "Why are things cheaper in weekly markets?",
      options: [
        "They are of bad quality",
        "They have no shop rent or electricity bills",
        "They are sold by the government",
        "They are old",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-8",
      question: "Digital payment and e-commerce allow us to buy things from:",
      options: ["Home", "Forest", "School", "All of these"],
      correctAnswer: "d",
    },
    {
      id: "c7c7-mcq-9",
      question: "Traders act as links between producers and ____.",
      options: ["Government", "Consumers", "Police", "Other producers"],
      correctAnswer: "b",
    },
    {
      id: "c7c7-mcq-10",
      question: "Profit margin is generally highest for:",
      options: [
        "Weekly market traders",
        "Retailers in malls",
        "Wholesalers",
        "Hawkers",
      ],
      correctAnswer: "b",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7c7-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
