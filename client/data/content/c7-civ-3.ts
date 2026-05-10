import { ChapterContent } from "../types";

const themeColor = "#42A5F5"; // Chapter 3 theme (Blue)

export const c7Civ3: ChapterContent = {
    id: "c7-civ-3",
    number: 3,
    title: "How the State Government Works",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Every state in India has a Legislative Assembly. Each state is divided into different areas or constituencies. From each constituency, the people elect one representative who then becomes a Member of the Legislative Assembly (MLA).</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Who is an MLA?</h3>
            <p>MLAs are elected by the people. They then become members of the legislative assembly and also form the government. Thus we say that the MLAs represent people.</p>

            <h3 style="color: ${themeColor}; text-align: left;">The Ruling Party and Opposition</h3>
            <p>The political party that has the majority (more than half) of MLAs becomes the <b>Ruling Party</b>. All other members are called the <b>Opposition</b>. The ruling party elects their leader who becomes the Chief Minister.</p>

            <h3 style="color: ${themeColor}; text-align: left;">A Debate in the Assembly</h3>
            <p>The Legislative Assembly is a place where all the MLAs, whether from the ruling party or from the opposition, meet to discuss various things. Hence, some MLAs have dual responsibilities: one as an MLA and the other as a minister.</p>
        </div>
    `,
    htmlExercises: {
        "c7c3-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. Use ‘constituency’ and ‘represent’ to explain who an MLA is and how they are elected?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> A <b>constituency</b> is an area where voters choose their leader. The winner <b>represents</b> that area in the government and is called an MLA.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. How did some MLAs become Ministers?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The party with the most MLAs chooses a leader as <b>Chief Minister</b>. The Chief Minister then picks other MLAs to be <b>Ministers</b>.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. Why should decisions of Ministers be debated in the Legislative Assembly?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Debates ensure decisions are good for everyone. It allows the opposition to ask questions and makes the government <b>accountable</b>.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. Action taken in Patalpuram:</p>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; color: #fff; margin-top: 10px; font-size: 0.9em;">
                                <thead>
                                    <tr style="background-color: ${themeColor}; color: #fff;">
                                        <th style="padding: 5px; border: 1px solid #555;">Group</th>
                                        <th style="padding: 5px; border: 1px solid #555;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Public meeting</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">Demanded better water and health facilities.</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Assembly</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">MLAs questioned the Health Minister.</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Press meet</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">Minister explained the new water tanker plan.</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #555;"><b style="color: ${themeColor};">Chief Minister</b></td>
                                        <td style="padding: 5px; border: 1px solid #555;">Visited families and promised funds.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q5. Difference between MLAs' work and government departments?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> MLAs debate and make laws in the <b>Assembly</b>. Government <b>departments</b> are responsible for doing the actual work.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "Every state in India has a Legislative Assembly divided into constituencies.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7c3-mcq-1",
            question: "What is the full form of MLA?",
            options: ["Member of Local Assembly", "Member of Legislative Assembly", "Master of Legislative Authority", "Member of Law Agency"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-2",
            question: "Who is the formal head of the State?",
            options: ["Chief Minister", "Governor", "President", "Prime Minister"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-3",
            question: "Who appoints the Chief Minister of a state?",
            options: ["The President", "The Governor", "The People", "The High Court"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-4",
            question: "The political party that has the majority in the assembly is called:",
            options: ["Opposition Party", "Ruling Party", "Local Party", "National Party"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-5",
            question: "The place where all MLAs meet to discuss various issues is:",
            options: ["Parliament", "Legislative Assembly", "Supreme Court", "Rajya Sabha"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-6",
            question: "Who is the executive head of the ruling party in a state?",
            options: ["Governor", "Chief Minister", "Speaker", "Mayor"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-7",
            question: "What is the tenure of a Legislative Assembly in India?",
            options: ["2 years", "4 years", "5 years", "6 years"],
            correctAnswer: "c"
        },
        {
            id: "c7c3-mcq-8",
            question: "Decisions of the cabinet must be approved by the:",
            options: ["President", "MLAs", "Judges", "Police"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-9",
            question: "In the chapter, Patalpuram was facing a severe shortage of:",
            options: ["Food", "Clean water", "Electricity", "Internet"],
            correctAnswer: "b"
        },
        {
            id: "c7c3-mcq-10",
            question: "Who is responsible for the health department in a state?",
            options: ["Governor", "Health Minister", "Education Minister", "Finance Minister"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7c3-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
