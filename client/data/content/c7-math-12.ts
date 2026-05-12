import { ChapterContent } from "../types";

export const c7Math12: ChapterContent = {
    id: "c7-math-12",
    number: 12,
    title: "Symmetry",
    isHtmlView: true,
    introduction: "Symmetry is a balanced and proportionate similarity that is found in nature and man-made structures. In geometry, we study line symmetry and rotational symmetry.",
    definitions: [
        { term: "Line Symmetry", definition: "A figure has line symmetry if it can be folded along a line so that the two parts coincide." },
        { term: "Rotational Symmetry", definition: "A figure has rotational symmetry if it looks the same after a rotation of less than 360°." },
        { term: "Order of Rotation", definition: "The number of times a figure fits onto itself during a full 360° rotation." }
    ],
    keyPoints: [
        "A square has 4 lines of symmetry and rotational symmetry of order 4.",
        "A circle has infinite lines of symmetry and every angle is an angle of rotation.",
        "Regular polygons have the same number of lines of symmetry as their number of sides."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex12-1", name: "Exercise 12.1", questions: [] },
        { id: "ex12-2", name: "Exercise 12.2", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #00BFA5; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #00BFA5; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 12: Symmetry Overview</h2>
            <p class="content-text">Discover the beauty of balance through the study of mirror images and rotating patterns.</p>
            <div class="point-box">
                <div class="point-item">Line symmetry is about folding.</div>
                <div class="point-item">Rotational symmetry is about spinning.</div>
                <div class="point-item">Regular shapes are the most symmetric.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex12-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(0, 191, 165, 0.1); color: #B2DFDB; padding: 12px; border-radius: 8px; border-left: 6px solid #00BFA5; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #00BFA5; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #00BFA5; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Give the number of lines of symmetry for the following figures: <br/>(a) An equilateral triangle <br/>(b) A square <br/>(c) A rectangle</div>
            <div class="solution">
                <div class="sol-step"><b>(a) An equilateral triangle</b></div>
                <div class="sol-step">=> All three sides and angles are equal.</div>
                <div class="sol-step">=> Folding along each altitude makes parts coincide.</div>
                <div class="sol-step">Result: <span class="ans-highlight">3</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) A square</b></div>
                <div class="sol-step">=> Has 2 lines along the diagonals.</div>
                <div class="sol-step">=> Has 2 lines joining the mid-points of opposite sides.</div>
                <div class="sol-step">Result: <span class="ans-highlight">4</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) A rectangle</b></div>
                <div class="sol-step">=> Only the lines joining the mid-points of opposite sides are lines of symmetry.</div>
                <div class="sol-step">=> Diagonals are NOT lines of symmetry in a rectangle.</div>
                <div class="sol-step">Result: <span class="ans-highlight">2</span></div>
            </div>

            <div class="question">8. Which letters of the English alphabet have reflectional symmetry (symmetry related to mirror reflection) about <br/>(a) a vertical mirror <br/>(b) a horizontal mirror</div>
            <div class="solution">
                <div class="sol-step"><b>(a) Vertical Mirror</b></div>
                <div class="sol-step">=> Letters which look the same when cut vertically.</div>
                <div class="sol-step">Result: <span class="ans-highlight">A, H, I, M, O, T, U, V, W, X, Y</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) Horizontal Mirror</b></div>
                <div class="sol-step">=> Letters which look the same when cut horizontally.</div>
                <div class="sol-step">Result: <span class="ans-highlight">B, C, D, E, H, I, K, O, X</span></div>
            </div>
        </div>
        `,
        "ex12-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(0, 191, 165, 0.1); color: #B2DFDB; padding: 12px; border-radius: 8px; border-left: 6px solid #00BFA5; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #00BFA5; margin-bottom: 25px; }
            .ans-highlight { color: #00BFA5; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">2. State the order of rotational symmetry for each of the following: <br/>(a) A Square <br/>(b) A Rhombus</div>
            <div class="solution">
                <div class="sol-step"><b>(a) A Square</b></div>
                <div class="sol-step">=> A square looks exactly the same after rotation of 90°, 180°, 270°, and 360°.</div>
                <div class="sol-step">=> It fits onto itself 4 times in one full turn.</div>
                <div class="sol-step">Result: <span class="ans-highlight">4</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) A Rhombus</b></div>
                <div class="sol-step">=> A rhombus looks the same after rotation of 180° and 360°.</div>
                <div class="sol-step">=> It fits onto itself 2 times in one full turn.</div>
                <div class="sol-step">Result: <span class="ans-highlight">2</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "A rectangle has ______ lines of symmetry.", options: ["1", "2", "3", "4"], correctAnswer: "B" },
        { id: "m2", question: "Order of rotational symmetry of a square is:", options: ["1", "2", "3", "4"], correctAnswer: "D" },
        { id: "m3", question: "A circle has ______ lines of symmetry.", options: ["0", "1", "10", "Infinite"], correctAnswer: "D" },
        { id: "m4", question: "Which letter has no lines of symmetry?", options: ["A", "B", "C", "Q"], correctAnswer: "D" },
        { id: "m5", question: "Regular hexagon has ______ lines of symmetry.", options: ["3", "4", "5", "6"], correctAnswer: "D" },
        { id: "m6", question: "Angle of rotation for order 3 is:", options: ["120°", "90°", "60°", "180°"], correctAnswer: "A" },
        { id: "m7", question: "Does a parallelogram have line symmetry?", options: ["Yes", "No", "Only if square", "Only if rectangle"], correctAnswer: "B" },
        { id: "m8", question: "Order of rotation for letter 'S' is:", options: ["1", "2", "3", "4"], correctAnswer: "B" },
        { id: "m9", question: "A regular pentagon has symmetry of order:", options: ["1", "3", "5", "10"], correctAnswer: "C" },
        { id: "m10", question: "The smallest angle of rotation of a square is:", options: ["45°", "90°", "180°", "360°"], correctAnswer: "B" }
    ],
    summary: []
};
