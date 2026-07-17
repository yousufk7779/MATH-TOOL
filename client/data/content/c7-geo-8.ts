import { ChapterContent } from "../types";

const themeColor = "#FF007F"; // Matches getChapterGradient for c7-geo-8 (Rose)

export const c7Geo8: ChapterContent = {
  id: "c7-geo-8",
  number: 8,
  title: "Jammu & Kashmir - Life and People",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">The Union Territory of Jammu and Kashmir is characterized by extreme geographical and climatic diversity. Divided into different physical zones, the region transitions from the sub-tropical plains of Jammu to the temperate, bowl-shaped Valley of Kashmir, and alpine heights. This geography deeply influences the agriculture, food habits, and lifestyles of its people.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. The Jammu Plains and Hills</h3>
            <p style="line-height: 1.6; font-size: 15px;">The outer plains of Jammu are an extension of the Indo-Gangetic plains, locally known as <b>Andarwah</b> and <b>Bajwat</b>. These plains are drained by rivers like the Tawi, Chenab, and Ravi.</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Climate & Soil:</b> Sub-tropical climate with hot summers and mild winters. The soil is fertile alluvial, but the plains are dissected by seasonal, sandy-bedded ravines locally called <b>Khads</b>.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Agriculture:</b> The staple food of the Jammu region is <b>wheat</b>. Double-cropping is common, with wheat, mustard, and pulses grown in winter (Rabi), and rice and maize grown in summer (Kharif). R.S. Pura is highly famous for its premium quality Basmati rice.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. The Kashmir Valley</h3>
            <p style="line-height: 1.6; font-size: 15px;">Kashmir is an oval basin surrounded by the Pir Panjal range in the south and the Great Himalayas in the north, drained by the Jhelum River and its tributaries, such as the <b>Lidder</b>.</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Climate & Agriculture:</b> Mild, wet summers and cold, snowy winters. The staple food of the Kashmiri people is <b>rice</b>. High-quality rice is grown in the valley, along with maize on the mountain slopes.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Temperate Fruits:</b> Kashmir is the fruit bowl of India, famous for temperate fruits such as apples, pears, cherries, apricots, plums, peaches, walnuts, and almonds.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Saffron Cultivation:</b> Saffron (known locally as <i>Zafran</i>) is a legendary cash crop grown in the unique lacustrine clay soil beds called <b>Karewas</b>, particularly in the Pampore region.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Cuisine and Culture:</b> Traditional Kashmiri cuisine is famous for a multi-course meat banquet called <b>Wazwan</b>. People drink a traditional green tea called <i>Kahwa</i> and wear loose woolen gowns called <i>Pheran</i> to stay warm.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Hydroelectric Power Potential</h3>
            <p style="line-height: 1.6; font-size: 15px;">Due to the presence of perennial, snow-fed rivers flowing through steep, mountainous gorges, Jammu and Kashmir holds massive hydropower potential. Several run-of-the-river hydroelectric power projects supply electricity to the region and neighboring states:</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Chenab Basin:</b> Houses massive projects like the <b>Salal Project</b> (Reasi), <b>Baglihar Project</b> (Ramban), and <b>Dulhasti Project</b> (Kishtwar).</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Jhelum Basin:</b> Houses major projects like the <b>Uri Hydroelectric Project</b> and the <b>Lower Jhelum Project</b>.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Kishanganga Basin:</b> Features the <b>Kishanganga Project</b> in Bandipora.</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7g8-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Mention the main crops grown in Jammu and Kashmir?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The main crops grown are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Rice:</b> Staple food crop of Kashmir.</li>
                            <li><b>Wheat:</b> Staple food crop of Jammu.</li>
                            <li><b>Main crops:</b> Maize, barley, pulses, oilseeds, and vegetables are also grown.</li>
                            <li><b>Saffron:</b> Cash crop grown on the Karewas of Pampore.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Give a list of temperate fruits of Kashmir?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The key temperate fruits of Kashmir are **apples, pears, cherries, plums, peaches, apricots, walnuts, and almonds**.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Mention the local names of Jammu Plains.?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The plains are locally called **Andarwah** and **Bajwat**. The dry, sandy-bedded ravines in these plains are called **Khads**.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) Name the major power projects in Jammu and Kashmir?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The major power projects are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Salal Project</b> (on Chenab River)</li>
                            <li><b>Baglihar Project</b> (on Chenab River)</li>
                            <li><b>Dulhasti Project</b> (on Chenab River)</li>
                            <li><b>Uri Project</b> (on Jhelum River)</li>
                            <li><b>Kishanganga Project</b> (on Kishanganga River)</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Fill in the blanks:</h3>
                
                <div style="margin-bottom: 15px; color: #E0E0E0; font-size: 15px; line-height: 1.6;">
                    <p>1. The staple food of Jammu is <b style="color: ${themeColor};">wheat</b>.</p>
                    <p>2. The staple food of Kashmir is <b style="color: ${themeColor};">rice</b>.</p>
                    <p>3. Lidder is the main tributary of river <b style="color: ${themeColor};">Jhelum</b>.</p>
                    <p>4. Saffron is mainly found in <b style="color: ${themeColor};">Karewas (or Pampore)</b>.</p>
                    <p>5. <b style="color: ${themeColor};">Wazwan</b> is cuisine of Kashmiri people.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we study the unique physical geography, rich agriculture, diverse culture, and massive hydropower resources of Jammu and Kashmir.",
  definitions: [
    {
      term: "Karewas",
      description:
        "Lacustrine clay deposits and alluvial tablelands of Kashmir Valley, highly famous for saffron cultivation.",
    },
    {
      term: "Khads",
      description:
        "Seasonal, sandy-bedded streams and ravines found in the outer plains of Jammu.",
    },
    {
      term: "Wazwan",
      description:
        "A traditional multi-course meal in Kashmiri cuisine, regarded as an essential element of Kashmiri cultural identity.",
    },
    {
      term: "Andarwah & Bajwat",
      description:
        "Local terms for the fertile alluvial plains of Jammu UT bordering the rivers.",
    },
  ],
  keyPoints: [
    "Jammu and Kashmir UT is divided geographically into distinct zones ranging from sub-tropical plains to sub-alpine and alpine regions.",
    "Wheat is the staple food in Jammu, whereas Rice is the staple food in Kashmir.",
    "Kashmir is famous as a major producer of temperate fruits like apples, cherries, apricots, walnuts, and almonds.",
    "Saffron (Zafran) is grown primarily in the Karewas of the Pampore area.",
    "The Lidder River, which flows through the tourist resort Pahalgam, is a major tributary of the Jhelum River.",
    "Run-of-the-river hydroelectric power projects such as Salal, Baglihar, and Uri harness J&K's water resource potential.",
  ],
  formulas: [],
  crux: [
    "Plains of Jammu: Known as Andarwah and Bajwat, dissected by Khads, wheat is the staple crop.",
    "Kashmir Basin: Drained by Jhelum & its tributary Lidder, rice is the staple crop.",
    "Kashmir Fruits & Saffron: Apples, walnuts, cherries, and saffron in Karewas.",
    "Hydroelectricity: Major projects include Baglihar, Salal, Uri, and Kishanganga.",
  ],
  exercises: [
    {
      id: "c7g8-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cg8-mcq-1",
      question: "The staple food crop of the Jammu region is:",
      options: ["Rice", "Wheat", "Maize", "Barley"],
      correctAnswer: "b",
      explanation:
        "Wheat is the major staple crop grown and eaten in the outer plains of Jammu.",
    },
    {
      id: "cg8-mcq-2",
      question: "The staple food crop of the Kashmiri people in the valley is:",
      options: ["Wheat", "Rice", "Maize", "Millets"],
      correctAnswer: "b",
      explanation:
        "Rice is the primary crop and staple food of the temperate Kashmir Valley.",
    },
    {
      id: "cg8-mcq-3",
      question:
        "Saffron is mainly cultivated in Kashmir on special clay soil formations called:",
      options: ["Karewas", "Khads", "Deltas", "Moraines"],
      correctAnswer: "a",
      explanation:
        "Karewas are unique lacustrine clay terraces highly suitable for saffron farming.",
    },
    {
      id: "cg8-mcq-4",
      question:
        "The seasonal, dry, sandy-bedded ravines in the outer plains of Jammu are locally called:",
      options: ["Karewas", "Khads", "Moraines", "Gompas"],
      correctAnswer: "b",
      explanation:
        "Khads are sandy-bedded seasonal streams that segment the outer plains of Jammu.",
    },
    {
      id: "cg8-mcq-5",
      question:
        "Lidder, a key stream flowing through Pahalgam, is a tributary of which river?",
      options: ["Chenab", "Jhelum", "Ravi", "Indus"],
      correctAnswer: "b",
      explanation:
        "The Lidder River is a principal right-bank tributary of the Jhelum River in Kashmir.",
    },
    {
      id: "cg8-mcq-6",
      question:
        "The traditional loose, long woolen gown worn by Kashmiri people is the:",
      options: ["Wazwan", "Pheran", "Kahwa", "Kimono"],
      correctAnswer: "b",
      explanation:
        "Pheran is the traditional gown worn in winter to protect against severe cold.",
    },
    {
      id: "cg8-mcq-7",
      question:
        "Kashmiri green tea flavored with almonds, cardamom, and cinnamon is:",
      options: ["Wazwan", "Kahwa", "Pheran", "Lassi"],
      correctAnswer: "b",
      explanation:
        "Kahwa is the traditional green tea served to guests in Kashmir.",
    },
    {
      id: "cg8-mcq-8",
      question:
        "The traditional multi-course meat feast in Kashmiri cuisine is called:",
      options: ["Wazwan", "Kahwa", "Karewa", "Pheran"],
      correctAnswer: "a",
      explanation:
        "Wazwan is a grand, traditional multi-course meal reflecting Kashmiri culture.",
    },
    {
      id: "cg8-mcq-9",
      question:
        "The Salal Hydroelectric power project in J&K is built on which river?",
      options: ["Jhelum", "Chenab", "Ravi", "Tawi"],
      correctAnswer: "b",
      explanation:
        "Salal is a run-of-the-river power project constructed on the Chenab River in Reasi.",
    },
    {
      id: "cg8-mcq-10",
      question:
        "The fertile alluvial outer plains of Jammu are locally called:",
      options: ["Bajwat and Andarwah", "Karewas", "Gompas", "Khads"],
      correctAnswer: "a",
      explanation:
        "Bajwat and Andarwah are local names for the outer plains of the Jammu region.",
    },
  ],
  summary: [
    "The chapter 'Jammu & Kashmir - Life and People' provides a regional study of J&K's physical geography, diverse climates, crops, temperate fruits, traditional cultures (such as Wazwan cuisine), and key economic drivers like water resource exploitation through hydroelectric power plants.",
  ],
};
