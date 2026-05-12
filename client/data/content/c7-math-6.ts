import { ChapterContent } from "../types";

export const c7Math6: ChapterContent = {
    id: "c7-math-6",
    number: 6,
    title: "The Triangle and its Properties",
    isHtmlView: true,
    introduction: "Triangles are three-sided polygons with unique properties. In this chapter, we explore medians, altitudes, and fundamental theorems like the Angle Sum Property and Pythagoras Theorem.",
    definitions: [
        { term: "Median", definition: "A line segment connecting a vertex to the midpoint of the opposite side." },
        { term: "Altitude", definition: "A perpendicular line segment from a vertex to the opposite side." },
        { term: "Right-angled Triangle", definition: "A triangle where one angle is exactly 90°." }
    ],
    keyPoints: [
        "The exterior angle of a triangle is equal to the sum of its interior opposite angles.",
        "The sum of all three interior angles of a triangle is 180°.",
        "The sum of the lengths of any two sides of a triangle is greater than the third side.",
        "Pythagoras Theorem: In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides."
    ],
    formulas: [
        { name: "Pythagoras Theorem", formula: "a² + b² = c² (where c is hypotenuse)" },
        { name: "Angle Sum Property", formula: "∠A + ∠B + ∠C = 180°" }
    ],
    crux: [],
    exercises: [
        { id: "ex6-1", name: "Exercise 6.1", questions: [] },
        { id: "ex6-2", name: "Exercise 6.2", questions: [] },
        { id: "ex6-3", name: "Exercise 6.3", questions: [] },
        { id: "ex6-4", name: "Exercise 6.4", questions: [] },
        { id: "ex6-5", name: "Exercise 6.5", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #F06292; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(240, 98, 146, 0.05); border-left: 4px solid #F06292; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #F06292; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Explore the geometry of triangles, understanding how medians and altitudes work, and discovering the powerful Angle Sum and Exterior Angle properties.</p>
            <div class="point-box">
                <div class="point-item">Median connects vertex to midpoint.</div>
                <div class="point-item">Altitude is the perpendicular height.</div>
                <div class="point-item">Exterior angle equals sum of interior opposite angles.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex6-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. In ΔPQR, D is the mid-point of <span style="text-decoration: overline;">QR</span>. <br/><span style="text-decoration: overline;">PM</span> is ________ <br/><span style="text-decoration: overline;">PD</span> is ________ <br/>Is QM = MR?</div>
            <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 80 20 L 20 120 L 180 120 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="80" y1="20" x2="80" y2="120" stroke="#F06292" stroke-width="2" />
                            <line x1="80" y1="20" x2="100" y2="120" stroke="#F06292" stroke-width="1.5" stroke-dasharray="4" />
                            <path d="M 80 110 L 90 110 L 90 120" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="80" y="-10" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">P</text>
                            <text x="5" y="145" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Q</text>
                            <text x="195" y="145" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">R</text>
                            <text x="80" y="150" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">M</text>
                            <text x="110" y="150" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">D</text>
                        </g>
                    </svg>
            </div>
            <div class="solution">
                <div class="sol-step"><b>(i) <span style="text-decoration: overline;">PM</span> is ________</b></div>
                <div class="sol-step">=> <span style="text-decoration: overline;">PM</span> is the perpendicular line segment from vertex P to the opposite side <span style="text-decoration: overline;">QR</span>.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Altitude</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <span style="text-decoration: overline;">PD</span> is ________</b></div>
                <div class="sol-step">=> D is the mid-point of <span style="text-decoration: overline;">QR</span>, and <span style="text-decoration: overline;">PD</span> connects vertex P to this mid-point.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Median</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(iii) Is QM = MR?</b></div>
                <div class="sol-step">=> From the figure, M is the foot of the altitude and D is the midpoint.</div>
                <div class="sol-step">=> Since D is the midpoint, QD = DR.</div>
                <div class="sol-step">=> M and D are distinct points, so QM ≠ MR.</div>
                <div class="sol-step">Result: <span class="ans-highlight">No</span></div>
            </div>

            <div class="question">2. Draw rough sketches for the following: <br/>(a) In ΔABC, BE is a median. <br/>(b) In ΔPQR, PQ and PR are altitudes of the triangle. <br/>(c) In ΔXYZ, YL is an altitude in the exterior of the triangle.</div>
            <div class="solution">
                <div class="sol-step"><b>(a) BE is a median in ΔABC:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 100 20 L 30 110 L 170 110 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="170" y1="110" x2="65" y2="65" stroke="#F06292" stroke-width="2" />
                            <text x="100" y="-15" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
                            <text x="185" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">B</text>
                            <text x="15" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
                            <text x="40" y="50" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">E</text>
                        </g>
                    </svg>
                </div>
                
                <div class="sol-step" style="margin-top: 30px;"><b>(b) PQ and PR are altitudes in ΔPQR:</b></div>
                <div class="sol-step">=> This happens in a <span class="ans-highlight">Right-angled triangle</span> at vertex P.</div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 30 L 50 120 L 150 120 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <rect x="50" y="110" width="10" height="10" fill="none" stroke="#F06292" />
                            <text x="35" y="150" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">P</text>
                            <text x="175" y="150" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">R</text>
                            <text x="50" y="5" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">Q</text>
                        </g>
                    </svg>
                </div>

                <div class="sol-step" style="margin-top: 30px;"><b>(c) YL is an altitude in the exterior of ΔXYZ:</b></div>
                <div class="sol-step">=> This happens in an <span class="ans-highlight">Obtuse-angled triangle</span>.</div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 90 30 L 140 100 L 200 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="90" y1="30" x2="90" y2="100" stroke="#F06292" stroke-width="2" stroke-dasharray="4" />
                            <line x1="90" y1="100" x2="140" y2="100" stroke="#fff" stroke-width="1" stroke-dasharray="2" />
                            <rect x="90" y="90" width="10" height="10" fill="none" stroke="#F06292" />
                            <text x="90" y="5" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Y</text>
                            <text x="140" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">X</text>
                            <text x="220" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Z</text>
                            <text x="65" y="140" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">L</text>
                        </g>
                    </svg>
                </div>
            </div>

            <div class="question">3. Verify by drawing a diagram if the median and altitude of an isosceles triangle can be same.</div>
            <div class="solution">
                <div class="sol-step">=> In an <span class="ans-highlight">isosceles triangle</span>, the altitude to the non-equal side is also the median.</div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 90 20 L 40 120 L 140 120 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="90" y1="20" x2="90" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="90" y="-10" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
                            <text x="20" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">B</text>
                            <text x="160" y="140" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
                            <text x="90" y="150" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">M</text>
                            <text x="35" y="70" fill="#F06292" font-size="11" font-weight="bold" text-anchor="middle">Side 1</text>
                            <text x="145" y="70" fill="#F06292" font-size="11" font-weight="bold" text-anchor="middle">Side 2</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">=> Here, AB = AC.</div>
                <div class="sol-step">=> AM is perpendicular to BC (Altitude).</div>
                <div class="sol-step">=> AM also divides BC into two equal parts (BM = MC).</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes, they can be the same.</span></div>
            </div>
        </div>
        `,
        "ex6-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. Find the value of the unknown exterior angle x in the following diagrams:</div>
            
            <div class="solution">
                <div class="sol-step"><b>(i) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="200" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="50" y="110" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">70°</text>
                            <text x="90" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="165" y="80" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 50° + 70° = <span class="ans-highlight">120°</span></div>
                
                <div class="sol-step" style="margin-top: 30px;"><b>(ii) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="40" y1="90" x2="10" y2="115" stroke="#F06292" stroke-width="2" />
                            <text x="85" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">65°</text>
                            <text x="120" y="110" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">45°</text>
                            <text x="15" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 65° + 45° = <span class="ans-highlight">110°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(iii) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 160 90 L 140 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="30" x2="175" y2="5" stroke="#F06292" stroke-width="2" />
                            <text x="50" y="80" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                            <text x="140" y="80" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">40°</text>
                            <text x="175" y="15" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 30° + 40° = <span class="ans-highlight">70°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(iv) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="40" y1="90" x2="10" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="90" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                            <text x="110" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                            <text x="15" y="80" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 60° + 60° = <span class="ans-highlight">120°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(v) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="160" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="60" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="90" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="165" y="110" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 50° + 50° = <span class="ans-highlight">100°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(vi) Find unknown exterior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="200" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 140 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="140" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="60" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                            <text x="130" y="55" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                            <text x="155" y="110" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x = 30° + 60° = <span class="ans-highlight">90°</span></div>
            </div>

            <div class="question">2. Find the value of the unknown interior angle x in the following figures:</div>
            
            <div class="solution">
                <div class="sol-step"><b>(i) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="200" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="80" y="65" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="110" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="165" y="80" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">115°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles</div>
                <div class="sol-step">x + 50° = 115° => x = 115° - 50° = <span class="ans-highlight">65°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(ii) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 90 L 150 90 L 100 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="50" y1="90" x2="20" y2="115" stroke="#F06292" stroke-width="2" />
                            <text x="100" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">70°</text>
                            <text x="135" y="80" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="15" y="125" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">100°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 70° = 100° => x = 100° - 70° = <span class="ans-highlight">30°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(iii) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 60 90 L 160 90 L 160 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="160" y1="30" x2="160" y2="10" stroke="#F06292" stroke-width="2" />
                            <rect x="150" y="80" width="10" height="10" fill="none" stroke="#fff" />
                            <text x="85" y="80" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="160" y="0" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">125°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">One interior angle is 90° (Right angle symbol).</div>
                <div class="sol-step">x + 90° = 125° => x = 125° - 90° = <span class="ans-highlight">35°</span></div>
                
                <div class="sol-step" style="margin-top: 30px;"><b>(iv) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 90 L 150 90 L 100 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="50" y1="90" x2="20" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="100" y="45" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                            <text x="130" y="80" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="-5" y="90" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">120°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 60° = 120° => x = 120° - 60° = <span class="ans-highlight">60°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(v) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 60 90 L 160 90 L 160 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="160" y1="30" x2="190" y2="10" stroke="#F06292" stroke-width="2" />
                            <text x="100" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                            <text x="145" y="45" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="210" y="10" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">80°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 30° = 80° => x = 80° - 30° = <span class="ans-highlight">50°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(vi) Find unknown interior angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 90 L 150 90 L 160 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="150" y1="90" x2="180" y2="115" stroke="#F06292" stroke-width="2" />
                            <text x="100" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">35°</text>
                            <text x="145" y="45" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="195" y="125" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">75°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 35° = 75° => x = 75° - 35° = <span class="ans-highlight">40°</span></div>
            </div>
        </div>
        `,
        "ex6-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. Find the value of the unknown x in the following diagrams:</div>
            
            <div class="solution">
                <div class="sol-step"><b>(i) Find unknown angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 80 20 L 40 90 L 160 90 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <text x="80" y="45" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="60" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="140" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 50° + 60° = 180°</div>
                <div class="sol-step">x = 180° - 110° = <span class="ans-highlight">70°</span></div>
                
                <div class="sol-step" style="margin-top: 30px;"><b>(ii) Find unknown angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 20 L 40 100 L 140 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <rect x="40" y="90" width="10" height="10" fill="none" stroke="#fff" />
                            <text x="60" y="45" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="65" y="95" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 90° + 30° = 180°</div>
                <div class="sol-step">x = 180° - 120° = <span class="ans-highlight">60°</span></div>

                <div class="sol-step" style="margin-top: 30px;"><b>(iii) Find unknown angle x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 110 30 L 40 130 L 180 130 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <text x="65" y="115" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">110°</text>
                            <text x="110" y="55" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                            <text x="155" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">x + 30° + 110° = 180°</div>
                <div class="sol-step">x = 180° - 140° = <span class="ans-highlight">40°</span></div>
            </div>

            <div class="question">2. Find the values of the unknowns x and y in the following diagrams:</div>
            
            <div class="solution">
                <div class="sol-step"><b>(i) Triangle with exterior 120°:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="200" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="90" y="55" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="65" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="120" y="85" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="180" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">120°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y + 120° = 180° (Linear pair) => <span class="ans-highlight">y = 60°</span></div>
                <div class="sol-step">x + 50° = 120° (Exterior angle property) => <span class="ans-highlight">x = 70°</span></div>

                <div class="sol-step" style="margin-top: 35px;"><b>(ii) Vertically Opposite Angles at vertex:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <line x1="60" y1="20" x2="160" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="160" y1="20" x2="60" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="60" y1="120" x2="160" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="110" y="5" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">80°</text>
                            <text x="110" y="105" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="80" y="115" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="145" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y = 80° (Vertically opposite angles)</div>
                <div class="sol-step">In triangle: x + y + 50° = 180°</div>
                <div class="sol-step">x + 80° + 50° = 180° => <span class="ans-highlight">x = 50°</span></div>
                
                <div class="sol-step" style="margin-top: 35px;"><b>(iii) Exterior 80° with y:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 90 L 140 90 L 90 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="140" y1="90" x2="200" y2="90" stroke="#F06292" stroke-width="2" />
                            <text x="90" y="55" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="65" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">50°</text>
                            <text x="120" y="85" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="180" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">80°</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y + 80° = 180° (Linear pair) => <span class="ans-highlight">y = 100°</span></div>
                <div class="sol-step">x + 50° = 80° (Exterior angle property) => <span class="ans-highlight">x = 30°</span></div>

                <div class="sol-step" style="margin-top: 35px;"><b>(iv) Vertically Opposite 60°:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <line x1="60" y1="20" x2="160" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="160" y1="20" x2="60" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="60" y1="120" x2="160" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="110" y="5" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">60°</text>
                            <text x="110" y="105" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="80" y="115" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>
                            <text x="145" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y = 60° (Vertically opposite angles)</div>
                <div class="sol-step">x + y + 30° = 180° => x + 60° + 30° = 180° => <span class="ans-highlight">x = 90°</span></div>

                <div class="sol-step" style="margin-top: 35px;"><b>(v) 90° Vertically Opposite:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <line x1="60" y1="20" x2="160" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="160" y1="20" x2="60" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="60" y1="120" x2="160" y2="120" stroke="#F06292" stroke-width="2" />
                            <text x="110" y="-15" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">90°</text>
                            <text x="110" y="95" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="40" y="150" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="180" y="150" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y = 90° (Vertically opposite)</div>
                <div class="sol-step">In triangle: x + x + y = 180°</div>
                <div class="sol-step">2x + 90° = 180° => 2x = 90° => <span class="ans-highlight">x = 45°</span></div>

                <div class="sol-step" style="margin-top: 35px;"><b>(vi) Vertically Opposite x:</b></div>
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <!-- Three intersecting lines forming a triangle with V.O.A -->
                            <line x1="100" y1="20" x2="60" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="100" y1="20" x2="140" y2="120" stroke="#fff" stroke-width="2" />
                            <line x1="40" y1="120" x2="160" y2="120" stroke="#fff" stroke-width="2" />
                            <!-- Vertex labels -->
                            <text x="100" y="5" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="100" y="45" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">y</text>
                            <text x="45" y="125" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="75" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="155" y="125" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                            <text x="125" y="115" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">x</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">y = x (Vertically opposite)</div>
                <div class="sol-step">Inside angles are all x.</div>
                <div class="sol-step">x + x + x = 180° => 3x = 180° => <span class="ans-highlight">x = 60°</span></div>
                <div class="sol-step">Since y = x, <span class="ans-highlight">y = 60°</span></div>
            </div>
        </div>
        `,
        "ex6-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. Is it possible to have a triangle with the following sides? <br/>(i) 2 cm, 3 cm, 5 cm <br/>(ii) 3 cm, 6 cm, 7 cm <br/>(iii) 6 cm, 3 cm, 2 cm</div>
            <div class="solution">
                <div class="sol-step"><b>Property:</b> Sum of lengths of any two sides must be greater than the third side.</div>
                
                <div class="sol-step"><b>(i) 2 cm, 3 cm, 5 cm:</b></div>
                <div class="sol-step">=> 2 + 3 = 5</div>
                <div class="sol-step">=> Since 5 is NOT greater than 5, triangle is <span class="ans-highlight">Not Possible</span>.</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3 cm, 6 cm, 7 cm:</b></div>
                <div class="sol-step">=> 3 + 6 = 9 > 7</div>
                <div class="sol-step">=> 6 + 7 = 13 > 3</div>
                <div class="sol-step">=> 7 + 3 = 10 > 6</div>
                <div class="sol-step">=> All conditions satisfied. Triangle is <span class="ans-highlight">Possible</span>.</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 6 cm, 3 cm, 2 cm:</b></div>
                <div class="sol-step">=> 3 + 2 = 5</div>
                <div class="sol-step">=> Since 5 < 6 (sum of two sides is less than third), triangle is <span class="ans-highlight">Not Possible</span>.</div>
            </div>

            <div class="question">2. Take any point O in the interior of a triangle PQR. Is <br/>(i) OP + OQ > PQ? <br/>(ii) OQ + OR > QR? <br/>(iii) OR + OP > RP?</div>
            <div class="diagram-container">
                <svg width="100%" height="220" viewBox="0 0 300 250">
                    <g transform="translate(50, 50)">
                        <path d="M 40 130 L 180 130 L 110 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <circle cx="110" cy="100" r="4" fill="#F06292" />
                        <line x1="110" y1="100" x2="40" y2="130" stroke="#F06292" stroke-width="1" stroke-dasharray="4" />
                        <line x1="110" y1="100" x2="180" y2="130" stroke="#F06292" stroke-width="1" stroke-dasharray="4" />
                        <line x1="110" y1="100" x2="110" y2="30" stroke="#F06292" stroke-width="1" stroke-dasharray="4" />
                        <text x="10" y="155" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">P</text>
                        <text x="210" y="155" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Q</text>
                        <text x="110" y="5" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">R</text>
                        <text x="135" y="100" fill="#F06292" font-size="14" font-weight="bold" text-anchor="middle">O</text>
                    </g>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step"><b>(i) OP + OQ > PQ?</b></div>
                <div class="sol-step">=> In ΔOPQ, sum of two sides must be greater than third.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) OQ + OR > QR?</b></div>
                <div class="sol-step">=> In ΔOQR, sum of two sides must be greater than third.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) OR + OP > RP?</b></div>
                <div class="sol-step">=> In ΔORP, sum of two sides must be greater than third.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes</span></div>
            </div>

            <div class="question">3. AM is a median of a triangle ABC. Is AB + BC + CA > 2 AM?</div>
            <div class="diagram-container">
                <svg width="100%" height="220" viewBox="0 0 300 250">
                    <g transform="translate(50, 50)">
                        <path d="M 40 130 L 180 130 L 110 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="110" y1="30" x2="110" y2="130" stroke="#F06292" stroke-width="2" stroke-dasharray="4" />
                        <text x="110" y="5" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
                        <text x="10" y="155" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">B</text>
                        <text x="210" y="155" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
                        <text x="110" y="165" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">M</text>
                    </g>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">=> In ΔABM: AB + BM > AM ---(1)</div>
                <div class="sol-step">=> In ΔAMC: AC + MC > AM ---(2)</div>
                <div class="sol-step">=> Adding (1) and (2):</div>
                <div class="sol-step">=> AB + BM + AC + MC > AM + AM</div>
                <div class="sol-step">=> AB + (BM + MC) + AC > 2 AM</div>
                <div class="sol-step">=> Since BM + MC = BC:</div>
                <div class="sol-step">=> AB + BC + AC > 2 AM</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes</span></div>
            </div>

            <div class="question">4. ABCD is a quadrilateral. Is AB + BC + CD + DA > AC + BD?</div>
            <div class="diagram-container">
                <svg width="100%" height="220" viewBox="0 0 300 250">
                    <g transform="translate(50, 50)">
                        <path d="M 40 120 L 160 120 L 140 40 L 60 40 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="40" y1="120" x2="140" y2="40" stroke="#F06292" stroke-width="1" stroke-dasharray="4" />
                        <line x1="160" y1="120" x2="60" y2="40" stroke="#F06292" stroke-width="1" stroke-dasharray="4" />
                        <text x="10" y="150" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
                        <text x="190" y="150" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">B</text>
                        <text x="150" y="15" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
                        <text x="55" y="15" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">D</text>
                    </g>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">=> In ΔABC: AB + BC > AC</div>
                <div class="sol-step">=> In ΔADC: AD + CD > AC</div>
                <div class="sol-step">=> In ΔABD: AB + AD > BD</div>
                <div class="sol-step">=> In ΔBCD: BC + CD > BD</div>
                <div class="sol-step">=> Adding all four:</div>
                <div class="sol-step">=> 2(AB + BC + CD + DA) > 2(AC + BD)</div>
                <div class="sol-step">=> AB + BC + CD + DA > AC + BD</div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes</span></div>
            </div>

            <div class="question">6. The lengths of two sides of a triangle are 12 cm and 15 cm. Between what two measures should the length of the third side fall?</div>
            <div class="solution">
                <div class="sol-step">=> Sum of two sides = 15 + 12 = 27 cm</div>
                <div class="sol-step">=> Difference of two sides = 15 - 12 = 3 cm</div>
                <div class="sol-step">=> The third side must be greater than the difference and smaller than the sum.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Between 3 cm and 27 cm</span></div>
            </div>
        </div>
        `,
        "ex6-5": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. PQR is a triangle, right-angled at P. If PQ = 10 cm and PR = 24 cm, find QR.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 20 L 50 120 L 170 120 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <rect x="50" y="110" width="10" height="10" fill="none" stroke="#F06292" />
                            <text x="25" y="155" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">P</text>
                            <text x="195" y="155" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">R</text>
                            <text x="50" y="-10" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">Q</text>
                            <text x="5" y="75" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">10cm</text>
                            <text x="110" y="150" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">24cm</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">=> By Pythagoras Theorem: QR² = PQ² + PR²</div>
                <div class="sol-step">=> QR² = 10² + 24²</div>
                <div class="sol-step">=> QR² = 100 + 576 = 676</div>
                <div class="sol-step">=> QR = √676 = 26</div>
                <div class="sol-step">Result: <span class="ans-highlight">26 cm</span></div>
            </div>

            <div class="question">2. ABC is a triangle, right-angled at C. If AB = 25 cm and AC = 7 cm, find BC.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 50 20 L 50 120 L 170 120 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <rect x="50" y="110" width="10" height="10" fill="none" stroke="#F06292" />
                            <text x="25" y="155" fill="#F06292" font-size="15" font-weight="bold" text-anchor="middle">C</text>
                            <text x="195" y="155" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">B</text>
                            <text x="50" y="-10" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">A</text>
                            <text x="5" y="75" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">7cm</text>
                            <text x="140" y="60" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">25cm</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">=> By Pythagoras Theorem: AB² = AC² + BC²</div>
                <div class="sol-step">=> 25² = 7² + BC²</div>
                <div class="sol-step">=> 625 = 49 + BC²</div>
                <div class="sol-step">=> BC² = 625 - 49 = 576</div>
                <div class="sol-step">=> BC = √576 = 24</div>
                <div class="sol-step">Result: <span class="ans-highlight">24 cm</span></div>
            </div>

            <div class="question">3. A 15 m long ladder reached a window 12 m high from the ground on placing it against a wall at a distance a. Find the distance of the foot of the ladder from the wall.</div>
            <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <line x1="40" y1="20" x2="40" y2="120" stroke="#fff" stroke-width="4" /> <!-- Wall -->
                            <line x1="40" y1="120" x2="160" y2="120" stroke="#fff" stroke-width="2" /> <!-- Ground -->
                            <line x1="40" y1="20" x2="160" y2="120" stroke="#F06292" stroke-width="3" /> <!-- Ladder -->
                            <rect x="40" y="110" width="10" height="10" fill="none" stroke="#F06292" />
                            <text x="100" y="150" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">a</text>
                            <text x="-15" y="75" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">12m</text>
                            <text x="135" y="55" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">15m</text>
                        </g>
                    </svg>
            </div>
            <div class="solution">
                <div class="sol-step">=> Using Pythagoras: Ladder² = Wall² + a²</div>
                <div class="sol-step">=> 15² = 12² + a²</div>
                <div class="sol-step">=> 225 = 144 + a²</div>
                <div class="sol-step">=> a² = 225 - 144 = 81</div>
                <div class="sol-step">=> a = √81 = 9</div>
                <div class="sol-step">Result: <span class="ans-highlight">a = 9 m</span></div>
            </div>

            <div class="question">5. A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. Find the original height of the tree.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <!-- Ground -->
                            <line x1="20" y1="120" x2="200" y2="120" stroke="#fff" stroke-width="2" />
                            <!-- Standing part of tree -->
                            <line x1="50" y1="120" x2="50" y2="70" stroke="#4CAF50" stroke-width="4" />
                            <!-- Broken part (hypotenuse) -->
                            <line x1="50" y1="70" x2="170" y2="120" stroke="#F06292" stroke-width="3" stroke-dasharray="4" />
                            <text x="20" y="95" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">5m</text>
                            <text x="110" y="145" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">12m</text>
                            <text x="145" y="80" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">Broken Part</text>
                        </g>
                    </svg>
                </div>
                <div class="sol-step">=> Height of standing part (a) = 5 m</div>
                <div class="sol-step">=> Distance from base (b) = 12 m</div>
                <div class="sol-step">=> Using Pythagoras for broken part (c): c² = a² + b²</div>
                <div class="sol-step">=> c² = 5² + 12² = 25 + 144 = 169</div>
                <div class="sol-step">=> c = √169 = 13 m</div>
                <div class="sol-step">=> Original Height = Standing part + Broken part</div>
                <div class="sol-step">=> Original Height = 5 m + 13 m = 18 m</div>
                <div class="sol-step">Result: <span class="ans-highlight">18 m</span></div>
            </div>

            <div class="question">6. Angles Q and R of a ΔPQR are 25° and 65° respectively. Write which of the following is true: <br/>(i) PQ² + QR² = RP² <br/>(ii) PQ² + RP² = QR² <br/>(iii) RP² + QR² = PQ²</div>
            <div class="diagram-container">
                    <svg width="100%" height="220" viewBox="0 0 300 250">
                        <g transform="translate(50, 50)">
                            <path d="M 40 100 L 180 100 L 180 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                            <text x="65" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">25°</text>
                            <text x="155" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">65°</text>
                            <text x="20" y="130" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Q</text>
                            <text x="200" y="130" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">R</text>
                            <text x="200" y="20" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">P</text>
                        </g>
                    </svg>
            </div>
            <div class="solution">
                <div class="sol-step">=> Sum of angles = 180°</div>
                <div class="sol-step">=> ∠P = 180° - (25° + 65°)</div>
                <div class="sol-step">=> ∠P = 180° - 90° = 90°</div>
                <div class="sol-step">=> Since ∠P is 90°, the side opposite (QR) is the hypotenuse.</div>
                <div class="sol-step">=> By Pythagoras: PQ² + PR² = QR²</div>
                <div class="sol-step">Result: <span class="ans-highlight">(ii) is true</span></div>
            </div>

            <div class="question">7. Find the perimeter of the rectangle whose length is 40 cm and a diagonal is 41 cm.</div>
            <div class="solution">
                <div class="sol-step">=> In a rectangle, diagonal² = length² + breadth²</div>
                <div class="sol-step">=> 41² = 40² + breadth²</div>
                <div class="sol-step">=> 1681 = 1600 + breadth²</div>
                <div class="sol-step">=> breadth² = 81 => breadth = 9 cm</div>
                <div class="sol-step">=> Perimeter = 2(length + breadth)</div>
                <div class="sol-step">=> Perimeter = 2(40 + 9) = 2(49) = 98</div>
                <div class="sol-step">Result: <span class="ans-highlight">98 cm</span></div>
            </div>

            <div class="question">8. The diagonals of a rhombus measure 16 cm and 30 cm. Find its perimeter.</div>
            <div class="solution">
                <div class="sol-step">=> Diagonals of a rhombus bisect each other at 90°.</div>
                <div class="sol-step">=> Half of diagonals = 8 cm and 15 cm.</div>
                <div class="sol-step">=> Side of rhombus = √(8² + 15²)</div>
                <div class="sol-step">=> Side = √(64 + 225) = √289 = 17 cm</div>
                <div class="sol-step">=> Perimeter = 4 × side = 4 × 17 = 68</div>
                <div class="sol-step">Result: <span class="ans-highlight">68 cm</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Sum of angles of a triangle is:", options: ["90°", "180°", "360°", "270°"], correctAnswer: "B" },
        { id: "m2", question: "An exterior angle equals sum of ______ interior opposite angles.", options: ["Two", "Three", "One", "All"], correctAnswer: "A" },
        { id: "m3", question: "The longest side in a right triangle is:", options: ["Base", "Altitude", "Hypotenuse", "Median"], correctAnswer: "C" },
        { id: "m4", question: "If two sides are equal, the triangle is:", options: ["Scalene", "Isosceles", "Equilateral", "Right"], correctAnswer: "B" },
        { id: "m5", question: "In ΔABC, if ∠A=50° and ∠B=60°, then ∠C is:", options: ["70°", "180°", "110°", "90°"], correctAnswer: "A" },
        { id: "m6", question: "Altitude is always ______ to the opposite side.", options: ["Parallel", "Perpendicular", "Adjacent", "Equal"], correctAnswer: "B" },
        { id: "m7", question: "A triangle with all angles less than 90° is:", options: ["Obtuse", "Acute", "Right", "Straight"], correctAnswer: "B" },
        { id: "m8", question: "Can a triangle have two obtuse angles?", options: ["Yes", "No", "Only if isosceles", "Only if equilateral"], correctAnswer: "B" },
        { id: "m9", question: "Median divides the opposite side into ______ parts.", options: ["Equal", "Unequal", "Perpendicular", "Triple"], correctAnswer: "A" },
        { id: "m10", question: "In a right triangle, if legs are 3 and 4, hypotenuse is:", options: ["5", "7", "25", "12"], correctAnswer: "A" }
    ],
    summary: []
};
