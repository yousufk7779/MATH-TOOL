import { ChapterContent } from "../chapterContent";

export const sstEco3: ChapterContent = {
    id: "sst-eco-3",
    number: 3,
    title: "Money and Credit",
    introduction: "Imagine trying to buy a pair of shoes by offering a sack of wheat! That's how things worked before money was invented. Let's learn about the evolution of money, how banks work, and why credit (loans) is essential for development.",
    definitions: [
        { term: "Barter System", description: "A system where goods are directly exchanged without the use of money. It requires double coincidence of wants." },
        { term: "Double Coincidence of Wants", description: "When both parties have to agree to sell and buy each other's commodities." },
        { term: "Money", description: "Anything that is generally accepted as a medium of exchange, a measure of value, and a store of value." },
        { term: "Credit (Loan)", description: "Refers to an agreement in which the lender supplies the borrower with money, goods or services in return for the promise of future payment." },
        { term: "Collateral", description: "An asset that the borrower owns (such as land, building, vehicle) and uses this as a guarantee to a lender until the loan is repaid." }
    ],
    keyPoints: [
        "Money solves the problem of double coincidence of wants by acting as a 'medium of exchange'.",
        "Modern forms of money include currency (paper notes and coins). It is accepted as money because it is authorized by the government of the country. In India, the RBI issues currency notes.",
        "People deposit extra money in banks for safety and to earn interest. This money can be withdrawn 'on demand' (demand deposits).",
        "Banks mediate between those who have surplus funds (depositors) and those who need funds (borrowers). Banks charge a higher interest rate on loans than what they offer on deposits.",
        "Credit can be from formal sources (banks, cooperatives) which are monitored by RBI and charge lower interest, or informal sources (moneylenders, relatives) which charge very high interest and often lead to debt traps.",
        "Self Help Groups (SHGs) collect savings from members and give small loans to members at reasonable rates, empowering poor women in rural areas."
    ],
    formulas: [],
    crux: [
        "Money acts as a medium of exchange.",
        "Banks make money from the interest difference between loans and deposits.",
        "Formal credit is heavily regulated and safe; Informal credit can lead to a debt trap.",
        "SHGs are helping poor women become financially self-reliant."
    ],
    mcqs: [
        {
            id: "se3-mcq-1",
            question: "Which agency issues currency notes on behalf of the Central Government in India?",
            options: ["State Bank of India", "Reserve Bank of India", "Finance Ministry", "World Bank"],
            correctAnswer: "b"
        },
        {
            id: "se3-mcq-2",
            question: "The problem of double coincidence of wants is efficiently solved by:",
            options: ["Credit", "Banks", "Money", "Collateral"],
            correctAnswer: "c"
        }
    ],
    summary: [
        "Money has drastically simplified economic transactions.",
        "A well-functioning banking system and access to cheap, formal credit are extremely crucial for a country's economic development."
    ],
    exercises: [
        {
            id: "se3-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "se3-ex-q1",
                    number: "1",
                    question: "Why do we deeply need to expand formal sources of credit heavily in India?",
                    solution: [
                        "1. To save poor farmers and workers from the incredibly high interest rates ruthastically charged by entirely informal sources (like local moneylenders).",
                        "2. To efficiently prevent borrowers from falling into a terrible 'debt trap'.",
                        "3. Cheap and profoundly affordable credit is completely crucial for national economic development."
                    ],
                    answer: "To profoundly protect the extremely poor from hugely exploitative moneylenders, entirely prevent terrible debt traps, and rapidly boost overall economic development."
                }
            ]
        }
    ],
    examples: []
};
