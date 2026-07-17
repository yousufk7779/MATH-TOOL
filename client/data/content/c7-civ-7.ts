import { ChapterContent } from "../types";

const themeColor = "#FF1744"; // Matches getChapterGradient for c7-civ-7 (Premium Red)

export const c7Civ7: ChapterContent = {
  id: "c7-civ-7",
  number: 7,
  title: "Markets Around Us",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">We visit markets to buy many things—vegetables, soap, toothpaste, masala, bread, rice, and clothes. This chapter introduces different types of marketplaces: weekly markets, neighborhood shops, shopping complexes, and malls, and explains the chain of markets that links producers to consumers.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Weekly Markets</h3>
            <p style="line-height: 1.6; font-size: 15px;">A weekly market is not a permanent shop but is held on a **specific day of the week**. Traders set up temporary stalls for the day. Things are **much cheaper** here because traders do not have to pay rent, electricity, or worker wages, and competition keeps prices low.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Shops in the Neighborhood</h3>
            <p style="line-height: 1.6; font-size: 15px;">Unlike weekly markets, neighborhood shops are **permanent structures**. They are very convenient because they are near our homes and open all week. Buyers and sellers know each other, and goods can also be purchased on credit (to be paid later).</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Shopping Complexes and Malls</h3>
            <p style="line-height: 1.6; font-size: 15px;">These are large, multi-storey, air-conditioned urban buildings with shops on different floors. They sell both branded and non-branded goods. Branded products are promoted through advertisements, claim high quality, and are highly expensive.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. The Chain of Markets</h3>
            <p style="line-height: 1.6; font-size: 15px;">Goods are produced in factories or farms but are not sold directly to consumers. A **chain of markets** links them: first, a **wholesale trader** buys goods in large quantities, then sells them to smaller traders, and finally, **retailers** (hawkers or neighborhood shopkeepers) buy them and sell them to consumers.</p>
        </div>
    `,
  htmlExercises: {
    "c7c7-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. In what ways is a hawker different from a shop owner?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Hawkers and shop owners differ in the following ways:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; text-align: left; font-size: 14px;">
                        <thead>
                            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                                <th style="padding: 8px; color: ${themeColor};">Feature</th>
                                <th style="padding: 8px; color: ${themeColor};">Hawker</th>
                                <th style="padding: 8px; color: ${themeColor};">Shop Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Structure</td>
                                <td style="padding: 8px;">No permanent shop (sells on streets or carts)</td>
                                <td style="padding: 8px;">Has a permanent, licensed shop in a fixed place</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Expenses</td>
                                <td style="padding: 8px;">Very low (no rent or electricity bills)</td>
                                <td style="padding: 8px;">Higher (pays rent, electricity, and taxes)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Products & Price</td>
                                <td style="padding: 8px;">Sells cheap, unbranded daily goods</td>
                                <td style="padding: 8px;">Sells both branded and costlier goods</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. Compare and contrast a weekly market and a shopping complex on the following: Kind of goods sold, Prices of goods, Sellers, Buyers.</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; text-align: left; font-size: 14px;">
                        <thead>
                            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                                <th style="padding: 8px; color: ${themeColor};">Market Type</th>
                                <th style="padding: 8px; color: ${themeColor};">Kind of Goods Sold</th>
                                <th style="padding: 8px; color: ${themeColor};">Prices of Goods</th>
                                <th style="padding: 8px; color: ${themeColor};">Sellers</th>
                                <th style="padding: 8px; color: ${themeColor};">Buyers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Weekly Market</td>
                                <td style="padding: 8px;">Unbranded daily utilities (vegetables, utensils)</td>
                                <td style="padding: 8px;">Very low (cheap)</td>
                                <td style="padding: 8px;">Small local traders</td>
                                <td style="padding: 8px;">Low-income and local residents</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Shopping Complex</td>
                                <td style="padding: 8px;">Branded clothes, electronics, luxury items</td>
                                <td style="padding: 8px;">High (costlier)</td>
                                <td style="padding: 8px;">Big business owners, MNCs</td>
                                <td style="padding: 8px;">High-income, wealthy urban people</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. Explain how a chain of markets is formed. What purpose does it serve?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Formation:</b> Goods are produced on farms or in factories. First, a **wholesale trader** buys them in large quantities. Then, smaller **retailers** (shopkeepers or hawkers) buy them from wholesalers. Finally, consumers buy them. This sequence links producers to consumers in a **chain of markets**.</li>
                            <li><b>Purpose:</b> It makes goods produced in far-off places easily accessible in local neighborhoods and creates employment for many traders.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. 'All persons have equal rights to visit any shop in a marketplace.' Do you think this is true of shops with expensive products? Explain with examples.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Legally:</b> Yes, every citizen has equal rights to enter any public shop under the Constitution.</li>
                            <li><b>Practically:</b> No, it is not always true for expensive branded stores because poor people feel out of place and hesitate to enter. Sometimes, security guards or shopkeepers discriminate against poorly dressed people, judging them as unable to buy.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q5 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">5. 'Buying and selling can take place without going to a marketplace.' Explain this statement with the help of examples.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Buying and selling can happen without visiting physical shops due to modern technology:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Online Shopping:</b> We can browse and order clothes, books, or food using apps (like Amazon) and get them delivered home.</li>
                            <li style="margin-bottom: 8px;"><b>Phone Orders:</b> We can call local grocery or medical stores to order goods.</li>
                            <li><b>Digital Payments:</b> Credit cards and UPI make payments possible from anywhere.</li>
                        </ul>
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter introduces weekly markets, neighborhood shops, urban complexes, chain of markets, and modern e-commerce buying.",
  definitions: [
    {
      term: "Weekly Market",
      description: "A temporary market held once a week at a specific place.",
    },
    {
      term: "Wholesaler",
      description:
        "A trader who buys goods in large bulk quantities directly from producers and sells to other traders.",
    },
    {
      term: "Retailer",
      description:
        "A small trader who sells goods directly to final consumers (e.g., neighborhood shopkeeper).",
    },
  ],
  keyPoints: [
    "Weekly markets offer low-price goods due to high competition and low overhead costs.",
    "Neighborhood shops provide convenience and allow purchases on credit.",
    "Urban complexes sell expensive branded items targeted at wealthy buyers.",
    "Online shopping platforms represent a virtual market functioning without physical stores.",
  ],
  formulas: [],
  crux: [
    "Different market formats serve different socioeconomic consumer groups.",
    "A chain of markets transfers products from producers through wholesalers and retailers to consumers.",
    "Social inequality is reflected in the consumer base of weekly markets vs luxury malls.",
    "E-commerce allows transaction execution without physical market visits.",
  ],
  exercises: [
    {
      id: "c7c7-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc7-mcq-1",
      question: "A market that is held on a specific day of the week is a:",
      options: [
        "Shopping complex",
        "Weekly market",
        "Wholesale market",
        "Departmental store",
      ],
      correctAnswer: "b",
      explanation:
        "Weekly markets are held on one particular day of the week, with traders shifting locations daily.",
    },
    {
      id: "cc7-mcq-2",
      question: "In weekly markets, the price of goods is usually:",
      options: [
        "Extremely high",
        "Very cheap",
        "Doubled",
        "Fixed and non-negotiable",
      ],
      correctAnswer: "b",
      explanation:
        "Traders do not pay shop rent or worker wages, passing on savings as low prices.",
    },
    {
      id: "cc7-mcq-3",
      question:
        "A person who sells daily items on streets or using a pushcart is a:",
      options: [
        "Hawker",
        "Wholesale trader",
        "Factory owner",
        "Industrial exporter",
      ],
      correctAnswer: "a",
      explanation:
        "Hawkers are mobile retailers who carry goods to residential lanes on carts.",
    },
    {
      id: "cc7-mcq-4",
      question:
        "Which of the following describes a permanent neighborhood shop?",
      options: [
        "A temporary weekly stall",
        "A fixed structure with a permanent trade license",
        "A cart that moves around the city",
        "A blanket spread on a pavement",
      ],
      correctAnswer: "b",
      explanation:
        "Permanent shops operate from fixed roadside structures all through the week.",
    },
    {
      id: "cc7-mcq-5",
      question:
        "Large, multi-storey, air-conditioned urban buildings with shops on different floors are:",
      options: [
        "Weekly bazaars",
        "Shopping complexes and malls",
        "Neighborhood kiosks",
        "Wholesale mandis",
      ],
      correctAnswer: "b",
      explanation:
        "Malls are modern urban shopping complexes that house multiple brands.",
    },
    {
      id: "cc7-mcq-6",
      question:
        "A trader who buys goods in very large quantities from producers is a:",
      options: [
        "Retailer",
        "Wholesale trader",
        "Street hawker",
        "Final consumer",
      ],
      correctAnswer: "b",
      explanation:
        "Wholesalers purchase bulk loads from farms/factories and distribute them to smaller traders.",
    },
    {
      id: "cc7-mcq-7",
      question:
        "The final link in the chain who sells goods directly to the consumer is the:",
      options: ["Wholesaler", "Retailer", "Farmer", "Manufacturer"],
      correctAnswer: "b",
      explanation:
        "Retailers buy from wholesalers and sell to the public in small quantities.",
    },
    {
      id: "cc7-mcq-8",
      question:
        "What links producers and final consumers through a series of traders?",
      options: [
        "Chain of markets",
        "Food chain",
        "Water cycle",
        "Tectonic system",
      ],
      correctAnswer: "a",
      explanation:
        "The chain of markets refers to the interconnected network of wholesale and retail traders.",
    },
    {
      id: "cc7-mcq-9",
      question:
        "Buying and selling without visiting a physical market is enabled by:",
      options: [
        "Air mail",
        "E-commerce and online shopping",
        "Postal checks",
        "Library cards",
      ],
      correctAnswer: "b",
      explanation:
        "E-commerce sites (like Amazon) allow online ordering and home delivery of products.",
    },
    {
      id: "cc7-mcq-10",
      question:
        "A person who buys goods from the market for personal use is a:",
      options: ["Producer", "Consumer", "Wholesaler", "Distributor"],
      correctAnswer: "b",
      explanation:
        "Consumers are the final users of any product or service sold in the market.",
    },
  ],
  summary: [
    "The chapter 'Markets Around Us' contrasts weekly markets, neighborhood shops, and modern urban shopping malls. It explains the trading channels (chain of markets) that connect agricultural and industrial producers to consumers, and details virtual markets operating online.",
  ],
};
