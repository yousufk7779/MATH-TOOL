import { ChapterContent } from "../types";

export const c7Math6: ChapterContent = {
  id: "c7-math-6",
  number: 6,
  title: "The Triangle and its Properties",
  isHtmlView: true,
  introduction:
    "Triangles are three-sided polygons with unique properties. In this chapter, we explore medians, altitudes, and fundamental theorems like the Angle Sum Property and Pythagoras Theorem.",
  definitions: [
    {
      term: "Median",
      definition:
        "A line segment connecting a vertex to the midpoint of the opposite side.",
    },
    {
      term: "Altitude",
      definition:
        "A perpendicular line segment from a vertex to the opposite side.",
    },
    {
      term: "Right-angled Triangle",
      definition: "A triangle where one angle is exactly 90°.",
    },
  ],
  keyPoints: [
    "The exterior angle of a triangle is equal to the sum of its interior opposite angles.",
    "The sum of all three interior angles of a triangle is 180°.",
    "The sum of the lengths of any two sides of a triangle is greater than the third side.",
    "Pythagoras Theorem: In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides.",
  ],
  formulas: [
    {
      name: "Pythagoras Theorem",
      formula: "a² + b² = c² (where c is hypotenuse)",
    },
    { name: "Angle Sum Property", formula: "∠A + ∠B + ∠C = 180°" },
  ],
  crux: [],
  exercises: [
    { id: "ex6-1", name: "Exercise 6.1", questions: [] },
    { id: "ex6-2", name: "Exercise 6.2", questions: [] },
    { id: "ex6-3", name: "Exercise 6.3", questions: [] },
    { id: "ex6-4", name: "Exercise 6.4", questions: [] },
    { id: "ex6-5", name: "Exercise 6.5", questions: [] },
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
            .ans-highlight { color: #fff; font-weight: bold; }
            .subpart-title { color: #F06292; font-weight: bold; display: block; margin-bottom: 5px; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
        </style>
        <div class="container">
            <div class="question">1. In ΔPQR, D is the mid-point of QR. Refer to the diagram below to identify the following segments.</div>
            
            <div class="diagram-container">
                <svg width="200" height="150" viewBox="0 0 200 150" style="margin: auto; display: block;">
                    <!-- Triangle PQR -->
                    <line x1="100" y1="20" x2="30" y2="120" stroke="#fff" stroke-width="2" />
                    <line x1="100" y1="20" x2="170" y2="120" stroke="#fff" stroke-width="2" />
                    <line x1="30" y1="120" x2="170" y2="120" stroke="#fff" stroke-width="2" />
                    
                    <!-- Altitude PM -->
                    <line x1="100" y1="20" x2="80" y2="120" stroke="#F06292" stroke-width="2" />
                    <!-- Right angle indicator at M -->
                    <rect x="80" y="110" width="8" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                    
                    <!-- Median PD -->
                    <line x1="100" y1="20" x2="100" y2="120" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                    
                    <!-- Labels -->
                    <text x="100" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">P</text>
                    <text x="20" y="125" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Q</text>
                    <text x="180" y="125" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R</text>
                    <text x="80" y="138" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">M</text>
                    <text x="100" y="138" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">D</text>
                </svg>
            </div>

            <div class="solution">
                <span class="subpart-title">(i) PM is _______.</span>
                <div class="sol-step">PM is the perpendicular line segment drawn from vertex P to the opposite side QR. Therefore, PM is the altitude.</div>
                <div class="sol-step">Answer: PM is the altitude.</div>
                
                <span class="subpart-title" style="margin-top: 15px;">(ii) PD is _______.</span>
                <div class="sol-step">D is the mid-point of QR. The line segment connecting vertex P to the mid-point D of the opposite side QR is the median.</div>
                <div class="sol-step">Answer: PD is the median.</div>
                
                <span class="subpart-title" style="margin-top: 15px;">(iii) Is QM = MR?</span>
                <div class="sol-step">No. D is the mid-point of QR, which means QD = DR. Since M is the foot of the altitude and is different from D, QM is not equal to MR.</div>
                <div class="sol-step">Answer: No, QM ≠ MR because D is the mid-point of QR.</div>
            </div>

            <div class="question">2. Draw rough sketches for the following:</div>
            
            <div class="solution">
                <span class="subpart-title">(a) In ΔABC, BE is a median.</span>
                <div class="sol-step">A median BE connects vertex B to the mid-point E of side AC.</div>
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <path d="M 90 20 L 30 100 L 150 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="150" y1="100" x2="60" y2="60" stroke="#F06292" stroke-width="2" />
                        <!-- Tick marks showing equal parts AE = EC -->
                        <line x1="55" y1="55" x2="65" y2="65" stroke="#F06292" stroke-width="1" />
                        <line x1="85" y1="55" x2="95" y2="65" stroke="#F06292" stroke-width="1" />
                        <!-- Labels -->
                        <text x="90" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">B</text>
                        <text x="20" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">A</text>
                        <text x="160" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">C</text>
                        <text x="50" y="55" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">E</text>
                    </svg>
                </div>
                
                <span class="subpart-title" style="margin-top: 25px;">(b) In ΔPQR, PQ and PR are altitudes of the triangle.</span>
                <div class="sol-step">If two altitudes are PQ and PR, they share the common vertex P. This means the triangle is right-angled at P, where PQ and PR serve as perpendicular heights.</div>
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <path d="M 40 20 L 40 100 L 140 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="90" width="10" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <text x="30" y="105" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">P</text>
                        <text x="40" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Q</text>
                        <text x="150" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R</text>
                    </svg>
                </div>

                <span class="subpart-title" style="margin-top: 25px;">(c) In ΔXYZ, YL is an altitude in the exterior of the triangle.</span>
                <div class="sol-step">In an obtuse-angled triangle XYZ (obtuse at X), the altitude YL from vertex Y falls outside the triangle on the extension of side XZ.</div>
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Triangle XYZ (obtuse at X) -->
                        <path d="M 80 20 L 110 100 L 160 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Extension line of base XZ to L -->
                        <line x1="80" y1="100" x2="110" y2="100" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3" />
                        <!-- Altitude YL -->
                        <line x1="80" y1="20" x2="80" y2="100" stroke="#F06292" stroke-width="2" />
                        <rect x="80" y="90" width="10" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <!-- Labels -->
                        <text x="80" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Y</text>
                        <text x="115" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">X</text>
                        <text x="165" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Z</text>
                        <text x="80" y="115" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">L</text>
                    </svg>
                </div>
            </div>

            <div class="question">3. Verify by drawing a diagram if the median and altitude of an isosceles triangle can be the same.</div>
            <div class="solution">
                <div class="sol-step">Let us draw an isosceles triangle PQR where PQ = PR. We draw PS perpendicular to QR (PS is the altitude). If we measure QS and SR, we find that QS = SR, which means S is also the mid-point of QR. Thus, PS is also the median of the triangle.</div>
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <path d="M 90 20 L 45 100 L 135 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="90" y1="20" x2="90" y2="100" stroke="#F06292" stroke-width="2" />
                        <rect x="90" y="90" width="8" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <text x="90" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">P</text>
                        <text x="35" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Q</text>
                        <text x="145" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R</text>
                        <text x="90" y="115" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">S</text>
                    </svg>
                </div>
                <div class="sol-step">Result: Yes, the median and altitude to the base of an isosceles triangle are the same.</div>
            </div>
        </div>
        `,
    "ex6-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #fff; font-weight: bold; }
            .subpart-title { color: #F06292; font-weight: bold; display: block; margin-bottom: 5px; }
            .diagram-container { background: #1a1a2e; padding: 10px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
        </style>
        <div class="container">
            <div class="question">1. Find the value of the unknown exterior angle x in the following diagrams:</div>
            
            <div class="solution">
                <span class="subpart-title">(i) Opposite interior angles are 50° and 70°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="160" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">70°</text>
                        <text x="80" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">50°</text>
                        <text x="140" y="73" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 50° + 70° = 120°</div>
                <div class="sol-step">Answer: x = 120°</div>
                
                <span class="subpart-title" style="margin-top: 25px;">(ii) Opposite interior angles are 65° and 45°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 70 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="30" y1="80" x2="5" y2="105" stroke="#F06292" stroke-width="2" />
                        <text x="70" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">65°</text>
                        <text x="105" y="75" fill="#fff" font-size="11" font-weight="bold" text-anchor="right">45°</text>
                        <text x="12" y="102" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 65° + 45° = 110°</div>
                <div class="sol-step">Answer: x = 110°</div>
                
                <span class="subpart-title" style="margin-top: 25px;">(iii) Opposite interior angles are 30° and 40°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 130 80 L 115 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="115" y1="30" x2="145" y2="5" stroke="#F06292" stroke-width="2" />
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">30°</text>
                        <text x="110" y="75" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">40°</text>
                        <text x="145" y="20" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 30° + 40° = 70°</div>
                <div class="sol-step">Answer: x = 70°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iv) Opposite interior angles are 60° and 60°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="30" y1="80" x2="5" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="75" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">60°</text>
                        <text x="95" y="75" fill="#fff" font-size="11" font-weight="bold" text-anchor="right">60°</text>
                        <text x="15" y="73" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 60° + 60° = 120°</div>
                <div class="sol-step">Answer: x = 120°</div>

                <span class="subpart-title" style="margin-top: 25px;">(v) Opposite interior angles are 50° and 50°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="140" y2="110" stroke="#F06292" stroke-width="2" />
                        <text x="50" y="75" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="75" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">50°</text>
                        <text x="140" y="103" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 50° + 50° = 100°</div>
                <div class="sol-step">Answer: x = 100°</div>

                <span class="subpart-title" style="margin-top: 25px;">(vi) Opposite interior angles are 30° and 60°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 120 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="120" y2="110" stroke="#F06292" stroke-width="2" />
                        <text x="50" y="75" fill="#fff" font-size="11" font-weight="bold">30°</text>
                        <text x="110" y="50" fill="#fff" font-size="11" font-weight="bold">60°</text>
                        <text x="130" y="103" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">Exterior angle = Sum of interior opposite angles <br/>x = 30° + 60° = 90°</div>
                <div class="sol-step">Answer: x = 90°</div>
            </div>

            <div class="question">2. Find the value of the unknown interior angle x in the following figures:</div>
            
            <div class="solution">
                <span class="subpart-title">(i) Exterior angle 115°, interior opposite angle 50°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="160" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="75" y="55" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="95" y="75" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="130" y="75" fill="#fff" font-size="11" font-weight="bold">115°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 50° = 115° (Exterior angle property) <br/>x = 115° - 50° = 65°</div>
                <div class="sol-step">Answer: x = 65°</div>
                
                <span class="subpart-title" style="margin-top: 25px;">(ii) Exterior angle 100°, interior opposite angle 70°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="30" y1="80" x2="5" y2="105" stroke="#F06292" stroke-width="2" />
                        <text x="80" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">70°</text>
                        <text x="95" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="10" y="102" fill="#fff" font-size="11" font-weight="bold">100°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 70° = 100° (Exterior angle property) <br/>x = 100° - 70° = 30°</div>
                <div class="sol-step">Answer: x = 30°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iii) Exterior angle 125°, right angle as one interior opposite angle.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 40 80 L 130 80 L 130 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="130" y1="30" x2="130" y2="5" stroke="#F06292" stroke-width="2" />
                        <rect x="120" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="1.5" />
                        <text x="65" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="135" y="20" fill="#fff" font-size="11" font-weight="bold">125°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 90° = 125° (Exterior angle property) <br/>x = 125° - 90° = 35°</div>
                <div class="sol-step">Answer: x = 35°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iv) Exterior angle 120°, interior opposite angle 60°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="30" y1="80" x2="5" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="75" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">60°</text>
                        <text x="95" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="10" y="75" fill="#fff" font-size="11" font-weight="bold">120°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 60° = 120° (Exterior angle property) <br/>x = 120° - 60° = 60°</div>
                <div class="sol-step">Answer: x = 60°</div>

                <span class="subpart-title" style="margin-top: 25px;">(v) Exterior angle 80°, interior opposite angle 30°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="140" y2="105" stroke="#F06292" stroke-width="2" />
                        <text x="75" y="38" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">x</text>
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">30°</text>
                        <text x="135" y="100" fill="#fff" font-size="11" font-weight="bold">80°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 30° = 80° (Exterior angle property) <br/>x = 80° - 30° = 50°</div>
                <div class="sol-step">Answer: x = 50°</div>

                <span class="subpart-title" style="margin-top: 25px;">(vi) Exterior angle 75°, interior opposite angle 35°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 120 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="140" y2="105" stroke="#F06292" stroke-width="2" />
                        <text x="100" y="55" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">35°</text>
                        <text x="135" y="100" fill="#fff" font-size="11" font-weight="bold">75°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 35° = 75° (Exterior angle property) <br/>x = 75° - 35° = 40°</div>
                <div class="sol-step">Answer: x = 40°</div>
            </div>
        </div>
        `,
    "ex6-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #fff; font-weight: bold; }
            .subpart-title { color: #F06292; font-weight: bold; display: block; margin-bottom: 5px; }
            .diagram-container { background: #1a1a2e; padding: 10px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
        </style>
        <div class="container">
            <div class="question">1. Find the value of the unknown x in the following diagrams:</div>
            
            <div class="solution">
                <span class="subpart-title">(i) Angles are x, 50°, and 60°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 130 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <text x="80" y="38" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">x</text>
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="105" y="75" fill="#fff" font-size="11" font-weight="bold" text-anchor="right">60°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 50° + 60° = 180° (Angle sum property) <br/>x + 110° = 180° <br/>x = 180° - 110° = 70°</div>
                <div class="sol-step">Answer: x = 70°</div>
                
                <span class="subpart-title" style="margin-top: 25px;">(ii) Right-angled triangle at P with angles x and 30°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 40 20 L 40 80 L 130 80 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="1.5" />
                        <text x="55" y="35" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="105" y="75" fill="#fff" font-size="11" font-weight="bold" text-anchor="right">30°</text>
                    </svg>
                </div>
                <div class="sol-step">x + 30° + 90° = 180° (Angle sum property) <br/>x + 120° = 180° <br/>x = 180° - 120° = 60°</div>
                <div class="sol-step">Answer: x = 60°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iii) Angles are 110°, 30°, and x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 140 80 L 95 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">110°</text>
                        <text x="95" y="50" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">30°</text>
                        <text x="120" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">x + 30° + 110° = 180° (Angle sum property) <br/>x + 140° = 180° <br/>x = 180° - 140° = 40°</div>
                <div class="sol-step">Answer: x = 40°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iv) Angles are 50°, x, and x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 130 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <text x="80" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">50°</text>
                        <text x="45" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="110" y="75" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">x + x + 50° = 180° (Angle sum property) <br/>2x + 50° = 180° <br/>2x = 180° - 50° = 130° <br/>x = <div class="frac"><span class="num">130°</span><span class="den">2</span></div> = 65°</div>
                <div class="sol-step">Answer: x = 65°</div>

                <span class="subpart-title" style="margin-top: 25px;">(v) Angles are x, x, and x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <text x="75" y="38" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">x</text>
                        <text x="45" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="100" y="75" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">x + x + x = 180° (Angle sum property) <br/>3x = 180° <br/>x = <div class="frac"><span class="num">180°</span><span class="den">3</span></div> = 60°</div>
                <div class="sol-step">Answer: x = 60° (Equiangular triangle)</div>

                <span class="subpart-title" style="margin-top: 25px;">(vi) Right-angled triangle with angles 2x and x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 40 20 L 40 80 L 130 80 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="1.5" />
                        <text x="55" y="35" fill="#F06292" font-size="13" font-weight="bold">2x</text>
                        <text x="105" y="75" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">2x + x + 90° = 180° (Angle sum property) <br/>3x + 90° = 180° <br/>3x = 90° <br/>x = <div class="frac"><span class="num">90°</span><span class="den">3</span></div> = 30°</div>
                <div class="sol-step">Answer: x = 30° (The other angle is 2x = 60°)</div>
            </div>

            <div class="question">2. Find the values of the unknowns x and y in the following diagrams:</div>
            
            <div class="solution">
                <span class="subpart-title">(i) Interior angles 50°, x, y, and exterior angle 120°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 80 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="160" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="75" y="55" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="100" y="75" fill="#F06292" font-size="13" font-weight="bold">y</text>
                        <text x="135" y="75" fill="#fff" font-size="11" font-weight="bold">120°</text>
                    </svg>
                </div>
                <div class="sol-step">y + 120° = 180° (Linear pair) <br/>y = 180° - 120° = 60°</div>
                <div class="sol-step">x + 50° = 120° (Exterior angle property) <br/>x = 120° - 50° = 70°</div>
                <div class="sol-step">Answer: x = 70°, y = 60°</div>
                
                <span class="subpart-title" style="margin-top: 25px;">(ii) y is vertically opposite to 80°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <line x1="50" y1="20" x2="130" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="130" y1="20" x2="50" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="50" y1="100" x2="130" y2="100" stroke="#F06292" stroke-width="2" />
                        <text x="90" y="15" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">80°</text>
                        <text x="90" y="90" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">y</text>
                        <text x="65" y="95" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="110" y="95" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">y = 80° (Vertically opposite angles)</div>
                <div class="sol-step">x + y + 50° = 180° (Angle sum property) <br/>x + 80° + 50° = 180° <br/>x + 130° = 180° <br/>x = 180° - 130° = 50°</div>
                <div class="sol-step">Answer: x = 50°, y = 80°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iii) Angles 50° and 60°, exterior angle x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <path d="M 30 80 L 120 80 L 75 20 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <line x1="120" y1="80" x2="160" y2="80" stroke="#F06292" stroke-width="2" />
                        <text x="45" y="75" fill="#fff" font-size="11" font-weight="bold">50°</text>
                        <text x="75" y="38" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">60°</text>
                        <text x="100" y="75" fill="#F06292" font-size="13" font-weight="bold">y</text>
                        <text x="135" y="75" fill="#F06292" font-size="13" font-weight="bold">x</text>
                    </svg>
                </div>
                <div class="sol-step">50° + 60° + y = 180° (Angle sum property) <br/>110° + y = 180° <br/>y = 180° - 110° = 70°</div>
                <div class="sol-step">x + y = 180° (Linear pair) <br/>x = 180° - 70° = 110°</div>
                <div class="sol-step">Answer: x = 110°, y = 70°</div>

                <span class="subpart-title" style="margin-top: 25px;">(iv) x is vertically opposite to 60°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <line x1="50" y1="20" x2="130" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="130" y1="20" x2="50" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="50" y1="100" x2="130" y2="100" stroke="#F06292" stroke-width="2" />
                        <text x="90" y="15" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">60°</text>
                        <text x="90" y="90" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">y</text>
                        <text x="65" y="95" fill="#fff" font-size="11" font-weight="bold">30°</text>
                        <text x="110" y="95" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">x = 60° (Vertically opposite angles)</div>
                <div class="sol-step">30° + x + y = 180° (Angle sum property) <br/>30° + 60° + y = 180° <br/>90° + y = 180° <br/>y = 180° - 90° = 90°</div>
                <div class="sol-step">Answer: x = 60°, y = 90°</div>

                <span class="subpart-title" style="margin-top: 25px;">(v) y is vertically opposite to 90°.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <line x1="50" y1="20" x2="130" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="130" y1="20" x2="50" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="50" y1="100" x2="130" y2="100" stroke="#F06292" stroke-width="2" />
                        <text x="90" y="15" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">90°</text>
                        <text x="90" y="90" fill="#F06292" font-size="13" font-weight="bold" text-anchor="middle">y</text>
                        <text x="65" y="95" fill="#F06292" font-size="13" font-weight="bold">x</text>
                        <text x="110" y="95" fill="#F06292" font-size="13" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">y = 90° (Vertically opposite angles)</div>
                <div class="sol-step">x + x + y = 180° (Angle sum property) <br/>2x + 90° = 180° <br/>2x = 90° <br/>x = <div class="frac"><span class="num">90°</span><span class="den">2</span></div> = 45°</div>
                <div class="sol-step">Answer: x = 45°, y = 90°</div>

                <span class="subpart-title" style="margin-top: 25px;">(vi) Triangle with vertically opposite vertex angles: y = x, two others are x.</span>
                <div class="diagram-container">
                    <svg width="180" height="110" viewBox="0 0 180 110" style="margin: auto; display: block;">
                        <line x1="90" y1="15" x2="60" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="90" y1="15" x2="120" y2="100" stroke="#fff" stroke-width="2" />
                        <line x1="45" y1="100" x2="135" y2="100" stroke="#fff" stroke-width="2" />
                        <text x="90" y="5" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">x</text>
                        <text x="90" y="38" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">y</text>
                        <text x="50" y="112" fill="#fff" font-size="12" font-weight="bold">x</text>
                        <text x="73" y="95" fill="#F06292" font-size="12" font-weight="bold">x</text>
                        <text x="125" y="112" fill="#fff" font-size="12" font-weight="bold" text-anchor="right">x</text>
                        <text x="105" y="95" fill="#F06292" font-size="12" font-weight="bold" text-anchor="right">x</text>
                    </svg>
                </div>
                <div class="sol-step">At the top vertex: y = x (Vertically opposite angles) <br/>At the left base vertex: interior opposite angle is x (Vertically opposite to exterior x) <br/>At the right base vertex: interior opposite angle is x (Vertically opposite to exterior x) <br/>x + x + y = 180° (Angle sum property) <br/>3x = 180° (since y = x) <br/>x = <div class="frac"><span class="num">180°</span><span class="den">3</span></div> = 60° <br/>y = 60°</div>
                <div class="sol-step">Answer: x = 60°, y = 60°</div>
            </div>
        </div>
        `,
    "ex6-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #fff; font-weight: bold; }
            .subpart-title { color: #F06292; font-weight: bold; display: block; margin-bottom: 5px; }
            .diagram-container { background: #1a1a2e; padding: 10px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
        </style>
        <div class="container">
            <div class="question">1. Is it possible to have a triangle with the following sides?</div>
            
            <div class="solution">
                <div class="sol-step"><b>Property:</b> The sum of lengths of any two sides of a triangle must be greater than the third side.</div>
                
                <span class="subpart-title">(i) 2 cm, 3 cm, 5 cm</span>
                <div class="sol-step">Check if 2 + 3 > 5. <br/>Since 5 is not greater than 5, this property is not satisfied.</div>
                <div class="sol-step">Answer: Not possible.</div>
                
                <span class="subpart-title" style="margin-top: 20px;">(ii) 3 cm, 6 cm, 7 cm</span>
                <div class="sol-step">Check all combinations: <br/>3 + 6 = 9 > 7 (True) <br/>6 + 7 = 13 > 3 (True) <br/>7 + 3 = 10 > 6 (True) <br/>Since the sum of any two sides is greater than the third side, the property is satisfied.</div>
                <div class="sol-step">Answer: Possible.</div>
                
                <span class="subpart-title" style="margin-top: 20px;">(iii) 6 cm, 3 cm, 2 cm</span>
                <div class="sol-step">Check if 3 + 2 > 6. <br/>Since 5 < 6, the sum of two sides is less than the third side.</div>
                <div class="sol-step">Answer: Not possible.</div>
            </div>

            <div class="question">2. Take any point O in the interior of a triangle PQR. Is:</div>
            
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Outer Triangle PQR -->
                        <path d="M 90 20 L 30 110 L 150 110 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Point O -->
                        <circle cx="90" cy="80" r="3" fill="#F06292" />
                        <!-- Dashed lines connecting O to vertices -->
                        <line x1="90" y1="80" x2="90" y2="20" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                        <line x1="90" y1="80" x2="30" y2="110" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                        <line x1="90" y1="80" x2="150" y2="110" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                        <!-- Labels -->
                        <text x="90" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R</text>
                        <text x="20" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">P</text>
                        <text x="160" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Q</text>
                        <text x="102" y="82" fill="#F06292" font-size="12" font-weight="bold">O</text>
                    </svg>
                </div>
                
                <span class="subpart-title">(i) OP + OQ > PQ?</span>
                <div class="sol-step">Yes. Join OP, OQ. They form a triangle OPQ. In ΔOPQ, the sum of any two sides is greater than the third side. Therefore, OP + OQ > PQ.</div>
                <div class="sol-step">Answer: Yes</div>

                <span class="subpart-title" style="margin-top: 20px;">(ii) OQ + OR > QR?</span>
                <div class="sol-step">Yes. Join OQ, OR. They form a triangle OQR. In ΔOQR, the sum of any two sides is greater than the third side. Therefore, OQ + OR > QR.</div>
                <div class="sol-step">Answer: Yes</div>

                <span class="subpart-title" style="margin-top: 20px;">(iii) OR + OP > RP?</span>
                <div class="sol-step">Yes. Join OR, OP. They form a triangle ORP. In ΔORP, the sum of any two sides is greater than the third side. Therefore, OR + OP > RP.</div>
                <div class="sol-step">Answer: Yes</div>
            </div>

            <div class="question">3. AM is a median of a triangle ABC. Is AB + BC + CA > 2 AM? <br/>(Consider the sides of triangles ΔABM and ΔAMC.)</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Triangle ABC -->
                        <path d="M 90 20 L 30 100 L 150 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Median AM -->
                        <line x1="90" y1="20" x2="90" y2="100" stroke="#F06292" stroke-width="2" />
                        <!-- Labels -->
                        <text x="90" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">A</text>
                        <text x="20" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">B</text>
                        <text x="160" y="105" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">C</text>
                        <text x="90" y="115" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">M</text>
                    </svg>
                </div>
                <div class="sol-step">In ΔABM, by triangle inequality: <br/>AB + BM > AM — [Equation 1]</div>
                <div class="sol-step">In ΔAMC, by triangle inequality: <br/>AC + MC > AM — [Equation 2]</div>
                <div class="sol-step">Adding Equation 1 and Equation 2: <br/>AB + BM + AC + MC > AM + AM <br/>AB + AC + (BM + MC) > 2AM</div>
                <div class="sol-step">Since M is the midpoint of BC, BM + MC = BC. <br/>Thus, AB + BC + CA > 2AM.</div>
                <div class="sol-step">Answer: Yes, it is true.</div>
            </div>

            <div class="question">4. ABCD is a quadrilateral. Is AB + BC + CD + DA > AC + BD?</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Quadrilateral ABCD -->
                        <path d="M 30 100 L 140 100 L 150 30 L 50 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Diagonals -->
                        <line x1="30" y1="100" x2="150" y2="30" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                        <line x1="140" y1="100" x2="50" y2="30" stroke="#F06292" stroke-width="1.5" stroke-dasharray="3,3" />
                        <!-- Labels -->
                        <text x="20" y="105" fill="#fff" font-size="12" font-weight="bold">A</text>
                        <text x="145" y="105" fill="#fff" font-size="12" font-weight="bold">B</text>
                        <text x="155" y="25" fill="#fff" font-size="12" font-weight="bold">C</text>
                        <text x="40" y="25" fill="#fff" font-size="12" font-weight="bold">D</text>
                    </svg>
                </div>
                <div class="sol-step">Consider the four triangles formed by the diagonals: <br/>1. In ΔABC: AB + BC > AC — [Eq 1] <br/>2. In ΔADC: AD + CD > AC — [Eq 2] <br/>3. In ΔABD: AB + AD > BD — [Eq 3] <br/>4. In ΔBCD: BC + CD > BD — [Eq 4]</div>
                <div class="sol-step">Adding all four equations: <br/>2AB + 2BC + 2CD + 2DA > 2AC + 2BD <br/>2(AB + BC + CD + DA) > 2(AC + BD)</div>
                <div class="sol-step">Dividing both sides by 2: <br/>AB + BC + CD + DA > AC + BD.</div>
                <div class="sol-step">Answer: Yes, it is true.</div>
            </div>

            <div class="question">5. ABCD is quadrilateral. Is AB + BC + CD + DA < 2 (AC + BD)?</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Quadrilateral ABCD -->
                        <path d="M 30 100 L 140 100 L 150 30 L 50 30 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Diagonals intersecting at P -->
                        <line x1="30" y1="100" x2="150" y2="30" stroke="#F06292" stroke-width="1.5" />
                        <line x1="140" y1="100" x2="50" y2="30" stroke="#F06292" stroke-width="1.5" />
                        <!-- Intersection Point P -->
                        <circle cx="88" cy="65" r="3" fill="#F06292" />
                        <!-- Labels -->
                        <text x="20" y="105" fill="#fff" font-size="12" font-weight="bold">A</text>
                        <text x="145" y="105" fill="#fff" font-size="12" font-weight="bold">B</text>
                        <text x="155" y="25" fill="#fff" font-size="12" font-weight="bold">C</text>
                        <text x="40" y="25" fill="#fff" font-size="12" font-weight="bold">D</text>
                        <text x="96" y="62" fill="#F06292" font-size="12" font-weight="bold">P</text>
                    </svg>
                </div>
                <div class="sol-step">Let P be the intersection point of diagonals AC and BD.</div>
                <div class="sol-step">In ΔPAB: AB < PA + PB — [Eq 1] <br/>In ΔPBC: BC < PB + PC — [Eq 2] <br/>In ΔPCD: CD < PC + PD — [Eq 3] <br/>In ΔPDA: DA < PD + PA — [Eq 4]</div>
                <div class="sol-step">Adding all four equations: <br/>AB + BC + CD + DA < 2PA + 2PB + 2PC + 2PD <br/>AB + BC + CD + DA < 2(PA + PC) + 2(PB + PD)</div>
                <div class="sol-step">Since PA + PC = AC and PB + PD = BD: <br/>AB + BC + CD + DA < 2(AC + BD).</div>
                <div class="sol-step">Answer: Yes, it is true.</div>
            </div>

            <div class="question">6. The lengths of two sides of a triangle are 12 cm and 15 cm. Between what two measures should the length of the third side fall?</div>
            <div class="solution">
                <div class="sol-step">We know that: <br/>1. The third side length must be less than the sum of the other two sides: <br/>12 + 15 = 27 cm.</div>
                <div class="sol-step">2. The third side length must be greater than the difference of the other two sides: <br/>15 - 12 = 3 cm.</div>
                <div class="sol-step">Therefore, the length of the third side falls between 3 cm and 27 cm.</div>
                <div class="sol-step">Answer: Between 3 cm and 27 cm.</div>
            </div>
        </div>
        `,
    "ex6-5": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(240, 98, 146, 0.1); color: #F06292; padding: 12px; border-radius: 8px; border-left: 6px solid #F06292; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; text-align: justify; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #F06292; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #fff; font-weight: bold; }
            .subpart-title { color: #F06292; font-weight: bold; display: block; margin-bottom: 5px; }
            .diagram-container { background: #1a1a2e; padding: 10px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(240, 98, 146, 0.3); text-align: center; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
        </style>
        <div class="container">
            <div class="question">1. PQR is a triangle, right-angled at P. If PQ = 10 cm and PR = 24 cm, find QR.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <path d="M 40 20 L 40 100 L 140 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="90" width="10" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <text x="30" y="105" fill="#F06292" font-size="12" font-weight="bold">P</text>
                        <text x="40" y="15" fill="#fff" font-size="12" font-weight="bold">R</text>
                        <text x="150" y="105" fill="#fff" font-size="12" font-weight="bold">Q</text>
                        <text x="15" y="60" fill="#fff" font-size="11" font-weight="bold">24 cm</text>
                        <text x="90" y="115" fill="#fff" font-size="11" font-weight="bold">10 cm</text>
                        <text x="100" y="55" fill="#fff" font-size="13" font-weight="bold">?</text>
                    </svg>
                </div>
                <div class="sol-step">By Pythagoras' Theorem: <br/>QR² = PQ² + PR² <br/>QR² = 10² + 24² <br/>QR² = 100 + 576 = 676 <br/>QR = &radic;676 = 26 cm.</div>
                <div class="sol-step">Answer: QR = 26 cm.</div>
            </div>

            <div class="question">2. ABC is a triangle, right-angled at C. If AB = 25 cm and AC = 7 cm, find BC.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <path d="M 40 20 L 40 100 L 140 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="90" width="10" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <text x="30" y="105" fill="#F06292" font-size="12" font-weight="bold">C</text>
                        <text x="40" y="15" fill="#fff" font-size="12" font-weight="bold">A</text>
                        <text x="150" y="105" fill="#fff" font-size="12" font-weight="bold">B</text>
                        <text x="20" y="60" fill="#fff" font-size="11" font-weight="bold">7 cm</text>
                        <text x="105" y="55" fill="#fff" font-size="11" font-weight="bold">25 cm</text>
                        <text x="90" y="115" fill="#fff" font-size="13" font-weight="bold">?</text>
                    </svg>
                </div>
                <div class="sol-step">By Pythagoras' Theorem: <br/>AB² = AC² + BC² <br/>25² = 7² + BC² <br/>625 = 49 + BC² <br/>BC² = 625 - 49 = 576 <br/>BC = &radic;576 = 24 cm.</div>
                <div class="sol-step">Answer: BC = 24 cm.</div>
            </div>

            <div class="question">3. A 15 m long ladder reached a window 12 m high from the ground on placing it against a wall at a distance a. Find the distance of the foot of the ladder from the wall.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Ground -->
                        <line x1="10" y1="100" x2="160" y2="100" stroke="#fff" stroke-width="2" />
                        <!-- Wall -->
                        <line x1="40" y1="20" x2="40" y2="100" stroke="#fff" stroke-width="3" />
                        <!-- Ladder -->
                        <line x1="40" y1="20" x2="130" y2="100" stroke="#F06292" stroke-width="3" />
                        <!-- Steps on the ladder -->
                        <line x1="51.25" y1="30" x2="57.5" y2="35" stroke="#fff" stroke-width="1" />
                        <line x1="62.5" y1="40" x2="68.75" y2="45" stroke="#fff" stroke-width="1" />
                        <line x1="73.75" y1="50" x2="80" y2="55" stroke="#fff" stroke-width="1" />
                        <line x1="85" y1="60" x2="91.25" y2="65" stroke="#fff" stroke-width="1" />
                        <line x1="96.25" y1="70" x2="102.5" y2="75" stroke="#fff" stroke-width="1" />
                        <line x1="107.5" y1="80" x2="113.75" y2="85" stroke="#fff" stroke-width="1" />
                        <!-- Labels -->
                        <text x="22" y="65" fill="#fff" font-size="11" font-weight="bold">12 m</text>
                        <text x="100" y="50" fill="#F06292" font-size="11" font-weight="bold">15 m</text>
                        <text x="85" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">a</text>
                    </svg>
                </div>
                <div class="sol-step">Using Pythagoras' Theorem: <br/>Ladder² = Wall² + Base² <br/>15² = 12² + a² <br/>225 = 144 + a² <br/>a² = 225 - 144 = 81 <br/>a = &radic;81 = 9 m.</div>
                <div class="sol-step">Answer: a = 9 m.</div>
            </div>

            <div class="question">4. Which of the following can be the sides of a right triangle?</div>
            
            <div class="solution">
                <span class="subpart-title">(i) 2.5 cm, 6.5 cm, 6 cm</span>
                <div class="sol-step">Let the largest side be the hypotenuse: b = 6.5 cm. <br/>b² = 6.5² = 42.25. <br/>Sum of squares of other sides: a² + c² = 2.5² + 6² = 6.25 + 36 = 42.25. <br/>Since b² = a² + c², these sides form a right-angled triangle.</div>
                <div class="sol-step">Answer: Yes, it forms a right triangle. The right angle is opposite the 6.5 cm side.</div>
                
                <span class="subpart-title" style="margin-top: 20px;">(ii) 2 cm, 2 cm, 5 cm</span>
                <div class="sol-step">Let the largest side be: c = 5 cm. <br/>c² = 5² = 25. <br/>Sum of squares of other sides: a² + b² = 2² + 2² = 4 + 4 = 8. <br/>Since c² &ne; a² + b², these sides do not form a right-angled triangle.</div>
                <div class="sol-step">Answer: No, it does not form a right triangle.</div>

                <span class="subpart-title" style="margin-top: 20px;">(iii) 1.5 cm, 2 cm, 2.5 cm</span>
                <div class="sol-step">Let the largest side be: c = 2.5 cm. <br/>c² = 2.5² = 6.25. <br/>Sum of squares of other sides: a² + b² = 1.5² + 2² = 2.25 + 4 = 6.25. <br/>Since c² = a² + b², these sides form a right-angled triangle.</div>
                <div class="sol-step">Answer: Yes, it forms a right triangle. The right angle is opposite the 2.5 cm side.</div>
            </div>

            <div class="question">5. A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. Find the original height of the tree.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Ground -->
                        <line x1="20" y1="100" x2="160" y2="100" stroke="#fff" stroke-width="2" />
                        <!-- Standing Tree Base -->
                        <line x1="50" y1="100" x2="50" y2="60" stroke="#fff" stroke-width="3" />
                        <!-- Broken Tree (Hypotenuse) -->
                        <line x1="50" y1="60" x2="140" y2="100" stroke="#F06292" stroke-width="2" stroke-dasharray="3,3" />
                        <!-- Labels -->
                        <text x="35" y="85" fill="#fff" font-size="11" font-weight="bold">5 m</text>
                        <text x="95" y="115" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">12 m</text>
                        <text x="110" y="70" fill="#F06292" font-size="12" font-weight="bold">Broken Part</text>
                    </svg>
                </div>
                <div class="sol-step">Let the broken part be c. <br/>Using Pythagoras' Theorem: <br/>c² = 5² + 12² <br/>c² = 25 + 144 = 169 <br/>c = &radic;169 = 13 m.</div>
                <div class="sol-step">The original height of the tree is the sum of the standing height and the broken part: <br/>Original Height = 5 m + 13 m = 18 m.</div>
                <div class="sol-step">Answer: 18 m.</div>
            </div>

            <div class="question">6. Angles Q and R of a ΔPQR are 25° and 65°. Write which of the following is true: <br/>(i) PQ² + QR² = RP² <br/>(ii) PQ² + RP² = QR² <br/>(iii) RP² + QR² = PQ²</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Triangle right-angled at P -->
                        <path d="M 40 20 L 40 100 L 140 100 Z" fill="none" stroke="#fff" stroke-width="2" />
                        <rect x="40" y="90" width="10" height="10" fill="none" stroke="#F06292" stroke-width="1.5" />
                        <text x="30" y="105" fill="#F06292" font-size="12" font-weight="bold">P</text>
                        <text x="40" y="15" fill="#fff" font-size="12" font-weight="bold">Q</text>
                        <text x="150" y="105" fill="#fff" font-size="12" font-weight="bold">R</text>
                        <text x="45" y="35" fill="#fff" font-size="10">25°</text>
                        <text x="110" y="95" fill="#fff" font-size="10">65°</text>
                    </svg>
                </div>
                <div class="sol-step">First, find the third angle ∠P: <br/>∠P + ∠Q + ∠R = 180° (Angle sum property) <br/>∠P + 25° + 65° = 180° <br/>∠P + 90° = 180° <br/>∠P = 90°.</div>
                <div class="sol-step">Since ∠P = 90°, ΔPQR is right-angled at P, which makes the opposite side QR the hypotenuse. <br/>By Pythagoras' Theorem: PQ² + RP² = QR².</div>
                <div class="sol-step">Answer: (ii) PQ² + RP² = QR² is true.</div>
            </div>

            <div class="question">7. Find the perimeter of the rectangle whose length is 40 cm and a diagonal is 41 cm.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <rect x="30" y="30" width="120" height="70" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Diagonal -->
                        <line x1="30" y1="100" x2="150" y2="30" stroke="#F06292" stroke-width="2" />
                        <text x="90" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">40 cm</text>
                        <text x="90" y="60" fill="#F06292" font-size="12" font-weight="bold" text-anchor="middle">41 cm</text>
                        <text x="155" y="70" fill="#fff" font-size="12" font-weight="bold">?</text>
                    </svg>
                </div>
                <div class="sol-step">Let the breadth of the rectangle be b. <br/>In a rectangle, the angle between adjacent sides is 90°, forming a right-angled triangle with the diagonal. <br/>Using Pythagoras' Theorem: <br/>41² = 40² + b² <br/>1681 = 1600 + b² <br/>b² = 1681 - 1600 = 81 <br/>b = &radic;81 = 9 cm.</div>
                <div class="sol-step">Perimeter of the rectangle = 2(length + breadth) <br/>Perimeter = 2(40 + 9) = 2(49) = 98 cm.</div>
                <div class="sol-step">Answer: 98 cm.</div>
            </div>

            <div class="question">8. The diagonals of a rhombus measure 16 cm and 30 cm. Find its perimeter.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="180" height="130" viewBox="0 0 180 130" style="margin: auto; display: block;">
                        <!-- Rhombus PQRS -->
                        <polygon points="90,15 150,65 90,115 30,65" fill="none" stroke="#fff" stroke-width="2" />
                        <!-- Diagonals intersecting at O -->
                        <line x1="90" y1="15" x2="90" y2="115" stroke="#F06292" stroke-width="1.5" />
                        <line x1="30" y1="65" x2="150" y2="65" stroke="#F06292" stroke-width="1.5" />
                        <!-- Right angle indicator at intersection O -->
                        <rect x="90" y="65" width="8" height="8" fill="none" stroke="#F06292" />
                        <!-- Labels -->
                        <text x="90" y="10" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">P</text>
                        <text x="155" y="68" fill="#fff" font-size="11" font-weight="bold">Q</text>
                        <text x="90" y="125" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">R</text>
                        <text x="20" y="68" fill="#fff" font-size="11" font-weight="bold">S</text>
                        <text x="98" y="62" fill="#F06292" font-size="11" font-weight="bold">O</text>
                    </svg>
                </div>
                <div class="sol-step">Diagonals of a rhombus bisect each other at right angles (90°). <br/>Let the diagonals intersect at point O.</div>
                <div class="sol-step">Half of diagonal 1: PO = <div class="frac"><span class="num">PR</span><span class="den">2</span></div> = <div class="frac"><span class="num">16</span><span class="den">2</span></div> = 8 cm.</div>
                <div class="sol-step">Half of diagonal 2: SO = <div class="frac"><span class="num">SQ</span><span class="den">2</span></div> = <div class="frac"><span class="num">30</span><span class="den">2</span></div> = 15 cm.</div>
                <div class="sol-step">In right-angled triangle POS, by Pythagoras' Theorem: <br/>Side² = PO² + SO² <br/>Side² = 8² + 15² <br/>Side² = 64 + 225 = 289 <br/>Side = &radic;289 = 17 cm.</div>
                <div class="sol-step">Perimeter of the rhombus = 4 &times; Side <br/>Perimeter = 4 &times; 17 = 68 cm.</div>
                <div class="sol-step">Answer: 68 cm.</div>
            </div>
        </div>
        `,
  },
  examples: [],
  mcqs: [
    {
      id: "c7m6-mcq-1",
      question: "What is the sum of all three interior angles of a triangle?",
      options: ["90°", "180°", "360°", "270°"],
      correctAnswer: "b",
      explanation: "The sum of all three angles inside any triangle is always 180°!"
    },
    {
      id: "c7m6-mcq-2",
      question: "An exterior angle of a triangle is equal to the sum of its interior ______ opposite angles.",
      options: ["one", "two", "three", "four"],
      correctAnswer: "b",
      explanation: "An exterior angle is equal to the sum of its two interior opposite angles."
    },
    {
      id: "c7m6-mcq-3",
      question: "What is the longest side in a right-angled triangle called?",
      options: ["Base", "Altitude", "Hypotenuse", "Median"],
      correctAnswer: "c",
      explanation: "The hypotenuse is the side opposite to the 90° angle, and it is always the longest side!"
    },
    {
      id: "c7m6-mcq-4",
      question: "A triangle having two sides of equal length is called an:",
      options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Right triangle"],
      correctAnswer: "b",
      explanation: "An isosceles triangle is a triangle that has two equal sides."
    },
    {
      id: "c7m6-mcq-5",
      question: "If two angles of a triangle are 50° and 60°, what is the third angle?",
      options: ["70°", "80°", "90°", "110°"],
      correctAnswer: "a",
      explanation: "Sum of angles is 180°. So, 180° - (50° + 60°) = 180° - 110° = 70°."
    },
    {
      id: "c7m6-mcq-6",
      question: "An altitude is always ______ to the base of a triangle.",
      options: ["parallel", "perpendicular", "equal", "opposite"],
      correctAnswer: "b",
      explanation: "An altitude represents the height and is always perpendicular (making a 90° angle) to the base."
    },
    {
      id: "c7m6-mcq-7",
      question: "A triangle in which all interior angles are less than 90° is called:",
      options: ["Obtuse-angled triangle", "Acute-angled triangle", "Right-angled triangle", "Equilateral triangle"],
      correctAnswer: "b",
      explanation: "If all angles are smaller than 90°, it is called an acute-angled triangle."
    },
    {
      id: "c7m6-mcq-8",
      question: "Can a triangle have two right angles?",
      options: ["Yes, always", "No, never", "Only if it is isosceles", "Only if it is equilateral"],
      correctAnswer: "b",
      explanation: "No, because the sum of two right angles is already 180°, leaving 0° for the third angle, which is impossible!"
    },
    {
      id: "c7m6-mcq-9",
      question: "A median connects a vertex to the ______ of the opposite side.",
      options: ["mid-point", "corner", "altitude", "perpendicular"],
      correctAnswer: "a",
      explanation: "A median connects a vertex to the exact mid-point of the opposite side, dividing it into two equal parts."
    },
    {
      id: "c7m6-mcq-10",
      question: "If the legs of a right-angled triangle are 3 cm and 4 cm, the length of the hypotenuse is:",
      options: ["5 cm", "7 cm", "12 cm", "25 cm"],
      correctAnswer: "a",
      explanation: "By Pythagoras Theorem: 3² + 4² = 9 + 16 = 25. The square root of 25 is 5 cm!"
    }
  ],
  summary: [],
};
