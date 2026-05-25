import { ChapterContent } from "../types";

const themeColor = "#FF8A65";

export const sstHis1: ChapterContent = {
  id: "sst-his-1",
  number: 1,
  title: "The Rise of Nationalism in Europe",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">Imagine a world where your identity wasn't 'French', 'German', or 'Indian', but just the property of a King. In the 19th century, this changed. People in Europe started feeling a sense of shared identity and history. They wanted their own united, independent countries. This feeling is called Nationalism!</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Nationalism:</b> A strong feeling of pride, love, and loyalty towards one's own country and people, leading to a desire for a unified, independent nation.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Nation-State:</b> A country where the majority of its citizens share a common identity, history, and culture, and have their own sovereign government.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Absolutist:</b> A system of government where the ruler (like a King or Emperor) has unrestricted, absolute power. No checks, no balances.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Utopian:</b> A vision of a society that is so ideal and perfect that it is very unlikely to actually exist in reality.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Plebiscite:</b> A direct vote by all the people of a region to accept or reject a proposal.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Suffrage:</b> The right to vote.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Conservatism:</b> A political philosophy that stressed the importance of tradition, established institutions (like the Church and Monarchy), and preferred gradual development over quick change.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">The French Revolution (1789) was the first clear expression of nationalism. It transferred power from the monarch to a body of French citizens.</li>
                <li style="margin-bottom: 8px;">Napoleon Bonaparte conquered much of Europe. He spread revolutionary ideas but also took away political freedom, which made people eventually hate him.</li>
                <li style="margin-bottom: 8px;">The Civil Code of 1804 (Napoleonic Code) did away with all privileges based on birth, established equality before the law, and secured the right to property.</li>
                <li style="margin-bottom: 8px;">After Napoleon's defeat in 1815, European governments returned to Conservatism. They wanted to restore monarchies and crush purely democratic ideas.</li>
                <li style="margin-bottom: 8px;">Giuseppe Mazzini was an Italian revolutionary who formed 'Young Italy' and 'Young Europe' to unite Italy into a single republic.</li>
                <li style="margin-bottom: 8px;">The unification of Germany (1871) was led by Otto von Bismarck, the Chief Minister of Prussia, using the policy of 'Blood and Iron'.</li>
                <li style="margin-bottom: 8px;">The unification of Italy (1861) was achieved through the efforts of Mazzini, Count Cavour, and Giuseppe Garibaldi. Victor Emmanuel II became the king.</li>
                <li style="margin-bottom: 8px;">The Balkans region became a major source of nationalist tension in Europe, eventually leading to the First World War in 1914.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">The 19th century saw the emergence of nationalism as a powerful force across Europe. The French Revolution paved the way by introducing concepts of citizens’ rights and a unified nation. Despite conservative attempts to restore the old order post-1815, liberal and nationalist ideas continued to spread through secret societies. The powerful unification movements of Germany and Italy fundamentally changed the map of Europe. In the early 20th century, nationalism combined with imperialism led Europe to disaster (World War I).</p>
        </div>
    `,
  htmlExercises: {
    "sh1-ex-write": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Q1. Write a note on:</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(a) Giuseppe Mazzini</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">An Italian revolutionary who founded secret societies like <b>Young Italy</b> and <b>Young Europe</b>. He believed in a unified Italian republic, prompting Metternich to call him the "most dangerous enemy of our social order."</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(b) Count Camillo de Cavour</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">The Chief Minister of Sardinia-Piedmont who led the Italian unification. Through a diplomatic alliance with France, he successfully defeated Austrian forces in 1859.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(c) The Greek war of independence</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">A successful struggle by Greeks against the Ottoman Empire starting in 1821. Supported by Western Europeans, it ended with the <b>Treaty of Constantinople (1832)</b> recognizing Greece as independent.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(d) Frankfurt parliament</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">An assembly of middle-class professionals convened in May 1848 at St. Paul's Church to draft a constitution for a unified Germany. It failed after the Prussian king rejected the crown.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(e) The role of women in nationalist struggles</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">Women formed political clubs, published newspapers, and joined protests. Despite active participation, they were denied voting rights and only admitted as observers at the Frankfurt Parliament.</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q2. What steps did the French revolutionaries take to create a sense of collective identity among the French people?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>La Patrie & Le Citoyen:</b> Emphasized the idea of a united fatherland and equal rights under a constitution.</li>
                        <li style="margin-bottom: 5px;"><b>New Flag:</b> Replaced the former royal standard with the new French tricolour.</li>
                        <li style="margin-bottom: 5px;"><b>National Assembly:</b> Renamed the Estates General after electing it by active citizens.</li>
                        <li style="margin-bottom: 5px;"><b>Patriotic Symbols:</b> Composed new hymns, took oaths, and celebrated martyrs to unite the people.</li>
                        <li style="margin-bottom: 5px;"><b>Common Language:</b> Discouraged regional dialects and promoted French as the national language.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q3. Who were Marianne and Germania? What was the importance of the way in which they were portrayed?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Marianne:</b> The female allegory of France, representing liberty and the republic with a red cap and tricolour.</li>
                        <li style="margin-bottom: 5px;"><b>Germania:</b> The female allegory of Germany, wearing a crown of oak leaves symbolizing heroism.</li>
                        <li style="margin-bottom: 5px;"><b>Importance:</b> They personified abstract ideas of nationhood, helping citizens connect emotionally and build national unity.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q4. Briefly trace the process of German unification.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Failed 1848 Attempt:</b> Liberal efforts to unite Germany under a parliament were crushed by the monarchy and military.</li>
                        <li style="margin-bottom: 5px;"><b>Prussian Leadership:</b> Prussia took the lead under Chief Minister <b>Otto von Bismarck</b>.</li>
                        <li style="margin-bottom: 5px;"><b>Blood & Iron Policy:</b> Bismarck fought three wars over seven years (with Denmark, Austria, and France) to achieve victory.</li>
                        <li style="margin-bottom: 5px;"><b>Proclamation:</b> In January 1871, Prussian King William I was proclaimed German Emperor at Versailles.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q5. What changes did Napoleon introduce to make the administrative system more efficient in the territories ruled by him?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Napoleonic Code (1804):</b> Abolished privileges based on birth, established equality before law, and secured property rights.</li>
                        <li style="margin-bottom: 5px;"><b>Administrative Reforms:</b> Simplified divisions, abolished the feudal system, and freed peasants from serfdom.</li>
                        <li style="margin-bottom: 5px;"><b>Economic & Transport:</b> Removed guild restrictions in towns, improved transport, and introduced uniform weights and measures.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q6. Write in brief the impact of Indian revolutionary movement on Jammu and Kashmir.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Political Awareness:</b> Inspired local youth to demand basic rights and administrative reforms.</li>
                        <li style="margin-bottom: 5px;"><b>Reading Room Party:</b> Formed in Srinagar in 1930 as a discussion forum to raise voice against autocracy.</li>
                        <li style="margin-bottom: 5px;"><b>Anti-Dogra Struggle:</b> The Indian freedom struggle energized protests against the absolute rule of the Dogra dynasty.</li>
                    </ul>
                </div>
            </div>
        `,
    "sh1-ex-discuss": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q1. Explain what is meant by the 1848 revolution of the liberals. What were the political, social and economic ideas supported by the liberals?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-bottom: 8px;"><b>Meaning:</b> An uprising led by the educated middle-classes in Europe in 1848, demanding constitutionalism, national unification, and parliament-based nation-states.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-bottom: 5px;"><b>Ideas Supported:</b></p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Political:</b> Demand for a constitution, representative government, and freedom of the press and association.</li>
                        <li style="margin-bottom: 5px;"><b>Social:</b> End of class privileges, serfdom, and bonded labor.</li>
                        <li style="margin-bottom: 5px;"><b>Economic:</b> Freedom of markets and removal of state restrictions on the movement of goods and capital.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q2. Choose three examples to show the contribution of culture to the growth of nationalism in Europe.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 8px;"><b>Romanticism:</b> A cultural movement emphasizing emotions and heritage (like folk songs) to build a sense of a shared past.</li>
                        <li style="margin-bottom: 8px;"><b>Language:</b> Polish was used in church services as a weapon of resistance against Russian rule, despite severe bans.</li>
                        <li style="margin-bottom: 8px;"><b>Music:</b> Karol Kurpinski used traditional Polish dances (like Polonaise) in his operas to inspire national pride.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q3. Through a focus on any two countries, explain how nations developed over the nineteenth century.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 8px;"><b>Germany:</b> Unified top-down by Prussia's Chief Minister Otto von Bismarck using the army ("Blood and Iron") through three successful wars.</li>
                        <li style="margin-bottom: 8px;"><b>Italy:</b> Unified through Mazzini's ideas, Cavour's diplomacy, and Garibaldi's military campaigns. Victor Emmanuel II became King in 1861.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q4. Explain briefly the role of army in the expansion and consolidation of the erstwhile princely state of Jammu and Kashmir.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Expansion:</b> General Zorawar Singh led campaigns to annex Ladakh, Baltistan, and Gilgit.</li>
                        <li style="margin-bottom: 5px;"><b>Consolidation:</b> The army built forts/garrisons and secured key trade routes (like the Silk Route) to maintain state control.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q5. How was the history of nationalism in Britain unlike the rest of Europe?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Slow Process:</b> It was a long political process, not a sudden revolution or war.</li>
                        <li style="margin-bottom: 5px;"><b>Parliamentary Act:</b> The English Parliament took power from the monarchy in 1688 and formed the UK in 1707.</li>
                        <li style="margin-bottom: 5px;"><b>Forced Union:</b> Scotland and Ireland were forcibly integrated, suppressing their local culture.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q6. Why did nationalist tensions emerge in the Balkans?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Diverse Region:</b> A geographically and ethnically diverse region inhabited by 'Slavs' under Ottoman rule.</li>
                        <li style="margin-bottom: 5px;"><b>Ottoman Decline:</b> As the Ottoman Empire weakened, romantic nationalism spread, making the region highly unstable.</li>
                        <li style="margin-bottom: 5px;"><b>Big Power Rivalry:</b> European powers (Russia, Germany, Austria) fought for control, triggering World War I.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q7. Write a detailed note on the condition of the peasants and labourers in Jammu and Kashmir during the first half of the 19th century?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Heavy Taxes:</b> Peasants were taxed on almost everything, including crops, cattle, and marriages.</li>
                        <li style="margin-bottom: 5px;"><b>Begar (Forced Labour):</b> They were forced to carry military supplies across high mountains without any pay.</li>
                        <li style="margin-bottom: 5px;"><b>Landless Status:</b> The state owned all agricultural land, leaving peasants with no ownership rights.</li>
                        <li style="margin-bottom: 5px;"><b>Debt Trap:</b> High taxes forced them to borrow from moneylenders, trapping them in debt.</li>
                    </ul>
                </div>
            </div>
        `,
  },
  introduction:
    "In this chapter, we explore the rise of nationalism in Europe in the 19th century.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "sh1-mcq-1",
      question:
        "Who was called the 'most dangerous enemy of our social order' by Metternich?",
      options: [
        "Giuseppe Mazzini",
        "Count Cavour",
        "Otto von Bismarck",
        "Napoleon",
      ],
      correctAnswer: "a",
    },
    {
      id: "sh1-mcq-2",
      question:
        "Which treaty recognized Greece as an independent nation in 1832?",
      options: [
        "Treaty of Vienna",
        "Treaty of Versailles",
        "Treaty of Constantinople",
        "Treaty of Paris",
      ],
      correctAnswer: "c",
    },
    {
      id: "sh1-mcq-3",
      question:
        "Who was the Chief Minister of Prussia who led German unification?",
      options: [
        "Giuseppe Garibaldi",
        "Otto von Bismarck",
        "Victor Emmanuel II",
        "Count Cavour",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh1-mcq-4",
      question: "The Civil Code of 1804 in France is commonly known as the:",
      options: [
        "French Code",
        "Napoleonic Code",
        "Bismarck Code",
        "National Code",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh1-mcq-5",
      question: "Who was proclaimed the Emperor of Germany in January 1871?",
      options: [
        "William I",
        "William II",
        "Friedrich Wilhelm IV",
        "Napoleon Bonaparte",
      ],
      correctAnswer: "a",
    },
    {
      id: "sh1-mcq-6",
      question:
        "What does the female allegory 'Germania' wear on her head as a symbol of heroism?",
      options: [
        "Crown of thorns",
        "Crown of oak leaves",
        "Golden crown",
        "Red cap",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh1-mcq-7",
      question: "In which year did the French Revolution take place?",
      options: ["1789", "1804", "1815", "1848"],
      correctAnswer: "a",
    },
    {
      id: "sh1-mcq-8",
      question: "Who formed the secret society called 'Young Italy'?",
      options: [
        "Count Cavour",
        "Giuseppe Mazzini",
        "Giuseppe Garibaldi",
        "Otto von Bismarck",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh1-mcq-9",
      question:
        "A direct vote by which all the people of a region are asked to accept or reject a proposal is called:",
      options: ["Plebiscite", "Suffrage", "Veto", "Election"],
      correctAnswer: "a",
    },
    {
      id: "sh1-mcq-10",
      question: "Who was proclaimed King of united Italy in 1861?",
      options: [
        "Victor Emmanuel II",
        "Giuseppe Garibaldi",
        "Mazzini",
        "Cavour",
      ],
      correctAnswer: "a",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "sh1-ex-write",
      name: "Write in brief",
      questions: [],
    },
    {
      id: "sh1-ex-discuss",
      name: "Discuss",
      questions: [],
    },
  ],
  examples: [],
};
