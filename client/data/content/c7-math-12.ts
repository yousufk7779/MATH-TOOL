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
        { id: "ex12-2", name: "Exercise 12.2", questions: [] },
        { id: "ex12-3", name: "Exercise 12.3", questions: [] }
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
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(0, 191, 165, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(0, 191, 165, 0.08); padding: 20px; border-bottom: 1px solid rgba(0, 191, 165, 0.2); border-left: 4px solid #00BFA5; color: #00BFA5; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #00BFA5; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #00BFA5; font-weight: bold; }
            .ans-highlight { color: #64FFDA; font-weight: bold; }
            .fig-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px; }
            .fig-item { background: rgba(255,255,255,0.03); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(0, 191, 165, 0.1); }
            .fig-label { display: block; margin-top: 5px; font-size: 0.8em; color: #64FFDA; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the axes of symmetry for the following figures (Refer to textbook for figures):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) <span class="ans-highlight">1 Axis</span> (Horizontal)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) <span class="ans-highlight">1 Axis</span> (Diagonal)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) <span class="ans-highlight">1 Axis</span> (Horizontal)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) <span class="ans-highlight">2 Axes</span> (Horizontal & Vertical)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) <span class="ans-highlight">4 Axes</span> (H, V, and 2 Diagonals)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) <span class="ans-highlight">4 Axes</span> (H, V, and 2 Diagonals)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) <span class="ans-highlight">1 Axis</span> (Vertical)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) <span class="ans-highlight">1 Axis</span> (Horizontal)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="ans-highlight">1 Axis</span> (Vertical)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (j) <span class="ans-highlight">1 Axis</span> (Horizontal)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (k) <span class="ans-highlight">2 Axes</span> (Horizontal & Vertical)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (l) <span class="ans-highlight">4 Axes</span> (H, V, and 2 Diagonals)</div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Given the line(s) of symmetry, find the other hole(s):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Hole will be in the <span class="ans-highlight">upper right</span> corner (symmetrically opposite to the given hole).</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Hole will be in the <span class="ans-highlight">upper right</span> part of the square.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Hole will be on the <span class="ans-highlight">right side</span> of the triangle's vertical axis.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Hole will be in the <span class="ans-highlight">lower left</span> part of the circle.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Holes will be in the <span class="ans-highlight">bottom and right</span> parts to complete symmetry about both diagonals.</div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Complete each figure using the dotted mirror line. Name of the completed figures:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) <span class="ans-highlight">Square</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) <span class="ans-highlight">Triangle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) <span class="ans-highlight">Rhombus</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) <span class="ans-highlight">Pentagon</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) <span class="ans-highlight">Octagon</span></div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify multiple lines of symmetry, if any, in each of the following figures:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) <span class="ans-highlight">3 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) <span class="ans-highlight">2 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) <span class="ans-highlight">3 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) <span class="ans-highlight">2 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) <span class="ans-highlight">4 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) <span class="ans-highlight">1 Line</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) <span class="ans-highlight">4 Lines</span> of symmetry.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) <span class="ans-highlight">6 Lines</span> of symmetry.</div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Shade squares to make the figure symmetric about a diagonal. Is there more than one way?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="ans-highlight">Yes</span>, there is more than one way. Shading can be done across either of the two diagonals.</div>
                    <div class="sol-step"><span class="step-marker">=></span> By shading <span class="ans-highlight">4 additional squares</span>, the figure becomes symmetric about both diagonals.</div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. Complete each shape to be symmetric about the mirror line(s):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) The shape should be reflected across the diagonal to form a <span class="ans-highlight">Symmetric Quadrilateral</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) The pattern should be reflected across both horizontal and vertical axes to complete the <span class="ans-highlight">Grid Pattern</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) The arc should be reflected across the horizontal axis to form a <span class="ans-highlight">Complete Circle/Oval</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) The dots should be reflected across the given axes to maintain <span class="ans-highlight">Bilateral Symmetry</span>.</div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. State the number of lines of symmetry for the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Equilateral Triangle: <span class="ans-highlight">3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Isosceles Triangle: <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Scalene Triangle: <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Square: <span class="ans-highlight">4</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Rectangle: <span class="ans-highlight">2</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) Rhombus: <span class="ans-highlight">2</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) Parallelogram: <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) Quadrilateral: <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) Regular Hexagon: <span class="ans-highlight">6</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (j) Circle: <span class="ans-highlight">Infinite</span></div>
                </div>
            </div>

            <!-- Q8 -->
            <div class="sol-card">
                <div class="question-header">8. What letters of the English alphabet have reflectional symmetry related to:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Vertical Mirror: <span class="ans-highlight">A, H, I, M, O, T, U, V, W, X, Y</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Horizontal Mirror: <span class="ans-highlight">B, C, D, E, H, I, O, X</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Both Mirrors: <span class="ans-highlight">H, I, O, X</span></div>
                </div>
            </div>

            <!-- Q9 -->
            <div class="sol-card">
                <div class="question-header">9. Give three examples of shapes with no line of symmetry.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> 1. <span class="ans-highlight">Scalene Triangle</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> 2. <span class="ans-highlight">Parallelogram</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> 3. <span class="ans-highlight">Quadrilateral</span> with unequal sides.</div>
                </div>
            </div>

            <!-- Q10 -->
            <div class="sol-card">
                <div class="question-header">10. What other name can you give to the line of symmetry of:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) An Isosceles Triangle? <span class="ans-highlight">Median/Altitude</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) A Circle? <span class="ans-highlight">Diameter</span></div>
                </div>
            </div>
        </div>
        `,
        "ex12-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(0, 191, 165, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(0, 191, 165, 0.08); padding: 20px; border-bottom: 1px solid rgba(0, 191, 165, 0.2); border-left: 4px solid #00BFA5; color: #00BFA5; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #00BFA5; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #00BFA5; font-weight: bold; }
            .ans-highlight { color: #64FFDA; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Which of the following figures have rotational symmetry of order more than 1? (Refer to textbook for figures):</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Circle with 4 parts: <span class="ans-highlight">Yes</span> (Order 4)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Equilateral Triangle: <span class="ans-highlight">Yes</span> (Order 3)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Vertical Line with Notches: <span class="ans-highlight">No</span> (Order 1)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) H-Shape: <span class="ans-highlight">Yes</span> (Order 2)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Circle with 3 Parts: <span class="ans-highlight">Yes</span> (Order 3)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) 4-Blade Fan: <span class="ans-highlight">Yes</span> (Order 4)</div>
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">Final Result:</span> Figures <span class="ans-highlight">(a), (b), (d), (e), and (f)</span> have rotational symmetry of order more than 1.</div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Give the order of rotational symmetry for each figure:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) 2-Blade Propeller: <span class="ans-highlight">2</span> (Rotation by 180°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Intersecting Lines (80°): <span class="ans-highlight">2</span> (Rotation by 180°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Equilateral Triangle: <span class="ans-highlight">3</span> (Rotation by 120°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) 4-Blade Windmill: <span class="ans-highlight">4</span> (Rotation by 90°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Plus (+) Shape: <span class="ans-highlight">4</span> (Rotation by 90°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) Regular Pentagon: <span class="ans-highlight">5</span> (Rotation by 72°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) 6-Pointed Star: <span class="ans-highlight">6</span> (Rotation by 60°)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) 3-Petal Flower Pattern: <span class="ans-highlight">3</span> (Rotation by 120°)</div>
                </div>
            </div>
        </div>
        `,
        "ex12-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(0, 191, 165, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(0, 191, 165, 0.08); padding: 20px; border-bottom: 1px solid rgba(0, 191, 165, 0.2); border-left: 4px solid #00BFA5; color: #00BFA5; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #00BFA5; font-weight: bold; font-size: 1.1em; }
            .ans-highlight { color: #64FFDA; font-weight: bold; }
            .math-table { width: 100%; border-collapse: collapse; margin-top: 10px; border: 1px solid rgba(255,255,255,0.1); table-layout: fixed; }
            .math-table th, .math-table td { border: 1px solid rgba(255,255,255,0.1); padding: 5px 2px; text-align: center; font-size: 0.72em; word-wrap: break-word; line-height: 1.2; }
            .math-table th { background: rgba(0, 191, 165, 0.2); color: #00BFA5; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Name any two figures that have both line symmetry and rotational symmetry.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="ans-highlight">Square</span> and <span class="ans-highlight">Equilateral Triangle</span> (or Circle).</div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Give examples of triangles/quadrilaterals with specific symmetries:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Triangle with both line and rotational symmetry (>1): <span class="ans-highlight">Equilateral Triangle</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Triangle with only line symmetry: <span class="ans-highlight">Isosceles Triangle</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) Quadrilateral with rotational symmetry (>1) but no line symmetry: <span class="ans-highlight">Parallelogram</span>.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) Quadrilateral with line symmetry but no rotational symmetry (>1): <span class="ans-highlight">Isosceles Trapezium</span>.</div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. If a figure has two or more lines of symmetry, should it have rotational symmetry of order more than 1?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="ans-highlight">Yes</span>. Any figure with n lines of symmetry will always have rotational symmetry of at least order n.</div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Fill in the blanks (Symmetry Table):</div>
                <div class="sol-body">
                    <table class="math-table">
                        <tr><th>Shape</th><th>Centre of Rotation</th><th>Order</th><th>Angle</th></tr>
                        <tr><td>Square</td><td>Intersection of Diagonals</td><td>4</td><td>90°</td></tr>
                        <tr><td>Rectangle</td><td>Intersection of Diagonals</td><td>2</td><td>180°</td></tr>
                        <tr><td>Rhombus</td><td>Intersection of Diagonals</td><td>2</td><td>180°</td></tr>
                        <tr><td>Eq. Triangle</td><td>Centroid</td><td>3</td><td>120°</td></tr>
                        <tr><td>Reg. Hexagon</td><td>Centre</td><td>6</td><td>60°</td></tr>
                        <tr><td>Circle</td><td>Centre</td><td>Infinite</td><td>Any Angle</td></tr>
                        <tr><td>Semi-circle</td><td>Mid-point of diameter</td><td>1</td><td>360°</td></tr>
                    </table>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Name the quadrilaterals which have both line and rotational symmetry of order more than 1.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="ans-highlight">Square, Rectangle, and Rhombus</span>.</div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. After rotating by 60°, a figure looks same as original. At what other angles will this happen?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> It will happen at multiples of 60°: <span class="ans-highlight">120°, 180°, 240°, 300°, and 360°</span>.</div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. Can we have rotational symmetry of order > 1 with angle:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 45°? <span class="ans-highlight">Yes</span> (360 is divisible by 45, order 8).</div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 17°? <span class="ans-highlight">No</span> (360 is not exactly divisible by 17).</div>
                </div>
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
