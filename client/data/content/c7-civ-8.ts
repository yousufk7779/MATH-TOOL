import { ChapterContent } from "../types";

const themeColor = "#FF4DA6"; // Matches getChapterGradient for c7-civ-8 (Pink/Orange)

export const c7Civ8: ChapterContent = {
  id: "c7-civ-8",
  number: 8,
  title: "A Shirt in the Market",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">A shirt links the producer of cotton to the buyer of the shirt in a supermarket. Buying and selling take place at every step in this chain. This chapter follows this chain—from a cotton farm in Kurnool to a foreign supermarket—and examines whether everyone gets an equal share of the profits.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Cotton Farmer in Kurnool</h3>
            <p style="line-height: 1.6; font-size: 15px;">Cultivating cotton requires high inputs of fertilizers and pesticides. Small farmers like **Swapna** have to borrow money from local traders to buy these. Because of this debt, they are forced to sell their cotton to the trader at a **low price**, instead of the open market.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. The Putting-out System</h3>
            <p style="line-height: 1.6; font-size: 15px;">Cloth merchants at the Erode market distribute yarn to weavers based on orders received. The weavers weave the cloth in their homes on **looms**. This arrangement, where the merchant provides raw materials and buys the finished product, is called the **putting-out system**. It saves weavers from buying yarn but leaves them completely dependent on merchants who pay them very low rates.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. The Garment Exporting Factory</h3>
            <p style="line-height: 1.6; font-size: 15px;">Garment exporters buy cloth from merchants and stitch it into shirts. They sell these shirts to foreign businesspersons (e.g., from the USA). To make profits, the factories employ workers on a **temporary basis**, pay them **low wages**, and make them work long hours under intense pressure.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. Inequality in the Market</h3>
            <p style="line-height: 1.6; font-size: 15px;">The market chain is highly unequal. Big foreign retailers and businesspersons make **huge profits** selling shirts in supermarkets, and garment exporters make moderate profits. In contrast, the actual producers—small farmers and weavers—along with factory workers, earn barely enough to meet their daily needs.</p>
        </div>
    `,
  htmlExercises: {
    "c7c8-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. What made Swapna sell the cotton to the trader instead of selling at the Kurnool cotton market?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Swapna sold the cotton to the local trader because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;">She had borrowed ₹2,500 from the trader at a high interest rate to buy seeds and fertilizers for cultivation.</li>
                            <li>She had promised to sell all her cotton to him as a condition for the loan.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. Describe the conditions of employment as well as the wages of workers in the garment exporting factory. Do you think the workers get a fair deal?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Employment Conditions:</b> Workers are hired on a temporary basis (can be dismissed anytime), work long hours, and operate under high pressure to meet targets.</li>
                            <li style="margin-bottom: 8px;"><b>Wages:</b> They receive very low wages (the minimum wage). For example, a tailor earns about ₹3,000 per month.</li>
                            <li><b>Fair Deal:</b> No, they do not get a fair deal because they are underpaid, have no job security, and their hard work is exploited to make high profits for the owners.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. Think of something common that we use. It could be sugar, tea, milk, pen, paper, pencil, etc. Discuss through what chain of markets this reaches you. Can you think of the people that help in the production or trade?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Let's look at the market chain for **Milk**:</p>
                    <ol style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0; line-height: 1.6;">
                        <li style="margin-bottom: 8px;"><b>Dairy Farmers</b> collect milk from cows/buffaloes in rural areas.</li>
                        <li style="margin-bottom: 8px;"><b>Cooperatives</b> buy the milk at local village collection booths.</li>
                        <li style="margin-bottom: 8px;"><b>Processing Plants</b> pasteurize, pack, and seal the milk into packets.</li>
                        <li style="margin-bottom: 8px;"><b>Wholesale Distributors</b> transport the packets to various cities.</li>
                        <li style="margin-bottom: 8px;"><b>Retailers (booths or local shops)</b> purchase from wholesalers and sell to us (consumers).</li>
                    </ol>
                    <p style="color: #E0E0E0; margin-top: 10px;"><b style="color: ${themeColor};">People who help:</b> Dairy farmers, truck drivers, factory workers, wholesalers, and local shopkeepers.</p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. Arrange the statements given alongside in the correct order and then fill in the numbers in the cotton bolls accordingly. The first two have already been done for you.</h3>
                    <p style="color: #E0E0E0; font-weight: bold; margin-bottom: 10px;">Correct Sequential Order:</p>
                    <ol style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0; line-height: 1.6;">
                        <li style="margin-bottom: 5px;">Swapna sells the cotton to the trader.</li>
                        <li style="margin-bottom: 5px;">Trader sells cotton to the Ginning Mill.</li>
                        <li style="margin-bottom: 5px;">Ginning mill cleans the cotton and makes it into bales.</li>
                        <li style="margin-bottom: 5px;">Spinning mill buys the cotton and sells yarn to the yarn dealers.</li>
                        <li style="margin-bottom: 5px;">Yarn dealers or merchants give the yarn to the weavers.</li>
                        <li style="margin-bottom: 5px;">Weavers return with the cloth.</li>
                        <li style="margin-bottom: 5px;">Garment exporters buy the cloth from merchants for making shirts.</li>
                        <li style="margin-bottom: 5px;">The exporter sells shirts to the businessperson from the USA.</li>
                        <li style="margin-bottom: 5px;">Customers buy these shirts in a supermarket.</li>
                    </ol>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter follows the commercial journey of a cotton shirt, tracing the chain of markets and analyzing issues of social equality.",
  definitions: [
    {
      term: "Ginning Mill",
      description:
        "A factory where seeds are removed from cotton pods and the cotton is pressed into dense bales.",
    },
    {
      term: "Putting-out System",
      description:
        "An arrangement where merchants supply raw yarn to weavers and buy back the woven cloth.",
    },
    {
      term: "Garment Exporter",
      description:
        "A manufacturer who stitches cloth into readymade garments and exports them to foreign buyers.",
    },
  ],
  keyPoints: [
    "Small farmers are dependent on local traders for credit, forcing them to sell crops at low rates.",
    "Weavers work on looms inside their homes, saving factory setup costs but losing bargaining power.",
    "Garment exporters cut labor wages and hire temporary workers to maximize their profits.",
    "Supermarkets in foreign countries sell shirts at high markups, earning the largest share of the profit.",
  ],
  formulas: [],
  crux: [
    "The market chain links rural cotton farmers to wealthy global consumers.",
    "Power in the chain lies with buyers and merchants, leaving weavers and farmers vulnerable.",
    "Cooperatives (like weaver groups) are vital to help producers bypass exploitative middle-men.",
    "Market outcomes are unequal, reinforcing social and economic disparities.",
  ],
  exercises: [
    {
      id: "c7c8-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc8-mcq-1",
      question: "Who grows cotton on small patches of land in Kurnool?",
      options: [
        "Wholesaler",
        "Small farmer like Swapna",
        "Industrial exporter",
        "Weaver",
      ],
      correctAnswer: "b",
      explanation:
        "Small-scale farmers are the primary producers who plant and harvest cotton pods.",
    },
    {
      id: "cc8-mcq-2",
      question: "Where is the major cotton market in Andhra Pradesh located?",
      options: ["Hyderabad", "Kurnool", "Vijayawada", "Guntur"],
      correctAnswer: "b",
      explanation: "Kurnool is a major cotton trading hub in Andhra Pradesh.",
    },
    {
      id: "cc8-mcq-3",
      question: "Why do small farmers borrow money from local traders?",
      options: [
        "To buy luxury cars",
        "To buy seeds, fertilizers, and pesticides",
        "To build schools",
        "For overseas travel",
      ],
      correctAnswer: "b",
      explanation:
        "High input costs force poor farmers to seek credit from informal lenders.",
    },
    {
      id: "cc8-mcq-4",
      question:
        "A factory where cotton seeds are separated and cotton is pressed into bales is a:",
      options: [
        "Spinning mill",
        "Ginning mill",
        "Weaving cooperative",
        "Garment factory",
      ],
      correctAnswer: "b",
      explanation:
        "Ginning mills process raw cotton by cleaning it and pressing it into bales.",
    },
    {
      id: "cc8-mcq-5",
      question:
        "The system where merchants supply yarn and receive finished cloth from weavers is the:",
      options: [
        "Putting-out system",
        "Retail system",
        "Franchise system",
        "Direct sale system",
      ],
      correctAnswer: "a",
      explanation:
        "The putting-out system allows merchants to control raw materials and buy back cloth cheaply.",
    },
    {
      id: "cc8-mcq-6",
      question: "Which mill spins processed cotton bales into yarn threads?",
      options: [
        "Ginning mill",
        "Spinning mill",
        "Garment exporter",
        "Weaving loom",
      ],
      correctAnswer: "b",
      explanation:
        "Spinning mills buy cotton bales and turn them into spools of yarn.",
    },
    {
      id: "cc8-mcq-7",
      question: "Weavers weave yarn threads into cloth in their homes using:",
      options: [
        "Sewing machines",
        "Handlooms and powerlooms",
        "Printing presses",
        "Dyeing vats",
      ],
      correctAnswer: "b",
      explanation:
        "Looms are hand-operated or power-run machines used to weave threads into fabric.",
    },
    {
      id: "cc8-mcq-8",
      question:
        "In a garment exporting factory, cotton cloth is stitched into:",
      options: [
        "Iron rods",
        "Shirts and readymade clothes",
        "Paper boxes",
        "Plastic sheets",
      ],
      correctAnswer: "b",
      explanation:
        "Garment factories assemble, stitch, and pack readymade apparel for export.",
    },
    {
      id: "cc8-mcq-9",
      question:
        "Who buys shirts from exporters to sell in large supermarkets in the USA?",
      options: [
        "Small farmers",
        "Foreign businesspersons",
        "Local weavers",
        "Street hawkers",
      ],
      correctAnswer: "b",
      explanation:
        "Foreign retail buyers purchase large shipments of clothes from exporters.",
    },
    {
      id: "cc8-mcq-10",
      question: "In the market chain of a shirt, who makes the maximum profit?",
      options: [
        "Small cotton farmer",
        "Foreign businessperson/Large retailer",
        "Factory worker",
        "Local handloom weaver",
      ],
      correctAnswer: "b",
      explanation:
        "Large foreign retail chains command high prices in malls, capturing the highest profit margin.",
    },
  ],
  summary: [
    "The chapter 'A Shirt in the Market' traces the market chain from a cotton grower to an overseas consumer, examines the putting-out system of Erode weavers, details factory employment conditions, and highlights the unequal distribution of profits in commerce.",
  ],
};
