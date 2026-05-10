import { ChapterContent } from "../types";

const themeColor = "#00C6FF"; // Chapter 6 theme (Bright Blue)

export const c7Civ6: ChapterContent = {
    id: "c7-civ-6",
    number: 6,
    title: "Understanding Media",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Media is the plural form of the word ‘medium’ and it describes the various ways through which we communicate in society. Because media reaches millions of people across the country and the world, it is called <b>Mass Media</b>.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Media and Technology</h3>
            <p>Technology that mass media uses keeps changing. TV, radio, and newspapers reach millions because they use certain technologies. Modern technology like satellite and cable has expanded the reach of media globally.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Media and Money</h3>
            <p>Mass media needs a great deal of money to do its work. Most of the money is earned through advertisements for various things like cars, chocolates, clothes, mobile phones, etc.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Media and Democracy</h3>
            <p>Media plays a very important role in a democracy. It provides news and discusses events taking place in the country and the world. It is on the basis of this information that citizens can learn how government works.</p>
        </div>
    `,
    htmlExercises: {
        "c7c6-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. In what ways does the media play an important role in a democracy?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Media provides news about government work and helps people express opinions.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. What is the link between Media and Big Business?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Big businesses own media houses and use them to <b>advertise</b> products for profit.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. What do you understand by the term ‘sets the agenda’? Provide two examples.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Media decides which stories are important.
                        <br><b>Examples:</b> Highlighting pesticides in drinks or focusing on Fashion Week.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "Media describes the various ways through which we communicate in society.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7c6-mcq-1",
            question: "What is the plural form of 'medium'?",
            options: ["Medias", "Media", "Mediums", "Mediator"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-2",
            question: "Media that reaches millions of people is called:",
            options: ["Social Media", "Mass Media", "Personal Media", "Local Media"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-3",
            question: "How does most of the mass media earn money?",
            options: ["Donations", "Taxes", "Advertisements", "Government funds"],
            correctAnswer: "c"
        },
        {
            id: "c7c6-mcq-4",
            question: "A balanced report is one that:",
            options: ["Shows only one side", "Discusses all points of view", "Is controlled by the government", "Is based on rumors"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-5",
            question: "What is the meaning of 'Setting the Agenda'?",
            options: ["Planning a meeting", "Media choosing which stories to focus on", "Government making laws", "Printing newspapers"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-6",
            question: "Khabar Lahriya is a newspaper run by Dalit women in which state?",
            options: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-7",
            question: "Who owns many of the big media houses?",
            options: ["Poor people", "Government", "Big Business Houses", "NGOs"],
            correctAnswer: "c"
        },
        {
            id: "c7c6-mcq-8",
            question: "Independent media should NOT be controlled by:",
            options: ["Government", "Business interests", "Political parties", "All of these"],
            correctAnswer: "d"
        },
        {
            id: "c7c6-mcq-9",
            question: "News on Television is an example of:",
            options: ["Print Media", "Electronic Media", "Traditional Media", "Oral Media"],
            correctAnswer: "b"
        },
        {
            id: "c7c6-mcq-10",
            question: "Censorship means the government can:",
            options: ["Fund the media", "Stop media from showing certain stories", "Hire journalists", "Sell newspapers"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7c6-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
