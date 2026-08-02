import { ChapterContent } from "../types";

export const c7Math12: ChapterContent = {
  id: "c7-math-12",
  number: 12,
  title: "Symmetry",
  isHtmlView: true,
  introduction:
    "Symmetry is a balanced and proportionate similarity that is found in nature and man-made structures. In geometry, we study line symmetry and rotational symmetry.",
  definitions: [
    { term: "Line Symmetry", description: "A figure has line symmetry if a line can be drawn dividing it into two identical matching halves." },
    { term: "Rotational Symmetry", description: "A figure has rotational symmetry if it looks identical after a rotation of less than 360°." },
    { term: "Order of Rotational Symmetry", description: "The number of positions in which a figure looks exactly the same during one complete 360° turn." },
  ],
  keyPoints: [
    "A regular polygon with n sides has n lines of symmetry.",
    "A circle has infinitely many lines of symmetry.",
    "Order of rotational symmetry of a square is 4 (angle of rotation = 90°).",
    "Order of rotational symmetry of an equilateral triangle is 3 (angle of rotation = 120°).",
  ],
  formulas: [
    { name: "Angle of Rotation", formula: "\\text{Angle of Rotation} = \\frac{360^\\circ}{\\text{Order of Symmetry}}" },
  ],
  crux: [],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] },
    { id: "ex12-3", name: "Exercise 12.3", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #26C6DA; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(38, 198, 218, 0.05); border-left: 4px solid #26C6DA; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #26C6DA; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Symmetry</div>
            <p class="content-text">Explore line symmetry, lines of symmetry in regular polygons, rotational symmetry, center of rotation, angle of rotation, and order of rotational symmetry.</p>
            <div class="point-box">
                <div class="point-item">Line Symmetry: Mirror reflection symmetry across a central axis line.</div>
                <div class="point-item">Rotational Symmetry: Matching shape orientation upon rotation around a fixed center point.</div>
                <div class="point-item">Regular Polygons: n-sided regular polygon has n lines of symmetry and rotational order n.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex12-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #26C6DA; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(38, 198, 218, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(38, 198, 218, 0.3); padding: 10px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(38, 198, 218, 0.15); color: #26C6DA; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Copy the figures with punched holes and find the axes of symmetry for the following:</div>
                <div class="sol-body">
                    <!-- Q1 (a) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(a) Square with holes on left and right edges</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="75" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="75" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A vertical line passing through the center reflects the left hole onto the right hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Vertical)</span></div>

                    <!-- Q1 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(b) Square with 2 holes near top-right corner</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="125" cy="30" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="138" cy="43" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="20" y1="140" x2="160" y2="0" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A diagonal line passing from top-left to bottom-right reflects the two holes onto each other.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Diagonal)</span></div>

                    <!-- Q1 (c) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(c) Square with 2 holes on the right edge</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="135" cy="45" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="105" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A horizontal line through the center reflects the top-right hole onto the bottom-right hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Horizontal)</span></div>

                    <!-- Q1 (d) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(d) Square with 4 holes (2 on left, 2 on right)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="45" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="45" cy="105" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="45" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="105" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both vertical and horizontal lines of symmetry reflect the holes into identical matching positions.</div>
                    <div class="sol-step"><span class="ans-highlight">2 axes of symmetry (Vertical & Horizontal)</span></div>

                    <!-- Q1 (e) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(e) Square with holes at all 4 corners</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="30" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="30" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="45" cy="120" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="120" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="20" y1="5" x2="160" y2="145" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="160" y1="5" x2="20" y2="145" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 lines of symmetry: 2 bisectors of sides and 2 diagonals.</div>
                    <div class="sol-step"><span class="ans-highlight">4 axes of symmetry</span></div>

                    <!-- Q1 (f) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(f) Square with diagonals and 3 holes</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="30" y1="15" x2="150" y2="135" stroke="#26C6DA" stroke-width="1.5"/>
                            <line x1="150" y1="15" x2="30" y2="135" stroke="#26C6DA" stroke-width="1.5"/>
                            <circle cx="90" cy="75" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="45" cy="120" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="120" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A central vertical line reflects the bottom-left hole onto the bottom-right hole and bisects the central hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Vertical)</span></div>

                    <!-- Q1 (g) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(g) Triangle with 2 holes near bottom corners</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <polygon points="90,15 25,130 155,130" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="115" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="115" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The vertical altitude line from top vertex to base reflects left hole to right hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Vertical)</span></div>

                    <!-- Q1 (h) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(h) Right-pointing triangle with 2 holes on vertical base</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <polygon points="30,15 160,75 30,135" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="35" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="45" cy="115" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="10" y1="75" x2="175" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A horizontal median line reflects top-left hole to bottom-left hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Horizontal)</span></div>

                    <!-- Q1 (i) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(i) Triangle with 2 holes vertically aligned on altitude</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <polygon points="90,15 25,130 155,130" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="90" cy="55" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="90" cy="95" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The vertical line passes through both holes and divides the triangle into matching halves.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Vertical)</span></div>

                    <!-- Q1 (j) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(j) Circle with 2 holes on left & right</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <circle cx="90" cy="75" r="60" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="45" cy="75" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="75" r="7" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 axes of symmetry: vertical diameter (reflects left hole to right) and horizontal diameter (bisects both holes).</div>
                    <div class="sol-step"><span class="ans-highlight">2 axes of symmetry</span></div>

                    <!-- Q1 (k) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(k) Circle with 4 holes at top, bottom, left, right</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <circle cx="90" cy="75" r="60" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="90" cy="30" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="90" cy="120" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="45" cy="75" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="135" cy="75" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <line x1="30" y1="15" x2="150" y2="135" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="150" y1="15" x2="30" y2="135" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 lines of symmetry (Vertical, Horizontal, and 2 Diagonals).</div>
                    <div class="sol-step"><span class="ans-highlight">4 axes of symmetry</span></div>

                    <!-- Q1 (l) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(l) Circle with 3 holes (top, bottom-left, bottom-right)</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <circle cx="90" cy="75" r="60" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <circle cx="90" cy="30" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="50" cy="105" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="130" cy="105" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1 vertical axis passing through top hole reflects bottom-left hole to bottom-right hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Vertical)</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Given the line(s) of symmetry, find the other hole(s):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) Square with diagonal line of symmetry</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="30" y1="135" x2="150" y2="15" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <circle cx="45" cy="35" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <!-- Symmetric hole -->
                            <circle cx="135" cy="125" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting top-left hole across diagonal gives the symmetric hole at <span class="ans-highlight">bottom-right corner</span>.</div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(b) Square with horizontal line of symmetry</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <rect x="30" y="15" width="120" height="120" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="15" y1="75" x2="165" y2="75" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <circle cx="130" cy="105" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <!-- Symmetric hole -->
                            <circle cx="130" cy="45" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting bottom-right hole across horizontal line gives the symmetric hole at <span class="ans-highlight">top-right</span>.</div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(c) Triangle with vertical altitude line of symmetry</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <polygon points="90,15 25,130 155,130" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="90" y1="5" x2="90" y2="145" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <circle cx="65" cy="65" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <!-- Symmetric hole -->
                            <circle cx="115" cy="65" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left-side hole across vertical median gives the symmetric hole on the <span class="ans-highlight">right side</span>.</div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(d) Circle with tilted line of symmetry</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <circle cx="90" cy="75" r="60" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="25" y1="105" x2="155" y2="45" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <circle cx="110" cy="40" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <!-- Symmetric hole -->
                            <circle cx="70" cy="110" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting top-right hole across tilted diameter gives the symmetric hole at <span class="ans-highlight">bottom-left</span>.</div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(e) Circle with diagonal line of symmetry and 2 holes</b></div>
                    <div class="svg-container">
                        <svg width="180" height="150" viewBox="0 0 180 150">
                            <circle cx="90" cy="75" r="60" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="30" y1="135" x2="150" y2="15" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <circle cx="90" cy="45" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="90" cy="105" r="6" fill="#FF5252" stroke="#fff" stroke-width="1.5"/>
                            <!-- Symmetric holes -->
                            <circle cx="60" cy="75" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="120" cy="75" r="6" fill="#FFD54F" stroke="#fff" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting top & bottom holes across diagonal line gives corresponding symmetric holes on <span class="ans-highlight">left & right</span>.</div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. In the following figures, complete each figure performing reflection in the dotted mirror line and name the figure:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) Rectangular outline half</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <!-- Left original -->
                            <polygon points="40,20 90,20 90,100 40,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <!-- Right reflected -->
                            <polygon points="90,20 140,20 140,100 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left rectangle half gives a full rectangle.</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Square / Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(b) Right triangle half</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <polygon points="30,100 90,20 90,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="90,20 150,100 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left half triangle gives a full triangle.</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Isosceles Triangle</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(c) Rhombus left half</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <polygon points="90,20 30,60 90,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="90,20 150,60 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left arrow/triangle gives a full rhombus (diamond shape).</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Rhombus</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(d) Semicircle half</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <path d="M 90,20 A 40,40 0 0,0 90,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <path d="M 90,20 A 40,40 0 0,1 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left semicircle gives a complete circle.</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Circle</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(e) Left half pentagon</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <polygon points="90,20 40,45 55,100 90,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="90,20 140,45 125,100 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left half gives a 5-sided polygon.</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Pentagon</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(f) Left half octagon</b></div>
                    <div class="svg-container">
                        <svg width="180" height="120" viewBox="0 0 180 120">
                            <line x1="90" y1="10" x2="90" y2="110" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <polygon points="90,20 50,40 50,80 90,100" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="90,20 130,40 130,80 90,100" fill="rgba(38,198,218,0.15)" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting left half gives an 8-sided polygon.</div>
                    <div class="sol-step"><span class="ans-highlight">Completed Figure: Octagon</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify multiple lines of symmetry, if any, in each of the following figures:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) 3 overlapping circles with central shaded triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 lines of symmetry passing through each circle center and opposite intersection.</div>
                    <div class="sol-step"><span class="ans-highlight">3 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) Square with 2 shaded arc cutouts</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Horizontal and vertical bisector lines divide the figure symmetrically.</div>
                    <div class="sol-step"><span class="ans-highlight">2 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) Triangle with 3 shaded arc cutouts</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 altitude lines of symmetry.</div>
                    <div class="sol-step"><span class="ans-highlight">3 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(d) Square with 2 shaded diagonal arc lobes</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 diagonal lines of symmetry.</div>
                    <div class="sol-step"><span class="ans-highlight">2 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(e) Square with 4 shaded petal shapes along diagonals</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 lines of symmetry (2 diagonals + 2 perpendicular bisectors).</div>
                    <div class="sol-step"><span class="ans-highlight">4 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(f) Petal shape pointing upwards</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Only 1 vertical central line of symmetry.</div>
                    <div class="sol-step"><span class="ans-highlight">1 line of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(g) 4-lobed clover with central square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 lines of symmetry (2 perpendicular bisectors + 2 diagonals).</div>
                    <div class="sol-step"><span class="ans-highlight">4 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(h) 4-petal floral circle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 lines of symmetry.</div>
                    <div class="sol-step"><span class="ans-highlight">4 lines of symmetry</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Copy the figure given here. Take any one diagonal as a line of symmetry and shade a few more squares to make the figure symmetric about a diagonal. Is there more than one way to do that? Will the figure be symmetric about both the diagonals?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. Shading squares symmetrically across a diagonal makes the 4x4 grid symmetric.</div>
                    <div class="sol-step">2. <span class="ans-highlight">Yes, there is more than one way</span> to shade the squares (by choosing either main diagonal or secondary diagonal).</div>
                    <div class="sol-step">3. <span class="ans-highlight">Yes, the figure can be made symmetric about both diagonals</span> if all 4 corner/symmetric pairs are shaded identically.</div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Copy the diagram and complete each shape to be symmetric about the mirror line(s):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) Grid with diagonal mirror line & staircase line</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting the staircase lines across the diagonal mirror line completes the symmetric pattern.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) Grid with vertical mirror line & stepped line</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting the right-hand stepped path across the vertical line gives an identical left-hand path.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) Grid with horizontal mirror line & curve line</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting the upper arc curve downwards creates a symmetric lens shape.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(d) Dot grid with diagonal line & half polygon</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reflecting the vertices across the diagonal dotted line completes the symmetric polygon.</div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. State the number of lines of symmetry for the following figures:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) An equilateral triangle</b> &rArr; <span class="ans-highlight">3 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(b) An isosceles triangle</b> &rArr; <span class="ans-highlight">1 line of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(c) A scalene triangle</b> &rArr; <span class="ans-highlight">0 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(d) A square</b> &rArr; <span class="ans-highlight">4 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(e) A rectangle</b> &rArr; <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(f) A rhombus</b> &rArr; <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(g) A parallelogram</b> &rArr; <span class="ans-highlight">0 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(h) A quadrilateral</b> &rArr; <span class="ans-highlight">0 lines of symmetry (in general)</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(i) A regular hexagon</b> &rArr; <span class="ans-highlight">6 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#26C6DA;">(j) A circle</b> &rArr; <span class="ans-highlight">Infinitely many lines of symmetry</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. What letters of the English alphabet have reflectional symmetry (i.e., symmetry related to mirror reflection) about:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) a vertical mirror</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">A, H, I, M, O, T, U, V, W, X, Y</span> (Total 11 letters)</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) a horizontal mirror</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">B, C, D, E, H, I, K, O, X</span> (Total 9 letters)</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) both horizontal and vertical mirrors</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">H, I, O, X</span> (Total 4 letters)</div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Give three examples of shapes with no line of symmetry:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. <span class="ans-highlight">Scalene Triangle</span></div>
                    <div class="sol-step">2. <span class="ans-highlight">Parallelogram</span></div>
                    <div class="sol-step">3. <span class="ans-highlight">Irregular Quadrilateral</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. What other name can you give to the line of symmetry of:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#26C6DA;">(a) an isosceles triangle?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Median / Altitude / Perpendicular Bisector to the unequal base side.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) a circle?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Diameter</span></div>
                </div>
            </div>
        </div>
        `,
    "ex12-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #26C6DA; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Which of the following figures have rotational symmetry of order more than 1:</div>
                <div class="sol-body">
                    <!-- Q1 (a) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(a) Circle divided into 4 equal sectors</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <circle cx="75" cy="65" r="50" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="25" y1="65" x2="125" y2="65" stroke="#26C6DA" stroke-width="2"/>
                            <line x1="75" y1="15" x2="75" y2="115" stroke="#26C6DA" stroke-width="2"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rotates by 90° to match itself 4 times in a 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 4 (Yes, order > 1)</span></div>

                    <!-- Q1 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(b) Equilateral Triangle</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="75,15 20,110 130,110" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <text x="75" y="75" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rotates by 120° to match itself 3 times in a 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 3 (Yes, order > 1)</span></div>

                    <!-- Q1 (c) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(c) Asymmetric Bar with end squares</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <line x1="75" y1="20" x2="75" y2="110" stroke="#26C6DA" stroke-width="2.5"/>
                            <rect x="65" y="10" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <rect x="65" y="110" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <text x="75" y="69" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Only matches its original shape after a full 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 1 (No, order is not > 1)</span></div>

                    <!-- Q1 (d) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(d) H-Shape bar</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <line x1="40" y1="20" x2="40" y2="110" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="110" y1="20" x2="110" y2="110" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="40" y1="65" x2="110" y2="65" stroke="#26C6DA" stroke-width="2.5"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rotates by 180° to match itself 2 times in a 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 2 (Yes, order > 1)</span></div>

                    <!-- Q1 (e) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(e) Circle with 3-spoke Y-shape</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <circle cx="75" cy="65" r="50" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="75" y1="65" x2="75" y2="15" stroke="#26C6DA" stroke-width="2"/>
                            <line x1="75" y1="65" x2="31" y2="90" stroke="#26C6DA" stroke-width="2"/>
                            <line x1="75" y1="65" x2="119" y2="90" stroke="#26C6DA" stroke-width="2"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rotates by 120° to match itself 3 times in a 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 3 (Yes, order > 1)</span></div>

                    <!-- Q1 (f) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(f) 4-Blade Pinwheel</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <g stroke="#26C6DA" stroke-width="2" fill="none">
                                <path d="M 75,65 Q 95,35 75,15 Q 65,35 75,65"/>
                                <path d="M 75,65 Q 105,85 125,65 Q 105,55 75,65"/>
                                <path d="M 75,65 Q 55,95 75,115 Q 85,95 75,65"/>
                                <path d="M 75,65 Q 45,45 25,65 Q 45,75 75,65"/>
                            </g>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rotates by 90° to match itself 4 times in a 360° turn.</div>
                    <div class="sol-step"><span class="ans-highlight">Order = 4 (Yes, order > 1)</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>Conclusion for Q1:</b></div>
                    <div class="sol-step"><span class="ans-highlight">Figures having rotational symmetry of order more than 1 are (a), (b), (d), (e), and (f).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Give the order of rotational symmetry for each figure:</div>
                <div class="sol-body">
                    <!-- Q2 (a) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(a) S-shape / Z-shape with opposite triangles</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <line x1="35" y1="25" x2="115" y2="105" stroke="#26C6DA" stroke-width="2.5"/>
                            <polygon points="35,25 20,25 35,10" fill="#26C6DA"/>
                            <polygon points="115,105 130,105 115,120" fill="#26C6DA"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = 180°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 2</span></div>

                    <!-- Q2 (b) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(b) Two intersecting lines with 80° angle</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <line x1="30" y1="110" x2="120" y2="20" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="30" y1="20" x2="120" y2="110" stroke="#26C6DA" stroke-width="2.5"/>
                            <path d="M 65,50 A 20,20 0 0,1 85,50" fill="none" stroke="#FFD54F" stroke-width="1.5"/>
                            <text x="75" y="42" fill="#FFD54F" font-size="11" font-weight="bold" text-anchor="middle">80°</text>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Vertically opposite angles are equal (80° & 80°). Rotating by 180° aligns the opposite arms.</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 2</span></div>

                    <!-- Q2 (c) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(c) Equilateral Triangle</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="75,15 20,110 130,110" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <text x="75" y="75" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">3</span></div> = 120°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 3</span></div>

                    <!-- Q2 (d) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(d) 4-Blade Triangular Windmill</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="75,65 75,20 115,20" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="75,65 120,65 120,105" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="75,65 75,110 35,110" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="75,65 30,65 30,25" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">4</span></div> = 90°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 4</span></div>

                    <!-- Q2 (e) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(e) Plus Cross (+) Symbol</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="60,15 90,15 90,50 125,50 125,80 90,80 90,115 60,115 60,80 25,80 25,50 60,50" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">4</span></div> = 90°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 4</span></div>

                    <!-- Q2 (f) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(f) Regular Pentagon</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="75,15 125,52 106,110 44,110 25,52" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">5</span></div> = 72°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 5</span></div>

                    <!-- Q2 (g) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(g) 6-Pointed Star (Hexagram)</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <polygon points="75,10 120,90 30,90" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <polygon points="75,120 120,40 30,40" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">6</span></div> = 60°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 6</span></div>

                    <!-- Q2 (h) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(h) 3-Leaf Floral / Circle Spoke shape</b></div>
                    <div class="svg-container">
                        <svg width="150" height="130" viewBox="0 0 150 130">
                            <circle cx="75" cy="65" r="45" fill="none" stroke="#26C6DA" stroke-width="2"/>
                            <circle cx="75" cy="40" r="25" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
                            <circle cx="55" cy="80" r="25" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
                            <circle cx="95" cy="80" r="25" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
                            <text x="75" y="70" fill="#FF5252" font-size="16" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num">360°</span><span class="den">3</span></div> = 120°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 3</span></div>
                </div>
            </div>
        </div>
        `,
    "ex12-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #26C6DA; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(38, 198, 218, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(38, 198, 218, 0.3); padding: 10px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(38, 198, 218, 0.15); color: #26C6DA; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Name any two figures that have both line symmetry and rotational symmetry:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. <span class="ans-highlight">Square</span> (4 lines of symmetry, rotational order 4)</div>
                    <div class="sol-step">2. <span class="ans-highlight">Equilateral Triangle</span> (3 lines of symmetry, rotational order 3)</div>
                    <div class="sol-step">3. <span class="ans-highlight">Circle</span> (Infinitely many lines of symmetry, infinite rotational order)</div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Draw, wherever possible, a rough sketch of:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(i) a triangle with both line and rotational symmetries of order more than 1</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <polygon points="80,15 20,115 140,115" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="80" y1="5" x2="80" y2="125" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="10" y1="120" x2="115" y2="50" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="150" y1="120" x2="45" y2="50" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <text x="80" y="80" fill="#FF5252" font-size="14" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">An <span class="ans-highlight">Equilateral Triangle</span> has 3 lines of symmetry and rotational symmetry of order 3.</div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(ii) a triangle with only line symmetry and no rotational symmetry of order more than 1</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <polygon points="80,15 35,115 125,115" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="80" y1="5" x2="80" y2="125" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <text x="80" y="80" fill="#FF5252" font-size="14" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">An <span class="ans-highlight">Isosceles Triangle</span> has 1 line of symmetry (vertical median) and rotational symmetry of order 1.</div>

                    <!-- Q2 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(iii) a quadrilateral with a rotational symmetry of order more than 1 but not a line symmetry</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <polygon points="45,25 145,25 115,105 15,105" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="45" y1="25" x2="115" y2="105" stroke="#80DEEA" stroke-width="1" stroke-dasharray="3,3"/>
                            <line x1="145" y1="25" x2="15" y2="105" stroke="#80DEEA" stroke-width="1" stroke-dasharray="3,3"/>
                            <text x="80" y="70" fill="#FF5252" font-size="14" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A <span class="ans-highlight">Parallelogram</span> (non-rhombus) has rotational symmetry of order 2, but 0 lines of symmetry.</div>

                    <!-- Q2 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(iv) a quadrilateral with line symmetry but not a rotational symmetry of order more than 1</b></div>
                    <div class="svg-container">
                        <svg width="160" height="130" viewBox="0 0 160 130">
                            <polygon points="50,25 110,25 135,105 25,105" fill="none" stroke="#26C6DA" stroke-width="2.5"/>
                            <line x1="80" y1="10" x2="80" y2="120" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5,4"/>
                            <text x="80" y="70" fill="#FF5252" font-size="14" font-weight="bold" text-anchor="middle">&times;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">An <span class="ans-highlight">Isosceles Trapezium</span> (or Kite) has 1 line of symmetry, but rotational symmetry of order 1.</div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. If a figure has two or more lines of symmetry, should it have rotational symmetry of order more than 1?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Yes.</span></div>
                    <div class="sol-step">Reason: If a figure has 2 or more lines of symmetry, the point where these lines intersect becomes the center of rotation, and the angle between the lines determines the angle of rotation, making the rotational order greater than 1.</div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Fill in the blanks:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table>
                            <tr>
                                <th>Shape</th>
                                <th>Centre of Rotation</th>
                                <th>Order of Rotation</th>
                                <th>Angle of Rotation</th>
                            </tr>
                            <tr>
                                <td><b>Square</b></td>
                                <td>Intersection of diagonals</td>
                                <td><span class="ans-highlight">4</span></td>
                                <td><span class="ans-highlight">90°</span></td>
                            </tr>
                            <tr>
                                <td><b>Rectangle</b></td>
                                <td>Intersection of diagonals</td>
                                <td><span class="ans-highlight">2</span></td>
                                <td><span class="ans-highlight">180°</span></td>
                            </tr>
                            <tr>
                                <td><b>Rhombus</b></td>
                                <td>Intersection of diagonals</td>
                                <td><span class="ans-highlight">2</span></td>
                                <td><span class="ans-highlight">180°</span></td>
                            </tr>
                            <tr>
                                <td><b>Equilateral Triangle</b></td>
                                <td>Intersection of medians / altitudes</td>
                                <td><span class="ans-highlight">3</span></td>
                                <td><span class="ans-highlight">120°</span></td>
                            </tr>
                            <tr>
                                <td><b>Regular Hexagon</b></td>
                                <td>Intersection of diagonals / Center</td>
                                <td><span class="ans-highlight">6</span></td>
                                <td><span class="ans-highlight">60°</span></td>
                            </tr>
                            <tr>
                                <td><b>Circle</b></td>
                                <td>Centre of the circle</td>
                                <td><span class="ans-highlight">Infinitely many (Infinite)</span></td>
                                <td><span class="ans-highlight">Any angle</span></td>
                            </tr>
                            <tr>
                                <td><b>Semi-circle</b></td>
                                <td>Mid-point of diameter</td>
                                <td><span class="ans-highlight">1</span></td>
                                <td><span class="ans-highlight">360°</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Name the quadrilaterals which have both line and rotational symmetry of order more than 1:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The quadrilaterals having both line symmetry and rotational symmetry of order > 1 are:</div>
                    <div class="sol-step">1. <span class="ans-highlight">Square</span> (4 lines of symmetry, rotational order 4)</div>
                    <div class="sol-step">2. <span class="ans-highlight">Rectangle</span> (2 lines of symmetry, rotational order 2)</div>
                    <div class="sol-step">3. <span class="ans-highlight">Rhombus</span> (2 lines of symmetry, rotational order 2)</div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. After rotating by 60° about a centre, a figure looks exactly the same as its original position. At what other angles will this happen for the figure?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since the figure matches itself at 60°, it will match itself at every multiple of 60°:</div>
                    <div class="sol-step">60° &times; 1 = 60°</div>
                    <div class="sol-step">60° &times; 2 = 120°</div>
                    <div class="sol-step">60° &times; 3 = 180°</div>
                    <div class="sol-step">60° &times; 4 = 240°</div>
                    <div class="sol-step">60° &times; 5 = 300°</div>
                    <div class="sol-step">60° &times; 6 = 360°</div>
                    <div class="sol-step"><span class="ans-highlight">Answer: 120°, 180°, 240°, 300°, and 360°</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Can we have a rotational symmetry of order more than 1 whose angle of rotation is:</div>
                <div class="sol-body">
                    <!-- Q7 (i) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(i) 45°?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Order = <div class="frac"><span class="num">360°</span><span class="den">45°</span></div> = 8</div>
                    <div class="sol-step">Since 360° is completely divisible by 45°:</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, we can have a rotational symmetry of order 8.</span></div>

                    <!-- Q7 (ii) -->
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(ii) 17°?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">360° &divide; 17° = 21.17 (Not a whole number)</div>
                    <div class="sol-step">Since 360° is not completely divisible by 17°:</div>
                    <div class="sol-step"><span class="ans-highlight">No, we cannot have a rotational symmetry of order more than 1.</span></div>
                </div>
            </div>
        </div>
        `
  },
  examples: [],
  mcqs: [
    { id: "c7m12-mcq-1", question: "How many lines of symmetry does a square have?", options: ["1", "2", "3", "4"], correctAnswer: "d", explanation: "A square has 4 lines of symmetry (2 diagonal + 2 mid-point perpendicular bisectors)." },
    { id: "c7m12-mcq-2", question: "How many lines of symmetry does a circle have?", options: ["1", "2", "4", "Infinitely many"], correctAnswer: "d", explanation: "Any line passing through the center of a circle is a line of symmetry." },
    { id: "c7m12-mcq-3", question: "What is the order of rotational symmetry of a square?", options: ["1", "2", "3", "4"], correctAnswer: "d", explanation: "A square matches its original shape 4 times during one 360° turn." },
    { id: "c7m12-mcq-4", question: "What is the angle of rotation for an equilateral triangle?", options: ["60°", "90°", "120°", "180°"], correctAnswer: "c", explanation: "Angle of rotation = 360° / 3 = 120°." },
    { id: "c7m12-mcq-5", question: "How many lines of symmetry does a scalene triangle have?", options: ["0", "1", "2", "3"], correctAnswer: "a", explanation: "A scalene triangle has all unequal sides and 0 lines of symmetry." },
    { id: "c7m12-mcq-6", question: "How many lines of symmetry does an isosceles triangle have?", options: ["0", "1", "2", "3"], correctAnswer: "b", explanation: "An isosceles triangle has 1 line of symmetry along its altitude." },
    { id: "c7m12-mcq-7", question: "What is the order of rotational symmetry of a rectangle?", options: ["1", "2", "3", "4"], correctAnswer: "b", explanation: "A rectangle looks identical twice (at 180° and 360°) during a full turn." },
    { id: "c7m12-mcq-8", question: "Which letter of the English alphabet has both horizontal and vertical line symmetry?", options: ["A", "B", "H", "C"], correctAnswer: "c", explanation: "The letter 'H' has both horizontal and vertical lines of symmetry." },
    { id: "c7m12-mcq-9", question: "What is the angle of rotation for a regular pentagon?", options: ["60°", "72°", "90°", "108°"], correctAnswer: "b", explanation: "Angle of rotation = 360° / 5 = 72°." },
    { id: "c7m12-mcq-10", question: "A figure having rotational symmetry of order 1 means:", options: ["High symmetry", "No rotational symmetry", "Rotates every 90°", "Is a circle"], correctAnswer: "b", explanation: "Order 1 means it only matches itself after a full 360° rotation (no non-trivial rotational symmetry)." }
  ]
};
