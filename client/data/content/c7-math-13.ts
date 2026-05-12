import { ChapterContent } from "../types";

export const c7Math13: ChapterContent = {
    id: "c7-math-13",
    number: 13,
    title: "Visualising Solid Shapes",
    isHtmlView: true,
    introduction: "In this chapter, we explore how to represent three-dimensional (3D) objects on a two-dimensional (2D) surface using nets, cross-sections, and shadows.",
    definitions: [
        { term: "Solid Shape", definition: "A 3D object that occupies space and has length, breadth, and height." },
        { term: "Net", definition: "A 2D skeleton outline that can be folded to form a 3D solid." },
        { term: "Cross-section", definition: "The shape obtained when a solid is cut vertically or horizontally." }
    ],
    keyPoints: [
        "A cube has 6 faces, 12 edges, and 8 vertices.",
        "A net for a cube consists of 6 squares.",
        "Shadows of 3D objects change shape depending on the light source position."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex13-1", name: "Exercise 13.1", questions: [] },
        { id: "ex13-2", name: "Exercise 13.2", questions: [] },
        { id: "ex13-3", name: "Exercise 13.3", questions: [] },
        { id: "ex13-4", name: "Exercise 13.4", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #E040FB; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(224, 64, 251, 0.05); border-left: 4px solid #E040FB; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #E040FB; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 13: Visualising Solids Overview</h2>
            <p class="content-text">Bridge the gap between 2D drawings and 3D reality through visualization and geometry.</p>
            <div class="point-box">
                <div class="point-item">Faces, Edges, and Vertices are the building blocks.</div>
                <div class="point-item">Nets help us construct 3D models from paper.</div>
                <div class="point-item">Cross-sections reveal the internal structure of solids.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex13-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(224, 64, 251, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #E040FB; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #E040FB; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #E040FB; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Identify the nets which can be used to make cubes (cut out copies of the nets and try it).</div>
            <div class="solution">
                <div class="sol-step">=> A net that can form a cube must have exactly 6 square faces.</div>
                <div class="sol-step">=> When folded, no two faces should overlap.</div>
                <div class="sol-step">=> Every face must have an opposite face.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Nets with 1-4-1 or 2-3-1 patterns are valid.</span></div>
            </div>

            <div class="question">2. Dice are cubes where the numbers on the opposite faces must total 7. Fill in the missing dots on the net.</div>
            <div class="solution">
                <div class="sol-step">=> Property: Sum of dots on opposite faces = 7</div>
                <div class="sol-step">=> If one face is 1, opposite face = 7 - 1 = 6</div>
                <div class="sol-step">=> If one face is 2, opposite face = 7 - 2 = 5</div>
                <div class="sol-step">=> If one face is 3, opposite face = 7 - 3 = 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">Opposite pairs are (1,6), (2,5), and (3,4).</span></div>
            </div>
        </div>
        `,
        "ex13-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(224, 64, 251, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #E040FB; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #E040FB; margin-bottom: 25px; }
            .ans-highlight { color: #E040FB; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. What cross-section do you get when you give a (a) vertical cut (b) horizontal cut to the following solids? <br/>(i) A brick (ii) A round apple (iii) A circular pipe</div>
            <div class="solution">
                <div class="sol-step"><b>(i) A brick</b></div>
                <div class="sol-step">=> Vertical cut: Rectangle</div>
                <div class="sol-step">=> Horizontal cut: Rectangle</div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) A round apple</b></div>
                <div class="sol-step">=> Vertical cut: Circle</div>
                <div class="sol-step">=> Horizontal cut: Circle</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) A circular pipe</b></div>
                <div class="sol-step">=> Vertical cut: Rectangle (along the length)</div>
                <div class="sol-step">=> Horizontal cut: Circle</div>
                <div class="sol-step">Result: <span class="ans-highlight">See details above</span></div>
            </div>
        </div>
        `,
        "ex13-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(224, 64, 251, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #E040FB; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #E040FB; margin-bottom: 25px; }
            .ans-highlight { color: #E040FB; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. A bulb is kept burning just right above the following solids. Name the shape of the shadows obtained in each case. <br/>(i) A ball (ii) A cylindrical pipe (iii) A book</div>
            <div class="solution">
                <div class="sol-step"><b>(i) A ball</b></div>
                <div class="sol-step">=> Light from top project a circular boundary.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Circle</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) A cylindrical pipe</b></div>
                <div class="sol-step">=> Light from top projects its side view.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Rectangle (or Line)</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) A book</b></div>
                <div class="sol-step">=> Light from top projects its rectangular cover.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Rectangle</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Number of faces in a cube is:", options: ["4", "6", "8", "12"], correctAnswer: "B" },
        { id: "m2", question: "Number of vertices in a cube is:", options: ["4", "6", "8", "12"], correctAnswer: "C" },
        { id: "m3", question: "Number of edges in a cube is:", options: ["6", "8", "12", "16"], correctAnswer: "C" },
        { id: "m4", question: "A sphere has ______ vertex.", options: ["0", "1", "2", "Infinite"], correctAnswer: "A" },
        { id: "m5", question: "A cylinder has ______ flat faces.", options: ["0", "1", "2", "3"], correctAnswer: "C" },
        { id: "m6", question: "Which shape has no vertex?", options: ["Cube", "Cone", "Sphere", "Cylinder"], correctAnswer: "C" },
        { id: "m7", question: "Cross section of a cone cut parallel to base is:", options: ["Triangle", "Square", "Circle", "Rectangle"], correctAnswer: "C" },
        { id: "m8", question: "Opposite faces of a die total to:", options: ["5", "6", "7", "8"], correctAnswer: "C" },
        { id: "m9", question: "Number of faces in a triangular pyramid is:", options: ["3", "4", "5", "6"], correctAnswer: "B" },
        { id: "m10", question: "A net of a cylinder has two circles and one ______.", options: ["Square", "Triangle", "Rectangle", "Oval"], correctAnswer: "C" }
    ],
    summary: []
};
