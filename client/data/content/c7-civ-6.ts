import { ChapterContent } from "../types";

const themeColor = "#00C6FF"; // Matches getChapterGradient for c7-civ-6 (Bright Blue)

export const c7Civ6: ChapterContent = {
  id: "c7-civ-6",
  number: 6,
  title: "Understanding Media",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Media plays a vital role in our lives, connecting us with national and global events. This chapter introduces different forms of media (print and electronic), explores the link between media and money, discusses independent media, and explains how media sets the agenda for society.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Mass Media</h3>
            <p style="line-height: 1.6; font-size: 15px;">The word **'media'** refers to all means of communication, from a phone call to national news. Television, radio, and newspapers are called **mass media** because they reach millions of people across the country and the world at the same time.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Media and Money</h3>
            <p style="line-height: 1.6; font-size: 15px;">The technologies that mass media uses (studios, cameras, satellites) are highly expensive. Because of these high costs, most television channels and newspapers are owned by big business houses. Media houses earn money by showing **advertisements** for products like chocolates, cars, and clothes.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Independent Media</h3>
            <p style="line-height: 1.6; font-size: 15px;">In a democracy, it is crucial to have an **independent media**—one that is free from control or influence by the government or business houses. This ensures that the news we receive is balanced and presents all points of view without bias.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. Setting the Agenda</h3>
            <p style="line-height: 1.6; font-size: 15px;">The media plays a major role in deciding which stories to focus on. By highlighting certain issues (like water shortages or food safety), it shapes public opinion and forces the government to take action. This is referred to as **setting the agenda**.</p>
        </div>
    `,
  htmlExercises: {
    "c7c6-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. In what ways does the media play an important role in a democracy?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Media plays a vital role in a democracy by:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Informing Citizens:</b> It tells people about government decisions, policies, and national news.</li>
                            <li style="margin-bottom: 8px;"><b>Forming Public Opinion:</b> It provides a platform for citizens to discuss issues, share opinions, and protest against bad policies.</li>
                            <li><b>Ensuring Accountability:</b> It highlights corruption and tracks if political leaders are fulfilling their promises.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. Can you give this diagram a title? What do you understand about the link between media and big business from this diagram?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Title:</b> "How Media and Big Businesses are Connected"<br/><br/>
                        <b style="color: ${themeColor};">Understanding the link:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;">Big business houses own many TV channels, newspapers, and radio stations.</li>
                            <li style="margin-bottom: 8px;">They use these media channels to advertise their own products.</li>
                            <li>Readers and viewers see these advertisements and buy those products. In this way, money flows back to the big business houses.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. You have read about the ways in which the media 'sets the agenda'. What kind of effect does this have in a democracy? Provide two examples to support your point of view.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Effect in Democracy:</b> By selecting which issues to focus on, the media draws public attention to key matters that require immediate action, helping shape national priorities.<br/><br/>
                        <b style="color: ${themeColor};">Examples:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Cola Pesticides Controversy:</b> The media reported high pesticide levels in Coca-Cola, which forced the government to set safety standards.</li>
                            <li><b>Drinking Water Shortage:</b> The media often highlights the lack of drinking water in villages, forcing government departments to act.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. As a class project, decide to focus on a particular news topic and cut out stories from different newspapers on this. Also watch the coverage of this topic on TV news. Compare two newspapers and write down the similarity and differences in their reports. It might help to ask the following questions- <br/>
                    a. What information is this article providing? <br/>
                    b. What information is it leaving out? <br/>
                    c. From whose point of view is the article being written? <br/>
                    d. Whose point of view is being left out and why?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Here is a comparison of two newspaper reports covering a factory protest:
                        <ul style="margin: 8px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 12px;"><b>Similarity:</b> Both newspapers cover the same main event (the protest) at the same factory on the same day.</li>
                            <li><b>Differences:</b>
                                <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left;">
                                    <li style="margin-bottom: 8px;"><b>Newspaper A:</b> Reports that the protest is causing traffic jams and public inconvenience. It leaves out the workers' grievances and is written from the factory owners' point of view.</li>
                                    <li><b>Newspaper B:</b> Reports that workers are protesting due to bad working conditions and low wages. It leaves out public traffic issues and is written from the workers' point of view.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>

                <!-- Q5 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">5. Do projects (solo, pair or group) about types of advertisements. Create commercial advertisements about some products and social advertisements about public health, road safety and the need to save water and energy.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Project Examples:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Commercial Advertisement:</b> "Buy Bright Toothpaste for sparkling white teeth and fresh breath!"</li>
                            <li><b>Social Advertisement (Road Safety):</b> "Alert Today, Alive Tomorrow! Always wear a helmet while riding."</li>
                        </ul>
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter introduces mass media, how it links with business and money, the meaning of independent reporting, and media agenda setting.",
  definitions: [
    {
      term: "Media",
      description:
        "All means of communication, ranging from phone calls to television networks.",
    },
    {
      term: "Public Protest",
      description:
        "When a large number of people gather to publicly express opposition to an issue.",
    },
    {
      term: "Censorship",
      description:
        "The power of the government to prevent media from publishing or broadcasting certain news or scenes.",
    },
  ],
  keyPoints: [
    "Television, radio, and newspapers are called mass media because they reach millions of people globally.",
    "Technology changes quickly, and media uses expensive setups to broadcast.",
    "An independent media is necessary to present balanced, unbiased news reports.",
    "Media sets the agenda by highlighting specific issues like pollution or health.",
  ],
  formulas: [],
  crux: [
    "Mass media requires heavy investment, linking it closely to big business houses.",
    "Advertisements are the major source of revenue for independent media houses.",
    "A balanced report shares both sides of a story without taking a stance.",
    "Censorship allows governments to restrict content in the interest of national safety.",
  ],
  exercises: [
    {
      id: "c7c6-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc6-mcq-1",
      question: "What does the term 'media' refer to?",
      options: [
        "Only telephone networks",
        "Various means of communication in society",
        "Reading storybooks at school",
        "Playing outdoor games",
      ],
      correctAnswer: "b",
      explanation:
        "Media represents the channels of communication through which news, values, and information spread.",
    },
    {
      id: "cc6-mcq-2",
      question:
        "TV, radio, and newspapers are called mass media because they reach:",
      options: [
        "Only a few family members",
        "Millions of people at the same time",
        "Only school classrooms",
        "Only government offices",
      ],
      correctAnswer: "b",
      explanation:
        "Mass media has a massive outreach, connecting with millions of people simultaneously.",
    },
    {
      id: "cc6-mcq-3",
      question: "Which of the following is a classic example of print media?",
      options: ["Television", "Newspaper", "Radio broadcast", "YouTube video"],
      correctAnswer: "b",
      explanation:
        "Newspapers, magazines, and booklets are forms of printed communication.",
    },
    {
      id: "cc6-mcq-4",
      question:
        "Why does mass media require a massive amount of money to operate?",
      options: [
        "It needs expensive technology, studios, and staff",
        "It buys toys for distribution",
        "It is run purely by charity",
        "It relies only on raw paper",
      ],
      correctAnswer: "a",
      explanation:
        "Satellites, high-end studios, cameras, and technical staff make mass media operations expensive.",
    },
    {
      id: "cc6-mcq-5",
      question:
        "How does independent mass media earn most of its operating revenue?",
      options: [
        "Through student donations",
        "By broadcasting advertisements",
        "Selling second-hand paper",
        "Charging local libraries",
      ],
      correctAnswer: "b",
      explanation:
        "Showing commercial advertisements is the primary source of income for media channels.",
    },
    {
      id: "cc6-mcq-6",
      question: "An 'independent media' means that:",
      options: [
        "The government runs it completely",
        "No one controls or influences its news coverage",
        "It only plays music and movies",
        "It is operated by minor children",
      ],
      correctAnswer: "b",
      explanation:
        "Independent media writes balanced reports without external pressure from politicians or business houses.",
    },
    {
      id: "cc6-mcq-7",
      question:
        "Media's power to highlight specific news stories to draw public attention is called:",
      options: [
        "Setting the agenda",
        "Business planning",
        "Press censorship",
        "Solidarity",
      ],
      correctAnswer: "a",
      explanation:
        "By selecting what is news, media directs what society thinks and debates.",
    },
    {
      id: "cc6-mcq-8",
      question: "Censorship refers to the power of:",
      options: [
        "People to protest",
        "Government to block media from publishing certain news",
        "Kids to play games",
        "Advertisers to set pricing",
      ],
      correctAnswer: "b",
      explanation:
        "Censorship is the legal restriction of media content by state authorities.",
    },
    {
      id: "cc6-mcq-9",
      question:
        "Which drink controversy led the media to publish reports on pesticide levels?",
      options: [
        "Fresh milk controversy",
        "Cola soft drinks controversy",
        "Tea dust controversy",
        "Orange juice controversy",
      ],
      correctAnswer: "b",
      explanation:
        "The pesticide content in aerated soft drinks was exposed by investigative media reporting.",
    },
    {
      id: "cc6-mcq-10",
      question:
        "An advertisement designed to educate the public on issues like health or safety is a:",
      options: [
        "Commercial advertisement",
        "Social advertisement",
        "Political banner",
        "Corporate card",
      ],
      correctAnswer: "b",
      explanation:
        "Social advertisements raise awareness on topics like road safety, sanitation, and water preservation.",
    },
  ],
  summary: [
    "The chapter 'Understanding Media' outlines how print and electronic media function, describes the financial links between media houses and big businesses, defines the necessity of independent balanced reporting, and details how media sets the agenda for democratic debate.",
  ],
};
