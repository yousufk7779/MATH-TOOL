import { ChapterContent } from "../types";

const themeColor = "#FF4DA6"; // Chapter 8 theme (Pink Orange)

export const c7Civ8: ChapterContent = {
    id: "c7-civ-8",
    number: 8,
    title: "A Shirt in the Market",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>This chapter tells us the story of a shirt. It begins with the production of cotton and ends with the sale of the shirt. We shall see that a chain of markets links the producer of cotton to the buyer of the shirt in the supermarket.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">A Cotton Farmer in Kurnool</h3>
            <p>Small farmers like <b>Swapna</b> grow cotton on their small pieces of land. Growing cotton requires high levels of inputs such as fertilizers and pesticides and the farmers often have to borrow money from traders to meet these expenses.</p>

            <h3 style="color: ${themeColor}; text-align: left;">The Cloth Market of Erode</h3>
            <p>Erode’s bi-weekly cloth market in Tamil Nadu is one of the largest cloth markets in the world. A large variety of cloth is sold in this market. The relationship between the merchant and the weavers is called the <b>'putting-out system'</b>.</p>

            <h3 style="color: ${themeColor}; text-align: left;">The Garment Exporting Factory</h3>
            <p>The cloth is used by garment exporters to make shirts. These shirts are then exported to foreign buyers, like large business chains in the US and Europe.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Market and Equality</h3>
            <p>The foreign business person makes huge profits. Compared to this, the garment exporter makes only moderate profits. On the other hand, the earnings of the workers at the garment exporting factory are barely enough to meet their day-to-day needs.</p>
        </div>
    `,
    htmlExercises: {
        "c7c8-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. Why did Swapna sell cotton to the trader instead of the market?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> She had borrowed money from him for seeds and was dependent on him for loans.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. What are the conditions of employment in a garment factory?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Workers are <b>temporary</b>, work long hours for low wages, and have no job security.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. Explain the chain of markets for Sugar.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        1. <b>Farmers</b> grow sugarcane and sell to <b>Sugar Mills</b>.
                        <br>2. Mills process it into sugar and sell to <b>Wholesale Traders</b>.
                        <br>3. <b>Retailers</b> buy from wholesalers and finally sell it to <b>Consumers</b>.
                        </p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. Correct order of the chain of a shirt:</p>
                        <p style="color: #E0E0E0;">
                        1. <b>Farmer</b> sells cotton to a local trader.
                        <br>2. <b>Ginning Mill</b> cleans cotton and makes bales.
                        <br>3. <b>Spinning Mill</b> spins cotton into yarn.
                        <br>4. <b>Weavers</b> weave the yarn into cloth.
                        <br>5. <b>Garment Factory</b> stitches cloth into shirts.
                        <br>6. <b>Exporter</b> sells shirts to foreign buyers.
                        </p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "A chain of markets links the producer of cotton to the buyer of the shirt.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7c8-mcq-1",
            question: "In which state is Kurnool located?",
            options: ["Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-2",
            question: "Why do small farmers like Swapna borrow money from traders?",
            options: ["For education", "For seeds, fertilizers, and pesticides", "To buy a car", "To travel"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-3",
            question: "Erode’s bi-weekly cloth market is located in which state?",
            options: ["Andhra Pradesh", "Tamil Nadu", "Maharashtra", "Gujarat"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-4",
            question: "The arrangement where merchants provide yarn and receive finished cloth is called:",
            options: ["Direct system", "Putting-out system", "Barter system", "Market system"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-5",
            question: "Where is the cloth from Erode finally sent to make shirts?",
            options: ["Local tailors", "Garment exporting factories", "Villages", "Directly to USA"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-6",
            question: "Who makes the maximum profit in the chain of a shirt?",
            options: ["The Farmer", "The Weaver", "The Foreign Business Person", "The Worker"],
            correctAnswer: "c"
        },
        {
            id: "c7c8-mcq-7",
            question: "Who receives the lowest wages in the garment exporting factory?",
            options: ["The Manager", "The Tailor", "The Checker/Helper", "The Owner"],
            correctAnswer: "c"
        },
        {
            id: "c7c8-mcq-8",
            question: "Ginning mill is a place where:",
            options: ["Cloth is woven", "Seeds are removed from cotton", "Shirts are stitched", "Yarn is spun"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-9",
            question: "A weaver's cooperative helps in:",
            options: ["Increasing taxes", "Reducing dependence on merchants", "Closing markets", "Building factories"],
            correctAnswer: "b"
        },
        {
            id: "c7c8-mcq-10",
            question: "Market offers people opportunities for ____.",
            options: ["Work and selling products", "Sleeping", "Fighting", "None of these"],
            correctAnswer: "a"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7c8-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
