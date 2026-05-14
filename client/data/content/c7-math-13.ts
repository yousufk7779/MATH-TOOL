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
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(224, 64, 251, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(224, 64, 251, 0.08); padding: 20px; border-bottom: 1px solid rgba(224, 64, 251, 0.2); border-left: 4px solid #E040FB; color: #E040FB; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #E040FB; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #E040FB; font-weight: bold; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
        </style>
        <div class="container">

            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Identify the nets which can be used to make cubes (cut out copies of the nets and try it):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Two squares on one side will overlap. <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Staggered 3-3 net. <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 2-2-2 Staircase net. <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 1-4-1 Cross net variation. <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) Two squares on same side will overlap. <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) 2-3-1 net. <span class="ans-highlight">Yes</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Dice numbers on opposite faces must total 7. Fill in the blanks:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>Net 1:</b> Blanks are <span class="ans-highlight">3</span> (opposite 4), <span class="ans-highlight">2</span> (opposite 5), and <span class="ans-highlight">1</span> (opposite 6).</div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>Net 2:</b> Blanks are <span class="ans-highlight">6</span> (opposite 1), <span class="ans-highlight">5</span> (opposite 2), and <span class="ans-highlight">4</span> (opposite 3).</div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Can this be a net for a die? (1,2,3,4,5,6 in staircase)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="ans-highlight">No</span>. Opposites are (1,4) sum 5, and (3,6) sum 9. Only (2,5) totals 7.</div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Complete the net in two ways (Given: 3 squares in a row):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Way 1: Make a <span class="ans-highlight">T-shape (1-4-1)</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> Way 2: Make a <span class="ans-highlight">Staircase (3-3)</span>.</div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Match the nets with solids:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Cube: <span class="ans-highlight">(ii)</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Cylinder: <span class="ans-highlight">(iii)</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Cone: <span class="ans-highlight">(iv)</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Pyramid: <span class="ans-highlight">(i)</span></div>
                </div>
            </div>
        </div>
        `,
        "ex13-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(224, 64, 251, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(224, 64, 251, 0.08); padding: 20px; border-bottom: 1px solid rgba(224, 64, 251, 0.2); border-left: 4px solid #E040FB; color: #E040FB; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #E040FB; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #E040FB; font-weight: bold; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Make isometric sketches:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Draw edges on dot paper at <span class="ans-highlight">30° angles</span> for depth and horizontal lines.</div>
                </div>
            </div>
            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Three isometric sketches of cuboid 5x3x2:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Change orientations: <span class="ans-highlight">(5L, 3W, 2H), (3L, 2W, 5H), or (2L, 5W, 3H)</span>.</div>
                </div>
            </div>
            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Three cubes of 2cm side by side:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Result is a cuboid of <span class="ans-highlight">6cm x 2cm x 2cm</span>.</div>
                </div>
            </div>
            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Oblique sketches for isometric shapes:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Draw the <span class="ans-highlight">front face as a square/rectangle</span> and depth at 45°.</div>
                </div>
            </div>
        </div>
        `,
        "ex13-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(224, 64, 251, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(224, 64, 251, 0.08); padding: 20px; border-bottom: 1px solid rgba(224, 64, 251, 0.2); border-left: 4px solid #E040FB; color: #E040FB; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #E040FB; font-weight: bold; font-size: 1.1em; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Vertical and Horizontal cross-sections:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Brick: <span class="ans-highlight">Rectangle, Rectangle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Apple: <span class="ans-highlight">Circle, Circle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Die: <span class="ans-highlight">Square, Square</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Pipe: <span class="ans-highlight">Rectangle, Circle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Cone: <span class="ans-highlight">Triangle, Circle</span></div>
                </div>
            </div>
        </div>
        `,
        "ex13-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(224, 64, 251, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(224, 64, 251, 0.08); padding: 20px; border-bottom: 1px solid rgba(224, 64, 251, 0.2); border-left: 4px solid #E040FB; color: #E040FB; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #E040FB; font-weight: bold; font-size: 1.1em; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
        </style>
        <div class="container">

            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Shadow shape with bulb above:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Ball: <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Pipe: <span class="ans-highlight">Rectangle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) Book: <span class="ans-highlight">Rectangle</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Solids matching each shadow:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Circle: <span class="ans-highlight">Football, Plate, Sphere</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Square: <span class="ans-highlight">Die, Cube</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) Triangle: <span class="ans-highlight">Ice-cream cone, Pyramid</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) Rectangle: <span class="ans-highlight">Brick, Duster, Book</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. True or False:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Cube can cast a rectangular shadow: <span class="ans-highlight">True</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Cube can cast a hexagonal shadow: <span class="ans-highlight">True</span></div>
                </div>
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
