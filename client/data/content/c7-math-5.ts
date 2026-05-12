import { ChapterContent } from "../types";

export const c7Math5: ChapterContent = {
    id: "c7-math-5",
    number: 5,
    title: "Lines and Angles",
    isHtmlView: true,
    introduction: "Lines and angles are the building blocks of geometry. Understanding their relationships is essential for solving complex geometric problems.",
    definitions: [
        { term: "Complementary Angles", definition: "Two angles whose sum is 90°." },
        { term: "Supplementary Angles", definition: "Two angles whose sum is 180°." },
        { term: "Adjacent Angles", definition: "Two angles with a common vertex and a common arm, but no common interior points." },
        { term: "Linear Pair", definition: "A pair of adjacent angles whose non-common sides are opposite rays." }
    ],
    keyPoints: [
        "Vertically opposite angles are equal.",
        "Angles in a linear pair sum to 180°.",
        "When two parallel lines are intersected by a transversal: (a) Corresponding angles are equal. (b) Alternate interior angles are equal. (c) Interior angles on the same side of the transversal are supplementary."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex5-1", name: "Exercise 5.1", questions: [] },
        { id: "ex5-2", name: "Exercise 5.2", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #43A047; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(67, 160, 71, 0.05); border-left: 4px solid #43A047; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #43A047; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 5: Lines and Angles Overview</h2>
            <p class="content-text">Explore the fundamental relationships between lines and the angles they form when they meet or cross.</p>
            <div class="point-box">
                <div class="point-item">Complementary = 90°, Supplementary = 180°.</div>
                <div class="point-item">Linear pairs form a straight line.</div>
                <div class="point-item">Parallel lines maintain constant distance and never meet.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex5-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(67, 160, 71, 0.1); color: #43A047; padding: 12px; border-radius: 8px; border-left: 6px solid #43A047; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #43A047; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #43A047; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(67, 160, 71, 0.3); text-align: center; }
            .formula-text { background: rgba(67, 160, 71, 0.1); padding: 2px 8px; border-radius: 4px; color: #43A047; font-family: 'Inter', sans-serif; }
        </style>
        <div class="container">
            <div class="question">1. Find the complement of each of the following angles:</div>
            
            <div class="solution">
                <div class="sol-step" style="margin-top: 15px;"><b>(i) 20°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="20" y1="80" x2="130" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="20" y1="80" x2="114" y2="45.8" stroke="#43A047" stroke-width="2" />
                        <text x="50" y="65" fill="#fff" font-size="12">20°</text>
                    </svg>
                </div>
                <div class="sol-step">Sum of complementary angles = 90°</div>
                <div class="sol-step">Complement = 90° - 20° = <span class="ans-highlight">70°</span></div>

                <div class="sol-step" style="margin-top: 25px;"><b>(ii) 63°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="20" y1="80" x2="130" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="20" y1="80" x2="65.4" y2="10" stroke="#43A047" stroke-width="2" />
                        <text x="45" y="60" fill="#fff" font-size="12">63°</text>
                    </svg>
                </div>
                <div class="sol-step">Complement = 90° - 63° = <span class="ans-highlight">27°</span></div>

                <div class="sol-step" style="margin-top: 25px;"><b>(iii) 57°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="20" y1="80" x2="130" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="20" y1="80" x2="74.5" y2="13" stroke="#43A047" stroke-width="2" />
                        <text x="45" y="60" fill="#fff" font-size="12">57°</text>
                    </svg>
                </div>
                <div class="sol-step">Complement = 90° - 57° = <span class="ans-highlight">33°</span></div>
            </div>

            <div class="question">2. Find the supplement of each of the following angles:</div>
            
            <div class="solution">
                <div class="sol-step" style="margin-top: 15px;"><b>(i) 105°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="10" y1="80" x2="140" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="80" y1="80" x2="61.9" y2="12.6" stroke="#43A047" stroke-width="2" />
                        <text x="35" y="65" fill="#fff" font-size="12">105°</text>
                    </svg>
                </div>
                <div class="sol-step">Sum of supplementary angles = 180°</div>
                <div class="sol-step">Supplement = 180° - 105° = <span class="ans-highlight">75°</span></div>

                <div class="sol-step" style="margin-top: 25px;"><b>(ii) 87°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="10" y1="80" x2="140" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="100" y1="80" x2="103.7" y2="10" stroke="#43A047" stroke-width="2" />
                        <text x="110" y="65" fill="#fff" font-size="12">87°</text>
                    </svg>
                </div>
                <div class="sol-step">Supplement = 180° - 87° = <span class="ans-highlight">93°</span></div>

                <div class="sol-step" style="margin-top: 25px;"><b>(iii) 154°</b></div>
                <div class="diagram-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <line x1="10" y1="80" x2="140" y2="80" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="48.1" y2="45.1" stroke="#43A047" stroke-width="2" />
                        <text x="65" y="70" fill="#fff" font-size="12">154°</text>
                    </svg>
                </div>
                <div class="sol-step">Supplement = 180° - 154° = <span class="ans-highlight">26°</span></div>
            </div>

            <div class="question">3. Identify which of the following pairs of angles are complementary and which are supplementary.</div>
            <div class="solution">
                <div class="sol-step" style="margin-top: 15px;"><b>(i) 65°, 115°</b></div>
                <div class="sol-step">Sum = 65° + 115° = 180° => <span class="ans-highlight">Supplementary</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 63°, 27°</b></div>
                <div class="sol-step">Sum = 63° + 27° = 90° => <span class="ans-highlight">Complementary</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 112°, 68°</b></div>
                <div class="sol-step">Sum = 112° + 68° = 180° => <span class="ans-highlight">Supplementary</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 130°, 50°</b></div>
                <div class="sol-step">Sum = 130° + 50° = 180° => <span class="ans-highlight">Supplementary</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(v) 45°, 45°</b></div>
                <div class="sol-step">Sum = 45° + 45° = 90° => <span class="ans-highlight">Complementary</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 80°, 10°</b></div>
                <div class="sol-step">Sum = 80° + 10° = 90° => <span class="ans-highlight">Complementary</span></div>
            </div>

            <div class="question">6. In the given figure, ∠1 and ∠2 are supplementary angles. If ∠1 is decreased, what changes should take place in ∠2 so that both the angles still remain supplementary.</div>
            <div class="diagram-container">
                <svg width="240" height="100" viewBox="0 0 240 100">
                    <line x1="20" y1="80" x2="220" y2="80" stroke="#fff" stroke-width="2" />
                    <line x1="120" y1="80" x2="180" y2="30" stroke="#43A047" stroke-width="2" />
                    <text x="70" y="70" fill="#fff" font-size="16">1</text>
                    <text x="160" y="70" fill="#fff" font-size="16">2</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">If ∠1 is decreased, ∠2 must be <span class="ans-highlight">increased</span> by the same amount.</div>
            </div>

            <div class="question">9. In the adjoining figure:</div>
            <div class="diagram-container">
                <svg width="240" height="240" viewBox="0 0 240 240">
                    <!-- Lines AB and CD -->
                    <line x1="20" y1="60" x2="220" y2="180" stroke="#fff" stroke-width="2" /> <!-- Line AB -->
                    <line x1="20" y1="180" x2="220" y2="60" stroke="#fff" stroke-width="2" /> <!-- Line CD -->
                    <!-- Ray OE -->
                    <line x1="120" y1="120" x2="220" y2="120" stroke="#43A047" stroke-width="2" />
                    <!-- Points -->
                    <text x="10" y="55" fill="#fff" font-size="14">A</text>
                    <text x="225" y="195" fill="#fff" font-size="14">B</text>
                    <text x="225" y="55" fill="#fff" font-size="14">C</text>
                    <text x="10" y="195" fill="#fff" font-size="14">D</text>
                    <text x="225" y="125" fill="#43A047" font-size="14">E</text>
                    <text x="110" y="140" fill="#fff" font-size="14">O</text>
                    <!-- Angles -->
                    <text x="140" y="90" fill="#43A047" font-size="16">1</text>
                    <text x="175" y="115" fill="#43A047" font-size="16">2</text>
                    <text x="175" y="150" fill="#43A047" font-size="16">3</text>
                    <text x="140" y="175" fill="#43A047" font-size="16">4</text>
                    <text x="70" y="125" fill="#43A047" font-size="16">5</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">(i) Is ∠1 adjacent to ∠2? <span class="ans-highlight">Yes</span>.</div>
                <div class="sol-step">(ii) Is ∠AOC adjacent to ∠AOE? <span class="ans-highlight">No</span>.</div>
                <div class="sol-step">(iii) Do ∠COE and ∠EOD form a linear pair? <span class="ans-highlight">Yes</span>.</div>
                <div class="sol-step">(iv) Are ∠BOD and ∠DOA supplementary? <span class="ans-highlight">Yes</span>.</div>
                <div class="sol-step">(v) Is ∠1 vertically opposite to ∠4? <span class="ans-highlight">Yes</span>.</div>
                <div class="sol-step">(vi) What is the vertically opposite angle of ∠5? <span class="ans-highlight">∠BOC</span> (∠2 + ∠3).</div>
            </div>

            <div class="question">12. Find x, y, and z:</div>
            <div class="solution">
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Intersecting lines with ray</b></div>
                <div class="diagram-container">
                    <svg width="240" height="160" viewBox="0 0 240 160">
                        <line x1="20" y1="100" x2="220" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="60" y1="20" x2="180" y2="140" stroke="#fff" stroke-width="2" />
                        <line x1="140" y1="100" x2="220" y2="40" stroke="#43A047" stroke-width="2" />
                        <text x="80" y="90" fill="#fff" font-size="14">40°</text>
                        <text x="140" y="90" fill="#43A047" font-size="16">x</text>
                        <text x="190" y="90" fill="#fff" font-size="14">25°</text>
                        <text x="135" y="125" fill="#43A047" font-size="16">y</text>
                        <text x="170" y="125" fill="#43A047" font-size="16">z</text>
                    </svg>
                </div>
                <div class="sol-step">x = 180° - (40° + 25°) = <span class="ans-highlight">115°</span></div>
                <div class="sol-step">z = 40° (Vertically opposite)</div>
                <div class="sol-step">y = 180° - 40° = <span class="ans-highlight">140°</span> (Linear pair)</div>
            </div>

            <div class="question">14. In the adjoining figure, name the pairs of angles:</div>
            <div class="diagram-container">
                <svg width="240" height="200" viewBox="0 0 240 200">
                    <!-- AC and BD -->
                    <line x1="20" y1="100" x2="220" y2="100" stroke="#fff" stroke-width="2" /> <!-- Line AC -->
                    <line x1="40" y1="180" x2="200" y2="20" stroke="#fff" stroke-width="2" /> <!-- Line BD -->
                    <!-- Perpendicular Ray OE -->
                    <line x1="120" y1="100" x2="120" y2="20" stroke="#43A047" stroke-width="2" />
                    <!-- Points -->
                    <text x="10" y="105" fill="#fff" font-size="14">B</text>
                    <text x="225" y="105" fill="#fff" font-size="14">D</text>
                    <text x="30" y="195" fill="#fff" font-size="14">C</text>
                    <text x="205" y="25" fill="#fff" font-size="14">A</text>
                    <text x="115" y="15" fill="#43A047" font-size="14">E</text>
                    <text x="125" y="115" fill="#fff" font-size="14">O</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">(i) Obtuse vertically opposite angles: <span class="ans-highlight">∠AOD and ∠BOC</span>.</div>
                <div class="sol-step">(ii) Adjacent complementary angles: <span class="ans-highlight">∠EOA and ∠AOB</span>.</div>
                <div class="sol-step">(iii) Equal supplementary angles: <span class="ans-highlight">∠EOB and ∠EOD</span>.</div>
            </div>
        </div>
        `,
        "ex5-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(67, 160, 71, 0.1); color: #43A047; padding: 12px; border-radius: 8px; border-left: 6px solid #43A047; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #43A047; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #43A047; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(67, 160, 71, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. If a || b, then ∠1 = ∠5. State the property.</div>
            <div class="diagram-container">
                <svg width="220" height="180" viewBox="0 0 220 180">
                    <line x1="20" y1="60" x2="200" y2="60" stroke="#fff" stroke-width="2" />
                    <line x1="20" y1="120" x2="200" y2="120" stroke="#fff" stroke-width="2" />
                    <line x1="60" y1="20" x2="160" y2="160" stroke="#43A047" stroke-width="2" />
                    <text x="205" y="65" fill="#fff" font-size="12">a</text>
                    <text x="205" y="125" fill="#fff" font-size="12">b</text>
                    <text x="80" y="50" fill="#43A047" font-size="14">1</text>
                    <text x="130" y="115" fill="#43A047" font-size="14">5</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">Property: <span class="ans-highlight">Corresponding Angles Property</span>.</div>
            </div>

            <div class="question">3. In the figure, p || q. Find unknown angles:</div>
            <div class="diagram-container">
                <svg width="220" height="180" viewBox="0 0 220 180">
                    <line x1="60" y1="20" x2="60" y2="160" stroke="#fff" stroke-width="2" />
                    <line x1="140" y1="20" x2="140" y2="160" stroke="#fff" stroke-width="2" />
                    <line x1="20" y1="40" x2="180" y2="140" stroke="#43A047" stroke-width="2" />
                    <text x="30" y="55" fill="#fff" font-size="12">125°</text>
                    <text x="75" y="55" fill="#43A047" font-size="14">e</text>
                    <text x="145" y="105" fill="#43A047" font-size="14">a</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">e = 180° - 125° = <span class="ans-highlight">55°</span></div>
                <div class="sol-step">a = e = <span class="ans-highlight">55°</span> (Alternate interior)</div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Complement of 30° is:", options: ["60°", "150°", "90°", "30°"], correctAnswer: "A" },
        { id: "m2", question: "Supplement of 100° is:", options: ["80°", "100°", "180°", "90°"], correctAnswer: "A" },
        { id: "m3", question: "Sum of complementary angles is:", options: ["90°", "180°", "360°", "45°"], correctAnswer: "A" },
        { id: "m4", question: "Sum of supplementary angles is:", options: ["180°", "90°", "360°", "270°"], correctAnswer: "A" },
        { id: "m5", question: "Vertically opposite angles are always:", options: ["Equal", "Supplementary", "Complementary", "Unequal"], correctAnswer: "A" },
        { id: "m6", question: "If two lines intersect, the linear pair sum is:", options: ["180°", "90°", "360°", "0°"], correctAnswer: "A" },
        { id: "m7", question: "Angles on a straight line sum to:", options: ["180°", "90°", "360°", "100°"], correctAnswer: "A" },
        { id: "m8", question: "Parallel lines ______ intersect.", options: ["Never", "Always", "Sometimes", "Once"], correctAnswer: "A" },
        { id: "m9", question: "If a || b, alternate interior angles are:", options: ["Equal", "Supplementary", "Complementary", "90°"], correctAnswer: "A" },
        { id: "m10", question: "Interior angles on same side of transversal sum to:", options: ["180°", "90°", "360°", "0°"], correctAnswer: "A" }
    ],
    summary: []
};
