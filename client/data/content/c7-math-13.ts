import { ChapterContent } from "../types";

export const c7Math13: ChapterContent = {
  id: "c7-math-13",
  number: 13,
  title: "Visualising Solid Shapes",
  isHtmlView: true,
  introduction:
    "In this chapter, we explore how to represent three-dimensional (3D) objects on a two-dimensional (2D) surface using nets, cross-sections, and shadows.",
  definitions: [
    { term: "Solid Shape (3D)", description: "A three-dimensional object that occupies space (e.g., cube, cuboid, sphere, cylinder, cone)." },
    { term: "Net", description: "A 2D flat layout pattern that can be folded to form a 3D solid shape." },
    { term: "Faces, Edges, Vertices", description: "Faces are flat surfaces, Edges are line segments where faces meet, and Vertices are corner points." },
  ],
  keyPoints: [
    "Cube: 6 square faces, 12 edges, 8 vertices.",
    "Cuboid: 6 rectangular faces, 12 edges, 8 vertices.",
    "Cylinder: 2 circular flat faces, 1 curved surface, 2 curved edges, 0 vertices.",
    "Cone: 1 circular base, 1 curved surface, 1 vertex.",
    "Sphere: 1 continuous curved surface, 0 edges, 0 vertices.",
  ],
  formulas: [
    { name: "Euler's Formula (for polyhedrons)", formula: "F + V - E = 2" },
  ],
  crux: [],
  exercises: [
    { id: "ex13-1", name: "Exercise 13.1", questions: [] },
    { id: "ex13-2", name: "Exercise 13.2", questions: [] },
    { id: "ex13-3", name: "Exercise 13.3", questions: [] },
    { id: "ex13-4", name: "Exercise 13.4", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF00FF; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 0, 255, 0.05); border-left: 4px solid #FF00FF; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF00FF; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Visualising Solid Shapes</div>
            <p class="content-text">Learn to identify 3D solids, count their faces, edges, and vertices, analyze 2D nets for building 3D solids, draw isometric and oblique sketches, and visualize cross-sections and shadows.</p>
            <div class="point-box">
                <div class="point-item">Polyhedron Properties: Faces (F), Vertices (V), and Edges (E).</div>
                <div class="point-item">Nets & Sketches: 2D patterns folding into 3D shapes, oblique and isometric drawings.</div>
                <div class="point-item">Cross-Sections & Shadows: Vertical/horizontal slices and 2D shadow projections under overhead lamps.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex13-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF00FF; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF00FF; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF00FF; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF00FF; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(255, 0, 255, 0.3); padding: 10px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(255, 0, 255, 0.15); color: #FF00FF; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Identify the nets which can be used to make cubes (cut out copies of the nets and try it):</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) Net pattern (i)</b></div>
                    <div class="svg-container">
                        <svg width="220" height="90" viewBox="0 0 220 90">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="20" y="10" width="30" height="30"/>
                                <rect x="50" y="10" width="30" height="30"/>
                                <rect x="50" y="40" width="30" height="30"/>
                                <rect x="80" y="40" width="30" height="30"/>
                                <rect x="110" y="40" width="30" height="30"/>
                                <rect x="140" y="40" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When folded, two square faces overlap each other leaving one side open.</div>
                    <div class="sol-step"><span class="ans-highlight">Cannot form a cube (No)</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) Net pattern (ii)</b></div>
                    <div class="svg-container">
                        <svg width="220" height="90" viewBox="0 0 220 90">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="20" y="10" width="30" height="30"/>
                                <rect x="50" y="10" width="30" height="30"/>
                                <rect x="80" y="10" width="30" height="30"/>
                                <rect x="80" y="40" width="30" height="30"/>
                                <rect x="110" y="40" width="30" height="30"/>
                                <rect x="140" y="40" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">All 6 square faces fold to meet along edges without overlap.</div>
                    <div class="sol-step"><span class="ans-highlight">Can form a cube (Yes)</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iii) Net pattern (iii)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="110" viewBox="0 0 180 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="20" y="10" width="30" height="30"/>
                                <rect x="50" y="10" width="30" height="30"/>
                                <rect x="50" y="40" width="30" height="30"/>
                                <rect x="80" y="40" width="30" height="30"/>
                                <rect x="80" y="70" width="30" height="30"/>
                                <rect x="110" y="70" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">This staggered net folds cleanly into a complete 3D cube.</div>
                    <div class="sol-step"><span class="ans-highlight">Can form a cube (Yes)</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iv) Net pattern (iv) - Cross Net</b></div>
                    <div class="svg-container">
                        <svg width="180" height="140" viewBox="0 0 180 140">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="60" y="10" width="30" height="30"/>
                                <rect x="30" y="40" width="30" height="30"/>
                                <rect x="60" y="40" width="30" height="30"/>
                                <rect x="90" y="40" width="30" height="30"/>
                                <rect x="60" y="70" width="30" height="30"/>
                                <rect x="60" y="100" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Standard cross net folds perfectly into a cube.</div>
                    <div class="sol-step"><span class="ans-highlight">Can form a cube (Yes)</span></div>

                    <!-- Q1 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(v) Net pattern (v)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="110" viewBox="0 0 180 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="20" y="10" width="30" height="30"/>
                                <rect x="50" y="10" width="30" height="30"/>
                                <rect x="80" y="10" width="30" height="30"/>
                                <rect x="110" y="10" width="30" height="30"/>
                                <rect x="50" y="40" width="30" height="30"/>
                                <rect x="50" y="70" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When folded, faces overlap leaving sides open.</div>
                    <div class="sol-step"><span class="ans-highlight">Cannot form a cube (No)</span></div>

                    <!-- Q1 (vi) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(vi) Net pattern (vi)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="110" viewBox="0 0 180 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="60" y="10" width="30" height="30"/>
                                <rect x="90" y="10" width="30" height="30"/>
                                <rect x="30" y="40" width="30" height="30"/>
                                <rect x="60" y="40" width="30" height="30"/>
                                <rect x="90" y="40" width="30" height="30"/>
                                <rect x="30" y="70" width="30" height="30"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Folds into a complete closed 3D cube.</div>
                    <div class="sol-step"><span class="ans-highlight">Can form a cube (Yes)</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>Conclusion for Q1:</b></div>
                    <div class="sol-step"><span class="ans-highlight">Nets that can be used to make cubes are (ii), (iii), (iv), and (vi).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Dice are cubes with dots on each face. Opposite faces of a die always have a total of seven dots on them. Insert suitable numbers in the blanks:</div>
                <div class="sol-body">
                    <!-- Q2 Net (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) First Dice Net</b></div>
                    <div class="svg-container">
                        <svg width="220" height="110" viewBox="0 0 220 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="50" y="10" width="30" height="30"/>
                                <rect x="80" y="10" width="30" height="30"/>
                                <rect x="80" y="40" width="30" height="30"/>
                                <rect x="110" y="40" width="30" height="30"/>
                                <rect x="140" y="40" width="30" height="30"/>
                                <rect x="140" y="70" width="30" height="30"/>
                            </g>
                            <text x="65" y="30" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">1</text>
                            <text x="95" y="30" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">2</text>
                            <text x="95" y="60" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">3</text>
                            <text x="125" y="60" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">4</text>
                            <text x="155" y="60" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">5</text>
                            <text x="155" y="90" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">6</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rule for a standard die: <b>Sum of numbers on opposite faces = 7</b>.</div>
                    <div class="sol-step">• Face with 4 is opposite to &rArr; 7 - 4 = <span class="ans-highlight">3</span></div>
                    <div class="sol-step">• Face with 5 is opposite to &rArr; 7 - 5 = <span class="ans-highlight">2</span></div>
                    <div class="sol-step">• Face with 6 is opposite to &rArr; 7 - 6 = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><span class="ans-highlight">Inserted Numbers in Blanks: 1, 2, 3</span></div>

                    <!-- Q2 Net (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) Second Dice Net</b></div>
                    <div class="svg-container">
                        <svg width="220" height="110" viewBox="0 0 220 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="110" y="10" width="30" height="30"/>
                                <rect x="140" y="10" width="30" height="30"/>
                                <rect x="110" y="40" width="30" height="30"/>
                                <rect x="50" y="70" width="30" height="30"/>
                                <rect x="80" y="70" width="30" height="30"/>
                                <rect x="110" y="70" width="30" height="30"/>
                            </g>
                            <text x="125" y="30" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">1</text>
                            <text x="155" y="30" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">2</text>
                            <text x="125" y="60" fill="#FFE082" font-size="16" font-weight="bold" text-anchor="middle">3</text>
                            <text x="65" y="90" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">4</text>
                            <text x="95" y="90" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">5</text>
                            <text x="125" y="90" fill="#FF80FF" font-size="16" font-weight="bold" text-anchor="middle">6</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• Face with 1 is opposite to &rArr; 7 - 1 = <span class="ans-highlight">6</span></div>
                    <div class="sol-step">• Face with 2 is opposite to &rArr; 7 - 2 = <span class="ans-highlight">5</span></div>
                    <div class="sol-step">• Face with 3 is opposite to &rArr; 7 - 3 = <span class="ans-highlight">4</span></div>
                    <div class="sol-step"><span class="ans-highlight">Inserted Numbers in Blanks: 4, 5, 6</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Can this be a net for a die? Explain your answer:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="180" height="110" viewBox="0 0 180 110">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="60" y="10" width="30" height="30"/>
                                <rect x="90" y="10" width="30" height="30"/>
                                <rect x="90" y="40" width="30" height="30"/>
                                <rect x="120" y="40" width="30" height="30"/>
                                <rect x="120" y="70" width="30" height="30"/>
                                <rect x="150" y="70" width="30" height="30"/>
                            </g>
                            <text x="75" y="30" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">1</text>
                            <text x="105" y="30" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">2</text>
                            <text x="105" y="60" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">3</text>
                            <text x="135" y="60" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">4</text>
                            <text x="135" y="90" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">5</text>
                            <text x="165" y="90" fill="#FFE082" font-size="15" font-weight="bold" text-anchor="middle">6</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When this net is folded into a cube:</div>
                    <div class="sol-step">• Face 1 is opposite to Face 4 &rArr; Sum = 1 + 4 = <b>5 (&ne; 7)</b></div>
                    <div class="sol-step">• Face 3 is opposite to Face 6 &rArr; Sum = 3 + 6 = <b>9 (&ne; 7)</b></div>
                    <div class="sol-step"><span class="ans-highlight">No, this cannot be a net for a die because the sum of opposite faces is not equal to 7.</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Here is an incomplete net for making a cube. Complete it in at least two different ways. Remember that a cube has six faces. How many are there in the net here?</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="180" height="60" viewBox="0 0 180 60">
                            <g fill="rgba(255, 0, 255, 0.1)" stroke="#FF00FF" stroke-width="2">
                                <rect x="30" y="15" width="35" height="35"/>
                                <rect x="65" y="15" width="35" height="35"/>
                                <rect x="100" y="15" width="35" height="35"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. Number of faces in the given incomplete net = <span class="ans-highlight">3 faces</span> (3 more needed).</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF00FF;">Way 1 (T / Cross Net):</b></div>
                    <div class="sol-step">Add 1 square to left row and 1 square each to top & bottom of middle column.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF00FF;">Way 2 (Staggered / Step Net):</b></div>
                    <div class="sol-step">Add 1 square on top row and 2 squares on bottom row in a staggered Z-pattern.</div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Match the nets with appropriate solids:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table>
                            <tr>
                                <th>3D Solid Shape</th>
                                <th>Matched Net</th>
                                <th>Description of Net</th>
                            </tr>
                            <tr>
                                <td><b>(a) Cube</b></td>
                                <td><span class="ans-highlight">(ii)</span></td>
                                <td>Cross net made of 6 square faces</td>
                            </tr>
                            <tr>
                                <td><b>(b) Cylinder</b></td>
                                <td><span class="ans-highlight">(iii)</span></td>
                                <td>Rectangle with 2 circular base caps</td>
                            </tr>
                            <tr>
                                <td><b>(c) Cone</b></td>
                                <td><span class="ans-highlight">(iv)</span></td>
                                <td>Circular sector with 1 circular base</td>
                            </tr>
                            <tr>
                                <td><b>(d) Pyramid</b></td>
                                <td><span class="ans-highlight">(i)</span></td>
                                <td>Square base with 4 attached triangular faces</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `,
    "ex13-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF00FF; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF00FF; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF00FF; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF00FF; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Use isometric dot paper and make an isometric sketch for each one of the given shapes:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) Cuboid (Dimensions: 6 &times; 3 &times; 2)</b></div>
                    <div class="svg-container">
                        <svg width="220" height="140" viewBox="0 0 220 140">
                            <!-- Front face -->
                            <polygon points="30,80 130,80 130,120 30,120" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Top face -->
                            <polygon points="30,80 70,30 170,30 130,80" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Right face -->
                            <polygon points="130,80 170,30 170,70 130,120" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Dimension labels -->
                            <text x="80" y="135" fill="#FFE082" font-size="12" text-anchor="middle">Length = 6</text>
                            <text x="20" y="105" fill="#FFE082" font-size="12" text-anchor="middle">H=3</text>
                            <text x="160" y="45" fill="#FFE082" font-size="12">D=2</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Draw isometric lines at 30° angles to show front face (6&times;3), top face (6&times;2), and side face (3&times;2).</div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) Stepped T-Block (Base=8, Height=8)</b></div>
                    <div class="svg-container">
                        <svg width="220" height="150" viewBox="0 0 220 150">
                            <path d="M 20,130 L 180,130 L 180,90 L 140,90 L 140,40 L 100,40 L 100,90 L 20,90 Z" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <path d="M 20,90 L 50,60 L 130,60 L 100,90 Z" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="1.5"/>
                            <path d="M 100,40 L 130,10 L 170,10 L 140,40 Z" fill="rgba(255,128,255,0.2)" stroke="#FF00FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Isometric sketch showing central tower (height 8) resting on a wide base (length 8).</div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iii) Step Block (Height=4, Width=2)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="140" viewBox="0 0 180 140">
                            <path d="M 40,120 L 100,120 L 100,60 L 70,60 L 70,30 L 40,30 Z" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <path d="M 40,30 L 70,10 L 100,10 L 70,30 Z" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2-step isometric tower of total height 4 units and width 2 units.</div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iv) 3-Step Staircase</b></div>
                    <div class="svg-container">
                        <svg width="200" height="140" viewBox="0 0 200 140">
                            <path d="M 30,120 L 150,120 L 150,90 L 110,90 L 110,60 L 70,60 L 70,30 L 30,30 Z" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Isometric representation of 3 rising steps of 2 units each.</div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. The dimensions of a cuboid are 5 cm, 3 cm and 2 cm. Draw three different isometric sketches of this cuboid:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Three different isometric orientations of a 5 cm &times; 3 cm &times; 2 cm cuboid:</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF00FF;">Sketch 1: (Length = 5 cm, Height = 3 cm, Depth = 2 cm)</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <polygon points="30,65 130,65 130,105 30,105" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="30,65 70,25 170,25 130,65" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="130,65 170,25 170,65 130,105" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <text x="80" y="118" fill="#FF80FF" font-size="11" text-anchor="middle">5 cm</text>
                            <text x="175" y="45" fill="#FF80FF" font-size="11">2 cm</text>
                            <text x="15" y="85" fill="#FF80FF" font-size="11">3 cm</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF00FF;">Sketch 2: (Length = 5 cm, Height = 2 cm, Depth = 3 cm)</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <polygon points="30,70 130,70 130,100 30,100" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="30,70 80,20 180,20 130,70" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="130,70 180,20 180,50 130,100" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <text x="80" y="115" fill="#FF80FF" font-size="11" text-anchor="middle">5 cm</text>
                            <text x="185" y="35" fill="#FF80FF" font-size="11">3 cm</text>
                            <text x="15" y="88" fill="#FF80FF" font-size="11">2 cm</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF00FF;">Sketch 3: (Length = 3 cm, Height = 5 cm, Depth = 2 cm)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="140" viewBox="0 0 180 140">
                            <polygon points="30,50 90,50 90,120 30,120" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="30,50 70,15 130,15 90,50" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="90,50 130,15 130,85 90,120" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <text x="60" y="133" fill="#FF80FF" font-size="11" text-anchor="middle">3 cm</text>
                            <text x="135" y="50" fill="#FF80FF" font-size="11">2 cm</text>
                            <text x="15" y="85" fill="#FF80FF" font-size="11">5 cm</text>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Three cubes each with 2 cm edge are placed side by side to form a cuboid. Sketch an oblique or isometric sketch of this cuboid:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="220" height="120" viewBox="0 0 220 120">
                            <polygon points="20,60 140,60 140,100 20,100" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="60" y1="60" x2="60" y2="100" stroke="#FF00FF" stroke-width="1.5" stroke-dasharray="3,3"/>
                            <line x1="100" y1="60" x2="100" y2="100" stroke="#FF00FF" stroke-width="1.5" stroke-dasharray="3,3"/>
                            <polygon points="20,60 60,20 180,20 140,60" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="140,60 180,20 180,60 140,100" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <text x="80" y="115" fill="#FF80FF" font-size="12" font-weight="bold" text-anchor="middle">Length = 6 cm (2+2+2)</text>
                            <text x="185" y="40" fill="#FF80FF" font-size="11">2 cm</text>
                            <text x="5" y="80" fill="#FF80FF" font-size="11">2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When 3 cubes of edge 2 cm are placed side-by-side:</div>
                    <div class="sol-step">• Length = 2 cm + 2 cm + 2 cm = <span class="ans-highlight">6 cm</span></div>
                    <div class="sol-step">• Breadth = <span class="ans-highlight">2 cm</span></div>
                    <div class="sol-step">• Height = <span class="ans-highlight">2 cm</span></div>
                    <div class="sol-step">The resulting cuboid has dimensions <span class="ans-highlight">6 cm &times; 2 cm &times; 2 cm</span>.</div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Make an oblique sketch for each one of the given isometric shapes:</div>
                <div class="sol-body">
                    <!-- Q4 (a) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(a) L-shaped Isometric Block</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <!-- Front face oblique -->
                            <polygon points="30,130 90,130 90,90 60,90 60,20 30,20" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2.5"/>
                            <!-- Parallel oblique depth lines -->
                            <line x1="30" y1="20" x2="60" y2="5" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="60" y1="20" x2="90" y2="5" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="60" y1="90" x2="90" y2="75" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="90" y1="130" x2="120" y2="115" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="60,5 90,5 90,75 60,75" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In an oblique sketch, the front L-face is drawn with true proportions, and parallel depth lines extend backwards at 45°.</div>

                    <!-- Q4 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(b) House / Wedge-roof Block</b></div>
                    <div class="svg-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <!-- Front pentagonal face -->
                            <polygon points="30,130 110,130 110,70 70,30 30,70" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2.5"/>
                            <!-- Oblique depth lines -->
                            <line x1="30" y1="70" x2="70" y2="40" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="70" y1="30" x2="110" y2="5" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="110" y1="70" x2="150" y2="45" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="110" y1="130" x2="150" y2="105" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Back roof line -->
                            <line x1="110" y1="5" x2="150" y2="45" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="150" y1="45" x2="150" y2="105" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Front pentagonal house face drawn with true dimensions and parallel oblique depth lines extending at 45°.</div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Give (i) an oblique sketch and (ii) an isometric sketch for each of the following:</div>
                <div class="sol-body">
                    <!-- Q5 (a) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(a) A cuboid of dimensions 5 cm, 3 cm and 2 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(i) <b>Oblique Sketch</b>: Draw front rectangle 5 cm &times; 3 cm, with 45° depth lines of 2 cm.</div>
                    <div class="sol-step">(ii) <b>Isometric Sketch</b>: Draw 3D cuboid using isometric grid dots.</div>
                    <div class="sol-step">Is your sketch unique? &rArr; <span class="ans-highlight">No, the sketch is not unique</span> because changing orientation (swapping length, height, depth) gives different visual sketches.</div>

                    <!-- Q5 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(b) A cube with an edge 4 cm long</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(i) <b>Oblique Sketch</b>: Draw front square 4 cm &times; 4 cm with 45° sloped depth lines of 4 cm.</div>
                    <div class="sol-step">(ii) <b>Isometric Sketch</b>: Draw 3D cube with equal edge lengths of 4 cm on isometric dot paper.</div>
                </div>
            </div>
        </div>
        `,
    "ex13-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF00FF; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF00FF; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF00FF; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF00FF; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. What cross-sections do you get when you give a (i) vertical cut (ii) horizontal cut to the following solids?</div>
                <div class="sol-body">
                    <!-- Q1 (a) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(a) A brick (Cuboid)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="100" viewBox="0 0 180 100">
                            <polygon points="30,40 120,40 120,80 30,80" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="30,40 60,15 150,15 120,40" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="120,40 150,15 150,55 120,80" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="75" y1="5" x2="75" y2="95" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut &rArr; <span class="ans-highlight">Rectangle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut &rArr; <span class="ans-highlight">Rectangle</span></div>

                    <!-- Q1 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(b) A round apple (Sphere)</b></div>
                    <div class="svg-container">
                        <svg width="160" height="120" viewBox="0 0 160 120">
                            <circle cx="80" cy="60" r="45" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2.5"/>
                            <line x1="80" y1="5" x2="80" y2="115" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="25" y1="60" x2="135" y2="60" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut &rArr; <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut &rArr; <span class="ans-highlight">Circle</span></div>

                    <!-- Q1 (c) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(c) A die (Cube)</b></div>
                    <div class="svg-container">
                        <svg width="150" height="120" viewBox="0 0 150 120">
                            <polygon points="30,45 90,45 90,105 30,105" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="30,45 60,15 120,15 90,45" fill="rgba(255,128,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <polygon points="90,45 120,15 120,75 90,105" fill="rgba(255,0,255,0.2)" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="60" y1="5" x2="60" y2="115" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut &rArr; <span class="ans-highlight">Square</span></div>
                    <div class="sol-step">• (ii) Horizontal cut &rArr; <span class="ans-highlight">Square</span></div>

                    <!-- Q1 (d) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(d) A circular pipe (Cylinder)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <ellipse cx="40" cy="60" rx="15" ry="40" fill="none" stroke="#FF00FF" stroke-width="2.5"/>
                            <ellipse cx="140" cy="60" rx="15" ry="40" fill="none" stroke="#FF00FF" stroke-width="2.5"/>
                            <line x1="40" y1="20" x2="140" y2="20" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="40" y1="100" x2="140" y2="100" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="90" y1="5" x2="90" y2="115" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut (transverse cut across pipe) &rArr; <span class="ans-highlight">Circle / Ring</span></div>
                    <div class="sol-step">• (ii) Horizontal cut (lengthwise cut along pipe) &rArr; <span class="ans-highlight">Rectangle</span></div>

                    <!-- Q1 (e) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(e) An ice cream cone (Cone)</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <ellipse cx="80" cy="25" rx="45" ry="15" fill="rgba(255,0,255,0.1)" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="35" y1="25" x2="80" y2="115" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="125" y1="25" x2="80" y2="115" stroke="#FF00FF" stroke-width="2"/>
                            <line x1="80" y1="5" x2="80" y2="125" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut (from vertex through center base) &rArr; <span class="ans-highlight">Triangle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut (parallel to base) &rArr; <span class="ans-highlight">Circle</span></div>
                </div>
            </div>
        </div>
        `,
    "ex13-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF00FF; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF00FF; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF00FF; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF00FF; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A bulb is kept burning just right above the following solids. Name the shape of the shadows obtained in each case:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) A ball</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <!-- Bulb -->
                            <circle cx="80" cy="20" r="10" fill="#FFE082" stroke="#FFD54F" stroke-width="2"/>
                            <line x1="80" y1="5" x2="80" y2="10" stroke="#FFD54F" stroke-width="2"/>
                            <!-- Light rays -->
                            <line x1="60" y1="25" x2="40" y2="50" stroke="#FFE082" stroke-width="1" stroke-dasharray="2,2"/>
                            <line x1="100" y1="25" x2="120" y2="50" stroke="#FFE082" stroke-width="1" stroke-dasharray="2,2"/>
                            <!-- 3D Ball -->
                            <circle cx="80" cy="55" r="25" fill="rgba(255,0,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Shadow -->
                            <ellipse cx="80" cy="110" rx="35" ry="10" fill="rgba(255,128,255,0.4)" stroke="#FF80FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Overhead light falling vertically on a spherical ball casts a 2D shadow of a <span class="ans-highlight">Circle</span>.</div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) A cylindrical pipe</b></div>
                    <div class="svg-container">
                        <svg width="180" height="130" viewBox="0 0 180 130">
                            <!-- Bulb -->
                            <circle cx="90" cy="20" r="10" fill="#FFE082" stroke="#FFD54F" stroke-width="2"/>
                            <!-- Cylinder -->
                            <rect x="40" y="45" width="100" height="30" rx="5" fill="rgba(255,0,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Shadow -->
                            <rect x="30" y="105" width="120" height="15" fill="rgba(255,128,255,0.4)" stroke="#FF80FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Overhead light falling on a horizontal cylinder casts a shadow of a <span class="ans-highlight">Rectangle</span>.</div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iii) A book</b></div>
                    <div class="svg-container">
                        <svg width="180" height="130" viewBox="0 0 180 130">
                            <!-- Bulb -->
                            <circle cx="90" cy="20" r="10" fill="#FFE082" stroke="#FFD54F" stroke-width="2"/>
                            <!-- Book -->
                            <path d="M 40,65 Q 90,60 140,65 L 140,75 Q 90,70 40,75 Z" fill="rgba(255,0,255,0.15)" stroke="#FF00FF" stroke-width="2"/>
                            <!-- Shadow -->
                            <rect x="30" y="105" width="120" height="15" fill="rgba(255,128,255,0.4)" stroke="#FF80FF" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Overhead light falling on a flat rectangular book casts a shadow of a <span class="ans-highlight">Rectangle</span>.</div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Here are the shadows of some 3-D objects, when seen under the lamp of an overhead projector. Identify the solid(s) that match each shadow:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) A Circle Shadow</b></div>
                    <div class="svg-container">
                        <svg width="120" height="90" viewBox="0 0 120 90">
                            <circle cx="60" cy="45" r="35" fill="rgba(255,0,255,0.3)" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Possible 3D solid objects: <span class="ans-highlight">Sphere (Ball), Cylinder (base view), Cone (base view)</span>.</div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) A Square Shadow</b></div>
                    <div class="svg-container">
                        <svg width="120" height="90" viewBox="0 0 120 90">
                            <rect x="25" y="10" width="70" height="70" fill="rgba(255,0,255,0.3)" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Possible 3D solid objects: <span class="ans-highlight">Cube, Cuboid (square face view), Square Pyramid (base view)</span>.</div>

                    <!-- Q2 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iii) A Triangle Shadow</b></div>
                    <div class="svg-container">
                        <svg width="120" height="90" viewBox="0 0 120 90">
                            <polygon points="60,10 15,80 105,80" fill="rgba(255,0,255,0.3)" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Possible 3D solid objects: <span class="ans-highlight">Cone (side view), Triangular Pyramid, Triangular Prism</span>.</div>

                    <!-- Q2 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(iv) A Rectangle Shadow</b></div>
                    <div class="svg-container">
                        <svg width="140" height="90" viewBox="0 0 140 90">
                            <rect x="15" y="20" width="110" height="50" fill="rgba(255,0,255,0.3)" stroke="#FF00FF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Possible 3D solid objects: <span class="ans-highlight">Cuboid (Book, Brick), Cylinder (side view)</span>.</div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Examine if the following are true statements:</div>
                <div class="sol-body">
                    <!-- Q3 (i) -->
                    <div class="sol-step"><b style="color:#FF00FF;">(i) The cube can cast a shadow in the shape of a rectangle.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When light falls at an oblique angle on a cube, the projected shadow stretches to form a rectangle.</div>
                    <div class="sol-step"><span class="ans-highlight">True</span></div>

                    <!-- Q3 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF00FF;">(ii) The cube can cast a shadow in the shape of a hexagon.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">When light falls along the body diagonal of a tilted cube, the 2D outline of its 6 visible edges forms a 6-sided polygon.</div>
                    <div class="sol-step"><span class="ans-highlight">True</span></div>
                </div>
            </div>
        </div>
        `
  },
  examples: [],
  mcqs: [
    { id: "c7m13-mcq-1", question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correctAnswer: "b", explanation: "A cube has 6 identical square faces." },
    { id: "c7m13-mcq-2", question: "How many vertices does a cuboid have?", options: ["6", "8", "10", "12"], correctAnswer: "b", explanation: "A cuboid has 8 corner vertices." },
    { id: "c7m13-mcq-3", question: "How many edges does a cube have?", options: ["6", "8", "12", "16"], correctAnswer: "c", explanation: "A cube has 12 straight line edges." },
    { id: "c7m13-mcq-4", question: "Which of the following is Euler's formula for polyhedra?", options: ["F + V - E = 2", "F - V + E = 2", "F + E - V = 2", "F + V + E = 2"], correctAnswer: "a", explanation: "Euler's formula states that Faces + Vertices - Edges = 2." },
    { id: "c7m13-mcq-5", question: "How many vertices does a sphere have?", options: ["0", "1", "2", "Infinitely many"], correctAnswer: "a", explanation: "A sphere is completely smooth and rounded with 0 vertices." },
    { id: "c7m13-mcq-6", question: "How many vertices does a cone have?", options: ["0", "1", "2", "3"], correctAnswer: "b", explanation: "A cone has 1 top apex vertex." },
    { id: "c7m13-mcq-7", question: "What shape is formed by the cross-section of a cylinder cut vertically?", options: ["Circle", "Rectangle", "Triangle", "Square"], correctAnswer: "b", explanation: "Cutting a cylinder vertically produces a rectangular cross-section." },
    { id: "c7m13-mcq-8", question: "What shape is formed by the cross-section of a cylinder cut horizontally?", options: ["Circle", "Rectangle", "Triangle", "Oval"], correctAnswer: "a", explanation: "Cutting a cylinder horizontally parallel to its base yields a circle." },
    { id: "c7m13-mcq-9", question: "A net is a:", options: ["3D solid shape", "2D layout pattern that folds into 3D shape", "Curved surface", "Line of symmetry"], correctAnswer: "b", explanation: "A net is a 2D flat skeleton pattern that can be folded to make a 3D solid." },
    { id: "c7m13-mcq-10", question: "If a solid shape has 5 faces and 6 vertices, how many edges does it have?", options: ["7", "8", "9", "10"], correctAnswer: "c", explanation: "Using F + V - E = 2 ➔ 5 + 6 - E = 2 ➔ 11 - E = 2 ➔ E = 9 edges." }
  ]
};
