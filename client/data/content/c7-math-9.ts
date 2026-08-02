import { ChapterContent } from "../types";

export const c7Math9: ChapterContent = {
  id: "c7-math-9",
  number: 9,
  title: "Perimeter and Area",
  isHtmlView: true,
  introduction:
    "In this chapter, we explore how to calculate the area of parallelograms and triangles, as well as the circumference and area of circles.",
  definitions: [
    {
      term: "Area of Parallelogram",
      description: "Calculated as Base × Height.",
    },
    {
      term: "Area of Triangle",
      description: "Calculated as 1/2 × Base × Height.",
    },
    {
      term: "Circumference of Circle",
      description: "The boundary length of a circle, 2πr or πd.",
    },
    {
      term: "Area of Circle",
      description: "The region enclosed inside a circle, πr².",
    },
  ],
  keyPoints: [
    "Area of a Parallelogram = Base × Height",
    "Area of a Triangle = 1/2 × Base × Height",
    "Circumference of a Circle = 2πr",
    "Area of a Circle = πr² (where π = 22/7 or 3.14)",
  ],
  formulas: [
    { name: "Area of Parallelogram", formula: "Base × Height" },
    { name: "Area of Triangle", formula: "1/2 × Base × Height" },
    { name: "Circumference of Circle", formula: "2 × π × r" },
    { name: "Area of Circle", formula: "π × r²" },
  ],
  crux: [],
  exercises: [
    { id: "ex9-1", name: "Exercise 9.1", questions: [] },
    { id: "ex9-2", name: "Exercise 9.2", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #D81B60; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(216, 27, 96, 0.08); border-left: 5px solid #D81B60; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 12px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #D81B60; font-weight: bold; margin-right: 12px; font-size: 1.3em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Master perimeter and area calculations for parallelograms, triangles, and circles according to the latest Class 7 NCERT syllabus.</p>
            <div class="point-box">
                <div class="point-item">Area of a parallelogram is Base &times; Height.</div>
                <div class="point-item">Area of a triangle is half the area of a corresponding parallelogram with the same base and height: <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height.</div>
                <div class="point-item">Circumference of a circle = 2&pi;r and Area of a circle = &pi;r&sup2; (where &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div> or 3.14).</div>
            </div>
        </div>
    `,
  htmlExercises: {
"ex9-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
            .math-table { width: 100%; border-collapse: collapse; margin: 15px 0; background: #181824; border-radius: 8px; overflow: hidden; }
            .math-table th { background: rgba(216, 27, 96, 0.2); color: #D81B60; padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; text-align: center; }
            .math-table td { padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; color: #E0E0E0; }
            .missing-val { color: #FF4081; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the area of each of the following parallelograms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Base = 7 cm, Height = 4 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 75 L 160 75 L 185 25 L 55 25 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="55" y1="25" x2="55" y2="75" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="55" y="65" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="95" y="92" fill="#fff" font-size="12" text-anchor="middle">7 cm</text>
                            <text x="40" y="53" fill="#FF4081" font-size="12" text-anchor="middle">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram = Base &times; Height</div>
                    <div class="sol-step">Area = 7 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 28 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Base = 5 cm, Height = 3 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 75 L 140 75 L 165 25 L 65 25 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="65" y1="25" x2="65" y2="75" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="65" y="65" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="90" y="92" fill="#fff" font-size="12" text-anchor="middle">5 cm</text>
                            <text x="50" y="53" fill="#FF4081" font-size="12" text-anchor="middle">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">Area = 5 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 15 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Base = 2.5 cm, Height = 3.5 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 50 75 L 130 75 L 155 25 L 75 25 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="75" y1="25" x2="75" y2="75" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="75" y="65" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="90" y="92" fill="#fff" font-size="12" text-anchor="middle">2.5 cm</text>
                            <text x="55" y="53" fill="#FF4081" font-size="12" text-anchor="middle">3.5 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">Area = 2.5 &times; 3.5</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8.75 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Base = 5 cm, Height = 4.8 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 25 L 160 25 L 195 100 L 65 100 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="65" y1="100" x2="178" y2="60" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="188" y="55" fill="#fff" font-size="12">5 cm</text>
                            <text x="115" y="75" fill="#FF4081" font-size="12">4.8 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">Area = 5 &times; 4.8</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 24 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(e) Base = 2 cm, Height = 4.4 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 25 L 160 25 L 195 100 L 65 100 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="65" y1="100" x2="178" y2="60" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="188" y="55" fill="#fff" font-size="12">2 cm</text>
                            <text x="115" y="75" fill="#FF4081" font-size="12">4.4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">Area = 2 &times; 4.4</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8.8 cm²</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of each of the following triangles:</div>
                <div class="sol-body">
                    <!-- Subpart (a) -->
                    <div class="sol-step"><b>(a) Base = 4 cm, Height = 3 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="30,100 160,100 80,20" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="80" y1="20" x2="80" y2="100" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="80" y="90" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="95" y="115" fill="#fff" font-size="12" text-anchor="middle">4 cm</text>
                            <text x="70" y="60" fill="#FF4081" font-size="12" text-anchor="end">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 4 &times; 3</div>
                    <div class="sol-step">Area = 2 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 6 cm²</span></div>

                    <!-- Subpart (b) -->
                    <div class="sol-step" style="margin-top: 25px;"><b>(b) Base = 5 cm, Height = 3.2 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 130" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="30,100 170,100 120,20" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="30" y1="100" x2="148" y2="43" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <path d="M 143 51 L 151 55 L 155 47" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="155" y="32" fill="#fff" font-size="12">5 cm</text>
                            <text x="75" y="65" fill="#FF4081" font-size="12">3.2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 3.2</div>
                    <div class="sol-step">Area = 5 &times; 1.6</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8 cm²</span></div>

                    <!-- Subpart (c) -->
                    <div class="sol-step" style="margin-top: 25px;"><b>(c) Right-angled triangle (Base = 3 cm, Height = 4 cm)</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 180 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="40,95 150,95 40,20" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="40" y="85" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="95" y="112" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                            <text x="25" y="60" fill="#FF4081" font-size="12">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 4</div>
                    <div class="sol-step">Area = 3 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 6 cm²</span></div>

                    <!-- Subpart (d) -->
                    <div class="sol-step" style="margin-top: 25px;"><b>(d) Obtuse-angled triangle (Base = 3 cm, Height = 2 cm)</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="70,95 170,95 30,30" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="30" y1="30" x2="30" y2="95" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="30" y1="95" x2="70" y2="95" stroke="#888" stroke-dasharray="3" stroke-width="1" />
                            <rect x="30" y="85" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="120" y="112" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                            <text x="15" y="65" fill="#FF4081" font-size="12">2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 2</div>
                    <div class="sol-step">Area = 3 &times; 1</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 3 cm²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the missing values:</div>
                <div class="sol-body">
                    <table class="math-table">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Base</th>
                                <th>Height</th>
                                <th>Area of Parallelogram</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a.</td>
                                <td>20 cm</td>
                                <td><span class="missing-val">12.3 cm</span></td>
                                <td>246 cm²</td>
                            </tr>
                            <tr>
                                <td>b.</td>
                                <td><span class="missing-val">10.3 cm</span></td>
                                <td>15 cm</td>
                                <td>154.5 cm²</td>
                            </tr>
                            <tr>
                                <td>c.</td>
                                <td><span class="missing-val">5.8 cm</span></td>
                                <td>8.4 cm</td>
                                <td>48.72 cm²</td>
                            </tr>
                            <tr>
                                <td>d.</td>
                                <td>15.6 cm</td>
                                <td><span class="missing-val">1.05 cm</span></td>
                                <td>16.38 cm²</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="sol-step"><b>Step-by-Step Solutions:</b></div>

                    <div class="sol-step" style="margin-top: 10px;"><b>(a) Given Base = 20 cm, Area = 246 cm²:</b></div>
                    <div class="sol-step">Area of Parallelogram = Base &times; Height</div>
                    <div class="sol-step">246 = 20 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">246</span><span class="den">20</span></div> = <span class="ans-highlight">12.3 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Given Height = 15 cm, Area = 154.5 cm²:</b></div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">154.5 = Base &times; 15</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">154.5</span><span class="den">15</span></div> = <span class="ans-highlight">10.3 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) Given Height = 8.4 cm, Area = 48.72 cm²:</b></div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">48.72 = Base &times; 8.4</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">48.72</span><span class="den">8.4</span></div> = <span class="ans-highlight">5.8 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) Given Base = 15.6 cm, Area = 16.38 cm²:</b></div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">16.38 = 15.6 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">16.38</span><span class="den">15.6</span></div> = <span class="ans-highlight">1.05 cm</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find the missing value:</div>
                <div class="sol-body">
                    <table class="math-table">
                        <thead>
                            <tr>
                                <th>Base</th>
                                <th>Height</th>
                                <th>Area of Triangle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15 cm</td>
                                <td><span class="missing-val">11.6 cm</span></td>
                                <td>87 cm²</td>
                            </tr>
                            <tr>
                                <td><span class="missing-val">80 mm</span></td>
                                <td>31.4 mm</td>
                                <td>1256 mm²</td>
                            </tr>
                            <tr>
                                <td>22 cm</td>
                                <td><span class="missing-val">15.5 cm</span></td>
                                <td>170.5 cm²</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="sol-step"><b>Step-by-Step Solutions:</b></div>

                    <div class="sol-step" style="margin-top: 10px;"><b>(Row 1) Base = 15 cm, Area = 87 cm²:</b></div>
                    <div class="sol-step">Area of Triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">87 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 15 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">87 &times; 2</span><span class="den">15</span></div> = <div class="frac"><span class="num">174</span><span class="den">15</span></div> = <span class="ans-highlight">11.6 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(Row 2) Height = 31.4 mm, Area = 1256 mm²:</b></div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">1256 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; 31.4</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">1256 &times; 2</span><span class="den">31.4</span></div> = <div class="frac"><span class="num">2512</span><span class="den">31.4</span></div> = <span class="ans-highlight">80 mm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(Row 3) Base = 22 cm, Area = 170.5 cm²:</b></div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">170.5 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 22 &times; Height</div>
                    <div class="sol-step">170.5 = 11 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">170.5</span><span class="den">11</span></div> = <span class="ans-highlight">15.5 cm</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. PQRS is a parallelogram (Fig 9.14). QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm. Find:<br/>(a) the area of the parallelogram PQRS<br/>(b) QN, if PS = 8 cm</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 260 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <!-- Parallelogram PQRS -->
                            <path d="M 30 30 L 180 30 L 235 110 L 85 110 Z" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <!-- Altitude QM perp to SR -->
                            <line x1="180" y1="30" x2="180" y2="110" stroke="#fff" stroke-dasharray="4" stroke-width="2" />
                            <!-- Altitude QN perp to PS -->
                            <line x1="180" y1="30" x2="48" y2="56" stroke="#fff" stroke-dasharray="4" stroke-width="2" />
                            <!-- Right angle markers -->
                            <rect x="166" y="96" width="14" height="14" fill="none" stroke="#fff" stroke-width="1.5" />
                            <path d="M 41 60 L 47 70 L 57 64" fill="none" stroke="#fff" stroke-width="1.5" />
                            <!-- Labels -->
                            <text x="20" y="25" fill="#fff" font-size="14" font-weight="bold">P</text>
                            <text x="185" y="25" fill="#fff" font-size="14" font-weight="bold">Q</text>
                            <text x="242" y="122" fill="#fff" font-size="14" font-weight="bold">R</text>
                            <text x="70" y="122" fill="#fff" font-size="14" font-weight="bold">S</text>
                            <text x="182" y="124" fill="#fff" font-size="13" font-weight="bold">M</text>
                            <text x="32" y="55" fill="#fff" font-size="13" font-weight="bold">N</text>
                            <text x="190" y="75" fill="#FF4081" font-size="13" font-weight="bold">7.6 cm</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(a) Find area of parallelogram PQRS:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Base (SR) = 12 cm, Height (QM) = 7.6 cm</div>
                    <div class="sol-step">Area = Base &times; Height = SR &times; QM</div>
                    <div class="sol-step">Area = 12 &times; 7.6</div>
                    <div class="sol-step"><span class="ans-highlight">Area of PQRS = 91.2 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Find QN, if PS = 8 cm:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram = Base (PS) &times; Height (QN)</div>
                    <div class="sol-step">91.2 = 8 &times; QN</div>
                    <div class="sol-step">QN = <div class="frac"><span class="num">91.2</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">QN = 11.4 cm</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. DL and BM are the heights on sides AB and AD respectively of parallelogram ABCD (Fig 9.15). If the area of the parallelogram is 1470 cm², AB = 35 cm and AD = 49 cm, find the length of BM and DL.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 260 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <!-- Parallelogram ABCD -->
                            <path d="M 75 25 L 225 25 L 170 115 L 20 115 Z" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <!-- Altitude DL perp to AB -->
                            <line x1="75" y1="25" x2="75" y2="115" stroke="#fff" stroke-dasharray="4" stroke-width="2" />
                            <!-- Altitude BM perp to AD -->
                            <line x1="170" y1="115" x2="43" y2="76" stroke="#fff" stroke-dasharray="4" stroke-width="2" />
                            <!-- Right angle markers -->
                            <rect x="75" y="101" width="14" height="14" fill="none" stroke="#fff" stroke-width="1.5" />
                            <path d="M 37 68 L 47 60 L 54 70" fill="none" stroke="#fff" stroke-width="1.5" />
                            <!-- Labels -->
                            <text x="8" y="127" fill="#fff" font-size="14" font-weight="bold">A</text>
                            <text x="178" y="127" fill="#fff" font-size="14" font-weight="bold">B</text>
                            <text x="233" y="25" fill="#fff" font-size="14" font-weight="bold">C</text>
                            <text x="65" y="20" fill="#fff" font-size="14" font-weight="bold">D</text>
                            <text x="72" y="131" fill="#fff" font-size="13" font-weight="bold">L</text>
                            <text x="28" y="81" fill="#fff" font-size="13" font-weight="bold">M</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram ABCD = 1470 cm²</div>
                    <div class="sol-step">Base (AB) = 35 cm, Base (AD) = 49 cm</div>
                    <div class="sol-step">Area = AB &times; DL</div>
                    <div class="sol-step">1470 = 35 &times; DL</div>
                    <div class="sol-step">DL = <div class="frac"><span class="num">1470</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">DL = 42 cm</span></div>
                    <div class="sol-step" style="margin-top: 10px;">Area = AD &times; BM</div>
                    <div class="sol-step">1470 = 49 &times; BM</div>
                    <div class="sol-step">BM = <div class="frac"><span class="num">1470</span><span class="den">49</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">BM = 30 cm</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Δ ABC is right angled at A (Fig 9.16). AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, Find the area of ABC. Also find the length of AD.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 130" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="40,100 180,100 40,30" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <rect x="40" y="90" width="10" height="10" fill="none" stroke="#fff" stroke-width="1.5" />
                            <line x1="40" y1="100" x2="105" y2="60" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <path d="M 98 64 L 102 70 L 108 66" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="25" y="112" fill="#fff" font-size="13" font-weight="bold">B</text>
                            <text x="185" y="112" fill="#fff" font-size="13" font-weight="bold">C</text>
                            <text x="30" y="25" fill="#fff" font-size="13" font-weight="bold">A</text>
                            <text x="112" y="55" fill="#fff" font-size="13" font-weight="bold">D</text>
                            <text x="15" y="68" fill="#FF4081" font-size="12">5 cm</text>
                            <text x="115" y="90" fill="#FF4081" font-size="12">12 cm</text>
                            <text x="115" y="118" fill="#fff" font-size="12">13 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In right angled triangle ABC (at A):</div>
                    <div class="sol-step">Base (AB) = 5 cm, Height (AC) = 12 cm</div>
                    <div class="sol-step">Area of triangle ABC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AB &times; AC</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 12 = 5 &times; 6</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Δ ABC = 30 cm²</span></div>
                    <div class="sol-step" style="margin-top: 15px;">Now taking BC as base (BC = 13 cm) and AD as height:</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; BC &times; AD</div>
                    <div class="sol-step">30 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 13 &times; AD</div>
                    <div class="sol-step">AD = <div class="frac"><span class="num">30 &times; 2</span><span class="den">13</span></div> = <div class="frac"><span class="num">60</span><span class="den">13</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Length of AD = <div class="frac"><span class="num">60</span><span class="den">13</span></div> cm (or 4<div class="frac"><span class="num">8</span><span class="den">13</span></div> cm)</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Δ ABC is isosceles with AB = AC = 7.5 cm and BC = 9 cm (Fig 9.17). The height AD from A to BC, is 6 cm. Find the area of Δ ABC. What will be the height from C to AB i.e., CE?</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <polygon points="40,110 180,110 110,20" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <line x1="110" y1="20" x2="110" y2="110" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="180" y1="110" x2="72" y2="61" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="110" y="100" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <path d="M 77 65 L 83 71 L 89 65" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="105" y="15" fill="#fff" font-size="13" font-weight="bold">A</text>
                            <text x="25" y="122" fill="#fff" font-size="13" font-weight="bold">B</text>
                            <text x="185" y="122" fill="#fff" font-size="13" font-weight="bold">C</text>
                            <text x="112" y="124" fill="#fff" font-size="13" font-weight="bold">D</text>
                            <text x="58" y="60" fill="#fff" font-size="13" font-weight="bold">E</text>
                            <text x="120" y="65" fill="#FF4081" font-size="12">6 cm</text>
                            <text x="110" y="132" fill="#fff" font-size="12">9 cm</text>
                            <text x="55" y="45" fill="#FF4081" font-size="12">7.5 cm</text>
                            <text x="150" y="45" fill="#FF4081" font-size="12">7.5 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Base (BC) = 9 cm, Height (AD) = 6 cm</div>
                    <div class="sol-step">Area of triangle ABC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; BC &times; AD</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 9 &times; 6 = 9 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Δ ABC = 27 cm²</span></div>
                    <div class="sol-step" style="margin-top: 15px;">Now taking AB as base (AB = 7.5 cm) and CE as height:</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AB &times; CE</div>
                    <div class="sol-step">27 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 7.5 &times; CE</div>
                    <div class="sol-step">CE = <div class="frac"><span class="num">27 &times; 2</span><span class="den">7.5</span></div> = <div class="frac"><span class="num">54</span><span class="den">7.5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Height CE = 7.2 cm</span></div>
                </div>
            </div>
        </div>
        `,
"ex9-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1.5px solid #fff; padding: 0 3px; display: block; font-size: 0.9em; }
            .frac .den { display: block; padding: 0 3px; font-size: 0.9em; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the circumference of the circles with the following radius: (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) r = 14 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 14</div>
                    <div class="sol-step">= 2 &times; 22 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 88 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) r = 28 mm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 28</div>
                    <div class="sol-step">= 2 &times; 22 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 176 mm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) r = 21 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 21</div>
                    <div class="sol-step">= 2 &times; 22 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 132 cm</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of the following circles; given that:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) radius = 14 mm (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = &pi; &times; r²</div>
                    <div class="sol-step">= <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 14 &times; 14</div>
                    <div class="sol-step">= 22 &times; 2 &times; 14</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 616 mm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) diameter = 49 m</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = <div class="frac"><span class="num">49</span><span class="den">2</span></div> m</div>
                    <div class="sol-step">Area = &pi; &times; r²</div>
                    <div class="sol-step">= <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">49</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">49</span><span class="den">2</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">11 &times; 7 &times; 49</span><span class="den">2</span></div> = <div class="frac"><span class="num">3773</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Area = 1886.5 m²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) radius = 5 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = &pi; &times; r²</div>
                    <div class="sol-step">= <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 5 &times; 5</div>
                    <div class="sol-step">= <div class="frac"><span class="num">550</span><span class="den">7</span></div> cm²</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 78<div class="frac"><span class="num">4</span><span class="den">7</span></div> cm² (or 78.57 cm²)</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. If the circumference of a circular sheet is 154 m, find its radius. Also find the area of the sheet. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 154 m</div>
                    <div class="sol-step">2 &times; &pi; &times; r = 154</div>
                    <div class="sol-step">2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; r = 154</div>
                    <div class="sol-step">r = <div class="frac"><span class="num">154 &times; 7</span><span class="den">44</span></div> = <div class="frac"><span class="num">49</span><span class="den">2</span></div> = 24.5 m</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 24.5 m</span></div>
                    <div class="sol-step" style="margin-top: 15px;">Now, Area of sheet = &pi; &times; r²</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">49</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">49</span><span class="den">2</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">3773</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Area = 1886.5 m²</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A gardener wants to fence a circular garden of diameter 21 m. Find the length of the rope he needs to purchase, if he makes 2 rounds of fence. Also find the costs of the rope, if it cost Rs 4 per meter. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter (d) = 21 m &rArr; Radius (r) = <div class="frac"><span class="num">21</span><span class="den">2</span></div> m</div>
                    <div class="sol-step">Length of rope for 1 round = Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">21</span><span class="den">2</span></div> = 22 &times; 3 = 66 m</div>
                    <div class="sol-step">Length of rope for 2 rounds = 2 &times; 66 m = <span class="ans-highlight">132 m</span></div>
                    <div class="sol-step">Cost of 1 m rope = ₹ 4</div>
                    <div class="sol-step">Total cost of rope = 132 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">Total Cost = ₹ 528</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Outer radius (R) = 4 cm, Inner radius (r) = 3 cm</div>
                    <div class="sol-step">Area of outer sheet = &pi; &times; R² = 3.14 &times; 4² = 3.14 &times; 16 = 50.24 cm²</div>
                    <div class="sol-step">Area of removed circle = &pi; &times; r² = 3.14 &times; 3² = 3.14 &times; 9 = 28.26 cm²</div>
                    <div class="sol-step">Area of remaining sheet = 50.24 - 28.26</div>
                    <div class="sol-step"><span class="ans-highlight">Remaining Area = 21.98 cm²</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Sara wants to put a lace on the edge of a circular table cover of diameter 1.5 m. Find the length of the lace required and also find its cost if one meter of the lace costs Rs 15. (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter of table cover = 1.5 m</div>
                    <div class="sol-step">Length of lace = Circumference = &pi; &times; d</div>
                    <div class="sol-step">= 3.14 &times; 1.5 = <span class="ans-highlight">4.71 m</span></div>
                    <div class="sol-step">Cost of 1 m lace = ₹ 15</div>
                    <div class="sol-step">Total cost of lace = 4.71 &times; 15</div>
                    <div class="sol-step"><span class="ans-highlight">Total Cost = ₹ 70.65</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Find the perimeter of the adjoining figure, which is a semicircle including its diameter.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 80 A 70 70 0 0 1 170 80 Z" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <line x1="30" y1="80" x2="170" y2="80" stroke="#fff" stroke-width="2" />
                            <text x="100" y="100" fill="#fff" font-size="13" text-anchor="middle">10 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter (d) = 10 cm &rArr; Radius (r) = 5 cm</div>
                    <div class="sol-step">Length of curved boundary = &pi; &times; r = 3.14 &times; 5 = 15.7 cm</div>
                    <div class="sol-step">Perimeter of figure = Curved boundary + Diameter</div>
                    <div class="sol-step">= 15.7 + 10</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter = 25.7 cm</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Find the cost of polishing a circular table-top of diameter 1.6 m, if the rate of polishing is Rs 15/m². (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter = 1.6 m &rArr; Radius (r) = 0.8 m</div>
                    <div class="sol-step">Area of table-top = &pi; &times; r²</div>
                    <div class="sol-step">= 3.14 &times; 0.8 &times; 0.8 = 2.0096 m²</div>
                    <div class="sol-step">Rate of polishing = ₹ 15 / m²</div>
                    <div class="sol-step">Total Cost = 2.0096 &times; 15</div>
                    <div class="sol-step"><span class="ans-highlight">Total Cost = ₹ 30.14 (approx ₹ 30.144)</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Atul took a wire of length 44 cm and bent it into the shape of a circle. Find the radius of that circle. Also find its area. If the same wire is bent into the shape of a square, what will be the length of each of its sides? Which figure encloses more area, the circle or the square? (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>For Circle:</b></div>
                    <div class="sol-step">Circumference = Length of wire = 44 cm</div>
                    <div class="sol-step">2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; r = 44 &rArr; r = 7 cm</div>
                    <div class="sol-step">Area of circle = &pi; &times; r² = <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 7 &times; 7 = <span class="ans-highlight">154 cm²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>For Square:</b></div>
                    <div class="sol-step">Perimeter of square = 44 cm</div>
                    <div class="sol-step">4 &times; Side = 44 &rArr; Side = <span class="ans-highlight">11 cm</span></div>
                    <div class="sol-step">Area of square = Side &times; Side = 11 &times; 11 = <span class="ans-highlight">121 cm²</span></div>

                    <div class="sol-step" style="margin-top: 15px;">Since 154 cm² &gt; 121 cm², the <span class="ans-highlight">circle encloses more area</span>.</div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. From a circular card sheet of radius 14 cm, two circles of radius 3.5 cm and a rectangle of length 3 cm and breadth 1cm are removed (as shown in the adjoining figure). Find the area of the remaining sheet. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 160 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="80" cy="80" r="70" fill="none" stroke="#D81B60" stroke-width="2.5" />
                            <circle cx="55" cy="60" r="14" fill="none" stroke="#fff" stroke-width="1.5" />
                            <circle cx="105" cy="60" r="14" fill="none" stroke="#fff" stroke-width="1.5" />
                            <rect x="65" y="100" width="30" height="12" fill="none" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of total sheet = &pi; &times; R² = <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 14 &times; 14 = 616 cm²</div>
                    <div class="sol-step">Area of 2 small circles = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 3.5 &times; 3.5) = 2 &times; 38.5 = 77 cm²</div>
                    <div class="sol-step">Area of rectangle = 3 &times; 1 = 3 cm²</div>
                    <div class="sol-step">Total area removed = 77 + 3 = 80 cm²</div>
                    <div class="sol-step">Area of remaining sheet = 616 - 80</div>
                    <div class="sol-step"><span class="ans-highlight">Remaining Area = 536 cm²</span></div>
                </div>
            </div>

            <!-- Question 11 -->
            <div class="sol-card">
                <div class="question-header">11. A circle of radius 2 cm is cut out from a square piece of an aluminium sheet of side 6cm. What is the area of the left over aluminium sheet? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of square aluminium sheet = Side² = 6 &times; 6 = 36 cm²</div>
                    <div class="sol-step">Area of circle cut out = &pi; &times; r² = 3.14 &times; 2 &times; 2 = 12.56 cm²</div>
                    <div class="sol-step">Area of left over sheet = 36 - 12.56</div>
                    <div class="sol-step"><span class="ans-highlight">Left over Area = 23.44 cm²</span></div>
                </div>
            </div>

            <!-- Question 12 -->
            <div class="sol-card">
                <div class="question-header">12. The circumference of a circle is 31.4 cm. Find the radius and the area of the circle? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 31.4 cm</div>
                    <div class="sol-step">2 &times; 3.14 &times; r = 31.4</div>
                    <div class="sol-step">6.28 &times; r = 31.4 &rArr; r = <div class="frac"><span class="num">31.4</span><span class="den">6.28</span></div> = 5 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 5 cm</span></div>
                    <div class="sol-step" style="margin-top: 15px;">Area of circle = &pi; &times; r² = 3.14 &times; 5 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 78.5 cm²</span></div>
                </div>
            </div>

            <!-- Question 13 -->
            <div class="sol-card">
                <div class="question-header">13. A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the area of this path? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 180 180" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="90" cy="90" r="75" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="90" cy="90" r="55" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="35" y1="90" x2="145" y2="90" stroke="#fff" stroke-dasharray="3" stroke-width="1.5" />
                            <text x="90" y="85" fill="#fff" font-size="12" text-anchor="middle">66 m</text>
                            <text x="160" y="95" fill="#FF4081" font-size="11">4 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Inner diameter = 66 m &rArr; Inner radius (r) = 33 m</div>
                    <div class="sol-step">Outer radius (R) = 33 + 4 = 37 m</div>
                    <div class="sol-step">Area of path = Outer Area - Inner Area</div>
                    <div class="sol-step">= &pi; &times; (R² - r²) = 3.14 &times; (37² - 33²)</div>
                    <div class="sol-step">= 3.14 &times; (1369 - 1089) = 3.14 &times; 280</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Path = 879.2 m²</span></div>
                </div>
            </div>

            <!-- Question 14 -->
            <div class="sol-card">
                <div class="question-header">14. A circular flower garden has an area of 314 m². A sprinkler at the centre of the garden can cover an area that has a radius of 12 m. Will the sprinkler water the entire garden? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of garden = 314 m²</div>
                    <div class="sol-step">Radius covered by sprinkler = 12 m</div>
                    <div class="sol-step">Area covered by sprinkler = &pi; &times; r² = 3.14 &times; 12 &times; 12</div>
                    <div class="sol-step">= 3.14 &times; 144 = <span class="ans-highlight">452.16 m²</span></div>
                    <div class="sol-step">Since 452.16 m² &gt; 314 m², the sprinkler covers more area than the garden.</div>
                    <div class="sol-step"><span class="ans-highlight">Answer: Yes, the sprinkler will water the entire garden.</span></div>
                </div>
            </div>

            <!-- Question 15 -->
            <div class="sol-card">
                <div class="question-header">15. Find the circumference of the inner and the outer circles, shown in the adjoining figure? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 180 180" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="90" cy="90" r="75" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="90" cy="90" r="40" fill="none" stroke="#fff" stroke-width="2" />
                            <line x1="90" y1="90" x2="165" y2="90" stroke="#fff" stroke-width="1.5" />
                            <text x="125" y="85" fill="#fff" font-size="11">19 m</text>
                            <text x="145" y="105" fill="#FF4081" font-size="11">10 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Outer radius (R) = 19 m</div>
                    <div class="sol-step">Inner radius (r) = 19 - 10 = 9 m</div>
                    <div class="sol-step"><b>Outer Circumference:</b></div>
                    <div class="sol-step">= 2 &times; &pi; &times; R = 2 &times; 3.14 &times; 19 = <span class="ans-highlight">119.32 m</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>Inner Circumference:</b></div>
                    <div class="sol-step">= 2 &times; &pi; &times; r = 2 &times; 3.14 &times; 9 = <span class="ans-highlight">56.52 m</span></div>
                </div>
            </div>

            <!-- Question 16 -->
            <div class="sol-card">
                <div class="question-header">16. How many times a wheel of radius 28 cm must rotate to go 352 m? (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius of wheel (r) = 28 cm</div>
                    <div class="sol-step">Total distance = 352 m = 352 &times; 100 = 35200 cm</div>
                    <div class="sol-step">Distance covered in 1 rotation = Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 28 = 2 &times; 22 &times; 4 = 176 cm</div>
                    <div class="sol-step">Number of rotations = <div class="frac"><span class="num">Total Distance</span><span class="den">Circumference</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">35200</span><span class="den">176</span></div> = <span class="ans-highlight">200 rotations</span></div>
                </div>
            </div>

            <!-- Question 17 -->
            <div class="sol-card">
                <div class="question-header">17. The minute hand of a circular clock is 15 cm long. How far does the tip of the minute hand move in 1 hour. (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of minute hand (r) = 15 cm</div>
                    <div class="sol-step">In 1 hour, tip of minute hand completes 1 full circle</div>
                    <div class="sol-step">Distance moved = Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; 3.14 &times; 15 = 30 &times; 3.14</div>
                    <div class="sol-step"><span class="ans-highlight">Distance = 94.2 cm</span></div>
                </div>
            </div>
        </div>
        `
  },
  examples: [],
  mcqs: [
    {
      id: "c7g9-mcq-1",
      question: "What is the formula for the area of a parallelogram?",
      options: ["Base × Height", "1/2 × Base × Height", "Side × Side", "2 × (Base + Height)"],
      correctAnswer: "a",
      explanation: "Area of a parallelogram is calculated by multiplying its base by its perpendicular height."
    },
    {
      id: "c7g9-mcq-2",
      question: "What is the formula for the area of a triangle?",
      options: ["Base × Height", "1/2 × Base × Height", "2 × Base × Height", "Base + Height"],
      correctAnswer: "b",
      explanation: "Area of a triangle is half of the product of its base and perpendicular height."
    },
    {
      id: "c7g9-mcq-3",
      question: "The circumference of a circle with radius r is given by:",
      options: ["πr²", "2πr", "πd/2", "2πr²"],
      correctAnswer: "b",
      explanation: "Circumference of a circle equals 2 × π × r (or π × d)."
    },
    {
      id: "c7g9-mcq-4",
      question: "What is the area of a circle with radius 7 cm? (Take π = 22/7)",
      options: ["44 cm²", "154 cm²", "77 cm²", "88 cm²"],
      correctAnswer: "b",
      explanation: "Area = πr² = (22/7) × 7 × 7 = 154 cm²."
    },
    {
      id: "c7g9-mcq-5",
      question: "What is the area of a parallelogram with base 7 cm and height 4 cm?",
      options: ["28 cm²", "14 cm²", "11 cm²", "56 cm²"],
      correctAnswer: "a",
      explanation: "Area = Base × Height = 7 × 4 = 28 cm²."
    },
    {
      id: "c7g9-mcq-6",
      question: "What is the area of a triangle with base 4 cm and height 3 cm?",
      options: ["12 cm²", "6 cm²", "7 cm²", "24 cm²"],
      correctAnswer: "b",
      explanation: "Area = 1/2 × Base × Height = 1/2 × 4 × 3 = 6 cm²."
    },
    {
      id: "c7g9-mcq-7",
      question: "If the circumference of a circle is 154 m, what is its radius? (Take π = 22/7)",
      options: ["14 m", "24.5 m", "49 m", "35 m"],
      correctAnswer: "b",
      explanation: "2πr = 154 ⇒ r = (154 × 7) / (2 × 22) = 24.5 m."
    },
    {
      id: "c7g9-mcq-8",
      question: "What is the area of a right-angled triangle with sides 5 cm, 12 cm, and hypotenuse 13 cm?",
      options: ["30 cm²", "60 cm²", "65 cm²", "15.5 cm²"],
      correctAnswer: "a",
      explanation: "Area = 1/2 × base × height = 1/2 × 5 × 12 = 30 cm²."
    },
    {
      id: "c7g9-mcq-9",
      question: "If radius of a circle is 5 cm, what is its area? (Take π = 3.14)",
      options: ["31.4 cm²", "78.5 cm²", "15.7 cm²", "100 cm²"],
      correctAnswer: "b",
      explanation: "Area = πr² = 3.14 × 5 × 5 = 78.5 cm²."
    },
    {
      id: "c7g9-mcq-10",
      question: "The distance around a circular region is known as its:",
      options: ["Area", "Diameter", "Circumference", "Radius"],
      correctAnswer: "c",
      explanation: "The perimeter or boundary length of a circle is called its circumference."
    }
  ],
  summary: [],
};
