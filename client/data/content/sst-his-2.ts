import { ChapterContent } from "../types";

const themeColor = "#FF4081";

export const sstHis2: ChapterContent = {
  id: "sst-his-2",
  number: 2,
  title: "Nationalism in India",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">How did Indians, divided by language, religion, and caste, come together against the powerful British Empire? It didn't happen overnight. It was a long journey of shared struggles, powerful movements led by Mahatma Gandhi, and the realization that freedom is everyone's birthright. Let's trace India's inspiring path to independence.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Satyagraha:</b> A novel method of mass agitation introduced by Mahatma Gandhi. It literally means 'holding onto truth'. It emphasizes the power of truth and non-violent resistance without seeking revenge.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Rowlatt Act (1919):</b> A cruel law passed by the British that allowed them to arrest any Indian without trial for two years, to crush political activities.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Jallianwala Bagh Massacre (1919):</b> A horrific incident in Amritsar where General Dyer ordered troops to fire on a peaceful, unarmed crowd gathered to celebrate Baisakhi, killing hundreds.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Khilafat Movement:</b> A movement started by Indian Muslims (led by Ali brothers) to protect the power of the Ottoman Emperor (Khalifa) after WW1. Gandhi saw this as an opportunity to unite Hindus and Muslims.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Boycott:</b> The refusal to deal and associate with people, or participate in activities, or buy and use things; usually a form of protest (like burning foreign clothes).</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Purna Swaraj:</b> Complete Independence. This resolution was passed at the Lahore Session of the Congress in 1929, led by Jawaharlal Nehru.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">The First World War created huge economic problems in India: high taxes, price rise, and forced recruitment into the army, leading to extreme anger against the British.</li>
                <li style="margin-bottom: 8px;">Mahatma Gandhi returned to India from South Africa in 1915 and successfully organized Satyagraha movements in Champaran, Kheda, and Ahmedabad.</li>
                <li style="margin-bottom: 8px;">The Non-Cooperation Movement (1920-1922) urged Indians to surrender British titles, boycott British schools, courts, and foreign goods. It was called off after the violent Chauri Chaura incident.</li>
                <li style="margin-bottom: 8px;">The Civil Disobedience Movement (1930) started with the famous Salt March (Dandi March). Gandhi broke the unfair British Salt Law by boiling sea water to make salt.</li>
                <li style="margin-bottom: 8px;">In the cities, students and professionals led the movements. In the countryside, rich peasants, poor peasants, and tribals joined, each interpreting 'Swaraj' in their own way to fight their specific oppressors.</li>
                <li style="margin-bottom: 8px;">Business classes (like the Purshottamdas Thakurdas) supported the movement to get protection against foreign imports.</li>
                <li style="margin-bottom: 8px;">Women participated in large numbers in the Salt March, manufactured salt, and picketed foreign cloth shops.</li>
                <li style="margin-bottom: 8px;">Cultural symbols, folklore, songs (like Vande Mataram), and the tricolor flag played a huge role in uniting people and building the feeling of a single nation.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Indian nationalism grew out of the shared struggle against British colonial exploitation. Mahatma Gandhi transformed the freedom struggle into a mass movement through the powerful tool of Satyagraha. The Non-Cooperation Movement focused on boycotting British goods and institutions to paralyze their rule without violence. The Civil Disobedience movement broke British laws, most notably the Salt Law, showing that Indians would not accept unfair rules. A shared Indian identity was forged using cultural symbols, flags, literature, and folklore, bringing diverse groups together for 'Purna Swaraj'.</p>
        </div>
    `,
  htmlExercises: {
    "sh2-ex-write": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Q1. Explain:</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(a) Why growth of nationalism in the colonies is linked to an anti-colonial movement</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">In colonies, people discovered their unity during their struggle against oppression by colonial rulers. The shared hatred for foreign control acted as a common bond that united different social groups.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(b) How the First World War helped in the growth of the National Movement in India</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">The war created huge economic distress: high taxes, double prices, and forced recruitment into the army. Crop failures and influenza epidemics killed millions, creating massive public anger against British rule.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(c) Why Indians were outraged by the Rowlatt Act</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">It was passed hurriedly despite united opposition from Indian members. It gave the government power to repress political activity and arrest anyone without trial for two years.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(d) Why Gandhiji decided to withdraw the Non-Cooperation Movement</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">In February 1922, a peaceful demonstration turned violent at <b>Chauri Chaura</b> in Gorakhpur, where a crowd burned down a police station, killing 22 policemen. Gandhiji felt the movement was turning violent and satyagrahis needed proper training in non-violence.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(e) Different programs of the non-cooperation movement followed in Jammu and Kashmir</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;">This included the boycott of foreign cloth and promoting local fabrics (Kashmir silk and khadi), public demonstrations against oppressive taxes and state monopolies, and organizing meetings to highlight peasant rights and expressing solidarity with the national struggle.</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q2. What is meant by the idea of satyagraha?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">Satyagraha literally means <b>insistence on truth</b> or "truth-force". It is a unique method of non-violent protest based on two pillars:</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;">If the cause is true and the fight is against injustice, physical force is not required to defeat the oppressor.</li>
                        <li style="margin-bottom: 5px;">An oppressor can be persuaded to see the truth by appealing to their conscience, without any violence or vengeance.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Q3. Write a newspaper report on:</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(a) The Jallianwala Bagh massacre</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;"><b>Amritsar, 13 April 1919:</b> Today, a peaceful crowd gathered at Jallianwala Bagh to celebrate Baisakhi and protest the Rowlatt Act. General Dyer blocked all exit points and ordered troops to open fire on the unarmed gathering. Hundreds of men, women, and children were killed. Dyer declared his aim was to "produce a moral effect" and strike terror into satyagrahis.</p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px; font-size: 16px;">(b) The Simon Commission</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 0;"><b>Bombay, 1928:</b> The statutory commission led by Sir John Simon arrived in India today to review the constitutional system. However, it was met with black flags and loud chants of <b>"Go Back, Simon!"</b> because the commission has seven members, but not a single one is Indian. All political parties, including the Congress and Muslim League, participated in the protest.</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q4. Compare the images of Bharat Mata in this chapter with the image of Germania in Chapter 1.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Bharat Mata:</b> Portrayed as an ascetic figure (calm, composed, spiritual, and divine) holding a book, food, and clothing. Later, she was shown holding a tricolor flag with a lion and elephant as symbols of power.</li>
                        <li style="margin-bottom: 5px;"><b>Germania:</b> Portrayed as a heroic figure wearing a crown of oak leaves (representing heroism) and holding a sword ready for battle.</li>
                        <li style="margin-bottom: 5px;"><b>Comparison:</b> Bharat Mata represents eastern spirituality, peace, and maternal care, while Germania represents western strength, courage, and martial readiness.</li>
                    </ul>
                </div>
            </div>
        `,
    "sh2-ex-discuss": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q1. List all the different social groups which joined the Non-Cooperation Movement of 1921. Then choose any three and write about their hopes and struggles to show why they joined the movement.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;"><b>Social Groups:</b> Middle-class townspeople, peasants in Awadh, tribal peasants in Gudem Hills (Andhra Pradesh), and plantation workers in Assam.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-bottom: 5px;"><b>Three Chosen Groups:</b></p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 10px;"><b>Awadh Peasants:</b> Led by Baba Ramchandra. They struggled against high rents and landlord oppression. They wanted reduction of revenue, abolition of begar (forced labor), and social boycott of landlords.</li>
                        <li style="margin-bottom: 10px;"><b>Gudem Hill Tribals:</b> Led by Alluri Sitarama Raju. They struggled against British forest laws that banned grazing and collecting firewood. They joined to win back their traditional rights and forest access.</li>
                        <li style="margin-bottom: 10px;"><b>Assam Plantation Workers:</b> They were locked in tea gardens. Under Non-Cooperation, they broke the rules and headed home, hoping that "Gandhi Raj" was coming and they would be given land in their own villages.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q2. Discuss the Salt March to make clear why it was an effective symbol of resistance against colonialism.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Universal Item:</b> Salt was consumed by both the rich and the poor alike, making it a universal necessity.</li>
                        <li style="margin-bottom: 5px;"><b>Oppressive Tax:</b> The British monopoly and heavy tax on salt was the most oppressive face of colonial rule.</li>
                        <li style="margin-bottom: 5px;"><b>Open Defiance:</b> By marching 240 miles to Dandi and boiling seawater, Gandhi showed that unjust laws could be broken non-violently.</li>
                        <li style="margin-bottom: 5px;"><b>Mass Mobilization:</b> It successfully united diverse sections of Indian society in a shared struggle against British rule.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q3. Imagine you are a woman participating in the Civil Disobedience Movement. Explain what the experience meant to your life.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>A Sacred Duty:</b> Participating in the movement made me realize that serving the nation is a sacred duty for women, not just men.</li>
                        <li style="margin-bottom: 5px;"><b>Active Role:</b> I left my home to march with Gandhiji, manufactured salt, picketed liquor shops, and even went to jail.</li>
                        <li style="margin-bottom: 5px;"><b>Change in Status:</b> It gave me a new sense of pride, self-worth, and public status, breaking the traditional view that women belong only in the kitchen.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q4. Why did political leaders differ sharply over the question of separate electorates?</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Dr. B.R. Ambedkar:</b> Demanded separate electorates for Dalits to ensure their political representation, fearing they would otherwise be ignored by the Hindu majority.</li>
                        <li style="margin-bottom: 5px;"><b>Mahatma Gandhi:</b> Opposed this, believing that separate electorates would slow down the integration of Dalits into mainstream Hindu society.</li>
                        <li style="margin-bottom: 5px;"><b>Muslim Leaders (like Jinnah):</b> Wanted separate electorates for Muslims to protect their minority interests in a future Hindu-dominated independent India.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">Q5. Discuss how the cultural awakening led to the growth of feeling of nationalism in Jammu and Kashmir region.</p>
                    <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px;">
                        <li style="margin-bottom: 5px;"><b>Role of Press:</b> Local newspapers (like <i>Ranbir</i>) created awareness about political rights and administrative reforms.</li>
                        <li style="margin-bottom: 5px;"><b>Education Reform:</b> The spread of modern education led to the rise of an educated middle class that questioned absolute royal rule.</li>
                        <li style="margin-bottom: 5px;"><b>Religious Reform Associations:</b> Organizations like Anjuman-i-Nusrat-ul-Islam promoted social reform, cultural identity, and political consciousness.</li>
                        <li style="margin-bottom: 5px;"><b>Reading Room Party (1930):</b> Educated youths gathered in Srinagar to discuss social issues, acting as the spark for the popular movement against autocracy.</li>
                    </ul>
                </div>
            </div>
        `,
  },
  introduction:
    "How did Indians, divided by language, religion, and caste, come together against the powerful British Empire?",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "sh2-mcq-1",
      question:
        "In which year did Mahatma Gandhi return to India from South Africa?",
      options: ["1911", "1915", "1917", "1919"],
      correctAnswer: "b",
    },
    {
      id: "sh2-mcq-2",
      question: "Who was responsible for the Jallianwala Bagh massacre?",
      options: [
        "Lord Dalhousie",
        "Lord Mountbatten",
        "General Dyer",
        "Lord Irwin",
      ],
      correctAnswer: "c",
    },
    {
      id: "sh2-mcq-3",
      question:
        "Why was the Non-Cooperation Movement called off by Gandhiji in 1922?",
      options: [
        "The British accepted their demands",
        "Due to the Chauri Chaura incident of violence",
        "Arrest of Jawaharlal Nehru",
        "Lack of public support",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh2-mcq-4",
      question:
        "Which incident marked the beginning of the Civil Disobedience Movement?",
      options: [
        "The passing of the Rowlatt Act",
        "The arrival of the Simon Commission",
        "The Dandi March (Salt Satyagraha)",
        "The Jallianwala Bagh massacre",
      ],
      correctAnswer: "c",
    },
    {
      id: "sh2-mcq-5",
      question: "Who wrote 'Vande Mataram'?",
      options: [
        "Rabindranath Tagore",
        "Bankim Chandra Chattopadhyay",
        "Mahatma Gandhi",
        "Abanindranath Tagore",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh2-mcq-6",
      question: "Who designed the 'Swaraj flag' in 1921?",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Rabindranath Tagore",
      ],
      correctAnswer: "a",
    },
    {
      id: "sh2-mcq-7",
      question:
        "At which Congress session was the 'Purna Swaraj' resolution passed?",
      options: ["Calcutta", "Lahore", "Madras", "Karachi"],
      correctAnswer: "b",
    },
    {
      id: "sh2-mcq-8",
      question: "Who formed the 'Depressed Classes Association' in 1930?",
      options: [
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
        "Jyotirao Phule",
        "Kanshi Ram",
      ],
      correctAnswer: "b",
    },
    {
      id: "sh2-mcq-9",
      question: "Why did Gandhiji travel to Champaran in 1917?",
      options: [
        "To start a mill workers strike",
        "To protest against high taxes",
        "To inspire peasants to struggle against the plantation system",
        "To support the Rowlatt Satyagraha",
      ],
      correctAnswer: "c",
    },
    {
      id: "sh2-mcq-10",
      question:
        "Who led the peasants' movement in Awadh during the Non-Cooperation Movement?",
      options: [
        "Baba Ramchandra",
        "Mahatma Gandhi",
        "Alluri Sitarama Raju",
        "Jawaharlal Nehru",
      ],
      correctAnswer: "a",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "sh2-ex-write",
      name: "Write in brief",
      questions: [],
    },
    {
      id: "sh2-ex-discuss",
      name: "Discuss",
      questions: [],
    },
  ],
  examples: [],
};
